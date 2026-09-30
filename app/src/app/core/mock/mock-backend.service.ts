import { Injectable, signal } from '@angular/core';
import { MockState, clearState, loadState, now, saveState, uuid } from './mock-state';
import { Client, WorkoutDay, WorkoutSheet } from '../../shared/models/client.model';

export interface MockSessionUser {
  id: string;
  email: string;
}

interface AuthResult {
  error: { message: string } | null;
  session: boolean;
}

// Backend finto per la modalità demo: stesso pattern di steel-elite-iscrizioni,
// molto più piccolo (solo clienti + schede, nessuna regola di business
// complessa da replicare).
@Injectable({ providedIn: 'root' })
export class MockBackendService {
  private state: MockState = loadState();

  readonly sessionUser = signal<MockSessionUser | null>(this.computeSessionUser());

  private persist(): void {
    saveState(this.state);
  }

  private computeSessionUser(): MockSessionUser | null {
    const user = this.state.authUsers.find((u) => u.id === this.state.currentUserId);
    return user ? { id: user.id, email: user.email } : null;
  }

  resetDemo(): void {
    clearState();
    this.state = loadState();
    this.sessionUser.set(this.computeSessionUser());
  }

  // ===== Auth =====
  // Un solo trainer, nessuna auto-registrazione: le credenziali sono
  // fornite in fase di seed (vedi mock-state.ts).

  async signInWithPassword(email: string, password: string): Promise<AuthResult> {
    const user = this.state.authUsers.find((u) => u.email === email && u.password === password);
    if (!user) {
      return { error: { message: 'Credenziali non valide' }, session: false };
    }
    this.state.currentUserId = user.id;
    this.persist();
    this.sessionUser.set(this.computeSessionUser());
    return { error: null, session: true };
  }

  async signOut(): Promise<void> {
    this.state.currentUserId = null;
    this.persist();
    this.sessionUser.set(null);
  }

  // ===== Clienti =====

  listClients(trainerId: string): Client[] {
    return this.state.clients
      .filter((c) => c.trainer_id === trainerId)
      .sort((a, b) => `${a.first_name}${a.last_name}`.localeCompare(`${b.first_name}${b.last_name}`));
  }

  getClient(clientId: string): Client | null {
    return this.state.clients.find((c) => c.id === clientId) ?? null;
  }

  createClient(trainerId: string, firstName: string, lastName: string): Client {
    const client: Client = {
      id: uuid(),
      trainer_id: trainerId,
      first_name: firstName,
      last_name: lastName,
      created_at: now(),
    };
    this.state.clients.push(client);
    this.persist();
    return client;
  }

  deleteClient(clientId: string): void {
    this.state.clients = this.state.clients.filter((c) => c.id !== clientId);
    this.state.sheets = this.state.sheets.filter((s) => s.client_id !== clientId);
    this.persist();
  }

  // ===== Schede =====

  listSheetsForClient(clientId: string): WorkoutSheet[] {
    return this.state.sheets
      .filter((s) => s.client_id === clientId)
      .sort((a, b) => b.created_at.localeCompare(a.created_at));
  }

  getSheet(sheetId: string): WorkoutSheet | null {
    return this.state.sheets.find((s) => s.id === sheetId) ?? null;
  }

  createSheet(trainerId: string, clientId: string, title: string, days: WorkoutDay[]): WorkoutSheet {
    const sheet: WorkoutSheet = {
      id: uuid(),
      client_id: clientId,
      trainer_id: trainerId,
      title,
      days,
      created_at: now(),
    };
    this.state.sheets.push(sheet);
    this.persist();
    return sheet;
  }

  updateSheet(sheetId: string, title: string, days: WorkoutDay[]): void {
    const sheet = this.state.sheets.find((s) => s.id === sheetId);
    if (sheet) {
      sheet.title = title;
      sheet.days = days;
      this.persist();
    }
  }

  deleteSheet(sheetId: string): void {
    this.state.sheets = this.state.sheets.filter((s) => s.id !== sheetId);
    this.persist();
  }
}
