import {
  Injectable,
  __async,
  setClassMetadata,
  ɵɵdefineInjectable
} from "./chunk-Q4IH74E4.js";

// src/app/core/services/exercise-library.service.ts
var ExerciseLibraryService = class _ExerciseLibraryService {
  cache = null;
  listAll() {
    return __async(this, null, function* () {
      if (this.cache) {
        return this.cache;
      }
      const response = yield fetch("data/exercises.json");
      const data = yield response.json();
      this.cache = data;
      return data;
    });
  }
  byMuscleGroups(muscleGroups) {
    return __async(this, null, function* () {
      const all = yield this.listAll();
      if (muscleGroups.length === 0) {
        return [];
      }
      return all.filter((exercise) => exercise.primaryMuscles.some((m) => muscleGroups.includes(m)));
    });
  }
  byId(id) {
    return __async(this, null, function* () {
      const all = yield this.listAll();
      return all.find((exercise) => exercise.id === id);
    });
  }
  static \u0275fac = function ExerciseLibraryService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ExerciseLibraryService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ExerciseLibraryService, factory: _ExerciseLibraryService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ExerciseLibraryService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

// src/app/shared/models/client.model.ts
var TRAINING_TECHNIQUES = [
  {
    value: "cedimento",
    label: "Cedimento (a sfinimento)",
    description: "Si esegue la serie finche' non si riesce piu' a completare un'altra ripetizione con buona tecnica."
  },
  {
    value: "rest-pause",
    label: "Rest-pause",
    description: "Serie vicino al cedimento, pausa breve di 10-20 secondi, poi altre ripetizioni con lo stesso carico."
  },
  {
    value: "drop-set",
    label: "Drop set (stripping)",
    description: "Serie quasi a cedimento, poi si riduce subito il peso (15-30%) e si continua senza pausa."
  },
  {
    value: "back-off",
    label: "Back-off set",
    description: "Una o piu' serie dopo la piu' pesante della sessione, con carico ridotto del 10-20%."
  },
  {
    value: "superserie",
    label: "Superserie",
    description: "Due esercizi eseguiti uno dopo l'altro senza pausa o con recupero minimo (meno di 30 secondi)."
  },
  {
    value: "serie-gigante",
    label: "Serie gigante",
    description: "Tre o piu' esercizi consecutivi sullo stesso gruppo muscolare, senza pausa tra loro."
  },
  {
    value: "piramidale",
    label: "Piramidale",
    description: "Carico crescente e ripetizioni decrescenti serie dopo serie (o il percorso inverso)."
  },
  {
    value: "pre-affaticamento",
    label: "Pre-affaticamento",
    description: "Si isola il muscolo con un esercizio monoarticolare prima del multiarticolare principale."
  },
  {
    value: "forzate",
    label: "Ripetizioni forzate",
    description: "Con l'aiuto di uno spotter si eseguono 2-3 ripetizioni extra oltre il cedimento."
  },
  {
    value: "parziali",
    label: "Ripetizioni parziali",
    description: "Dopo il cedimento a range completo, si continua con ripetizioni nella parte piu' facile del movimento."
  },
  {
    value: "21s",
    label: "Serie a 21",
    description: "21 ripetizioni: 7 a meta' inferiore del movimento, 7 a meta' superiore, 7 a range completo."
  },
  {
    value: "myo-reps",
    label: "Myo-reps",
    description: "Una serie di attivazione, poi mini-serie da 3-5 ripetizioni con pause brevi tra loro."
  },
  {
    value: "cluster-set",
    label: "Cluster set",
    description: "La serie si divide in piccoli gruppi di ripetizioni, con brevi pause tra un gruppo e l'altro."
  },
  {
    value: "isometria",
    label: "Isometria",
    description: "Si mantiene una posizione di massima contrazione o tensione senza movimento per alcuni secondi."
  }
];

// src/app/shared/models/exercise.model.ts
var EXERCISE_IMAGE_BASE = "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/";
function exerciseImageUrl(path) {
  return `${EXERCISE_IMAGE_BASE}${path}`;
}
function exerciseDisplayName(exercise) {
  return exercise.nameIt ? `${exercise.name} (${exercise.nameIt})` : exercise.name;
}
var MUSCLE_GROUPS = [
  { value: "chest", label: "Petto" },
  { value: "lats", label: "Dorsali" },
  { value: "middle back", label: "Dorsali (medio)" },
  { value: "lower back", label: "Lombari" },
  { value: "shoulders", label: "Spalle" },
  { value: "traps", label: "Trapezi" },
  { value: "biceps", label: "Bicipiti" },
  { value: "triceps", label: "Tricipiti" },
  { value: "forearms", label: "Avambracci" },
  { value: "abdominals", label: "Addominali" },
  { value: "quadriceps", label: "Quadricipiti" },
  { value: "hamstrings", label: "Femorali" },
  { value: "glutes", label: "Glutei" },
  { value: "calves", label: "Polpacci" },
  { value: "abductors", label: "Abduttori" },
  { value: "adductors", label: "Adduttori" },
  { value: "neck", label: "Collo" }
];
var UPPER_BODY_GROUPS = [
  "chest",
  "lats",
  "middle back",
  "shoulders",
  "traps",
  "biceps",
  "triceps",
  "forearms",
  "abdominals",
  "neck"
];
var LOWER_BODY_GROUPS = ["lower back", "quadriceps", "hamstrings", "glutes", "calves", "abductors", "adductors"];

export {
  ExerciseLibraryService,
  TRAINING_TECHNIQUES,
  exerciseImageUrl,
  exerciseDisplayName,
  MUSCLE_GROUPS,
  UPPER_BODY_GROUPS,
  LOWER_BODY_GROUPS
};
//# sourceMappingURL=chunk-L4GHQBDP.js.map
