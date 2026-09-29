export interface Client {
  id: string;
  trainer_id: string;
  first_name: string;
  last_name: string;
  created_at: string;
}

export interface WorkoutExerciseEntry {
  exerciseId: string;
  sets: number;
  reps: string;
  rest: string;
  notes: string;
}

export interface WorkoutDay {
  label: string;
  muscleGroups: string[];
  exercises: WorkoutExerciseEntry[];
}

export interface WorkoutSheet {
  id: string;
  client_id: string;
  trainer_id: string;
  title: string;
  days: WorkoutDay[];
  created_at: string;
}
