import {
  PdfExportService
} from "./chunk-4EATHVOT.js";
import {
  ExerciseLibraryService,
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
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
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
  ɵɵtextInterpolate2,
  ɵɵtextInterpolate3
} from "./chunk-BQNJQGMQ.js";

// src/app/features/sheets/sheet-view/sheet-view.component.ts
var _forTrack0 = ($index, $item) => $item.exerciseId;
function SheetViewComponent_Conditional_3_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 3);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r2 = ctx;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", c_r2.first_name, " ", c_r2.last_name, "");
  }
}
function SheetViewComponent_Conditional_3_For_13_For_5_Conditional_0_For_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 12);
  }
  if (rf & 2) {
    const img_r4 = ctx.$implicit;
    const ex_r5 = \u0275\u0275nextContext();
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275property("src", ctx_r2.exerciseImageUrl(img_r4), \u0275\u0275sanitizeUrl)("alt", ex_r5.name);
  }
}
function SheetViewComponent_Conditional_3_For_13_For_5_Conditional_0_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 16);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const entry_r6 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(entry_r6.notes);
  }
}
function SheetViewComponent_Conditional_3_For_13_For_5_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 10)(1, "div", 11);
    \u0275\u0275repeaterCreate(2, SheetViewComponent_Conditional_3_For_13_For_5_Conditional_0_For_3_Template, 1, 2, "img", 12, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 13)(5, "span", 14);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 15);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275template(9, SheetViewComponent_Conditional_3_For_13_For_5_Conditional_0_Conditional_9_Template, 2, 1, "span", 16);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ex_r5 = ctx;
    const entry_r6 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ex_r5.images.slice(0, 2));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r2.exerciseDisplayName(ex_r5));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate3("Serie ", entry_r6.sets, " \xB7 Rip ", entry_r6.reps, " \xB7 Recupero ", entry_r6.rest, "");
    \u0275\u0275advance();
    \u0275\u0275conditional(entry_r6.notes ? 9 : -1);
  }
}
function SheetViewComponent_Conditional_3_For_13_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, SheetViewComponent_Conditional_3_For_13_For_5_Conditional_0_Template, 10, 5, "li", 10);
  }
  if (rf & 2) {
    let tmp_22_0;
    const entry_r6 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275conditional((tmp_22_0 = ctx_r2.exerciseOf(entry_r6.exerciseId)) ? 0 : -1, tmp_22_0);
  }
}
function SheetViewComponent_Conditional_3_For_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 8)(1, "h2");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "ul", 9);
    \u0275\u0275repeaterCreate(4, SheetViewComponent_Conditional_3_For_13_For_5_Template, 1, 1, null, null, _forTrack0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const day_r7 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(day_r7.label);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(day_r7.exercises);
  }
}
function SheetViewComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "header", 2)(1, "div")(2, "h1");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, SheetViewComponent_Conditional_3_Conditional_4_Template, 2, 2, "p", 3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 4)(6, "button", 5);
    \u0275\u0275listener("click", function SheetViewComponent_Conditional_3_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.editSheet());
    });
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "button", 6);
    \u0275\u0275listener("click", function SheetViewComponent_Conditional_3_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.downloadSheet());
    });
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "button", 7);
    \u0275\u0275listener("click", function SheetViewComponent_Conditional_3_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.deleteSheet());
    });
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()()();
    \u0275\u0275repeaterCreate(12, SheetViewComponent_Conditional_3_For_13_Template, 6, 1, "section", 8, \u0275\u0275repeaterTrackByIndex);
  }
  if (rf & 2) {
    let tmp_3_0;
    const s_r8 = ctx;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(s_r8.title);
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_3_0 = ctx_r2.client()) ? 4 : -1, tmp_3_0);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.t.edit);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r2.downloading());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.t.download);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.t.delete);
    \u0275\u0275advance();
    \u0275\u0275repeater(s_r8.days);
  }
}
var SheetViewComponent = class _SheetViewComponent {
  route;
  router;
  data;
  exerciseLibrary;
  pdfExport;
  t = it.clientDetail;
  exerciseImageUrl = exerciseImageUrl;
  exerciseDisplayName = exerciseDisplayName;
  client = signal(null);
  sheet = signal(null);
  loading = signal(true);
  downloading = signal(false);
  clientId = "";
  sheetId = "";
  exerciseById = /* @__PURE__ */ new Map();
  constructor(route, router, data, exerciseLibrary, pdfExport) {
    this.route = route;
    this.router = router;
    this.data = data;
    this.exerciseLibrary = exerciseLibrary;
    this.pdfExport = pdfExport;
    this.clientId = this.route.snapshot.paramMap.get("id") ?? "";
    this.sheetId = this.route.snapshot.paramMap.get("sheetId") ?? "";
    this.init();
  }
  init() {
    return __async(this, null, function* () {
      const all = yield this.exerciseLibrary.listAll();
      this.exerciseById = new Map(all.map((e) => [e.id, e]));
      const [client, sheet] = yield Promise.all([this.data.getClient(this.clientId), this.data.getSheet(this.sheetId)]);
      this.client.set(client);
      this.sheet.set(sheet);
      this.loading.set(false);
    });
  }
  exerciseOf(id) {
    return this.exerciseById.get(id);
  }
  back() {
    this.router.navigate(["/clienti", this.clientId]);
  }
  editSheet() {
    this.router.navigate(["/clienti", this.clientId, "schede", this.sheetId, "modifica"]);
  }
  deleteSheet() {
    return __async(this, null, function* () {
      if (!confirm(this.t.deleteConfirm)) {
        return;
      }
      yield this.data.deleteSheet(this.sheetId);
      this.back();
    });
  }
  downloadSheet() {
    return __async(this, null, function* () {
      const client = this.client();
      const sheet = this.sheet();
      if (!client || !sheet) {
        return;
      }
      this.downloading.set(true);
      yield this.pdfExport.downloadSheet(client, sheet, this.exerciseById);
      this.downloading.set(false);
    });
  }
  static \u0275fac = function SheetViewComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SheetViewComponent)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(DataService), \u0275\u0275directiveInject(ExerciseLibraryService), \u0275\u0275directiveInject(PdfExportService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SheetViewComponent, selectors: [["app-sheet-view"]], decls: 4, vars: 2, consts: [[1, "page"], ["type", "button", 1, "back", 3, "click"], [1, "sheet-header"], [1, "client-name"], [1, "actions"], ["type", "button", 1, "ghost", 3, "click"], ["type", "button", 1, "ghost", 3, "click", "disabled"], ["type", "button", 1, "danger", 3, "click"], [1, "day-card"], [1, "exercise-list"], [1, "exercise-row"], [1, "thumbs"], ["loading", "lazy", 3, "src", "alt"], [1, "exercise-info"], [1, "exercise-name"], [1, "exercise-meta"], [1, "exercise-notes"]], template: function SheetViewComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "button", 1);
      \u0275\u0275listener("click", function SheetViewComponent_Template_button_click_1_listener() {
        return ctx.back();
      });
      \u0275\u0275text(2);
      \u0275\u0275elementEnd();
      \u0275\u0275template(3, SheetViewComponent_Conditional_3_Template, 14, 6);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      let tmp_1_0;
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1("\u2190 ", ctx.t.back, "");
      \u0275\u0275advance();
      \u0275\u0275conditional((tmp_1_0 = !ctx.loading() && ctx.sheet()) ? 3 : -1, tmp_1_0);
    }
  }, dependencies: [CommonModule], styles: ["\n\n.page[_ngcontent-%COMP%] {\n  max-width: 720px;\n  margin: 0 auto;\n  padding: var(--sa-space-4) var(--sa-space-3) var(--sa-space-5);\n}\n.back[_ngcontent-%COMP%] {\n  border: none;\n  background: none;\n  color: var(--sa-text-muted);\n  font: inherit;\n  font-size: 14px;\n  cursor: pointer;\n  padding: 0;\n  margin-bottom: var(--sa-space-3);\n}\n.back[_ngcontent-%COMP%]:hover {\n  color: var(--sa-primary);\n}\n.sheet-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: var(--sa-space-2);\n  margin-bottom: var(--sa-space-4);\n}\n.sheet-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0 0 4px;\n  font-size: 20px;\n}\n.sheet-header[_ngcontent-%COMP%]   .client-name[_ngcontent-%COMP%] {\n  margin: 0;\n  color: var(--sa-text-muted);\n  font-size: 14px;\n}\n.actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: var(--sa-space-1);\n  flex-wrap: wrap;\n}\n.day-card[_ngcontent-%COMP%] {\n  background: var(--sa-surface);\n  border: 1px solid var(--sa-border);\n  border-radius: var(--sa-radius-md);\n  padding: var(--sa-space-3);\n  margin-bottom: var(--sa-space-3);\n}\n.day-card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0 0 var(--sa-space-2);\n  font-size: 16px;\n}\n.exercise-list[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  display: flex;\n  flex-direction: column;\n  gap: var(--sa-space-2);\n}\n.exercise-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: var(--sa-space-2);\n  align-items: center;\n  border: 1px solid var(--sa-border);\n  border-radius: var(--sa-radius-sm);\n  padding: var(--sa-space-2);\n}\n.thumbs[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 4px;\n  flex-shrink: 0;\n}\n.thumbs[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 56px;\n  height: 56px;\n  object-fit: cover;\n  border-radius: 6px;\n  background: var(--sa-bg);\n}\n.exercise-info[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.exercise-info[_ngcontent-%COMP%]   .exercise-name[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 14px;\n}\n.exercise-info[_ngcontent-%COMP%]   .exercise-meta[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--sa-text-muted);\n}\n.exercise-info[_ngcontent-%COMP%]   .exercise-notes[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--sa-text-muted);\n  font-style: italic;\n}\nbutton.ghost[_ngcontent-%COMP%] {\n  padding: 8px 12px;\n  border: 1px solid var(--sa-border);\n  border-radius: var(--sa-radius-sm);\n  background: transparent;\n  color: var(--sa-text);\n  font: inherit;\n  font-size: 13px;\n  cursor: pointer;\n}\nbutton.ghost[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n}\nbutton.danger[_ngcontent-%COMP%] {\n  padding: 8px 12px;\n  border: 1px solid var(--sa-danger);\n  border-radius: var(--sa-radius-sm);\n  background: transparent;\n  color: var(--sa-danger);\n  font: inherit;\n  font-size: 13px;\n  cursor: pointer;\n}\n/*# sourceMappingURL=sheet-view.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SheetViewComponent, [{
    type: Component,
    args: [{ selector: "app-sheet-view", standalone: true, imports: [CommonModule], template: '<div class="page">\n  <button type="button" class="back" (click)="back()">&larr; {{ t.back }}</button>\n\n  @if (!loading() && sheet(); as s) {\n    <header class="sheet-header">\n      <div>\n        <h1>{{ s.title }}</h1>\n        @if (client(); as c) {\n          <p class="client-name">{{ c.first_name }} {{ c.last_name }}</p>\n        }\n      </div>\n      <div class="actions">\n        <button type="button" class="ghost" (click)="editSheet()">{{ t.edit }}</button>\n        <button type="button" class="ghost" [disabled]="downloading()" (click)="downloadSheet()">{{ t.download }}</button>\n        <button type="button" class="danger" (click)="deleteSheet()">{{ t.delete }}</button>\n      </div>\n    </header>\n\n    @for (day of s.days; track $index) {\n      <section class="day-card">\n        <h2>{{ day.label }}</h2>\n        <ul class="exercise-list">\n          @for (entry of day.exercises; track entry.exerciseId) {\n            @if (exerciseOf(entry.exerciseId); as ex) {\n              <li class="exercise-row">\n                <div class="thumbs">\n                  @for (img of ex.images.slice(0, 2); track img) {\n                    <img [src]="exerciseImageUrl(img)" [alt]="ex.name" loading="lazy" />\n                  }\n                </div>\n                <div class="exercise-info">\n                  <span class="exercise-name">{{ exerciseDisplayName(ex) }}</span>\n                  <span class="exercise-meta">Serie {{ entry.sets }} &middot; Rip {{ entry.reps }} &middot; Recupero {{ entry.rest }}</span>\n                  @if (entry.notes) {\n                    <span class="exercise-notes">{{ entry.notes }}</span>\n                  }\n                </div>\n              </li>\n            }\n          }\n        </ul>\n      </section>\n    }\n  }\n</div>\n', styles: ["/* src/app/features/sheets/sheet-view/sheet-view.component.scss */\n.page {\n  max-width: 720px;\n  margin: 0 auto;\n  padding: var(--sa-space-4) var(--sa-space-3) var(--sa-space-5);\n}\n.back {\n  border: none;\n  background: none;\n  color: var(--sa-text-muted);\n  font: inherit;\n  font-size: 14px;\n  cursor: pointer;\n  padding: 0;\n  margin-bottom: var(--sa-space-3);\n}\n.back:hover {\n  color: var(--sa-primary);\n}\n.sheet-header {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: var(--sa-space-2);\n  margin-bottom: var(--sa-space-4);\n}\n.sheet-header h1 {\n  margin: 0 0 4px;\n  font-size: 20px;\n}\n.sheet-header .client-name {\n  margin: 0;\n  color: var(--sa-text-muted);\n  font-size: 14px;\n}\n.actions {\n  display: flex;\n  gap: var(--sa-space-1);\n  flex-wrap: wrap;\n}\n.day-card {\n  background: var(--sa-surface);\n  border: 1px solid var(--sa-border);\n  border-radius: var(--sa-radius-md);\n  padding: var(--sa-space-3);\n  margin-bottom: var(--sa-space-3);\n}\n.day-card h2 {\n  margin: 0 0 var(--sa-space-2);\n  font-size: 16px;\n}\n.exercise-list {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  display: flex;\n  flex-direction: column;\n  gap: var(--sa-space-2);\n}\n.exercise-row {\n  display: flex;\n  gap: var(--sa-space-2);\n  align-items: center;\n  border: 1px solid var(--sa-border);\n  border-radius: var(--sa-radius-sm);\n  padding: var(--sa-space-2);\n}\n.thumbs {\n  display: flex;\n  gap: 4px;\n  flex-shrink: 0;\n}\n.thumbs img {\n  width: 56px;\n  height: 56px;\n  object-fit: cover;\n  border-radius: 6px;\n  background: var(--sa-bg);\n}\n.exercise-info {\n  flex: 1;\n  min-width: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.exercise-info .exercise-name {\n  font-weight: 600;\n  font-size: 14px;\n}\n.exercise-info .exercise-meta {\n  font-size: 12px;\n  color: var(--sa-text-muted);\n}\n.exercise-info .exercise-notes {\n  font-size: 12px;\n  color: var(--sa-text-muted);\n  font-style: italic;\n}\nbutton.ghost {\n  padding: 8px 12px;\n  border: 1px solid var(--sa-border);\n  border-radius: var(--sa-radius-sm);\n  background: transparent;\n  color: var(--sa-text);\n  font: inherit;\n  font-size: 13px;\n  cursor: pointer;\n}\nbutton.ghost:disabled {\n  opacity: 0.6;\n}\nbutton.danger {\n  padding: 8px 12px;\n  border: 1px solid var(--sa-danger);\n  border-radius: var(--sa-radius-sm);\n  background: transparent;\n  color: var(--sa-danger);\n  font: inherit;\n  font-size: 13px;\n  cursor: pointer;\n}\n/*# sourceMappingURL=sheet-view.component.css.map */\n"] }]
  }], () => [{ type: ActivatedRoute }, { type: Router }, { type: DataService }, { type: ExerciseLibraryService }, { type: PdfExportService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SheetViewComponent, { className: "SheetViewComponent", filePath: "src/app/features/sheets/sheet-view/sheet-view.component.ts", lineNumber: 18 });
})();
export {
  SheetViewComponent
};
//# sourceMappingURL=chunk-KD6PW2JP.js.map
