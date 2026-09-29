import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../../../core/services/data.service';
import { ExerciseLibraryService } from '../../../core/services/exercise-library.service';
import { WorkoutDay, WorkoutExerciseEntry } from '../../../shared/models/client.model';
import { Exercise, MUSCLE_GROUPS, exerciseDisplayName, exerciseImageUrl } from '../../../shared/models/exercise.model';
import { it } from '../../../core/i18n/it';

interface DayState {
  label: string;
  muscleGroups: string[];
  exercises: WorkoutExerciseEntry[];
  availableExercises: Exercise[];
  pickerExerciseId: string;
}

@Component({
  selector: 'app-sheet-builder',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './sheet-builder.component.html',
  styleUrl: './sheet-builder.component.scss',
})
export class SheetBuilderComponent {
  readonly t = it.sheetBuilder;
  readonly muscleGroups = MUSCLE_GROUPS;
  readonly dayCountOptions = [1, 2, 3, 4, 5, 6, 7];
  readonly exerciseImageUrl = exerciseImageUrl;
  readonly exerciseDisplayName = exerciseDisplayName;

  readonly title = signal('');
  readonly days = signal<DayState[]>([]);
  readonly saving = signal(false);
  readonly loading = signal(true);
  readonly errorMessage = signal<string | null>(null);
  readonly isEdit = signal(false);

  private clientId = '';
  private sheetId: string | null = null;
  private exerciseById = new Map<string, Exercise>();

  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly data: DataService,
    private readonly exerciseLibrary: ExerciseLibraryService,
  ) {
    this.clientId = this.route.snapshot.paramMap.get('id') ?? '';
    this.sheetId = this.route.snapshot.paramMap.get('sheetId');
    this.isEdit.set(!!this.sheetId);
    this.init();
  }

  private async init(): Promise<void> {
    const all = await this.exerciseLibrary.listAll();
    this.exerciseById = new Map(all.map((e) => [e.id, e]));

    if (this.sheetId) {
      const sheet = await this.data.getSheet(this.sheetId);
      if (sheet) {
        this.title.set(sheet.title);
        this.days.set(sheet.days.map((d) => this.toDayState(d)));
      }
    } else {
      this.setDaysCount(1);
    }
    this.loading.set(false);
  }

  private toDayState(day: WorkoutDay): DayState {
    return {
      label: day.label,
      muscleGroups: [...day.muscleGroups],
      exercises: day.exercises.map((e) => ({ ...e })),
      availableExercises: this.computeAvailable(day.muscleGroups),
      pickerExerciseId: '',
    };
  }

  private computeAvailable(muscleGroups: string[]): Exercise[] {
    if (muscleGroups.length === 0) {
      return [];
    }
    return [...this.exerciseById.values()]
      .filter((e) => e.primaryMuscles.some((m) => muscleGroups.includes(m)))
      .sort((a, b) => exerciseDisplayName(a).localeCompare(exerciseDisplayName(b)));
  }

  get daysCount(): number {
    return this.days().length;
  }

  setDaysCount(count: number): void {
    const current = this.days();
    const next: DayState[] = [];
    for (let i = 0; i < count; i++) {
      next.push(
        current[i] ?? {
          label: `${this.t.dayLabel} ${i + 1}`,
          muscleGroups: [],
          exercises: [],
          availableExercises: [],
          pickerExerciseId: '',
        },
      );
    }
    this.days.set(next);
  }

  onDaysCountChange(value: string): void {
    this.setDaysCount(Number(value));
  }

  toggleMuscleGroup(dayIndex: number, group: string): void {
    this.days.update((days) => {
      const day = days[dayIndex];
      const has = day.muscleGroups.includes(group);
      const muscleGroups = has ? day.muscleGroups.filter((g) => g !== group) : [...day.muscleGroups, group];
      const availableExercises = this.computeAvailable(muscleGroups);
      const validIds = new Set(availableExercises.map((e) => e.id));
      const exercises = day.exercises.filter((ex) => validIds.has(ex.exerciseId));
      const copy = [...days];
      copy[dayIndex] = { ...day, muscleGroups, availableExercises, exercises };
      return copy;
    });
  }

  addExercise(dayIndex: number): void {
    this.days.update((days) => {
      const day = days[dayIndex];
      if (!day.pickerExerciseId || day.exercises.some((e) => e.exerciseId === day.pickerExerciseId)) {
        return days;
      }
      const entry: WorkoutExerciseEntry = { exerciseId: day.pickerExerciseId, sets: 3, reps: '10', rest: '60s', notes: '' };
      const copy = [...days];
      copy[dayIndex] = { ...day, exercises: [...day.exercises, entry], pickerExerciseId: '' };
      return copy;
    });
  }

  removeExercise(dayIndex: number, exerciseId: string): void {
    this.days.update((days) => {
      const day = days[dayIndex];
      const copy = [...days];
      copy[dayIndex] = { ...day, exercises: day.exercises.filter((e) => e.exerciseId !== exerciseId) };
      return copy;
    });
  }

  updateDayLabel(dayIndex: number, label: string): void {
    this.days.update((days) => {
      const copy = [...days];
      copy[dayIndex] = { ...copy[dayIndex], label };
      return copy;
    });
  }

  exerciseOf(id: string): Exercise | undefined {
    return this.exerciseById.get(id);
  }

  async save(): Promise<void> {
    this.errorMessage.set(null);
    if (!this.title().trim()) {
      this.errorMessage.set(this.t.errorGeneric);
      return;
    }
    this.saving.set(true);
    const days: WorkoutDay[] = this.days().map((d) => ({
      label: d.label,
      muscleGroups: d.muscleGroups,
      exercises: d.exercises,
    }));
    try {
      if (this.sheetId) {
        await this.data.updateSheet(this.sheetId, this.title().trim(), days);
        this.router.navigate(['/clienti', this.clientId, 'schede', this.sheetId]);
      } else {
        const sheet = await this.data.createSheet(this.clientId, this.title().trim(), days);
        this.router.navigate(['/clienti', this.clientId, 'schede', sheet.id]);
      }
    } catch {
      this.errorMessage.set(this.t.errorGeneric);
    } finally {
      this.saving.set(false);
    }
  }

  cancel(): void {
    this.router.navigate(['/clienti', this.clientId]);
  }
}
