import { Client, WorkoutSheet } from '../../shared/models/client.model';

export interface MockAuthUser {
  id: string;
  email: string;
  password: string;
}

export interface MockState {
  authUsers: MockAuthUser[];
  clients: Client[];
  sheets: WorkoutSheet[];
  currentUserId: string | null;
}

const STORAGE_KEY = 'sa-mock-state-v1';

function uuid(): string {
  return crypto.randomUUID();
}

const now = () => new Date().toISOString();

export function seedState(): MockState {
  const trainerId = uuid();
  const clientId = uuid();

  return {
    authUsers: [{ id: trainerId, email: 'allenatore@schede-allenamento.it', password: 'SchedaForte2026!' }],
    clients: [
      {
        id: clientId,
        trainer_id: trainerId,
        first_name: 'Mario',
        last_name: 'Rossi',
        created_at: now(),
      },
    ],
    sheets: [],
    currentUserId: null,
  };
}

export function loadState(): MockState {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      return seedState();
    }
    const parsed = JSON.parse(raw) as MockState;
    if (!parsed.authUsers?.length) {
      return seedState();
    }
    return parsed;
  } catch {
    return seedState();
  }
}

export function saveState(state: MockState): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    // storage piena o non disponibile: la demo continua solo in memoria.
  }
}

export function clearState(): void {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch {
    // ignorabile in demo.
  }
}

export { uuid, now };
