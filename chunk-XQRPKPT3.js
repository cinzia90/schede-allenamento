import {
  PdfExportService
} from "./chunk-23J7LATN.js";
import {
  ExerciseLibraryService
} from "./chunk-E65U22XO.js";
import {
  DataService
} from "./chunk-TTYTNCN5.js";
import {
  it
} from "./chunk-NSMX62OF.js";
import {
  ActivatedRoute,
  CommonModule,
  Component,
  DatePipe,
  Router,
  RouterLink,
  __async,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-BQNJQGMQ.js";

// src/app/features/clients/client-detail/client-detail.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function ClientDetailComponent_Conditional_3_Conditional_8_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 5);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.t.emptySheets);
  }
}
function ClientDetailComponent_Conditional_3_Conditional_8_Conditional_1_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 7)(1, "div", 8)(2, "span", 9);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 10);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 11)(8, "button", 12);
    \u0275\u0275listener("click", function ClientDetailComponent_Conditional_3_Conditional_8_Conditional_1_For_2_Template_button_click_8_listener() {
      const sheet_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.openSheet(sheet_r4));
    });
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "button", 12);
    \u0275\u0275listener("click", function ClientDetailComponent_Conditional_3_Conditional_8_Conditional_1_For_2_Template_button_click_10_listener() {
      const sheet_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.editSheet(sheet_r4));
    });
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "button", 13);
    \u0275\u0275listener("click", function ClientDetailComponent_Conditional_3_Conditional_8_Conditional_1_For_2_Template_button_click_12_listener() {
      const sheet_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.downloadSheet(sheet_r4));
    });
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "button", 14);
    \u0275\u0275listener("click", function ClientDetailComponent_Conditional_3_Conditional_8_Conditional_1_For_2_Template_button_click_14_listener() {
      const sheet_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.deleteSheet(sheet_r4));
    });
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const sheet_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(sheet_r4.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", ctx_r1.t.createdOn, " ", \u0275\u0275pipeBind2(6, 8, sheet_r4.created_at, "dd/MM/yyyy"), "");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.t.view);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.t.edit);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.downloadingId() === sheet_r4.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.t.download, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.t.delete);
  }
}
function ClientDetailComponent_Conditional_3_Conditional_8_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 6);
    \u0275\u0275repeaterCreate(1, ClientDetailComponent_Conditional_3_Conditional_8_Conditional_1_For_2_Template, 16, 11, "li", 7, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.sheets());
  }
}
function ClientDetailComponent_Conditional_3_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ClientDetailComponent_Conditional_3_Conditional_8_Conditional_0_Template, 2, 1, "p", 5)(1, ClientDetailComponent_Conditional_3_Conditional_8_Conditional_1_Template, 3, 0, "ul", 6);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional(ctx_r1.sheets().length === 0 ? 0 : 1);
  }
}
function ClientDetailComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "header", 2)(1, "h1");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(3, "div", 3)(4, "h2");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 4);
    \u0275\u0275listener("click", function ClientDetailComponent_Conditional_3_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.newSheet());
    });
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(8, ClientDetailComponent_Conditional_3_Conditional_8_Template, 2, 1);
  }
  if (rf & 2) {
    const c_r5 = ctx;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", c_r5.first_name, " ", c_r5.last_name, "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.t.sheets);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.t.newSheet);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r1.loading() ? 8 : -1);
  }
}
var ClientDetailComponent = class _ClientDetailComponent {
  route;
  router;
  data;
  exerciseLibrary;
  pdfExport;
  t = it.clientDetail;
  client = signal(null);
  sheets = signal([]);
  loading = signal(true);
  downloadingId = signal(null);
  clientId = "";
  constructor(route, router, data, exerciseLibrary, pdfExport) {
    this.route = route;
    this.router = router;
    this.data = data;
    this.exerciseLibrary = exerciseLibrary;
    this.pdfExport = pdfExport;
    this.clientId = this.route.snapshot.paramMap.get("id") ?? "";
    this.load();
  }
  load() {
    return __async(this, null, function* () {
      this.loading.set(true);
      const [client, sheets] = yield Promise.all([
        this.data.getClient(this.clientId),
        this.data.listSheetsForClient(this.clientId)
      ]);
      this.client.set(client);
      this.sheets.set(sheets);
      this.loading.set(false);
    });
  }
  newSheet() {
    this.router.navigate(["/clienti", this.clientId, "schede", "nuova"]);
  }
  openSheet(sheet) {
    this.router.navigate(["/clienti", this.clientId, "schede", sheet.id]);
  }
  editSheet(sheet) {
    this.router.navigate(["/clienti", this.clientId, "schede", sheet.id, "modifica"]);
  }
  deleteSheet(sheet) {
    return __async(this, null, function* () {
      if (!confirm(this.t.deleteConfirm)) {
        return;
      }
      yield this.data.deleteSheet(sheet.id);
      this.sheets.update((list) => list.filter((s) => s.id !== sheet.id));
    });
  }
  downloadSheet(sheet) {
    return __async(this, null, function* () {
      const client = this.client();
      if (!client) {
        return;
      }
      this.downloadingId.set(sheet.id);
      const exerciseIds = new Set(sheet.days.flatMap((d) => d.exercises.map((e) => e.exerciseId)));
      const all = yield this.exerciseLibrary.listAll();
      const exercisesById = new Map(all.filter((e) => exerciseIds.has(e.id)).map((e) => [e.id, e]));
      yield this.pdfExport.downloadSheet(client, sheet, exercisesById);
      this.downloadingId.set(null);
    });
  }
  static \u0275fac = function ClientDetailComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ClientDetailComponent)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(DataService), \u0275\u0275directiveInject(ExerciseLibraryService), \u0275\u0275directiveInject(PdfExportService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ClientDetailComponent, selectors: [["app-client-detail"]], decls: 4, vars: 2, consts: [[1, "page"], ["routerLink", "/", 1, "back"], [1, "client-header"], [1, "sheets-header"], ["type", "button", 1, "primary", 3, "click"], [1, "empty"], [1, "sheet-list"], [1, "sheet-card"], [1, "sheet-info"], [1, "title"], [1, "date"], [1, "sheet-actions"], ["type", "button", 1, "ghost", 3, "click"], ["type", "button", 1, "ghost", 3, "click", "disabled"], ["type", "button", 1, "danger", 3, "click"]], template: function ClientDetailComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "a", 1);
      \u0275\u0275text(2);
      \u0275\u0275elementEnd();
      \u0275\u0275template(3, ClientDetailComponent_Conditional_3_Template, 9, 5);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      let tmp_1_0;
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1("\u2190 ", ctx.t.back, "");
      \u0275\u0275advance();
      \u0275\u0275conditional((tmp_1_0 = ctx.client()) ? 3 : -1, tmp_1_0);
    }
  }, dependencies: [CommonModule, DatePipe, RouterLink], styles: ["\n\n.page[_ngcontent-%COMP%] {\n  max-width: 720px;\n  margin: 0 auto;\n  padding: var(--sa-space-4) var(--sa-space-3) var(--sa-space-5);\n}\n.back[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-bottom: var(--sa-space-3);\n  color: var(--sa-text-muted);\n  text-decoration: none;\n  font-size: 14px;\n}\n.back[_ngcontent-%COMP%]:hover {\n  color: var(--sa-primary);\n}\n.client-header[_ngcontent-%COMP%] {\n  margin-bottom: var(--sa-space-4);\n}\n.client-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0 0 4px;\n  font-size: 22px;\n}\n.client-header[_ngcontent-%COMP%]   .notes[_ngcontent-%COMP%] {\n  color: var(--sa-text-muted);\n  margin: 0;\n}\n.sheets-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: var(--sa-space-3);\n}\n.sheets-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 17px;\n}\n.empty[_ngcontent-%COMP%] {\n  color: var(--sa-text-muted);\n  text-align: center;\n  padding: var(--sa-space-5) 0;\n}\n.sheet-list[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  display: flex;\n  flex-direction: column;\n  gap: var(--sa-space-2);\n}\n.sheet-card[_ngcontent-%COMP%] {\n  background: var(--sa-surface);\n  border: 1px solid var(--sa-border);\n  border-radius: var(--sa-radius-md);\n  padding: var(--sa-space-3);\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: var(--sa-space-2);\n}\n.sheet-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.sheet-info[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n.sheet-info[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--sa-text-muted);\n}\n.sheet-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: var(--sa-space-1);\n  flex-wrap: wrap;\n}\nbutton.primary[_ngcontent-%COMP%] {\n  padding: 10px 16px;\n  border: none;\n  border-radius: var(--sa-radius-sm);\n  background: var(--sa-primary);\n  color: #fff;\n  font: inherit;\n  font-weight: 600;\n  cursor: pointer;\n}\nbutton.primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: var(--sa-primary-dark);\n}\nbutton.ghost[_ngcontent-%COMP%] {\n  padding: 8px 12px;\n  border: 1px solid var(--sa-border);\n  border-radius: var(--sa-radius-sm);\n  background: transparent;\n  color: var(--sa-text);\n  font: inherit;\n  font-size: 13px;\n  cursor: pointer;\n}\nbutton.ghost[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n}\nbutton.danger[_ngcontent-%COMP%] {\n  padding: 8px 12px;\n  border: 1px solid var(--sa-danger);\n  border-radius: var(--sa-radius-sm);\n  background: transparent;\n  color: var(--sa-danger);\n  font: inherit;\n  font-size: 13px;\n  cursor: pointer;\n}\n/*# sourceMappingURL=client-detail.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ClientDetailComponent, [{
    type: Component,
    args: [{ selector: "app-client-detail", standalone: true, imports: [CommonModule, RouterLink], template: `<div class="page">
  <a class="back" routerLink="/">&larr; {{ t.back }}</a>

  @if (client(); as c) {
    <header class="client-header">
      <h1>{{ c.first_name }} {{ c.last_name }}</h1>
    </header>

    <div class="sheets-header">
      <h2>{{ t.sheets }}</h2>
      <button type="button" class="primary" (click)="newSheet()">{{ t.newSheet }}</button>
    </div>

    @if (!loading()) {
      @if (sheets().length === 0) {
        <p class="empty">{{ t.emptySheets }}</p>
      } @else {
        <ul class="sheet-list">
          @for (sheet of sheets(); track sheet.id) {
            <li class="sheet-card">
              <div class="sheet-info">
                <span class="title">{{ sheet.title }}</span>
                <span class="date">{{ t.createdOn }} {{ sheet.created_at | date: 'dd/MM/yyyy' }}</span>
              </div>
              <div class="sheet-actions">
                <button type="button" class="ghost" (click)="openSheet(sheet)">{{ t.view }}</button>
                <button type="button" class="ghost" (click)="editSheet(sheet)">{{ t.edit }}</button>
                <button type="button" class="ghost" [disabled]="downloadingId() === sheet.id" (click)="downloadSheet(sheet)">
                  {{ t.download }}
                </button>
                <button type="button" class="danger" (click)="deleteSheet(sheet)">{{ t.delete }}</button>
              </div>
            </li>
          }
        </ul>
      }
    }
  }
</div>
`, styles: ["/* src/app/features/clients/client-detail/client-detail.component.scss */\n.page {\n  max-width: 720px;\n  margin: 0 auto;\n  padding: var(--sa-space-4) var(--sa-space-3) var(--sa-space-5);\n}\n.back {\n  display: inline-block;\n  margin-bottom: var(--sa-space-3);\n  color: var(--sa-text-muted);\n  text-decoration: none;\n  font-size: 14px;\n}\n.back:hover {\n  color: var(--sa-primary);\n}\n.client-header {\n  margin-bottom: var(--sa-space-4);\n}\n.client-header h1 {\n  margin: 0 0 4px;\n  font-size: 22px;\n}\n.client-header .notes {\n  color: var(--sa-text-muted);\n  margin: 0;\n}\n.sheets-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: var(--sa-space-3);\n}\n.sheets-header h2 {\n  margin: 0;\n  font-size: 17px;\n}\n.empty {\n  color: var(--sa-text-muted);\n  text-align: center;\n  padding: var(--sa-space-5) 0;\n}\n.sheet-list {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  display: flex;\n  flex-direction: column;\n  gap: var(--sa-space-2);\n}\n.sheet-card {\n  background: var(--sa-surface);\n  border: 1px solid var(--sa-border);\n  border-radius: var(--sa-radius-md);\n  padding: var(--sa-space-3);\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: var(--sa-space-2);\n}\n.sheet-info {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.sheet-info .title {\n  font-weight: 600;\n}\n.sheet-info .date {\n  font-size: 12px;\n  color: var(--sa-text-muted);\n}\n.sheet-actions {\n  display: flex;\n  gap: var(--sa-space-1);\n  flex-wrap: wrap;\n}\nbutton.primary {\n  padding: 10px 16px;\n  border: none;\n  border-radius: var(--sa-radius-sm);\n  background: var(--sa-primary);\n  color: #fff;\n  font: inherit;\n  font-weight: 600;\n  cursor: pointer;\n}\nbutton.primary:hover:not(:disabled) {\n  background: var(--sa-primary-dark);\n}\nbutton.ghost {\n  padding: 8px 12px;\n  border: 1px solid var(--sa-border);\n  border-radius: var(--sa-radius-sm);\n  background: transparent;\n  color: var(--sa-text);\n  font: inherit;\n  font-size: 13px;\n  cursor: pointer;\n}\nbutton.ghost:disabled {\n  opacity: 0.6;\n}\nbutton.danger {\n  padding: 8px 12px;\n  border: 1px solid var(--sa-danger);\n  border-radius: var(--sa-radius-sm);\n  background: transparent;\n  color: var(--sa-danger);\n  font: inherit;\n  font-size: 13px;\n  cursor: pointer;\n}\n/*# sourceMappingURL=client-detail.component.css.map */\n"] }]
  }], () => [{ type: ActivatedRoute }, { type: Router }, { type: DataService }, { type: ExerciseLibraryService }, { type: PdfExportService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ClientDetailComponent, { className: "ClientDetailComponent", filePath: "src/app/features/clients/client-detail/client-detail.component.ts", lineNumber: 18 });
})();
export {
  ClientDetailComponent
};
//# sourceMappingURL=chunk-XQRPKPT3.js.map
