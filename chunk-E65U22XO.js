import {
  Injectable,
  __async,
  setClassMetadata,
  ɵɵdefineInjectable
} from "./chunk-BQNJQGMQ.js";

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
  exerciseImageUrl,
  exerciseDisplayName,
  MUSCLE_GROUPS,
  UPPER_BODY_GROUPS,
  LOWER_BODY_GROUPS
};
//# sourceMappingURL=chunk-E65U22XO.js.map
