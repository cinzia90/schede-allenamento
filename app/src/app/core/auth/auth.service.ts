import { Injectable, computed, signal } from '@angular/core';
import type { Session, User } from '@supabase/supabase-js';
import { SupabaseService } from '../services/supabase.service';
import { MockBackendService } from '../mock/mock-backend.service';
import { environment } from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly sessionSignal = signal<Session | null>(null);
  private readonly readySignal = signal(false);

  readonly ready = this.readySignal.asReadonly();

  readonly user = computed<User | null>(() => {
    if (environment.mock) {
      const mockUser = this.mock.sessionUser();
      return mockUser ? ({ id: mockUser.id, email: mockUser.email } as User) : null;
    }
    return this.sessionSignal()?.user ?? null;
  });

  readonly isAuthenticated = computed(() => this.user() !== null);

  constructor(private readonly supabase: SupabaseService, private readonly mock: MockBackendService) {
    if (environment.mock) {
      this.readySignal.set(true);
      return;
    }

    this.supabase.client.auth.getSession().then(({ data }) => {
      this.sessionSignal.set(data.session);
      this.readySignal.set(true);
    });

    this.supabase.client.auth.onAuthStateChange((_event, session) => {
      this.sessionSignal.set(session);
    });
  }

  async signInWithPassword(email: string, password: string) {
    if (environment.mock) {
      return this.mock.signInWithPassword(email, password);
    }
    return this.supabase.client.auth.signInWithPassword({ email, password });
  }

  async signOut() {
    if (environment.mock) {
      return this.mock.signOut();
    }
    return this.supabase.client.auth.signOut();
  }
}
