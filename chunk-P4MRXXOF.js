import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  RequiredValidator,
  ɵNgNoValidate
} from "./chunk-L6TH5YE7.js";
import {
  DataService
} from "./chunk-TTYTNCN5.js";
import {
  it
} from "./chunk-NSMX62OF.js";
import {
  AuthService,
  CommonModule,
  Component,
  Router,
  __async,
  computed,
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
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-BQNJQGMQ.js";

// src/app/features/clients/client-list/client-list.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function ClientListComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "form", 7);
    \u0275\u0275listener("ngSubmit", function ClientListComponent_Conditional_10_Template_form_ngSubmit_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.saveClient());
    });
    \u0275\u0275elementStart(1, "label");
    \u0275\u0275text(2);
    \u0275\u0275elementStart(3, "input", 8);
    \u0275\u0275twoWayListener("ngModelChange", function ClientListComponent_Conditional_10_Template_input_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.firstName, $event) || (ctx_r1.firstName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "label");
    \u0275\u0275text(5);
    \u0275\u0275elementStart(6, "input", 9);
    \u0275\u0275twoWayListener("ngModelChange", function ClientListComponent_Conditional_10_Template_input_ngModelChange_6_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.lastName, $event) || (ctx_r1.lastName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 10)(8, "button", 11);
    \u0275\u0275listener("click", function ClientListComponent_Conditional_10_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleForm());
    });
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "button", 12);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.t.firstName, " ");
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.firstName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.t.lastName, " ");
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.lastName);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.t.cancel);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.saving());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.t.save);
  }
}
function ClientListComponent_Conditional_11_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 13);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.t.empty);
  }
}
function ClientListComponent_Conditional_11_Conditional_1_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 16);
    \u0275\u0275listener("click", function ClientListComponent_Conditional_11_Conditional_1_For_2_Template_li_click_0_listener() {
      const client_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.openClient(client_r4));
    });
    \u0275\u0275elementStart(1, "span", 17);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const client_r4 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", client_r4.first_name, " ", client_r4.last_name, "");
  }
}
function ClientListComponent_Conditional_11_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 14);
    \u0275\u0275repeaterCreate(1, ClientListComponent_Conditional_11_Conditional_1_For_2_Template, 3, 2, "li", 15, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.filteredClients());
  }
}
function ClientListComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ClientListComponent_Conditional_11_Conditional_0_Template, 2, 1, "p", 13)(1, ClientListComponent_Conditional_11_Conditional_1_Template, 3, 0, "ul", 14);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r1.filteredClients().length === 0 ? 0 : 1);
  }
}
var ClientListComponent = class _ClientListComponent {
  data;
  auth;
  router;
  t = it.clients;
  clients = signal([]);
  loading = signal(true);
  search = signal("");
  showForm = signal(false);
  saving = signal(false);
  firstName = "";
  lastName = "";
  filteredClients = computed(() => {
    const term = this.search().trim().toLowerCase();
    if (!term) {
      return this.clients();
    }
    return this.clients().filter((c) => `${c.first_name} ${c.last_name}`.toLowerCase().includes(term));
  });
  constructor(data, auth, router) {
    this.data = data;
    this.auth = auth;
    this.router = router;
    this.load();
  }
  load() {
    return __async(this, null, function* () {
      this.loading.set(true);
      this.clients.set(yield this.data.listClients());
      this.loading.set(false);
    });
  }
  openClient(client) {
    this.router.navigate(["/clienti", client.id]);
  }
  toggleForm() {
    this.showForm.set(!this.showForm());
    this.firstName = "";
    this.lastName = "";
  }
  saveClient() {
    return __async(this, null, function* () {
      if (!this.firstName.trim() || !this.lastName.trim()) {
        return;
      }
      this.saving.set(true);
      const client = yield this.data.createClient(this.firstName.trim(), this.lastName.trim());
      this.clients.update((list) => [...list, client]);
      this.saving.set(false);
      this.toggleForm();
    });
  }
  logout() {
    return __async(this, null, function* () {
      yield this.auth.signOut();
      this.router.navigateByUrl("/login");
    });
  }
  static \u0275fac = function ClientListComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ClientListComponent)(\u0275\u0275directiveInject(DataService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ClientListComponent, selectors: [["app-client-list"]], decls: 12, vars: 7, consts: [[1, "page"], [1, "topbar"], ["type", "button", 1, "link", 3, "click"], [1, "toolbar"], ["type", "search", 3, "ngModelChange", "placeholder", "ngModel"], ["type", "button", 1, "primary", 3, "click"], [1, "client-form"], [1, "client-form", 3, "ngSubmit"], ["type", "text", "name", "firstName", "required", "", 3, "ngModelChange", "ngModel"], ["type", "text", "name", "lastName", "required", "", 3, "ngModelChange", "ngModel"], [1, "form-actions"], ["type", "button", 1, "ghost", 3, "click"], ["type", "submit", 1, "primary", 3, "disabled"], [1, "empty"], [1, "client-cards"], [1, "client-card"], [1, "client-card", 3, "click"], [1, "name"]], template: function ClientListComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "header", 1)(2, "h1");
      \u0275\u0275text(3);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "button", 2);
      \u0275\u0275listener("click", function ClientListComponent_Template_button_click_4_listener() {
        return ctx.logout();
      });
      \u0275\u0275text(5);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(6, "div", 3)(7, "input", 4);
      \u0275\u0275listener("ngModelChange", function ClientListComponent_Template_input_ngModelChange_7_listener($event) {
        return ctx.search.set($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "button", 5);
      \u0275\u0275listener("click", function ClientListComponent_Template_button_click_8_listener() {
        return ctx.toggleForm();
      });
      \u0275\u0275text(9);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(10, ClientListComponent_Conditional_10_Template, 12, 7, "form", 6)(11, ClientListComponent_Conditional_11_Template, 2, 1);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.t.title);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.t.logout);
      \u0275\u0275advance(2);
      \u0275\u0275property("placeholder", ctx.t.searchPlaceholder)("ngModel", ctx.search());
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.t.newClient);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.showForm() ? 10 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.loading() ? 11 : -1);
    }
  }, dependencies: [CommonModule, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, NgModel, NgForm], styles: ["\n\n.page[_ngcontent-%COMP%] {\n  max-width: 720px;\n  margin: 0 auto;\n  padding: var(--sa-space-4) var(--sa-space-3) var(--sa-space-5);\n}\n.topbar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: var(--sa-space-3);\n}\n.topbar[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 22px;\n  margin: 0;\n}\n.toolbar[_ngcontent-%COMP%] {\n  display: flex;\n  gap: var(--sa-space-2);\n  margin-bottom: var(--sa-space-3);\n}\n.toolbar[_ngcontent-%COMP%]   input[type=search][_ngcontent-%COMP%] {\n  flex: 1;\n  font: inherit;\n  padding: 10px 12px;\n  border: 1px solid var(--sa-border);\n  border-radius: var(--sa-radius-sm);\n}\n.client-form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: var(--sa-space-2);\n  background: var(--sa-surface);\n  border: 1px solid var(--sa-border);\n  border-radius: var(--sa-radius-md);\n  padding: var(--sa-space-3);\n  margin-bottom: var(--sa-space-3);\n}\n.client-form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  font-size: 14px;\n  color: var(--sa-text-muted);\n}\n.client-form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], \n.client-form[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  font: inherit;\n  padding: 8px 10px;\n  border: 1px solid var(--sa-border);\n  border-radius: var(--sa-radius-sm);\n  color: var(--sa-text);\n}\n.client-form[_ngcontent-%COMP%]   .form-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: var(--sa-space-2);\n}\n.empty[_ngcontent-%COMP%] {\n  color: var(--sa-text-muted);\n  text-align: center;\n  padding: var(--sa-space-5) 0;\n}\n.client-cards[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  display: flex;\n  flex-direction: column;\n  gap: var(--sa-space-2);\n}\n.client-card[_ngcontent-%COMP%] {\n  background: var(--sa-surface);\n  border: 1px solid var(--sa-border);\n  border-radius: var(--sa-radius-md);\n  padding: var(--sa-space-3);\n  cursor: pointer;\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.client-card[_ngcontent-%COMP%]:hover {\n  border-color: var(--sa-primary);\n}\n.client-card[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n.client-card[_ngcontent-%COMP%]   .notes[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: var(--sa-text-muted);\n}\nbutton.primary[_ngcontent-%COMP%] {\n  padding: 10px 16px;\n  border: none;\n  border-radius: var(--sa-radius-sm);\n  background: var(--sa-primary);\n  color: #fff;\n  font: inherit;\n  font-weight: 600;\n  cursor: pointer;\n}\nbutton.primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: var(--sa-primary-dark);\n}\nbutton.primary[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n}\nbutton.ghost[_ngcontent-%COMP%] {\n  padding: 10px 16px;\n  border: 1px solid var(--sa-border);\n  border-radius: var(--sa-radius-sm);\n  background: transparent;\n  color: var(--sa-text);\n  font: inherit;\n  cursor: pointer;\n}\nbutton.link[_ngcontent-%COMP%] {\n  border: none;\n  background: none;\n  color: var(--sa-text-muted);\n  font: inherit;\n  cursor: pointer;\n  text-decoration: underline;\n}\n/*# sourceMappingURL=client-list.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ClientListComponent, [{
    type: Component,
    args: [{ selector: "app-client-list", standalone: true, imports: [CommonModule, FormsModule], template: '<div class="page">\n  <header class="topbar">\n    <h1>{{ t.title }}</h1>\n    <button type="button" class="link" (click)="logout()">{{ t.logout }}</button>\n  </header>\n\n  <div class="toolbar">\n    <input type="search" [placeholder]="t.searchPlaceholder" [ngModel]="search()" (ngModelChange)="search.set($event)" />\n    <button type="button" class="primary" (click)="toggleForm()">{{ t.newClient }}</button>\n  </div>\n\n  @if (showForm()) {\n    <form class="client-form" (ngSubmit)="saveClient()">\n      <label>\n        {{ t.firstName }}\n        <input type="text" name="firstName" [(ngModel)]="firstName" required />\n      </label>\n      <label>\n        {{ t.lastName }}\n        <input type="text" name="lastName" [(ngModel)]="lastName" required />\n      </label>\n      <div class="form-actions">\n        <button type="button" class="ghost" (click)="toggleForm()">{{ t.cancel }}</button>\n        <button type="submit" class="primary" [disabled]="saving()">{{ t.save }}</button>\n      </div>\n    </form>\n  }\n\n  @if (!loading()) {\n    @if (filteredClients().length === 0) {\n      <p class="empty">{{ t.empty }}</p>\n    } @else {\n      <ul class="client-cards">\n        @for (client of filteredClients(); track client.id) {\n          <li class="client-card" (click)="openClient(client)">\n            <span class="name">{{ client.first_name }} {{ client.last_name }}</span>\n          </li>\n        }\n      </ul>\n    }\n  }\n</div>\n', styles: ["/* src/app/features/clients/client-list/client-list.component.scss */\n.page {\n  max-width: 720px;\n  margin: 0 auto;\n  padding: var(--sa-space-4) var(--sa-space-3) var(--sa-space-5);\n}\n.topbar {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: var(--sa-space-3);\n}\n.topbar h1 {\n  font-size: 22px;\n  margin: 0;\n}\n.toolbar {\n  display: flex;\n  gap: var(--sa-space-2);\n  margin-bottom: var(--sa-space-3);\n}\n.toolbar input[type=search] {\n  flex: 1;\n  font: inherit;\n  padding: 10px 12px;\n  border: 1px solid var(--sa-border);\n  border-radius: var(--sa-radius-sm);\n}\n.client-form {\n  display: flex;\n  flex-direction: column;\n  gap: var(--sa-space-2);\n  background: var(--sa-surface);\n  border: 1px solid var(--sa-border);\n  border-radius: var(--sa-radius-md);\n  padding: var(--sa-space-3);\n  margin-bottom: var(--sa-space-3);\n}\n.client-form label {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  font-size: 14px;\n  color: var(--sa-text-muted);\n}\n.client-form input,\n.client-form textarea {\n  font: inherit;\n  padding: 8px 10px;\n  border: 1px solid var(--sa-border);\n  border-radius: var(--sa-radius-sm);\n  color: var(--sa-text);\n}\n.client-form .form-actions {\n  display: flex;\n  justify-content: flex-end;\n  gap: var(--sa-space-2);\n}\n.empty {\n  color: var(--sa-text-muted);\n  text-align: center;\n  padding: var(--sa-space-5) 0;\n}\n.client-cards {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  display: flex;\n  flex-direction: column;\n  gap: var(--sa-space-2);\n}\n.client-card {\n  background: var(--sa-surface);\n  border: 1px solid var(--sa-border);\n  border-radius: var(--sa-radius-md);\n  padding: var(--sa-space-3);\n  cursor: pointer;\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.client-card:hover {\n  border-color: var(--sa-primary);\n}\n.client-card .name {\n  font-weight: 600;\n}\n.client-card .notes {\n  font-size: 13px;\n  color: var(--sa-text-muted);\n}\nbutton.primary {\n  padding: 10px 16px;\n  border: none;\n  border-radius: var(--sa-radius-sm);\n  background: var(--sa-primary);\n  color: #fff;\n  font: inherit;\n  font-weight: 600;\n  cursor: pointer;\n}\nbutton.primary:hover:not(:disabled) {\n  background: var(--sa-primary-dark);\n}\nbutton.primary:disabled {\n  opacity: 0.6;\n}\nbutton.ghost {\n  padding: 10px 16px;\n  border: 1px solid var(--sa-border);\n  border-radius: var(--sa-radius-sm);\n  background: transparent;\n  color: var(--sa-text);\n  font: inherit;\n  cursor: pointer;\n}\nbutton.link {\n  border: none;\n  background: none;\n  color: var(--sa-text-muted);\n  font: inherit;\n  cursor: pointer;\n  text-decoration: underline;\n}\n/*# sourceMappingURL=client-list.component.css.map */\n"] }]
  }], () => [{ type: DataService }, { type: AuthService }, { type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ClientListComponent, { className: "ClientListComponent", filePath: "src/app/features/clients/client-list/client-list.component.ts", lineNumber: 17 });
})();
export {
  ClientListComponent
};
//# sourceMappingURL=chunk-P4MRXXOF.js.map
