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
} from "./chunk-L6TH5YE7.js";
import {
  ExerciseLibraryService,
  MUSCLE_GROUPS,
  exerciseDisplayName,
  exerciseImageUrl
} from "./chunk-3ESUTDCY.js";
import {
  DataService
} from "./chunk-TTYTNCN5.js";
import {
  it
} from "./chunk-XOIFB2E7.js";
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
} from "./chunk-BQNJQGMQ.js";

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
function SheetBuilderComponent_Conditional_3_For_11_For_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label", 20)(1, "input", 21);
    \u0275\u0275listener("change", function SheetBuilderComponent_Conditional_3_For_11_For_7_Template_input_change_1_listener() {
      const ctx_r6 = \u0275\u0275restoreView(_r6);
      const mg_r8 = ctx_r6.$implicit;
      const $index_r9 = ctx_r6.$index;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.toggleMuscleGroup($index_r9, mg_r8.value));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const mg_r8 = ctx.$implicit;
    const day_r10 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275classProp("active", day_r10.muscleGroups.includes(mg_r8.value));
    \u0275\u0275advance();
    \u0275\u0275property("checked", day_r10.muscleGroups.includes(mg_r8.value));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", mg_r8.label, " ");
  }
}
function SheetBuilderComponent_Conditional_3_For_11_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 17);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.t.noMuscleGroupsYet);
  }
}
function SheetBuilderComponent_Conditional_3_For_11_Conditional_9_For_4_For_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 28);
  }
  if (rf & 2) {
    const img_r16 = ctx.$implicit;
    const ex_r14 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275property("src", ctx_r1.exerciseImageUrl(img_r16), \u0275\u0275sanitizeUrl)("alt", ex_r14.name);
  }
}
function SheetBuilderComponent_Conditional_3_For_11_Conditional_9_For_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 26);
    \u0275\u0275listener("click", function SheetBuilderComponent_Conditional_3_For_11_Conditional_9_For_4_Template_li_click_0_listener() {
      const ctx_r12 = \u0275\u0275restoreView(_r12);
      const ex_r14 = ctx_r12.$implicit;
      const $index_r15 = ctx_r12.$index;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.addExercise($index_r15, ex_r14.id));
    });
    \u0275\u0275elementStart(1, "div", 27);
    \u0275\u0275repeaterCreate(2, SheetBuilderComponent_Conditional_3_For_11_Conditional_9_For_4_For_3_Template, 1, 2, "img", 28, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 29);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 30);
    \u0275\u0275text(7, "+");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ex_r14 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ex_r14.images.slice(0, 2));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.exerciseDisplayName(ex_r14));
  }
}
function SheetBuilderComponent_Conditional_3_For_11_Conditional_9_ForEmpty_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 25);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.t.noExercisesMatch);
  }
}
function SheetBuilderComponent_Conditional_3_For_11_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 18)(1, "input", 22);
    \u0275\u0275listener("ngModelChange", function SheetBuilderComponent_Conditional_3_For_11_Conditional_9_Template_input_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r11);
      const $index_r5 = \u0275\u0275nextContext().$index;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.setFilterText($index_r5, $event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "ul", 23);
    \u0275\u0275repeaterCreate(3, SheetBuilderComponent_Conditional_3_For_11_Conditional_9_For_4_Template, 8, 1, "li", 24, _forTrack1, false, SheetBuilderComponent_Conditional_3_For_11_Conditional_9_ForEmpty_5_Template, 2, 1, "li", 25);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const day_r10 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("placeholder", ctx_r1.t.chooseExercise)("ngModel", day_r10.filterText);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.pickableExercises(day_r10));
  }
}
function SheetBuilderComponent_Conditional_3_For_11_Conditional_10_For_2_Conditional_1_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 28);
  }
  if (rf & 2) {
    const img_r18 = ctx.$implicit;
    const ex_r19 = \u0275\u0275nextContext();
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275property("src", ctx_r1.exerciseImageUrl(img_r18), \u0275\u0275sanitizeUrl)("alt", ex_r19.name);
  }
}
function SheetBuilderComponent_Conditional_3_For_11_Conditional_10_For_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 27);
    \u0275\u0275repeaterCreate(1, SheetBuilderComponent_Conditional_3_For_11_Conditional_10_For_2_Conditional_1_For_2_Template, 1, 2, "img", 28, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 32)(4, "span", 33);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 34)(7, "label");
    \u0275\u0275text(8);
    \u0275\u0275elementStart(9, "input", 35);
    \u0275\u0275twoWayListener("ngModelChange", function SheetBuilderComponent_Conditional_3_For_11_Conditional_10_For_2_Conditional_1_Template_input_ngModelChange_9_listener($event) {
      \u0275\u0275restoreView(_r17);
      const entry_r20 = \u0275\u0275nextContext().$implicit;
      \u0275\u0275twoWayBindingSet(entry_r20.sets, $event) || (entry_r20.sets = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "label");
    \u0275\u0275text(11);
    \u0275\u0275elementStart(12, "input", 36);
    \u0275\u0275twoWayListener("ngModelChange", function SheetBuilderComponent_Conditional_3_For_11_Conditional_10_For_2_Conditional_1_Template_input_ngModelChange_12_listener($event) {
      \u0275\u0275restoreView(_r17);
      const entry_r20 = \u0275\u0275nextContext().$implicit;
      \u0275\u0275twoWayBindingSet(entry_r20.reps, $event) || (entry_r20.reps = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "label");
    \u0275\u0275text(14);
    \u0275\u0275elementStart(15, "input", 36);
    \u0275\u0275twoWayListener("ngModelChange", function SheetBuilderComponent_Conditional_3_For_11_Conditional_10_For_2_Conditional_1_Template_input_ngModelChange_15_listener($event) {
      \u0275\u0275restoreView(_r17);
      const entry_r20 = \u0275\u0275nextContext().$implicit;
      \u0275\u0275twoWayBindingSet(entry_r20.rest, $event) || (entry_r20.rest = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "label", 37);
    \u0275\u0275text(17);
    \u0275\u0275elementStart(18, "input", 36);
    \u0275\u0275twoWayListener("ngModelChange", function SheetBuilderComponent_Conditional_3_For_11_Conditional_10_For_2_Conditional_1_Template_input_ngModelChange_18_listener($event) {
      \u0275\u0275restoreView(_r17);
      const entry_r20 = \u0275\u0275nextContext().$implicit;
      \u0275\u0275twoWayBindingSet(entry_r20.notes, $event) || (entry_r20.notes = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(19, "button", 38);
    \u0275\u0275listener("click", function SheetBuilderComponent_Conditional_3_For_11_Conditional_10_For_2_Conditional_1_Template_button_click_19_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r20 = \u0275\u0275nextContext();
      const entry_r20 = ctx_r20.$implicit;
      const $index_r22 = ctx_r20.$index;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.removeExercise($index_r22, entry_r20.exerciseId));
    });
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ex_r19 = ctx;
    const entry_r20 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275repeater(ex_r19.images.slice(0, 2));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.exerciseDisplayName(ex_r19));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.t.sets, " ");
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", entry_r20.sets);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.t.reps, " ");
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", entry_r20.reps);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.t.rest, " ");
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", entry_r20.rest);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.t.notes, " ");
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", entry_r20.notes);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.t.removeExercise);
  }
}
function SheetBuilderComponent_Conditional_3_For_11_Conditional_10_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 31);
    \u0275\u0275template(1, SheetBuilderComponent_Conditional_3_For_11_Conditional_10_For_2_Conditional_1_Template, 21, 10);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_22_0;
    const entry_r20 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_22_0 = ctx_r1.exerciseOf(entry_r20.exerciseId)) ? 1 : -1, tmp_22_0);
  }
}
function SheetBuilderComponent_Conditional_3_For_11_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 19);
    \u0275\u0275repeaterCreate(1, SheetBuilderComponent_Conditional_3_For_11_Conditional_10_For_2_Template, 2, 1, "li", 31, _forTrack2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const day_r10 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275repeater(day_r10.exercises);
  }
}
function SheetBuilderComponent_Conditional_3_For_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section", 7)(1, "input", 12);
    \u0275\u0275listener("ngModelChange", function SheetBuilderComponent_Conditional_3_For_11_Template_input_ngModelChange_1_listener($event) {
      const $index_r5 = \u0275\u0275restoreView(_r4).$index;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.updateDayLabel($index_r5, $event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 13)(3, "span", 14);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 15);
    \u0275\u0275repeaterCreate(6, SheetBuilderComponent_Conditional_3_For_11_For_7_Template, 3, 4, "label", 16, _forTrack0);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(8, SheetBuilderComponent_Conditional_3_For_11_Conditional_8_Template, 2, 1, "p", 17)(9, SheetBuilderComponent_Conditional_3_For_11_Conditional_9_Template, 6, 3, "div", 18)(10, SheetBuilderComponent_Conditional_3_For_11_Conditional_10_Template, 3, 0, "ul", 19);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const day_r10 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("placeholder", ctx_r1.t.dayLabelPlaceholder)("ngModel", day_r10.label);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.t.muscleGroups);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.muscleGroups);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(day_r10.muscleGroups.length === 0 ? 8 : 9);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(day_r10.exercises.length > 0 ? 10 : -1);
  }
}
function SheetBuilderComponent_Conditional_3_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 8);
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
    \u0275\u0275repeaterCreate(10, SheetBuilderComponent_Conditional_3_For_11_Template, 11, 5, "section", 7, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275template(12, SheetBuilderComponent_Conditional_3_Conditional_12_Template, 2, 1, "p", 8);
    \u0275\u0275elementStart(13, "div", 9)(14, "button", 10);
    \u0275\u0275listener("click", function SheetBuilderComponent_Conditional_3_Template_button_click_14_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.cancel());
    });
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "button", 11);
    \u0275\u0275listener("click", function SheetBuilderComponent_Conditional_3_Template_button_click_16_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.save());
    });
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
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
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.days());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.errorMessage() ? 12 : -1);
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
  dayCountOptions = [1, 2, 3, 4, 5, 6, 7];
  exerciseImageUrl = exerciseImageUrl;
  exerciseDisplayName = exerciseDisplayName;
  title = signal("");
  days = signal([]);
  saving = signal(false);
  loading = signal(true);
  errorMessage = signal(null);
  isEdit = signal(false);
  clientId = "";
  sheetId = null;
  exerciseById = /* @__PURE__ */ new Map();
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
  }
  toggleMuscleGroup(dayIndex, group) {
    this.days.update((days) => {
      const day = days[dayIndex];
      const has = day.muscleGroups.includes(group);
      const muscleGroups = has ? day.muscleGroups.filter((g) => g !== group) : [...day.muscleGroups, group];
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
      const entry = { exerciseId, sets: 3, reps: "10", rest: "60s", notes: "" };
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
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SheetBuilderComponent, selectors: [["app-sheet-builder"]], decls: 4, vars: 2, consts: [[1, "page"], ["type", "button", 1, "back", 3, "click"], [1, "sheet-title"], ["type", "text", 3, "ngModelChange", "placeholder", "ngModel"], [1, "days-count"], [3, "ngModelChange", "ngModel"], [3, "value"], [1, "day-card"], [1, "error"], [1, "actions"], ["type", "button", 1, "ghost", 3, "click"], ["type", "button", 1, "primary", 3, "click", "disabled"], ["type", "text", 1, "day-label", 3, "ngModelChange", "placeholder", "ngModel"], [1, "muscle-groups"], [1, "mg-title"], [1, "mg-chips"], [1, "chip", 3, "active"], [1, "hint"], [1, "picker"], [1, "exercise-list"], [1, "chip"], ["type", "checkbox", 3, "change", "checked"], ["type", "search", 1, "picker-filter", 3, "ngModelChange", "placeholder", "ngModel"], [1, "picker-list"], [1, "picker-item"], [1, "picker-empty"], [1, "picker-item", 3, "click"], [1, "thumbs"], ["loading", "lazy", 3, "src", "alt"], [1, "picker-item-name"], [1, "picker-item-add"], [1, "exercise-row"], [1, "exercise-fields"], [1, "exercise-name"], [1, "fields-row"], ["type", "number", "min", "1", 3, "ngModelChange", "ngModel"], ["type", "text", 3, "ngModelChange", "ngModel"], [1, "notes-field"], ["type", "button", 1, "remove", 3, "click"]], template: function SheetBuilderComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "button", 1);
      \u0275\u0275listener("click", function SheetBuilderComponent_Template_button_click_1_listener() {
        return ctx.cancel();
      });
      \u0275\u0275text(2);
      \u0275\u0275elementEnd();
      \u0275\u0275template(3, SheetBuilderComponent_Conditional_3_Template, 18, 10);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1("\u2190 ", ctx.t.cancel, "");
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.loading() ? 3 : -1);
    }
  }, dependencies: [CommonModule, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, MinValidator, NgModel], styles: ["\n\n.page[_ngcontent-%COMP%] {\n  max-width: 760px;\n  margin: 0 auto;\n  padding: var(--sa-space-4) var(--sa-space-3) var(--sa-space-5);\n}\n.back[_ngcontent-%COMP%] {\n  border: none;\n  background: none;\n  color: var(--sa-text-muted);\n  font: inherit;\n  font-size: 14px;\n  cursor: pointer;\n  padding: 0;\n  margin-bottom: var(--sa-space-3);\n}\n.back[_ngcontent-%COMP%]:hover {\n  color: var(--sa-primary);\n}\nh1[_ngcontent-%COMP%] {\n  font-size: 20px;\n  margin: 0 0 var(--sa-space-3);\n}\nlabel[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  font-size: 13px;\n  color: var(--sa-text-muted);\n}\ninput[_ngcontent-%COMP%], \nselect[_ngcontent-%COMP%] {\n  font: inherit;\n  padding: 8px 10px;\n  border: 1px solid var(--sa-border);\n  border-radius: var(--sa-radius-sm);\n  color: var(--sa-text);\n  background: var(--sa-surface);\n}\n.sheet-title[_ngcontent-%COMP%], \n.days-count[_ngcontent-%COMP%] {\n  margin-bottom: var(--sa-space-3);\n  max-width: 320px;\n}\n.day-card[_ngcontent-%COMP%] {\n  background: var(--sa-surface);\n  border: 1px solid var(--sa-border);\n  border-radius: var(--sa-radius-md);\n  padding: var(--sa-space-3);\n  margin-bottom: var(--sa-space-3);\n  display: flex;\n  flex-direction: column;\n  gap: var(--sa-space-2);\n}\n.day-label[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 15px;\n  border: none;\n  border-bottom: 1px solid var(--sa-border);\n  border-radius: 0;\n  padding: 4px 0;\n}\n.mg-title[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 13px;\n  color: var(--sa-text-muted);\n  margin-bottom: 6px;\n}\n.mg-chips[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px;\n}\n.chip[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  padding: 6px 10px;\n  border: 1px solid var(--sa-border);\n  border-radius: 999px;\n  font-size: 12px;\n  color: var(--sa-text);\n  cursor: pointer;\n}\n.chip[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  width: auto;\n}\n.chip.active[_ngcontent-%COMP%] {\n  background: color-mix(in srgb, var(--sa-primary) 12%, transparent);\n  border-color: var(--sa-primary);\n  color: var(--sa-primary-dark);\n}\n.hint[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: var(--sa-text-muted);\n  margin: 0;\n}\n.picker[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: var(--sa-space-2);\n}\n.picker-filter[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.picker-list[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  max-height: 280px;\n  overflow-y: auto;\n  border: 1px solid var(--sa-border);\n  border-radius: var(--sa-radius-sm);\n  padding: 4px;\n}\n.picker-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--sa-space-2);\n  padding: 6px;\n  border-radius: var(--sa-radius-sm);\n  cursor: pointer;\n}\n.picker-item[_ngcontent-%COMP%]:hover {\n  background: color-mix(in srgb, var(--sa-primary) 8%, transparent);\n}\n.picker-item[_ngcontent-%COMP%]   .thumbs[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 2px;\n  flex-shrink: 0;\n}\n.picker-item[_ngcontent-%COMP%]   .thumbs[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  object-fit: cover;\n  border-radius: 4px;\n  background: var(--sa-bg);\n}\n.picker-item[_ngcontent-%COMP%]   .picker-item-name[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n  font-size: 13px;\n}\n.picker-item[_ngcontent-%COMP%]   .picker-item-add[_ngcontent-%COMP%] {\n  color: var(--sa-primary);\n  font-weight: 700;\n  font-size: 16px;\n  padding: 0 6px;\n}\n.picker-empty[_ngcontent-%COMP%] {\n  padding: var(--sa-space-2);\n  font-size: 13px;\n  color: var(--sa-text-muted);\n  text-align: center;\n}\n.exercise-list[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  display: flex;\n  flex-direction: column;\n  gap: var(--sa-space-2);\n}\n.exercise-row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: var(--sa-space-2);\n  align-items: flex-start;\n  border: 1px solid var(--sa-border);\n  border-radius: var(--sa-radius-sm);\n  padding: var(--sa-space-2);\n}\n.thumbs[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 4px;\n  flex-shrink: 0;\n}\n.thumbs[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 56px;\n  height: 56px;\n  object-fit: cover;\n  border-radius: 6px;\n  background: var(--sa-bg);\n}\n.exercise-fields[_ngcontent-%COMP%] {\n  flex: 1 1 220px;\n  min-width: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.exercise-fields[_ngcontent-%COMP%]   .exercise-name[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 14px;\n}\n.exercise-fields[_ngcontent-%COMP%]   .fields-row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: var(--sa-space-2);\n}\n.exercise-fields[_ngcontent-%COMP%]   .fields-row[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  flex: 1 1 80px;\n  min-width: 0;\n}\n.exercise-fields[_ngcontent-%COMP%]   .fields-row[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  min-width: 0;\n  padding: 6px 8px;\n}\n.exercise-fields[_ngcontent-%COMP%]   .notes-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  min-width: 0;\n  padding: 6px 8px;\n}\n.remove[_ngcontent-%COMP%] {\n  border: none;\n  background: none;\n  color: var(--sa-danger);\n  font-size: 12px;\n  cursor: pointer;\n  white-space: nowrap;\n}\n.error[_ngcontent-%COMP%] {\n  color: var(--sa-danger);\n  font-size: 14px;\n}\n.actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: var(--sa-space-2);\n  margin-top: var(--sa-space-3);\n}\nbutton.primary[_ngcontent-%COMP%] {\n  padding: 10px 18px;\n  border: none;\n  border-radius: var(--sa-radius-sm);\n  background: var(--sa-primary);\n  color: #fff;\n  font: inherit;\n  font-weight: 600;\n  cursor: pointer;\n}\nbutton.primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: var(--sa-primary-dark);\n}\nbutton.primary[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n}\nbutton.ghost[_ngcontent-%COMP%] {\n  padding: 10px 16px;\n  border: 1px solid var(--sa-border);\n  border-radius: var(--sa-radius-sm);\n  background: transparent;\n  color: var(--sa-text);\n  font: inherit;\n  cursor: pointer;\n}\n/*# sourceMappingURL=sheet-builder.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SheetBuilderComponent, [{
    type: Component,
    args: [{ selector: "app-sheet-builder", standalone: true, imports: [CommonModule, FormsModule], template: '<div class="page">\n  <button type="button" class="back" (click)="cancel()">&larr; {{ t.cancel }}</button>\n\n  @if (!loading()) {\n    <h1>{{ isEdit() ? t.titleEdit : t.titleNew }}</h1>\n\n    <label class="sheet-title">\n      {{ t.sheetTitle }}\n      <input type="text" [placeholder]="t.sheetTitlePlaceholder" [ngModel]="title()" (ngModelChange)="title.set($event)" />\n    </label>\n\n    <label class="days-count">\n      {{ t.daysCount }}\n      <select [ngModel]="daysCount" (ngModelChange)="onDaysCountChange($event)">\n        @for (n of dayCountOptions; track n) {\n          <option [value]="n">{{ n }}</option>\n        }\n      </select>\n    </label>\n\n    @for (day of days(); track $index) {\n      <section class="day-card">\n        <input type="text" class="day-label" [placeholder]="t.dayLabelPlaceholder" [ngModel]="day.label" (ngModelChange)="updateDayLabel($index, $event)" />\n\n        <div class="muscle-groups">\n          <span class="mg-title">{{ t.muscleGroups }}</span>\n          <div class="mg-chips">\n            @for (mg of muscleGroups; track mg.value) {\n              <label class="chip" [class.active]="day.muscleGroups.includes(mg.value)">\n                <input type="checkbox" [checked]="day.muscleGroups.includes(mg.value)" (change)="toggleMuscleGroup($index, mg.value)" />\n                {{ mg.label }}\n              </label>\n            }\n          </div>\n        </div>\n\n        @if (day.muscleGroups.length === 0) {\n          <p class="hint">{{ t.noMuscleGroupsYet }}</p>\n        } @else {\n          <div class="picker">\n            <input\n              type="search"\n              class="picker-filter"\n              [placeholder]="t.chooseExercise"\n              [ngModel]="day.filterText"\n              (ngModelChange)="setFilterText($index, $event)"\n            />\n            <ul class="picker-list">\n              @for (ex of pickableExercises(day); track ex.id) {\n                <li class="picker-item" (click)="addExercise($index, ex.id)">\n                  <div class="thumbs">\n                    @for (img of ex.images.slice(0, 2); track img) {\n                      <img [src]="exerciseImageUrl(img)" [alt]="ex.name" loading="lazy" />\n                    }\n                  </div>\n                  <span class="picker-item-name">{{ exerciseDisplayName(ex) }}</span>\n                  <span class="picker-item-add">+</span>\n                </li>\n              } @empty {\n                <li class="picker-empty">{{ t.noExercisesMatch }}</li>\n              }\n            </ul>\n          </div>\n        }\n\n        @if (day.exercises.length > 0) {\n          <ul class="exercise-list">\n            @for (entry of day.exercises; track entry.exerciseId) {\n              <li class="exercise-row">\n                @if (exerciseOf(entry.exerciseId); as ex) {\n                  <div class="thumbs">\n                    @for (img of ex.images.slice(0, 2); track img) {\n                      <img [src]="exerciseImageUrl(img)" [alt]="ex.name" loading="lazy" />\n                    }\n                  </div>\n                  <div class="exercise-fields">\n                    <span class="exercise-name">{{ exerciseDisplayName(ex) }}</span>\n                    <div class="fields-row">\n                      <label>\n                        {{ t.sets }}\n                        <input type="number" min="1" [(ngModel)]="entry.sets" />\n                      </label>\n                      <label>\n                        {{ t.reps }}\n                        <input type="text" [(ngModel)]="entry.reps" />\n                      </label>\n                      <label>\n                        {{ t.rest }}\n                        <input type="text" [(ngModel)]="entry.rest" />\n                      </label>\n                    </div>\n                    <label class="notes-field">\n                      {{ t.notes }}\n                      <input type="text" [(ngModel)]="entry.notes" />\n                    </label>\n                  </div>\n                  <button type="button" class="remove" (click)="removeExercise($index, entry.exerciseId)">{{ t.removeExercise }}</button>\n                }\n              </li>\n            }\n          </ul>\n        }\n      </section>\n    }\n\n    @if (errorMessage()) {\n      <p class="error">{{ errorMessage() }}</p>\n    }\n\n    <div class="actions">\n      <button type="button" class="ghost" (click)="cancel()">{{ t.cancel }}</button>\n      <button type="button" class="primary" [disabled]="saving()" (click)="save()">\n        {{ saving() ? t.saving : t.save }}\n      </button>\n    </div>\n  }\n</div>\n', styles: ["/* src/app/features/sheets/sheet-builder/sheet-builder.component.scss */\n.page {\n  max-width: 760px;\n  margin: 0 auto;\n  padding: var(--sa-space-4) var(--sa-space-3) var(--sa-space-5);\n}\n.back {\n  border: none;\n  background: none;\n  color: var(--sa-text-muted);\n  font: inherit;\n  font-size: 14px;\n  cursor: pointer;\n  padding: 0;\n  margin-bottom: var(--sa-space-3);\n}\n.back:hover {\n  color: var(--sa-primary);\n}\nh1 {\n  font-size: 20px;\n  margin: 0 0 var(--sa-space-3);\n}\nlabel {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  font-size: 13px;\n  color: var(--sa-text-muted);\n}\ninput,\nselect {\n  font: inherit;\n  padding: 8px 10px;\n  border: 1px solid var(--sa-border);\n  border-radius: var(--sa-radius-sm);\n  color: var(--sa-text);\n  background: var(--sa-surface);\n}\n.sheet-title,\n.days-count {\n  margin-bottom: var(--sa-space-3);\n  max-width: 320px;\n}\n.day-card {\n  background: var(--sa-surface);\n  border: 1px solid var(--sa-border);\n  border-radius: var(--sa-radius-md);\n  padding: var(--sa-space-3);\n  margin-bottom: var(--sa-space-3);\n  display: flex;\n  flex-direction: column;\n  gap: var(--sa-space-2);\n}\n.day-label {\n  font-weight: 600;\n  font-size: 15px;\n  border: none;\n  border-bottom: 1px solid var(--sa-border);\n  border-radius: 0;\n  padding: 4px 0;\n}\n.mg-title {\n  display: block;\n  font-size: 13px;\n  color: var(--sa-text-muted);\n  margin-bottom: 6px;\n}\n.mg-chips {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px;\n}\n.chip {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  padding: 6px 10px;\n  border: 1px solid var(--sa-border);\n  border-radius: 999px;\n  font-size: 12px;\n  color: var(--sa-text);\n  cursor: pointer;\n}\n.chip input {\n  margin: 0;\n  padding: 0;\n  width: auto;\n}\n.chip.active {\n  background: color-mix(in srgb, var(--sa-primary) 12%, transparent);\n  border-color: var(--sa-primary);\n  color: var(--sa-primary-dark);\n}\n.hint {\n  font-size: 13px;\n  color: var(--sa-text-muted);\n  margin: 0;\n}\n.picker {\n  display: flex;\n  flex-direction: column;\n  gap: var(--sa-space-2);\n}\n.picker-filter {\n  width: 100%;\n}\n.picker-list {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  max-height: 280px;\n  overflow-y: auto;\n  border: 1px solid var(--sa-border);\n  border-radius: var(--sa-radius-sm);\n  padding: 4px;\n}\n.picker-item {\n  display: flex;\n  align-items: center;\n  gap: var(--sa-space-2);\n  padding: 6px;\n  border-radius: var(--sa-radius-sm);\n  cursor: pointer;\n}\n.picker-item:hover {\n  background: color-mix(in srgb, var(--sa-primary) 8%, transparent);\n}\n.picker-item .thumbs {\n  display: flex;\n  gap: 2px;\n  flex-shrink: 0;\n}\n.picker-item .thumbs img {\n  width: 36px;\n  height: 36px;\n  object-fit: cover;\n  border-radius: 4px;\n  background: var(--sa-bg);\n}\n.picker-item .picker-item-name {\n  flex: 1;\n  min-width: 0;\n  font-size: 13px;\n}\n.picker-item .picker-item-add {\n  color: var(--sa-primary);\n  font-weight: 700;\n  font-size: 16px;\n  padding: 0 6px;\n}\n.picker-empty {\n  padding: var(--sa-space-2);\n  font-size: 13px;\n  color: var(--sa-text-muted);\n  text-align: center;\n}\n.exercise-list {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  display: flex;\n  flex-direction: column;\n  gap: var(--sa-space-2);\n}\n.exercise-row {\n  display: flex;\n  flex-wrap: wrap;\n  gap: var(--sa-space-2);\n  align-items: flex-start;\n  border: 1px solid var(--sa-border);\n  border-radius: var(--sa-radius-sm);\n  padding: var(--sa-space-2);\n}\n.thumbs {\n  display: flex;\n  gap: 4px;\n  flex-shrink: 0;\n}\n.thumbs img {\n  width: 56px;\n  height: 56px;\n  object-fit: cover;\n  border-radius: 6px;\n  background: var(--sa-bg);\n}\n.exercise-fields {\n  flex: 1 1 220px;\n  min-width: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.exercise-fields .exercise-name {\n  font-weight: 600;\n  font-size: 14px;\n}\n.exercise-fields .fields-row {\n  display: flex;\n  flex-wrap: wrap;\n  gap: var(--sa-space-2);\n}\n.exercise-fields .fields-row label {\n  flex: 1 1 80px;\n  min-width: 0;\n}\n.exercise-fields .fields-row input {\n  width: 100%;\n  min-width: 0;\n  padding: 6px 8px;\n}\n.exercise-fields .notes-field input {\n  width: 100%;\n  min-width: 0;\n  padding: 6px 8px;\n}\n.remove {\n  border: none;\n  background: none;\n  color: var(--sa-danger);\n  font-size: 12px;\n  cursor: pointer;\n  white-space: nowrap;\n}\n.error {\n  color: var(--sa-danger);\n  font-size: 14px;\n}\n.actions {\n  display: flex;\n  justify-content: flex-end;\n  gap: var(--sa-space-2);\n  margin-top: var(--sa-space-3);\n}\nbutton.primary {\n  padding: 10px 18px;\n  border: none;\n  border-radius: var(--sa-radius-sm);\n  background: var(--sa-primary);\n  color: #fff;\n  font: inherit;\n  font-weight: 600;\n  cursor: pointer;\n}\nbutton.primary:hover:not(:disabled) {\n  background: var(--sa-primary-dark);\n}\nbutton.primary:disabled {\n  opacity: 0.6;\n}\nbutton.ghost {\n  padding: 10px 16px;\n  border: 1px solid var(--sa-border);\n  border-radius: var(--sa-radius-sm);\n  background: transparent;\n  color: var(--sa-text);\n  font: inherit;\n  cursor: pointer;\n}\n/*# sourceMappingURL=sheet-builder.component.css.map */\n"] }]
  }], () => [{ type: ActivatedRoute }, { type: Router }, { type: DataService }, { type: ExerciseLibraryService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SheetBuilderComponent, { className: "SheetBuilderComponent", filePath: "src/app/features/sheets/sheet-builder/sheet-builder.component.ts", lineNumber: 26 });
})();
export {
  SheetBuilderComponent
};
//# sourceMappingURL=chunk-5HYJG4A7.js.map
