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
  technique: string;
}

// Tecniche di intensita' comuni nel bodybuilding, terminologia italiana.
// Fonti: my-personaltrainer.it, projectinvictus.it, arvo.guru (myo-reps).
export const TRAINING_TECHNIQUES: { value: string; label: string }[] = [
  { value: 'cedimento', label: 'Cedimento (a sfinimento)' },
  { value: 'rest-pause', label: 'Rest-pause' },
  { value: 'drop-set', label: 'Drop set (stripping)' },
  { value: 'back-off', label: 'Back-off set' },
  { value: 'superserie', label: 'Superserie' },
  { value: 'serie-gigante', label: 'Serie gigante' },
  { value: 'piramidale', label: 'Piramidale' },
  { value: 'pre-affaticamento', label: 'Pre-affaticamento' },
  { value: 'forzate', label: 'Ripetizioni forzate' },
  { value: 'parziali', label: 'Ripetizioni parziali' },
  { value: '21s', label: 'Serie a 21' },
  { value: 'myo-reps', label: 'Myo-reps' },
  { value: 'cluster-set', label: 'Cluster set' },
  { value: 'isometria', label: 'Isometria' },
];

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
