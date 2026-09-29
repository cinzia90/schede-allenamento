import {
  DefaultValueAccessor,
  FormsModule,
  MinValidator,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  NumberValueAccessor,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-CH3AVVHT.js";
import {
  ExerciseLibraryService,
  LOWER_BODY_GROUPS,
  MUSCLE_GROUPS,
  TRAINING_TECHNIQUES,
  UPPER_BODY_GROUPS,
  exerciseDisplayName,
  exerciseImageUrl
} from "./chunk-L4GHQBDP.js";
import {
  DataService
} from "./chunk-BB27IXKD.js";
import {
  it
} from "./chunk-BQJ4SSXP.js";
import {
  ActivatedRoute,
  CommonModule,
  Component,
  Router,
  __async,
  __spreadProps,
  __spreadValues,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-Q4IH74E4.js";

// src/app/features/sheets/sheet-builder/sheet-builder.component.ts
var _forTrack0 = ($index, $item) => $item.value;
var _forTrack1 = ($index, $item) => $item.id;
var _forTrack2 = ($index, $item) => $item.exerciseId;
function SheetBuilderComponent_Conditional_3_For_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 6);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const n_r3 = ctx.$implicit;
    \u0275\u0275property("value", n_r3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(n_r3);
  }
}
function SheetBuilderComponent_Conditional_3_For_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 14);
    \u0275\u0275listener("click", function SheetBuilderComponent_Conditional_3_For_12_Template_button_click_0_listener() {
      const $index_r5 = \u0275\u0275restoreView(_r4).$index;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.setActiveDay($index_r5));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const day_r6 = ctx.$implicit;
    const $index_r5 = ctx.$index;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("active", ctx_r1.activeDayIndex() === $index_r5)("done", day_r6.exercises.length > 0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", $index_r5 + 1, " ");
  }
}
function SheetBuilderComponent_Conditional_3_Conditional_13_For_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label", 29)(1, "input", 30);
    \u0275\u0275listener("change", function SheetBuilderComponent_Conditional_3_Conditional_13_For_14_Template_input_change_1_listener() {
      const mg_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.toggleMuscleGroup(ctx_r1.activeDayIndex(), mg_r9.value));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const mg_r9 = ctx.$implicit;
    const day_r10 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", day_r10.muscleGroups.includes(mg_r9.value));
    \u0275\u0275advance();
    \u0275\u0275property("checked", day_r10.muscleGroups.includes(mg_r9.value));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", mg_r9.label, " ");
  }
}
function SheetBuilderComponent_Conditional_3_Conditional_13_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 23);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.t.noMuscleGroupsYet);
  }
}
function SheetBuilderComponent_Conditional_3_Conditional_13_Conditional_16_For_4_For_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 37);
  }
  if (rf & 2) {
    const img_r14 = ctx.$implicit;
    const ex_r13 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275property("src", ctx_r1.exerciseImageUrl(img_r14), \u0275\u0275sanitizeUrl)("alt", ex_r13.name);
  }
}
function SheetBuilderComponent_Conditional_3_Conditional_13_Conditional_16_For_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 35);
    \u0275\u0275listener("click", function SheetBuilderComponent_Conditional_3_Conditional_13_Conditional_16_For_4_Template_li_click_0_listener() {
      const ex_r13 = \u0275\u0275restoreView(_r12).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.addExercise(ctx_r1.activeDayIndex(), ex_r13.id));
    });
    \u0275\u0275elementStart(1, "div", 36);
    \u0275\u0275repeaterCreate(2, SheetBuilderComponent_Conditional_3_Conditional_13_Conditional_16_For_4_For_3_Template, 1, 2, "img", 37, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 38);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 39);
    \u0275\u0275text(7, "+");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ex_r13 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ex_r13.images.slice(0, 2));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.exerciseDisplayName(ex_r13));
  }
}
function SheetBuilderComponent_Conditional_3_Conditional_13_Conditional_16_ForEmpty_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 34);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.t.noExercisesMatch);
  }
}
function SheetBuilderComponent_Conditional_3_Conditional_13_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 24)(1, "input", 31);
    \u0275\u0275listener("ngModelChange", function SheetBuilderComponent_Conditional_3_Conditional_13_Conditional_16_Template_input_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.setFilterText(ctx_r1.activeDayIndex(), $event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "ul", 32);
    \u0275\u0275repeaterCreate(3, SheetBuilderComponent_Conditional_3_Conditional_13_Conditional_16_For_4_Template, 8, 1, "li", 33, _forTrack1, false, SheetBuilderComponent_Conditional_3_Conditional_13_Conditional_16_ForEmpty_5_Template, 2, 1, "li", 34);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const day_r10 = \u0275\u0275nextContext();
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("placeholder", ctx_r1.t.chooseExercise)("ngModel", day_r10.filterText);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.pickableExercises(day_r10));
  }
}
function SheetBuilderComponent_Conditional_3_Conditional_13_Conditional_17_For_2_Conditional_1_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 37);
  }
  if (rf & 2) {
    const img_r16 = ctx.$implicit;
    const ex_r17 = \u0275\u0275nextContext();
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275property("src", ctx_r1.exerciseImageUrl(img_r16), \u0275\u0275sanitizeUrl)("alt", ex_r17.name);
  }
}
function SheetBuilderComponent_Conditional_3_Conditional_13_Conditional_17_For_2_Conditional_1_Conditional_19_For_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 54);
    \u0275\u0275listener("mousedown", function SheetBuilderComponent_Conditional_3_Conditional_13_Conditional_17_For_2_Conditional_1_Conditional_19_For_4_Template_li_mousedown_0_listener() {
      const tech_r21 = \u0275\u0275restoreView(_r20).$implicit;
      const entry_r18 = \u0275\u0275nextContext(3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.selectTechnique(ctx_r1.activeDayIndex(), entry_r18.exerciseId, tech_r21.value));
    });
    \u0275\u0275elementStart(1, "span", 55);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 56);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const tech_r21 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(tech_r21.label);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(tech_r21.description);
  }
}
function SheetBuilderComponent_Conditional_3_Conditional_13_Conditional_17_For_2_Conditional_1_Conditional_19_ForEmpty_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 53);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(7);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.t.techniqueNoMatch);
  }
}
function SheetBuilderComponent_Conditional_3_Conditional_13_Conditional_17_For_2_Conditional_1_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ul", 48)(1, "li", 51);
    \u0275\u0275listener("mousedown", function SheetBuilderComponent_Conditional_3_Conditional_13_Conditional_17_For_2_Conditional_1_Conditional_19_Template_li_mousedown_1_listener() {
      \u0275\u0275restoreView(_r19);
      const entry_r18 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.selectTechnique(ctx_r1.activeDayIndex(), entry_r18.exerciseId, ""));
    });
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(3, SheetBuilderComponent_Conditional_3_Conditional_13_Conditional_17_For_2_Conditional_1_Conditional_19_For_4_Template, 5, 2, "li", 52, _forTrack0, false, SheetBuilderComponent_Conditional_3_Conditional_13_Conditional_17_For_2_Conditional_1_Conditional_19_ForEmpty_5_Template, 2, 1, "li", 53);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const entry_r18 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.t.techniqueNone, " ");
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.techniqueMatches(ctx_r1.activeDayIndex(), entry_r18.exerciseId));
  }
}
function SheetBuilderComponent_Conditional_3_Conditional_13_Conditional_17_For_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 36);
    \u0275\u0275repeaterCreate(1, SheetBuilderComponent_Conditional_3_Conditional_13_Conditional_17_For_2_Conditional_1_For_2_Template, 1, 2, "img", 37, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 41)(4, "span", 42);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 43)(7, "label");
    \u0275\u0275text(8);
    \u0275\u0275elementStart(9, "input", 44);
    \u0275\u0275twoWayListener("ngModelChange", function SheetBuilderComponent_Conditional_3_Conditional_13_Conditional_17_For_2_Conditional_1_Template_input_ngModelChange_9_listener($event) {
      \u0275\u0275restoreView(_r15);
      const entry_r18 = \u0275\u0275nextContext().$implicit;
      \u0275\u0275twoWayBindingSet(entry_r18.sets, $event) || (entry_r18.sets = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "label");
    \u0275\u0275text(11);
    \u0275\u0275elementStart(12, "input", 45);
    \u0275\u0275twoWayListener("ngModelChange", function SheetBuilderComponent_Conditional_3_Conditional_13_Conditional_17_For_2_Conditional_1_Template_input_ngModelChange_12_listener($event) {
      \u0275\u0275restoreView(_r15);
      const entry_r18 = \u0275\u0275nextContext().$implicit;
      \u0275\u0275twoWayBindingSet(entry_r18.reps, $event) || (entry_r18.reps = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "label");
    \u0275\u0275text(14);
    \u0275\u0275elementStart(15, "input", 45);
    \u0275\u0275twoWayListener("ngModelChange", function SheetBuilderComponent_Conditional_3_Conditional_13_Conditional_17_For_2_Conditional_1_Template_input_ngModelChange_15_listener($event) {
      \u0275\u0275restoreView(_r15);
      const entry_r18 = \u0275\u0275nextContext().$implicit;
      \u0275\u0275twoWayBindingSet(entry_r18.rest, $event) || (entry_r18.rest = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "label", 46);
    \u0275\u0275text(17);
    \u0275\u0275elementStart(18, "input", 47);
    \u0275\u0275listener("ngModelChange", function SheetBuilderComponent_Conditional_3_Conditional_13_Conditional_17_For_2_Conditional_1_Template_input_ngModelChange_18_listener($event) {
      \u0275\u0275restoreView(_r15);
      const entry_r18 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.onTechniqueQuery(ctx_r1.activeDayIndex(), entry_r18.exerciseId, $event));
    })("focus", function SheetBuilderComponent_Conditional_3_Conditional_13_Conditional_17_For_2_Conditional_1_Template_input_focus_18_listener() {
      \u0275\u0275restoreView(_r15);
      const entry_r18 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.onTechniqueFocus(ctx_r1.activeDayIndex(), entry_r18.exerciseId));
    })("blur", function SheetBuilderComponent_Conditional_3_Conditional_13_Conditional_17_For_2_Conditional_1_Template_input_blur_18_listener() {
      \u0275\u0275restoreView(_r15);
      const entry_r18 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.onTechniqueBlur(ctx_r1.activeDayIndex(), entry_r18.exerciseId));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(19, SheetBuilderComponent_Conditional_3_Conditional_13_Conditional_17_For_2_Conditional_1_Conditional_19_Template, 6, 2, "ul", 48);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "label", 49);
    \u0275\u0275text(21);
    \u0275\u0275elementStart(22, "input", 45);
    \u0275\u0275twoWayListener("ngModelChange", function SheetBuilderComponent_Conditional_3_Conditional_13_Conditional_17_For_2_Conditional_1_Template_input_ngModelChange_22_listener($event) {
      \u0275\u0275restoreView(_r15);
      const entry_r18 = \u0275\u0275nextContext().$implicit;
      \u0275\u0275twoWayBindingSet(entry_r18.notes, $event) || (entry_r18.notes = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(23, "button", 50);
    \u0275\u0275listener("click", function SheetBuilderComponent_Conditional_3_Conditional_13_Conditional_17_For_2_Conditional_1_Template_button_click_23_listener() {
      \u0275\u0275restoreView(_r15);
      const entry_r18 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.removeExercise(ctx_r1.activeDayIndex(), entry_r18.exerciseId));
    });
    \u0275\u0275text(24);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ex_r17 = ctx;
    const entry_r18 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275repeater(ex_r17.images.slice(0, 2));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.exerciseDisplayName(ex_r17));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.t.sets, " ");
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", entry_r18.sets);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.t.reps, " ");
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", entry_r18.reps);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.t.rest, " ");
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", entry_r18.rest);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.t.technique, " ");
    \u0275\u0275advance();
    \u0275\u0275property("placeholder", ctx_r1.t.techniqueNone)("ngModel", ctx_r1.techniqueQueryValue(ctx_r1.activeDayIndex(), entry_r18.exerciseId, entry_r18.technique));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isTechniqueOpen(ctx_r1.activeDayIndex(), entry_r18.exerciseId) ? 19 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.t.notes, " ");
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", entry_r18.notes);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.t.removeExercise);
  }
}
function SheetBuilderComponent_Conditional_3_Conditional_13_Conditional_17_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 40);
    \u0275\u0275template(1, SheetBuilderComponent_Conditional_3_Conditional_13_Conditional_17_For_2_Conditional_1_Template, 25, 14);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_14_0;
    const entry_r18 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_14_0 = ctx_r1.exerciseOf(entry_r18.exerciseId)) ? 1 : -1, tmp_14_0);
  }
}
function SheetBuilderComponent_Conditional_3_Conditional_13_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 25);
    \u0275\u0275repeaterCreate(1, SheetBuilderComponent_Conditional_3_Conditional_13_Conditional_17_For_2_Template, 2, 1, "li", 40, _forTrack2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const day_r10 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(day_r10.exercises);
  }
}
function SheetBuilderComponent_Conditional_3_Conditional_13_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 57);
    \u0275\u0275listener("click", function SheetBuilderComponent_Conditional_3_Conditional_13_Conditional_21_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r22);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.setActiveDay(ctx_r1.activeDayIndex() + 1));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.t.stepNext, " ");
  }
}
function SheetBuilderComponent_Conditional_3_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section", 9)(1, "div", 15);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "input", 16);
    \u0275\u0275listener("ngModelChange", function SheetBuilderComponent_Conditional_3_Conditional_13_Template_input_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.updateDayLabel(ctx_r1.activeDayIndex(), $event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 17)(5, "span", 18);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 19)(8, "button", 20);
    \u0275\u0275listener("click", function SheetBuilderComponent_Conditional_3_Conditional_13_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.selectBodyRegion(ctx_r1.activeDayIndex(), "upper"));
    });
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "button", 20);
    \u0275\u0275listener("click", function SheetBuilderComponent_Conditional_3_Conditional_13_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.selectBodyRegion(ctx_r1.activeDayIndex(), "lower"));
    });
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 21);
    \u0275\u0275repeaterCreate(13, SheetBuilderComponent_Conditional_3_Conditional_13_For_14_Template, 3, 4, "label", 22, _forTrack0);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(15, SheetBuilderComponent_Conditional_3_Conditional_13_Conditional_15_Template, 2, 1, "p", 23)(16, SheetBuilderComponent_Conditional_3_Conditional_13_Conditional_16_Template, 6, 3, "div", 24)(17, SheetBuilderComponent_Conditional_3_Conditional_13_Conditional_17_Template, 3, 0, "ul", 25);
    \u0275\u0275elementStart(18, "div", 26)(19, "button", 27);
    \u0275\u0275listener("click", function SheetBuilderComponent_Conditional_3_Conditional_13_Template_button_click_19_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.setActiveDay(ctx_r1.activeDayIndex() - 1));
    });
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275template(21, SheetBuilderComponent_Conditional_3_Conditional_13_Conditional_21_Template, 2, 1, "button", 28);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const day_r10 = ctx;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.dayStepLabel());
    \u0275\u0275advance();
    \u0275\u0275property("placeholder", ctx_r1.t.dayLabelPlaceholder)("ngModel", day_r10.label);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.t.muscleGroups);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.t.upperBody);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.t.lowerBody);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.muscleGroups);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(day_r10.muscleGroups.length === 0 ? 15 : 16);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(day_r10.exercises.length > 0 ? 17 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.activeDayIndex() === 0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.t.stepBack, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.activeDayIndex() < ctx_r1.daysCount - 1 ? 21 : -1);
  }
}
function SheetBuilderComponent_Conditional_3_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 10);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.errorMessage());
  }
}
function SheetBuilderComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "h1");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "label", 2);
    \u0275\u0275text(3);
    \u0275\u0275elementStart(4, "input", 3);
    \u0275\u0275listener("ngModelChange", function SheetBuilderComponent_Conditional_3_Template_input_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.title.set($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "label", 4);
    \u0275\u0275text(6);
    \u0275\u0275elementStart(7, "select", 5);
    \u0275\u0275listener("ngModelChange", function SheetBuilderComponent_Conditional_3_Template_select_ngModelChange_7_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onDaysCountChange($event));
    });
    \u0275\u0275repeaterCreate(8, SheetBuilderComponent_Conditional_3_For_9_Template, 2, 2, "option", 6, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 7);
    \u0275\u0275repeaterCreate(11, SheetBuilderComponent_Conditional_3_For_12_Template, 2, 5, "button", 8, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd();
    \u0275\u0275template(13, SheetBuilderComponent_Conditional_3_Conditional_13_Template, 22, 11, "section", 9)(14, SheetBuilderComponent_Conditional_3_Conditional_14_Template, 2, 1, "p", 10);
    \u0275\u0275elementStart(15, "div", 11)(16, "button", 12);
    \u0275\u0275listener("click", function SheetBuilderComponent_Conditional_3_Template_button_click_16_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.cancel());
    });
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "button", 13);
    \u0275\u0275listener("click", function SheetBuilderComponent_Conditional_3_Template_button_click_18_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.save());
    });
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_9_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.isEdit() ? ctx_r1.t.titleEdit : ctx_r1.t.titleNew);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.t.sheetTitle, " ");
    \u0275\u0275advance();
    \u0275\u0275property("placeholder", ctx_r1.t.sheetTitlePlaceholder)("ngModel", ctx_r1.title());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.t.daysCount, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", ctx_r1.daysCount);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.dayCountOptions);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.days());
    \u0275\u0275advance(2);
    \u0275\u0275conditional((tmp_9_0 = ctx_r1.days()[ctx_r1.activeDayIndex()]) ? 13 : -1, tmp_9_0);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.errorMessage() ? 14 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.t.cancel);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.saving());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.saving() ? ctx_r1.t.saving : ctx_r1.t.save, " ");
  }
}
var SheetBuilderComponent = class _SheetBuilderComponent {
  route;
  router;
  data;
  exerciseLibrary;
  t = it.sheetBuilder;
  muscleGroups = MUSCLE_GROUPS;
  techniques = TRAINING_TECHNIQUES;
  dayCountOptions = [1, 2, 3, 4, 5, 6, 7];
  exerciseImageUrl = exerciseImageUrl;
  exerciseDisplayName = exerciseDisplayName;
  title = signal("");
  days = signal([]);
  saving = signal(false);
  loading = signal(true);
  errorMessage = signal(null);
  isEdit = signal(false);
  activeDayIndex = signal(0);
  clientId = "";
  sheetId = null;
  exerciseById = /* @__PURE__ */ new Map();
  techniqueQuery = /* @__PURE__ */ new Map();
  constructor(route, router, data, exerciseLibrary) {
    this.route = route;
    this.router = router;
    this.data = data;
    this.exerciseLibrary = exerciseLibrary;
    this.clientId = this.route.snapshot.paramMap.get("id") ?? "";
    this.sheetId = this.route.snapshot.paramMap.get("sheetId");
    this.isEdit.set(!!this.sheetId);
    this.init();
  }
  init() {
    return __async(this, null, function* () {
      const all = yield this.exerciseLibrary.listAll();
      this.exerciseById = new Map(all.map((e) => [e.id, e]));
      if (this.sheetId) {
        const sheet = yield this.data.getSheet(this.sheetId);
        if (sheet) {
          this.title.set(sheet.title);
          this.days.set(sheet.days.map((d) => this.toDayState(d)));
        }
      } else {
        this.setDaysCount(1);
      }
      this.activeDayIndex.set(0);
      this.loading.set(false);
    });
  }
  toDayState(day) {
    return {
      label: day.label,
      muscleGroups: [...day.muscleGroups],
      exercises: day.exercises.map((e) => __spreadValues({}, e)),
      availableExercises: this.computeAvailable(day.muscleGroups),
      filterText: ""
    };
  }
  computeAvailable(muscleGroups) {
    if (muscleGroups.length === 0) {
      return [];
    }
    return [...this.exerciseById.values()].filter((e) => e.primaryMuscles.some((m) => muscleGroups.includes(m))).sort((a, b) => exerciseDisplayName(a).localeCompare(exerciseDisplayName(b)));
  }
  get daysCount() {
    return this.days().length;
  }
  setDaysCount(count) {
    const current = this.days();
    const next = [];
    for (let i = 0; i < count; i++) {
      next.push(current[i] ?? {
        label: `${this.t.dayLabel} ${i + 1}`,
        muscleGroups: [],
        exercises: [],
        availableExercises: [],
        filterText: ""
      });
    }
    this.days.set(next);
  }
  onDaysCountChange(value) {
    this.setDaysCount(Number(value));
    if (this.activeDayIndex() >= this.daysCount) {
      this.activeDayIndex.set(this.daysCount - 1);
    }
  }
  setActiveDay(dayIndex) {
    this.activeDayIndex.set(dayIndex);
  }
  dayStepLabel() {
    return `${this.t.dayLabel} ${this.activeDayIndex() + 1} ${this.t.dayStepOf} ${this.daysCount}`;
  }
  toggleMuscleGroup(dayIndex, group) {
    const day = this.days()[dayIndex];
    const has = day.muscleGroups.includes(group);
    const muscleGroups = has ? day.muscleGroups.filter((g) => g !== group) : [...day.muscleGroups, group];
    this.applyMuscleGroups(dayIndex, muscleGroups);
  }
  selectBodyRegion(dayIndex, region) {
    this.applyMuscleGroups(dayIndex, region === "upper" ? [...UPPER_BODY_GROUPS] : [...LOWER_BODY_GROUPS]);
  }
  applyMuscleGroups(dayIndex, muscleGroups) {
    this.days.update((days) => {
      const day = days[dayIndex];
      const availableExercises = this.computeAvailable(muscleGroups);
      const validIds = new Set(availableExercises.map((e) => e.id));
      const exercises = day.exercises.filter((ex) => validIds.has(ex.exerciseId));
      const copy = [...days];
      copy[dayIndex] = __spreadProps(__spreadValues({}, day), { muscleGroups, availableExercises, exercises });
      return copy;
    });
  }
  addExercise(dayIndex, exerciseId) {
    this.days.update((days) => {
      const day = days[dayIndex];
      if (day.exercises.some((e) => e.exerciseId === exerciseId)) {
        return days;
      }
      const entry = { exerciseId, sets: 3, reps: "10", rest: "60s", notes: "", technique: "" };
      const copy = [...days];
      copy[dayIndex] = __spreadProps(__spreadValues({}, day), { exercises: [...day.exercises, entry] });
      return copy;
    });
  }
  setFilterText(dayIndex, text) {
    this.days.update((days) => {
      const copy = [...days];
      copy[dayIndex] = __spreadProps(__spreadValues({}, copy[dayIndex]), { filterText: text });
      return copy;
    });
  }
  pickableExercises(day) {
    const addedIds = new Set(day.exercises.map((e) => e.exerciseId));
    const term = day.filterText.trim().toLowerCase();
    return day.availableExercises.filter((ex) => {
      if (addedIds.has(ex.id)) {
        return false;
      }
      if (!term) {
        return true;
      }
      return exerciseDisplayName(ex).toLowerCase().includes(term);
    });
  }
  removeExercise(dayIndex, exerciseId) {
    this.days.update((days) => {
      const day = days[dayIndex];
      const copy = [...days];
      copy[dayIndex] = __spreadProps(__spreadValues({}, day), { exercises: day.exercises.filter((e) => e.exerciseId !== exerciseId) });
      return copy;
    });
  }
  updateDayLabel(dayIndex, label) {
    this.days.update((days) => {
      const copy = [...days];
      copy[dayIndex] = __spreadProps(__spreadValues({}, copy[dayIndex]), { label });
      return copy;
    });
  }
  exerciseOf(id) {
    return this.exerciseById.get(id);
  }
  techniqueKey(dayIndex, exerciseId) {
    return `${dayIndex}-${exerciseId}`;
  }
  techniqueLabelFor(value) {
    return this.techniques.find((t) => t.value === value)?.label ?? "";
  }
  isTechniqueOpen(dayIndex, exerciseId) {
    return this.techniqueQuery.has(this.techniqueKey(dayIndex, exerciseId));
  }
  techniqueQueryValue(dayIndex, exerciseId, currentTechnique) {
    const key = this.techniqueKey(dayIndex, exerciseId);
    return this.techniqueQuery.has(key) ? this.techniqueQuery.get(key) : this.techniqueLabelFor(currentTechnique);
  }
  onTechniqueFocus(dayIndex, exerciseId) {
    this.techniqueQuery.set(this.techniqueKey(dayIndex, exerciseId), "");
  }
  onTechniqueQuery(dayIndex, exerciseId, text) {
    this.techniqueQuery.set(this.techniqueKey(dayIndex, exerciseId), text);
  }
  onTechniqueBlur(dayIndex, exerciseId) {
    setTimeout(() => this.techniqueQuery.delete(this.techniqueKey(dayIndex, exerciseId)), 150);
  }
  techniqueMatches(dayIndex, exerciseId) {
    const term = (this.techniqueQuery.get(this.techniqueKey(dayIndex, exerciseId)) ?? "").trim().toLowerCase();
    if (!term) {
      return this.techniques;
    }
    return this.techniques.filter((t) => t.label.toLowerCase().includes(term));
  }
  selectTechnique(dayIndex, exerciseId, value) {
    this.days.update((days) => {
      const day = days[dayIndex];
      const exercises = day.exercises.map((e) => e.exerciseId === exerciseId ? __spreadProps(__spreadValues({}, e), { technique: value }) : e);
      const copy = [...days];
      copy[dayIndex] = __spreadProps(__spreadValues({}, day), { exercises });
      return copy;
    });
    this.techniqueQuery.delete(this.techniqueKey(dayIndex, exerciseId));
  }
  save() {
    return __async(this, null, function* () {
      this.errorMessage.set(null);
      if (!this.title().trim()) {
        this.errorMessage.set(this.t.errorGeneric);
        return;
      }
      this.saving.set(true);
      const days = this.days().map((d) => ({
        label: d.label,
        muscleGroups: d.muscleGroups,
        exercises: d.exercises
      }));
      try {
        if (this.sheetId) {
          yield this.data.updateSheet(this.sheetId, this.title().trim(), days);
          this.router.navigate(["/clienti", this.clientId, "schede", this.sheetId]);
        } else {
          const sheet = yield this.data.createSheet(this.clientId, this.title().trim(), days);
          this.router.navigate(["/clienti", this.clientId, "schede", sheet.id]);
        }
      } catch {
        this.errorMessage.set(this.t.errorGeneric);
      } finally {
        this.saving.set(false);
      }
    });
  }
  cancel() {
    this.router.navigate(["/clienti", this.clientId]);
  }
  static \u0275fac = function SheetBuilderComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SheetBuilderComponent)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(DataService), \u0275\u0275directiveInject(ExerciseLibraryService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SheetBuilderComponent, selectors: [["app-sheet-builder"]], decls: 4, vars: 2, consts: [[1, "page"], ["type", "button", 1, "back", 3, "click"], [1, "sheet-title"], ["type", "text", 3, "ngModelChange", "placeholder", "ngModel"], [1, "days-count"], [3, "ngModelChange", "ngModel"], [3, "value"], [1, "step-indicator"], ["type", "button", 1, "step-dot", 3, "active", "done"], [1, "day-card"], [1, "error"], [1, "actions"], ["type", "button", 1, "ghost", 3, "click"], ["type", "button", 1, "primary", 3, "click", "disabled"], ["type", "button", 1, "step-dot", 3, "click"], [1, "day-step-title"], ["type", "text", 1, "day-label", 3, "ngModelChange", "placeholder", "ngModel"], [1, "muscle-groups"], [1, "mg-title"], [1, "mg-shortcuts"], ["type", "button", 1, "shortcut", 3, "click"], [1, "mg-chips"], [1, "chip", 3, "active"], [1, "hint"], [1, "picker"], [1, "exercise-list"], [1, "step-nav"], ["type", "button", 1, "ghost", 3, "click", "disabled"], ["type", "button", 1, "primary"], [1, "chip"], ["type", "checkbox", 3, "change", "checked"], ["type", "search", 1, "picker-filter", 3, "ngModelChange", "placeholder", "ngModel"], [1, "picker-list"], [1, "picker-item"], [1, "picker-empty"], [1, "picker-item", 3, "click"], [1, "thumbs"], ["loading", "lazy", 3, "src", "alt"], [1, "picker-item-name"], [1, "picker-item-add"], [1, "exercise-row"], [1, "exercise-fields"], [1, "exercise-name"], [1, "fields-row"], ["type", "number", "min", "1", 3, "ngModelChange", "ngModel"], ["type", "text", 3, "ngModelChange", "ngModel"], [1, "notes-field", "technique-field"], ["type", "text", 3, "ngModelChange", "focus", "blur", "placeholder", "ngModel"], [1, "technique-list"], [1, "notes-field"], ["type", "button", 1, "remove", 3, "click"], [1, "technique-item", "technique-item-none", 3, "mousedown"], [1, "technique-item"], [1, "technique-empty"], [1, "technique-item", 3, "mousedown"], [1, "technique-item-label"], [1, "technique-item-desc"], ["type", "button", 1, "primary", 3, "click"]], template: function SheetBuilderComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "button", 1);
      \u0275\u0275listener("click", function SheetBuilderComponent_Template_button_click_1_listener() {
        return ctx.cancel();
      });
      \u0275\u0275text(2);
      \u0275\u0275elementEnd();
      \u0275\u0275template(3, SheetBuilderComponent_Conditional_3_Template, 20, 11);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1("\u2190 ", ctx.t.cancel, "");
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.loading() ? 3 : -1);
    }
  }, dependencies: [CommonModule, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, MinValidator, NgModel], styles: ["\n\n.page[_ngcontent-%COMP%] {\n  max-width: 760px;\n  margin: 0 auto;\n  padding: var(--sa-space-4) var(--sa-space-3) var(--sa-space-5);\n}\n.back[_ngcontent-%COMP%] {\n  border: none;\n  background: none;\n  color: var(--sa-text-muted);\n  font: inherit;\n  font-size: 14px;\n  cursor: pointer;\n  padding: 0;\n  margin-bottom: var(--sa-space-3);\n}\n.back[_ngcontent-%COMP%]:hover {\n  color: var(--sa-primary);\n}\nh1[_ngcontent-%COMP%] {\n  font-size: 20px;\n  margin: 0 0 var(--sa-space-3);\n}\nlabel[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  font-size: 13px;\n  color: var(--sa-text-muted);\n}\ninput[_ngcontent-%COMP%], \nselect[_ngcontent-%COMP%] {\n  font: inherit;\n  padding: 8px 10px;\n  border: 1px solid var(--sa-border);\n  border-radius: var(--sa-radius-sm);\n  color: var(--sa-text);\n  background: var(--sa-surface);\n  transition: border-color 0.15s ease, box-shadow 0.15s ease;\n}\ninput[_ngcontent-%COMP%]:focus, \nselect[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--sa-primary);\n  box-shadow: 0 0 0 3px color-mix(in srgb, var(--sa-primary) 15%, transparent);\n}\n.sheet-title[_ngcontent-%COMP%], \n.days-count[_ngcontent-%COMP%] {\n  margin-bottom: var(--sa-space-3);\n  max-width: 320px;\n}\n.step-indicator[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n  margin-bottom: var(--sa-space-3);\n}\n.step-dot[_ngcontent-%COMP%] {\n  width: 34px;\n  height: 34px;\n  flex-shrink: 0;\n  border-radius: 50%;\n  border: 1px solid var(--sa-border);\n  background: var(--sa-surface);\n  color: var(--sa-text-muted);\n  font: inherit;\n  font-weight: 700;\n  cursor: pointer;\n  transition: transform 0.15s ease, box-shadow 0.15s ease;\n}\n.step-dot.done[_ngcontent-%COMP%] {\n  border-color: var(--sa-primary);\n  color: var(--sa-primary-dark);\n  background: color-mix(in srgb, var(--sa-primary) 10%, transparent);\n}\n.step-dot.active[_ngcontent-%COMP%] {\n  background: var(--sa-gradient);\n  border-color: transparent;\n  color: #fff;\n  box-shadow: var(--sa-shadow-md);\n  transform: scale(1.08);\n}\n.day-card[_ngcontent-%COMP%] {\n  background: var(--sa-surface);\n  border: 1px solid var(--sa-border);\n  border-radius: var(--sa-radius-lg);\n  padding: var(--sa-space-4);\n  margin-bottom: var(--sa-space-3);\n  display: flex;\n  flex-direction: column;\n  gap: var(--sa-space-2);\n  box-shadow: var(--sa-shadow-sm);\n}\n.day-step-title[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 600;\n  color: var(--sa-primary-dark);\n  text-transform: uppercase;\n  letter-spacing: 0.03em;\n}\n.step-nav[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  gap: var(--sa-space-2);\n  margin-top: var(--sa-space-2);\n  padding-top: var(--sa-space-2);\n  border-top: 1px solid var(--sa-border);\n}\n.day-label[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 15px;\n  border: none;\n  border-bottom: 1px solid var(--sa-border);\n  border-radius: 0;\n  padding: 4px 0;\n}\n.mg-title[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 13px;\n  color: var(--sa-text-muted);\n  margin-bottom: 6px;\n}\n.mg-chips[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px;\n}\n.mg-shortcuts[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px;\n  margin-bottom: 8px;\n}\n.shortcut[_ngcontent-%COMP%] {\n  padding: 6px 12px;\n  border: 1px solid var(--sa-primary);\n  border-radius: 999px;\n  background: color-mix(in srgb, var(--sa-primary) 6%, transparent);\n  color: var(--sa-primary-dark);\n  font: inherit;\n  font-size: 12px;\n  font-weight: 600;\n  cursor: pointer;\n}\n.shortcut[_ngcontent-%COMP%]:hover {\n  background: color-mix(in srgb, var(--sa-primary) 15%, transparent);\n}\n.chip[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  padding: 6px 10px;\n  border: 1px solid var(--sa-border);\n  border-radius: 999px;\n  font-size: 12px;\n  color: var(--sa-text);\n  cursor: pointer;\n}\n.chip[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  width: auto;\n}\n.chip.active[_ngcontent-%COMP%] {\n  background: color-mix(in srgb, var(--sa-primary) 12%, transparent);\n  border-color: var(--sa-primary);\n  color: var(--sa-primary-dark);\n}\n.hint[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: var(--sa-text-muted);\n  margin: 0;\n}\n.picker[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: var(--sa-space-2);\n}\n.picker-filter[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.picker-list[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  max-height: 280px;\n  overflow-y: auto;\n  border: 1px solid var(--sa-border);\n  border-radius: var(--sa-radius-sm);\n  padding: 4px;\n}\n.picker-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--sa-space-2);\n  padding: 6px;\n  border-radius: var(--sa-radius-sm);\n  cursor: pointer;\n  transition: background 0.12s ease;\n}\n.picker-item[_ngcontent-%COMP%]:hover {\n  background: color-mix(in srgb, var(--sa-primary) 8%, transparent);\n}\n.picker-item[_ngcontent-%COMP%]   .thumbs[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 2px;\n  flex-shrink: 0;\n}\n.picker-item[_ngcontent-%COMP%]   .thumbs[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  object-fit: cover;\n  border-radius: 4px;\n  background: var(--sa-bg);\n}\n.picker-item[_ngcontent-%COMP%]   .picker-item-name[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n  font-size: 13px;\n}\n.picker-item[_ngcontent-%COMP%]   .picker-item-add[_ngcontent-%COMP%] {\n  color: var(--sa-primary);\n  font-weight: 700;\n  font-size: 16px;\n  padding: 0 6px;\n}\n.picker-empty[_ngcontent-%COMP%] {\n  padding: var(--sa-space-2);\n  font-size: 13px;\n  color: var(--sa-text-muted);\n  text-align: center;\n}\n.exercise-list[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  display: flex;\n  flex-direction: column;\n  gap: var(--sa-space-2);\n}\n.exercise-row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: var(--sa-space-2);\n  align-items: flex-start;\n  border: 1px solid var(--sa-border);\n  border-radius: var(--sa-radius-md);\n  padding: var(--sa-space-2);\n  background: var(--sa-surface);\n  box-shadow: var(--sa-shadow-sm);\n}\n.thumbs[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 4px;\n  flex-shrink: 0;\n}\n.thumbs[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 56px;\n  height: 56px;\n  object-fit: cover;\n  border-radius: 6px;\n  background: var(--sa-bg);\n}\n.exercise-fields[_ngcontent-%COMP%] {\n  flex: 1 1 220px;\n  min-width: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.exercise-fields[_ngcontent-%COMP%]   .exercise-name[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 14px;\n}\n.exercise-fields[_ngcontent-%COMP%]   .fields-row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: var(--sa-space-2);\n}\n.exercise-fields[_ngcontent-%COMP%]   .fields-row[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  flex: 1 1 80px;\n  min-width: 0;\n}\n.exercise-fields[_ngcontent-%COMP%]   .fields-row[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  min-width: 0;\n  padding: 6px 8px;\n}\n.exercise-fields[_ngcontent-%COMP%]   .notes-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], \n.exercise-fields[_ngcontent-%COMP%]   .notes-field[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  width: 100%;\n  min-width: 0;\n  padding: 6px 8px;\n}\n.exercise-fields[_ngcontent-%COMP%]   .technique-field[_ngcontent-%COMP%] {\n  position: relative;\n}\n.technique-list[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 5;\n  top: calc(100% + 2px);\n  left: 0;\n  right: 0;\n  max-height: 220px;\n  overflow-y: auto;\n  margin: 0;\n  padding: 4px;\n  list-style: none;\n  background: var(--sa-surface);\n  border: 1px solid var(--sa-border);\n  border-radius: var(--sa-radius-sm);\n  box-shadow: var(--sa-shadow-md);\n}\n.technique-item[_ngcontent-%COMP%] {\n  padding: 6px 8px;\n  border-radius: var(--sa-radius-sm);\n  cursor: pointer;\n  display: flex;\n  flex-direction: column;\n  gap: 1px;\n}\n.technique-item[_ngcontent-%COMP%]:hover {\n  background: color-mix(in srgb, var(--sa-primary) 8%, transparent);\n}\n.technique-item[_ngcontent-%COMP%]   .technique-item-label[_ngcontent-%COMP%] {\n  font-size: 12.5px;\n  font-weight: 600;\n  color: var(--sa-text);\n}\n.technique-item[_ngcontent-%COMP%]   .technique-item-desc[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--sa-text-muted);\n}\n.technique-item-none[_ngcontent-%COMP%] {\n  font-size: 12.5px;\n  color: var(--sa-text-muted);\n  font-style: italic;\n}\n.technique-empty[_ngcontent-%COMP%] {\n  padding: 6px 8px;\n  font-size: 12px;\n  color: var(--sa-text-muted);\n  text-align: center;\n}\n.remove[_ngcontent-%COMP%] {\n  border: none;\n  background: none;\n  color: var(--sa-danger);\n  font-size: 12px;\n  cursor: pointer;\n  white-space: nowrap;\n}\n.error[_ngcontent-%COMP%] {\n  color: var(--sa-danger);\n  font-size: 14px;\n}\n.actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: var(--sa-space-2);\n  margin-top: var(--sa-space-3);\n}\nbutton.primary[_ngcontent-%COMP%] {\n  padding: 10px 18px;\n  border: none;\n  border-radius: var(--sa-radius-sm);\n  background: var(--sa-gradient);\n  color: #fff;\n  font: inherit;\n  font-weight: 700;\n  cursor: pointer;\n  box-shadow: var(--sa-shadow-md);\n  transition: transform 0.15s ease, box-shadow 0.15s ease;\n}\nbutton.primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  transform: translateY(-1px);\n  box-shadow: var(--sa-shadow-lg);\n}\nbutton.primary[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  transform: none;\n}\nbutton.ghost[_ngcontent-%COMP%] {\n  padding: 10px 16px;\n  border: 1px solid var(--sa-border);\n  border-radius: var(--sa-radius-sm);\n  background: var(--sa-surface);\n  color: var(--sa-text);\n  font: inherit;\n  cursor: pointer;\n  transition: border-color 0.15s ease, background 0.15s ease;\n}\nbutton.ghost[_ngcontent-%COMP%]:hover:not(:disabled) {\n  border-color: var(--sa-primary);\n  background: color-mix(in srgb, var(--sa-primary) 5%, var(--sa-surface));\n}\nbutton.ghost[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: default;\n}\n/*# sourceMappingURL=sheet-builder.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SheetBuilderComponent, [{
    type: Component,
    args: [{ selector: "app-sheet-builder", standalone: true, imports: [CommonModule, FormsModule], template: `<div class="page">
  <button type="button" class="back" (click)="cancel()">&larr; {{ t.cancel }}</button>

  @if (!loading()) {
    <h1>{{ isEdit() ? t.titleEdit : t.titleNew }}</h1>

    <label class="sheet-title">
      {{ t.sheetTitle }}
      <input type="text" [placeholder]="t.sheetTitlePlaceholder" [ngModel]="title()" (ngModelChange)="title.set($event)" />
    </label>

    <label class="days-count">
      {{ t.daysCount }}
      <select [ngModel]="daysCount" (ngModelChange)="onDaysCountChange($event)">
        @for (n of dayCountOptions; track n) {
          <option [value]="n">{{ n }}</option>
        }
      </select>
    </label>

    <div class="step-indicator">
      @for (day of days(); track $index) {
        <button
          type="button"
          class="step-dot"
          [class.active]="activeDayIndex() === $index"
          [class.done]="day.exercises.length > 0"
          (click)="setActiveDay($index)"
        >
          {{ $index + 1 }}
        </button>
      }
    </div>

    @if (days()[activeDayIndex()]; as day) {
      <section class="day-card">
        <div class="day-step-title">{{ dayStepLabel() }}</div>

        <input
          type="text"
          class="day-label"
          [placeholder]="t.dayLabelPlaceholder"
          [ngModel]="day.label"
          (ngModelChange)="updateDayLabel(activeDayIndex(), $event)"
        />

        <div class="muscle-groups">
          <span class="mg-title">{{ t.muscleGroups }}</span>
          <div class="mg-shortcuts">
            <button type="button" class="shortcut" (click)="selectBodyRegion(activeDayIndex(), 'upper')">{{ t.upperBody }}</button>
            <button type="button" class="shortcut" (click)="selectBodyRegion(activeDayIndex(), 'lower')">{{ t.lowerBody }}</button>
          </div>
          <div class="mg-chips">
            @for (mg of muscleGroups; track mg.value) {
              <label class="chip" [class.active]="day.muscleGroups.includes(mg.value)">
                <input
                  type="checkbox"
                  [checked]="day.muscleGroups.includes(mg.value)"
                  (change)="toggleMuscleGroup(activeDayIndex(), mg.value)"
                />
                {{ mg.label }}
              </label>
            }
          </div>
        </div>

        @if (day.muscleGroups.length === 0) {
          <p class="hint">{{ t.noMuscleGroupsYet }}</p>
        } @else {
          <div class="picker">
            <input
              type="search"
              class="picker-filter"
              [placeholder]="t.chooseExercise"
              [ngModel]="day.filterText"
              (ngModelChange)="setFilterText(activeDayIndex(), $event)"
            />
            <ul class="picker-list">
              @for (ex of pickableExercises(day); track ex.id) {
                <li class="picker-item" (click)="addExercise(activeDayIndex(), ex.id)">
                  <div class="thumbs">
                    @for (img of ex.images.slice(0, 2); track img) {
                      <img [src]="exerciseImageUrl(img)" [alt]="ex.name" loading="lazy" />
                    }
                  </div>
                  <span class="picker-item-name">{{ exerciseDisplayName(ex) }}</span>
                  <span class="picker-item-add">+</span>
                </li>
              } @empty {
                <li class="picker-empty">{{ t.noExercisesMatch }}</li>
              }
            </ul>
          </div>
        }

        @if (day.exercises.length > 0) {
          <ul class="exercise-list">
            @for (entry of day.exercises; track entry.exerciseId) {
              <li class="exercise-row">
                @if (exerciseOf(entry.exerciseId); as ex) {
                  <div class="thumbs">
                    @for (img of ex.images.slice(0, 2); track img) {
                      <img [src]="exerciseImageUrl(img)" [alt]="ex.name" loading="lazy" />
                    }
                  </div>
                  <div class="exercise-fields">
                    <span class="exercise-name">{{ exerciseDisplayName(ex) }}</span>
                    <div class="fields-row">
                      <label>
                        {{ t.sets }}
                        <input type="number" min="1" [(ngModel)]="entry.sets" />
                      </label>
                      <label>
                        {{ t.reps }}
                        <input type="text" [(ngModel)]="entry.reps" />
                      </label>
                      <label>
                        {{ t.rest }}
                        <input type="text" [(ngModel)]="entry.rest" />
                      </label>
                    </div>
                    <label class="notes-field technique-field">
                      {{ t.technique }}
                      <input
                        type="text"
                        [placeholder]="t.techniqueNone"
                        [ngModel]="techniqueQueryValue(activeDayIndex(), entry.exerciseId, entry.technique)"
                        (ngModelChange)="onTechniqueQuery(activeDayIndex(), entry.exerciseId, $event)"
                        (focus)="onTechniqueFocus(activeDayIndex(), entry.exerciseId)"
                        (blur)="onTechniqueBlur(activeDayIndex(), entry.exerciseId)"
                      />
                      @if (isTechniqueOpen(activeDayIndex(), entry.exerciseId)) {
                        <ul class="technique-list">
                          <li class="technique-item technique-item-none" (mousedown)="selectTechnique(activeDayIndex(), entry.exerciseId, '')">
                            {{ t.techniqueNone }}
                          </li>
                          @for (tech of techniqueMatches(activeDayIndex(), entry.exerciseId); track tech.value) {
                            <li class="technique-item" (mousedown)="selectTechnique(activeDayIndex(), entry.exerciseId, tech.value)">
                              <span class="technique-item-label">{{ tech.label }}</span>
                              <span class="technique-item-desc">{{ tech.description }}</span>
                            </li>
                          } @empty {
                            <li class="technique-empty">{{ t.techniqueNoMatch }}</li>
                          }
                        </ul>
                      }
                    </label>
                    <label class="notes-field">
                      {{ t.notes }}
                      <input type="text" [(ngModel)]="entry.notes" />
                    </label>
                  </div>
                  <button type="button" class="remove" (click)="removeExercise(activeDayIndex(), entry.exerciseId)">{{ t.removeExercise }}</button>
                }
              </li>
            }
          </ul>
        }

        <div class="step-nav">
          <button type="button" class="ghost" [disabled]="activeDayIndex() === 0" (click)="setActiveDay(activeDayIndex() - 1)">
            {{ t.stepBack }}
          </button>
          @if (activeDayIndex() < daysCount - 1) {
            <button type="button" class="primary" (click)="setActiveDay(activeDayIndex() + 1)">
              {{ t.stepNext }}
            </button>
          }
        </div>
      </section>
    }

    @if (errorMessage()) {
      <p class="error">{{ errorMessage() }}</p>
    }

    <div class="actions">
      <button type="button" class="ghost" (click)="cancel()">{{ t.cancel }}</button>
      <button type="button" class="primary" [disabled]="saving()" (click)="save()">
        {{ saving() ? t.saving : t.save }}
      </button>
    </div>
  }
</div>
`, styles: ["/* src/app/features/sheets/sheet-builder/sheet-builder.component.scss */\n.page {\n  max-width: 760px;\n  margin: 0 auto;\n  padding: var(--sa-space-4) var(--sa-space-3) var(--sa-space-5);\n}\n.back {\n  border: none;\n  background: none;\n  color: var(--sa-text-muted);\n  font: inherit;\n  font-size: 14px;\n  cursor: pointer;\n  padding: 0;\n  margin-bottom: var(--sa-space-3);\n}\n.back:hover {\n  color: var(--sa-primary);\n}\nh1 {\n  font-size: 20px;\n  margin: 0 0 var(--sa-space-3);\n}\nlabel {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  font-size: 13px;\n  color: var(--sa-text-muted);\n}\ninput,\nselect {\n  font: inherit;\n  padding: 8px 10px;\n  border: 1px solid var(--sa-border);\n  border-radius: var(--sa-radius-sm);\n  color: var(--sa-text);\n  background: var(--sa-surface);\n  transition: border-color 0.15s ease, box-shadow 0.15s ease;\n}\ninput:focus,\nselect:focus {\n  outline: none;\n  border-color: var(--sa-primary);\n  box-shadow: 0 0 0 3px color-mix(in srgb, var(--sa-primary) 15%, transparent);\n}\n.sheet-title,\n.days-count {\n  margin-bottom: var(--sa-space-3);\n  max-width: 320px;\n}\n.step-indicator {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n  margin-bottom: var(--sa-space-3);\n}\n.step-dot {\n  width: 34px;\n  height: 34px;\n  flex-shrink: 0;\n  border-radius: 50%;\n  border: 1px solid var(--sa-border);\n  background: var(--sa-surface);\n  color: var(--sa-text-muted);\n  font: inherit;\n  font-weight: 700;\n  cursor: pointer;\n  transition: transform 0.15s ease, box-shadow 0.15s ease;\n}\n.step-dot.done {\n  border-color: var(--sa-primary);\n  color: var(--sa-primary-dark);\n  background: color-mix(in srgb, var(--sa-primary) 10%, transparent);\n}\n.step-dot.active {\n  background: var(--sa-gradient);\n  border-color: transparent;\n  color: #fff;\n  box-shadow: var(--sa-shadow-md);\n  transform: scale(1.08);\n}\n.day-card {\n  background: var(--sa-surface);\n  border: 1px solid var(--sa-border);\n  border-radius: var(--sa-radius-lg);\n  padding: var(--sa-space-4);\n  margin-bottom: var(--sa-space-3);\n  display: flex;\n  flex-direction: column;\n  gap: var(--sa-space-2);\n  box-shadow: var(--sa-shadow-sm);\n}\n.day-step-title {\n  font-size: 13px;\n  font-weight: 600;\n  color: var(--sa-primary-dark);\n  text-transform: uppercase;\n  letter-spacing: 0.03em;\n}\n.step-nav {\n  display: flex;\n  justify-content: space-between;\n  gap: var(--sa-space-2);\n  margin-top: var(--sa-space-2);\n  padding-top: var(--sa-space-2);\n  border-top: 1px solid var(--sa-border);\n}\n.day-label {\n  font-weight: 600;\n  font-size: 15px;\n  border: none;\n  border-bottom: 1px solid var(--sa-border);\n  border-radius: 0;\n  padding: 4px 0;\n}\n.mg-title {\n  display: block;\n  font-size: 13px;\n  color: var(--sa-text-muted);\n  margin-bottom: 6px;\n}\n.mg-chips {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px;\n}\n.mg-shortcuts {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px;\n  margin-bottom: 8px;\n}\n.shortcut {\n  padding: 6px 12px;\n  border: 1px solid var(--sa-primary);\n  border-radius: 999px;\n  background: color-mix(in srgb, var(--sa-primary) 6%, transparent);\n  color: var(--sa-primary-dark);\n  font: inherit;\n  font-size: 12px;\n  font-weight: 600;\n  cursor: pointer;\n}\n.shortcut:hover {\n  background: color-mix(in srgb, var(--sa-primary) 15%, transparent);\n}\n.chip {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  padding: 6px 10px;\n  border: 1px solid var(--sa-border);\n  border-radius: 999px;\n  font-size: 12px;\n  color: var(--sa-text);\n  cursor: pointer;\n}\n.chip input {\n  margin: 0;\n  padding: 0;\n  width: auto;\n}\n.chip.active {\n  background: color-mix(in srgb, var(--sa-primary) 12%, transparent);\n  border-color: var(--sa-primary);\n  color: var(--sa-primary-dark);\n}\n.hint {\n  font-size: 13px;\n  color: var(--sa-text-muted);\n  margin: 0;\n}\n.picker {\n  display: flex;\n  flex-direction: column;\n  gap: var(--sa-space-2);\n}\n.picker-filter {\n  width: 100%;\n}\n.picker-list {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  max-height: 280px;\n  overflow-y: auto;\n  border: 1px solid var(--sa-border);\n  border-radius: var(--sa-radius-sm);\n  padding: 4px;\n}\n.picker-item {\n  display: flex;\n  align-items: center;\n  gap: var(--sa-space-2);\n  padding: 6px;\n  border-radius: var(--sa-radius-sm);\n  cursor: pointer;\n  transition: background 0.12s ease;\n}\n.picker-item:hover {\n  background: color-mix(in srgb, var(--sa-primary) 8%, transparent);\n}\n.picker-item .thumbs {\n  display: flex;\n  gap: 2px;\n  flex-shrink: 0;\n}\n.picker-item .thumbs img {\n  width: 36px;\n  height: 36px;\n  object-fit: cover;\n  border-radius: 4px;\n  background: var(--sa-bg);\n}\n.picker-item .picker-item-name {\n  flex: 1;\n  min-width: 0;\n  font-size: 13px;\n}\n.picker-item .picker-item-add {\n  color: var(--sa-primary);\n  font-weight: 700;\n  font-size: 16px;\n  padding: 0 6px;\n}\n.picker-empty {\n  padding: var(--sa-space-2);\n  font-size: 13px;\n  color: var(--sa-text-muted);\n  text-align: center;\n}\n.exercise-list {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  display: flex;\n  flex-direction: column;\n  gap: var(--sa-space-2);\n}\n.exercise-row {\n  display: flex;\n  flex-wrap: wrap;\n  gap: var(--sa-space-2);\n  align-items: flex-start;\n  border: 1px solid var(--sa-border);\n  border-radius: var(--sa-radius-md);\n  padding: var(--sa-space-2);\n  background: var(--sa-surface);\n  box-shadow: var(--sa-shadow-sm);\n}\n.thumbs {\n  display: flex;\n  gap: 4px;\n  flex-shrink: 0;\n}\n.thumbs img {\n  width: 56px;\n  height: 56px;\n  object-fit: cover;\n  border-radius: 6px;\n  background: var(--sa-bg);\n}\n.exercise-fields {\n  flex: 1 1 220px;\n  min-width: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.exercise-fields .exercise-name {\n  font-weight: 600;\n  font-size: 14px;\n}\n.exercise-fields .fields-row {\n  display: flex;\n  flex-wrap: wrap;\n  gap: var(--sa-space-2);\n}\n.exercise-fields .fields-row label {\n  flex: 1 1 80px;\n  min-width: 0;\n}\n.exercise-fields .fields-row input {\n  width: 100%;\n  min-width: 0;\n  padding: 6px 8px;\n}\n.exercise-fields .notes-field input,\n.exercise-fields .notes-field select {\n  width: 100%;\n  min-width: 0;\n  padding: 6px 8px;\n}\n.exercise-fields .technique-field {\n  position: relative;\n}\n.technique-list {\n  position: absolute;\n  z-index: 5;\n  top: calc(100% + 2px);\n  left: 0;\n  right: 0;\n  max-height: 220px;\n  overflow-y: auto;\n  margin: 0;\n  padding: 4px;\n  list-style: none;\n  background: var(--sa-surface);\n  border: 1px solid var(--sa-border);\n  border-radius: var(--sa-radius-sm);\n  box-shadow: var(--sa-shadow-md);\n}\n.technique-item {\n  padding: 6px 8px;\n  border-radius: var(--sa-radius-sm);\n  cursor: pointer;\n  display: flex;\n  flex-direction: column;\n  gap: 1px;\n}\n.technique-item:hover {\n  background: color-mix(in srgb, var(--sa-primary) 8%, transparent);\n}\n.technique-item .technique-item-label {\n  font-size: 12.5px;\n  font-weight: 600;\n  color: var(--sa-text);\n}\n.technique-item .technique-item-desc {\n  font-size: 11px;\n  color: var(--sa-text-muted);\n}\n.technique-item-none {\n  font-size: 12.5px;\n  color: var(--sa-text-muted);\n  font-style: italic;\n}\n.technique-empty {\n  padding: 6px 8px;\n  font-size: 12px;\n  color: var(--sa-text-muted);\n  text-align: center;\n}\n.remove {\n  border: none;\n  background: none;\n  color: var(--sa-danger);\n  font-size: 12px;\n  cursor: pointer;\n  white-space: nowrap;\n}\n.error {\n  color: var(--sa-danger);\n  font-size: 14px;\n}\n.actions {\n  display: flex;\n  justify-content: flex-end;\n  gap: var(--sa-space-2);\n  margin-top: var(--sa-space-3);\n}\nbutton.primary {\n  padding: 10px 18px;\n  border: none;\n  border-radius: var(--sa-radius-sm);\n  background: var(--sa-gradient);\n  color: #fff;\n  font: inherit;\n  font-weight: 700;\n  cursor: pointer;\n  box-shadow: var(--sa-shadow-md);\n  transition: transform 0.15s ease, box-shadow 0.15s ease;\n}\nbutton.primary:hover:not(:disabled) {\n  transform: translateY(-1px);\n  box-shadow: var(--sa-shadow-lg);\n}\nbutton.primary:disabled {\n  opacity: 0.6;\n  transform: none;\n}\nbutton.ghost {\n  padding: 10px 16px;\n  border: 1px solid var(--sa-border);\n  border-radius: var(--sa-radius-sm);\n  background: var(--sa-surface);\n  color: var(--sa-text);\n  font: inherit;\n  cursor: pointer;\n  transition: border-color 0.15s ease, background 0.15s ease;\n}\nbutton.ghost:hover:not(:disabled) {\n  border-color: var(--sa-primary);\n  background: color-mix(in srgb, var(--sa-primary) 5%, var(--sa-surface));\n}\nbutton.ghost:disabled {\n  opacity: 0.5;\n  cursor: default;\n}\n/*# sourceMappingURL=sheet-builder.component.css.map */\n"] }]
  }], () => [{ type: ActivatedRoute }, { type: Router }, { type: DataService }, { type: ExerciseLibraryService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SheetBuilderComponent, { className: "SheetBuilderComponent", filePath: "src/app/features/sheets/sheet-builder/sheet-builder.component.ts", lineNumber: 33 });
})();
export {
  SheetBuilderComponent
};
//# sourceMappingURL=chunk-MOVQQCM5.js.map
