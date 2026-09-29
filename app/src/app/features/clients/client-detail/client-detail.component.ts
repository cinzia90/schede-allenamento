import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { DataService } from '../../../core/services/data.service';
import { ExerciseLibraryService } from '../../../core/services/exercise-library.service';
import { PdfExportService } from '../../../core/services/pdf-export.service';
import { Client, WorkoutSheet } from '../../../shared/models/client.model';
import { Exercise } from '../../../shared/models/exercise.model';
import { it } from '../../../core/i18n/it';

@Component({
  selector: 'app-client-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './client-detail.component.html',
  styleUrl: './client-detail.component.scss',
})
export class ClientDetailComponent {
  readonly t = it.clientDetail;

  readonly client = signal<Client | null>(null);
  readonly sheets = signal<WorkoutSheet[]>([]);
  readonly loading = signal(true);
  readonly downloadingId = signal<string | null>(null);

  private clientId = '';

  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly data: DataService,
    private readonly exerciseLibrary: ExerciseLibraryService,
    private readonly pdfExport: PdfExportService,
  ) {
    this.clientId = this.route.snapshot.paramMap.get('id') ?? '';
    this.load();
  }

  private async load(): Promise<void> {
    this.loading.set(true);
    const [client, sheets] = await Promise.all([
      this.data.getClient(this.clientId),
      this.data.listSheetsForClient(this.clientId),
    ]);
    this.client.set(client);
    this.sheets.set(sheets);
    this.loading.set(false);
  }

  newSheet(): void {
    this.router.navigate(['/clienti', this.clientId, 'schede', 'nuova']);
  }

  openSheet(sheet: WorkoutSheet): void {
    this.router.navigate(['/clienti', this.clientId, 'schede', sheet.id]);
  }

  editSheet(sheet: WorkoutSheet): void {
    this.router.navigate(['/clienti', this.clientId, 'schede', sheet.id, 'modifica']);
  }

  async deleteSheet(sheet: WorkoutSheet): Promise<void> {
    if (!confirm(this.t.deleteConfirm)) {
      return;
    }
    await this.data.deleteSheet(sheet.id);
    this.sheets.update((list) => list.filter((s) => s.id !== sheet.id));
  }

  async downloadSheet(sheet: WorkoutSheet): Promise<void> {
    const client = this.client();
    if (!client) {
      return;
    }
    this.downloadingId.set(sheet.id);
    const exerciseIds = new Set(sheet.days.flatMap((d) => d.exercises.map((e) => e.exerciseId)));
    const all = await this.exerciseLibrary.listAll();
    const exercisesById = new Map<string, Exercise>(all.filter((e) => exerciseIds.has(e.id)).map((e) => [e.id, e]));
    await this.pdfExport.downloadSheet(client, sheet, exercisesById);
    this.downloadingId.set(null);
  }
}
