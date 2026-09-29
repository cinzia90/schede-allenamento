import { Component, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../../../core/services/data.service';
import { AuthService } from '../../../core/auth/auth.service';
import { Client } from '../../../shared/models/client.model';
import { it } from '../../../core/i18n/it';

@Component({
  selector: 'app-client-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './client-list.component.html',
  styleUrl: './client-list.component.scss',
})
export class ClientListComponent {
  readonly t = it.clients;

  readonly clients = signal<Client[]>([]);
  readonly loading = signal(true);
  readonly search = signal('');
  readonly showForm = signal(false);
  readonly saving = signal(false);

  firstName = '';
  lastName = '';

  readonly filteredClients = computed(() => {
    const term = this.search().trim().toLowerCase();
    if (!term) {
      return this.clients();
    }
    return this.clients().filter((c) => `${c.first_name} ${c.last_name}`.toLowerCase().includes(term));
  });

  constructor(
    private readonly data: DataService,
    private readonly auth: AuthService,
    private readonly router: Router,
  ) {
    this.load();
  }

  private async load(): Promise<void> {
    this.loading.set(true);
    this.clients.set(await this.data.listClients());
    this.loading.set(false);
  }

  openClient(client: Client): void {
    this.router.navigate(['/clienti', client.id]);
  }

  toggleForm(): void {
    this.showForm.set(!this.showForm());
    this.firstName = '';
    this.lastName = '';
  }

  async saveClient(): Promise<void> {
    if (!this.firstName.trim() || !this.lastName.trim()) {
      return;
    }
    this.saving.set(true);
    const client = await this.data.createClient(this.firstName.trim(), this.lastName.trim());
    this.clients.update((list) => [...list, client]);
    this.saving.set(false);
    this.toggleForm();
  }

  async logout(): Promise<void> {
    await this.auth.signOut();
    this.router.navigateByUrl('/login');
  }
}
