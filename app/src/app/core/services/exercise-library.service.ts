import { Injectable } from '@angular/core';
import { Exercise } from '../../shared/models/exercise.model';

// Dataset statico (free-exercise-db, dominio pubblico) caricato una volta
// sola da public/data/exercises.json — zero chiamate esterne per i dati,
// solo le immagini restano linkate da GitHub (vedi CLAUDE.md).
@Injectable({ providedIn: 'root' })
export class ExerciseLibraryService {
  private cache: Exercise[] | null = null;

  async listAll(): Promise<Exercise[]> {
    if (this.cache) {
      return this.cache;
    }
    const response = await fetch('data/exercises.json');
    const data = (await response.json()) as Exercise[];
    this.cache = data;
    return data;
  }

  async byMuscleGroups(muscleGroups: string[]): Promise<Exercise[]> {
    const all = await this.listAll();
    if (muscleGroups.length === 0) {
      return [];
    }
    return all.filter((exercise) => exercise.primaryMuscles.some((m) => muscleGroups.includes(m)));
  }

  async byId(id: string): Promise<Exercise | undefined> {
    const all = await this.listAll();
    return all.find((exercise) => exercise.id === id);
  }
}
