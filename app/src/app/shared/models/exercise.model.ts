export interface Exercise {
  id: string;
  name: string;
  nameIt: string | null;
  force: string | null;
  level: string;
  mechanic: string | null;
  equipment: string | null;
  equipmentIt: string | null;
  category: string;
  primaryMuscles: string[];
  primaryMusclesIt: string[];
  secondaryMuscles: string[];
  images: string[];
}

export const EXERCISE_IMAGE_BASE = 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/';

export function exerciseImageUrl(path: string): string {
  return `${EXERCISE_IMAGE_BASE}${path}`;
}

export function exerciseDisplayName(exercise: Pick<Exercise, 'name' | 'nameIt'>): string {
  return exercise.nameIt ? `${exercise.name} (${exercise.nameIt})` : exercise.name;
}

// I 17 gruppi muscolari del dataset, con etichetta italiana per i filtri.
export const MUSCLE_GROUPS: { value: string; label: string }[] = [
  { value: 'chest', label: 'Petto' },
  { value: 'lats', label: 'Dorsali' },
  { value: 'middle back', label: 'Dorsali (medio)' },
  { value: 'lower back', label: 'Lombari' },
  { value: 'shoulders', label: 'Spalle' },
  { value: 'traps', label: 'Trapezi' },
  { value: 'biceps', label: 'Bicipiti' },
  { value: 'triceps', label: 'Tricipiti' },
  { value: 'forearms', label: 'Avambracci' },
  { value: 'abdominals', label: 'Addominali' },
  { value: 'quadriceps', label: 'Quadricipiti' },
  { value: 'hamstrings', label: 'Femorali' },
  { value: 'glutes', label: 'Glutei' },
  { value: 'calves', label: 'Polpacci' },
  { value: 'abductors', label: 'Abduttori' },
  { value: 'adductors', label: 'Adduttori' },
  { value: 'neck', label: 'Collo' },
];
