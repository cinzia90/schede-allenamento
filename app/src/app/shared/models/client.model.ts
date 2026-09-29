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
export const TRAINING_TECHNIQUES: { value: string; label: string; description: string }[] = [
  {
    value: 'cedimento',
    label: 'Cedimento (a sfinimento)',
    description: "Si esegue la serie finche' non si riesce piu' a completare un'altra ripetizione con buona tecnica.",
  },
  {
    value: 'rest-pause',
    label: 'Rest-pause',
    description: 'Serie vicino al cedimento, pausa breve di 10-20 secondi, poi altre ripetizioni con lo stesso carico.',
  },
  {
    value: 'drop-set',
    label: 'Drop set (stripping)',
    description: 'Serie quasi a cedimento, poi si riduce subito il peso (15-30%) e si continua senza pausa.',
  },
  {
    value: 'back-off',
    label: 'Back-off set',
    description: "Una o piu' serie dopo la piu' pesante della sessione, con carico ridotto del 10-20%.",
  },
  {
    value: 'superserie',
    label: 'Superserie',
    description: "Due esercizi eseguiti uno dopo l'altro senza pausa o con recupero minimo (meno di 30 secondi).",
  },
  {
    value: 'serie-gigante',
    label: 'Serie gigante',
    description: "Tre o piu' esercizi consecutivi sullo stesso gruppo muscolare, senza pausa tra loro.",
  },
  {
    value: 'piramidale',
    label: 'Piramidale',
    description: 'Carico crescente e ripetizioni decrescenti serie dopo serie (o il percorso inverso).',
  },
  {
    value: 'pre-affaticamento',
    label: 'Pre-affaticamento',
    description: 'Si isola il muscolo con un esercizio monoarticolare prima del multiarticolare principale.',
  },
  {
    value: 'forzate',
    label: 'Ripetizioni forzate',
    description: "Con l'aiuto di uno spotter si eseguono 2-3 ripetizioni extra oltre il cedimento.",
  },
  {
    value: 'parziali',
    label: 'Ripetizioni parziali',
    description: "Dopo il cedimento a range completo, si continua con ripetizioni nella parte piu' facile del movimento.",
  },
  {
    value: '21s',
    label: 'Serie a 21',
    description: "21 ripetizioni: 7 a meta' inferiore del movimento, 7 a meta' superiore, 7 a range completo.",
  },
  {
    value: 'myo-reps',
    label: 'Myo-reps',
    description: 'Una serie di attivazione, poi mini-serie da 3-5 ripetizioni con pause brevi tra loro.',
  },
  {
    value: 'cluster-set',
    label: 'Cluster set',
    description: "La serie si divide in piccoli gruppi di ripetizioni, con brevi pause tra un gruppo e l'altro.",
  },
  {
    value: 'isometria',
    label: 'Isometria',
    description: 'Si mantiene una posizione di massima contrazione o tensione senza movimento per alcuni secondi.',
  },
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
