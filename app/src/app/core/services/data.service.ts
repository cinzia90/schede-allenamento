import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { SupabaseService } from './supabase.service';
import { MockBackendService } from '../mock/mock-backend.service';
import { AuthService } from '../auth/auth.service';
import { Client, WorkoutDay, WorkoutSheet } from '../../shared/models/client.model';

// Astrae Supabase/demo per clienti e schede, stesso pattern di AuthService:
// un solo trainer per RLS (trainer_id = auth.uid()).
@Injectable({ providedIn: 'root' })
export class DataService {
  constructor(
    private readonly supabase: SupabaseService,
    private readonly mock: MockBackendService,
    private readonly auth: AuthService,
  ) {}

  private get trainerId(): string {
    const id = this.auth.user()?.id;
    if (!id) {
      throw new Error('Utente non autenticato');
    }
    return id;
  }

  async listClients(): Promise<Client[]> {
    if (environment.mock) {
      return this.mock.listClients(this.trainerId);
    }
    const { data, error } = await this.supabase.client
      .from('clients')
      .select('*')
      .order('first_name', { ascending: true });
    if (error) throw error;
    return data as Client[];
  }

  async getClient(clientId: string): Promise<Client | null> {
    if (environment.mock) {
      return this.mock.getClient(clientId);
    }
    const { data, error } = await this.supabase.client.from('clients').select('*').eq('id', clientId).maybeSingle();
    if (error) throw error;
    return data as Client | null;
  }

  async createClient(firstName: string, lastName: string): Promise<Client> {
    if (environment.mock) {
      return this.mock.createClient(this.trainerId, firstName, lastName);
    }
    const { data, error } = await this.supabase.client
      .from('clients')
      .insert({ trainer_id: this.trainerId, first_name: firstName, last_name: lastName })
      .select()
      .single();
    if (error) throw error;
    return data as Client;
  }

  async listSheetsForClient(clientId: string): Promise<WorkoutSheet[]> {
    if (environment.mock) {
      return this.mock.listSheetsForClient(clientId);
    }
    const { data, error } = await this.supabase.client
      .from('workout_sheets')
      .select('*')
      .eq('client_id', clientId)
      .order('created_at', { ascending: false });
    if (error) throw error;
    return data as WorkoutSheet[];
  }

  async getSheet(sheetId: string): Promise<WorkoutSheet | null> {
    if (environment.mock) {
      return this.mock.getSheet(sheetId);
    }
    const { data, error } = await this.supabase.client
      .from('workout_sheets')
      .select('*')
      .eq('id', sheetId)
      .maybeSingle();
    if (error) throw error;
    return data as WorkoutSheet | null;
  }

  async createSheet(clientId: string, title: string, days: WorkoutDay[]): Promise<WorkoutSheet> {
    if (environment.mock) {
      return this.mock.createSheet(this.trainerId, clientId, title, days);
    }
    const { data, error } = await this.supabase.client
      .from('workout_sheets')
      .insert({ trainer_id: this.trainerId, client_id: clientId, title, days })
      .select()
      .single();
    if (error) throw error;
    return data as WorkoutSheet;
  }

  async updateSheet(sheetId: string, title: string, days: WorkoutDay[]): Promise<void> {
    if (environment.mock) {
      this.mock.updateSheet(sheetId, title, days);
      return;
    }
    const { error } = await this.supabase.client.from('workout_sheets').update({ title, days }).eq('id', sheetId);
    if (error) throw error;
  }

  async deleteSheet(sheetId: string): Promise<void> {
    if (environment.mock) {
      this.mock.deleteSheet(sheetId);
      return;
    }
    const { error } = await this.supabase.client.from('workout_sheets').delete().eq('id', sheetId);
    if (error) throw error;
  }
}
