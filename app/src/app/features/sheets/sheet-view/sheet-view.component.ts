import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../../../core/services/data.service';
import { ExerciseLibraryService } from '../../../core/services/exercise-library.service';
import { PdfExportService } from '../../../core/services/pdf-export.service';
import { Client, TRAINING_TECHNIQUES, WorkoutSheet } from '../../../shared/models/client.model';
import { Exercise, exerciseDisplayName, exerciseImageUrl } from '../../../shared/models/exercise.model';
import { it } from '../../../core/i18n/it';

@Component({
  selector: 'app-sheet-view',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sheet-view.component.html',
  styleUrl: './sheet-view.component.scss',
})
export class SheetViewComponent {
  readonly t = it.clientDetail;
  readonly exerciseImageUrl = exerciseImageUrl;
  readonly exerciseDisplayName = exerciseDisplayName;

  readonly client = signal<Client | null>(null);
  readonly sheet = signal<WorkoutSheet | null>(null);
  readonly loading = signal(true);
  readonly downloading = signal(false);

  private clientId = '';
  private sheetId = '';
  private exerciseById = new Map<string, Exercise>();

  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly data: DataService,
    private readonly exerciseLibrary: ExerciseLibraryService,
    private readonly pdfExport: PdfExportService,
  ) {
    this.clientId = this.route.snapshot.paramMap.get('id') ?? '';
    this.sheetId = this.route.snapshot.paramMap.get('sheetId') ?? '';
    this.init();
  }

  private async init(): Promise<void> {
    const all = await this.exerciseLibrary.listAll();
    this.exerciseById = new Map(all.map((e) => [e.id, e]));
    const [client, sheet] = await Promise.all([this.data.getClient(this.clientId), this.data.getSheet(this.sheetId)]);
    this.client.set(client);
    this.sheet.set(sheet);
    this.loading.set(false);
  }

  exerciseOf(id: string): Exercise | undefined {
    return this.exerciseById.get(id);
  }

  techniqueLabel(value: string): string | null {
    if (!value) {
      return null;
    }
    return TRAINING_TECHNIQUES.find((t) => t.value === value)?.label ?? null;
  }

  back(): void {
    this.router.navigate(['/clienti', this.clientId]);
  }

  editSheet(): void {
    this.router.navigate(['/clienti', this.clientId, 'schede', this.sheetId, 'modifica']);
  }

  async deleteSheet(): Promise<void> {
    if (!confirm(this.t.deleteConfirm)) {
      return;
    }
    await this.data.deleteSheet(this.sheetId);
    this.back();
  }

  async downloadSheet(): Promise<void> {
    const client = this.client();
    const sheet = this.sheet();
    if (!client || !sheet) {
      return;
    }
    this.downloading.set(true);
    await this.pdfExport.downloadSheet(client, sheet, this.exerciseById);
    this.downloading.set(false);
  }
}
