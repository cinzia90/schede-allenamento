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
  it
} from "./chunk-XVYSBFXJ.js";
import {
  ActivatedRoute,
  AuthService,
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
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-BQNJQGMQ.js";

// src/app/core/auth/login/login.component.ts
function LoginComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 4);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.errorMessage());
  }
}
var LoginComponent = class _LoginComponent {
  auth;
  router;
  route;
  t = it.login;
  email = "";
  password = "";
  loading = signal(false);
  errorMessage = signal(null);
  returnUrl = "/";
  constructor(auth, router, route) {
    this.auth = auth;
    this.router = router;
    this.route = route;
    this.returnUrl = this.route.snapshot.queryParamMap.get("returnUrl") ?? "/";
  }
  submit() {
    return __async(this, null, function* () {
      this.errorMessage.set(null);
      this.loading.set(true);
      const { error } = yield this.auth.signInWithPassword(this.email, this.password);
      this.loading.set(false);
      if (error) {
        this.errorMessage.set(this.t.error);
        return;
      }
      this.router.navigateByUrl(this.returnUrl);
    });
  }
  static \u0275fac = function LoginComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LoginComponent)(\u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ActivatedRoute));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LoginComponent, selectors: [["app-login"]], decls: 13, vars: 8, consts: [[1, "login-page"], [1, "login-card", 3, "ngSubmit"], ["type", "email", "name", "email", "required", "", "autocomplete", "username", 3, "ngModelChange", "ngModel"], ["type", "password", "name", "password", "required", "", "autocomplete", "current-password", 3, "ngModelChange", "ngModel"], [1, "error"], ["type", "submit", 3, "disabled"]], template: function LoginComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "form", 1);
      \u0275\u0275listener("ngSubmit", function LoginComponent_Template_form_ngSubmit_1_listener() {
        return ctx.submit();
      });
      \u0275\u0275elementStart(2, "h1");
      \u0275\u0275text(3);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "label");
      \u0275\u0275text(5);
      \u0275\u0275elementStart(6, "input", 2);
      \u0275\u0275twoWayListener("ngModelChange", function LoginComponent_Template_input_ngModelChange_6_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.email, $event) || (ctx.email = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "label");
      \u0275\u0275text(8);
      \u0275\u0275elementStart(9, "input", 3);
      \u0275\u0275twoWayListener("ngModelChange", function LoginComponent_Template_input_ngModelChange_9_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.password, $event) || (ctx.password = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275template(10, LoginComponent_Conditional_10_Template, 2, 1, "p", 4);
      \u0275\u0275elementStart(11, "button", 5);
      \u0275\u0275text(12);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.t.title);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", ctx.t.email, " ");
      \u0275\u0275advance();
      \u0275\u0275twoWayProperty("ngModel", ctx.email);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", ctx.t.password, " ");
      \u0275\u0275advance();
      \u0275\u0275twoWayProperty("ngModel", ctx.password);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.errorMessage() ? 10 : -1);
      \u0275\u0275advance();
      \u0275\u0275property("disabled", ctx.loading());
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.loading() ? ctx.t.submitting : ctx.t.submit, " ");
    }
  }, dependencies: [CommonModule, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, NgModel, NgForm], styles: ["\n\n.login-page[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: var(--sa-space-3);\n}\n.login-card[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 360px;\n  background: var(--sa-surface);\n  border: 1px solid var(--sa-border);\n  border-radius: var(--sa-radius-lg);\n  padding: var(--sa-space-4);\n  display: flex;\n  flex-direction: column;\n  gap: var(--sa-space-3);\n  box-shadow: 0 10px 30px rgba(15, 23, 42, 0.06);\n}\n.login-card[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0 0 var(--sa-space-2);\n  font-size: 20px;\n  text-align: center;\n  color: var(--sa-text);\n}\n.login-card[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: var(--sa-space-1);\n  font-size: 14px;\n  color: var(--sa-text-muted);\n}\n.login-card[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  font: inherit;\n  padding: 10px 12px;\n  border: 1px solid var(--sa-border);\n  border-radius: var(--sa-radius-sm);\n  color: var(--sa-text);\n}\n.login-card[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  outline: 2px solid var(--sa-primary);\n  outline-offset: 1px;\n}\n.login-card[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin-top: var(--sa-space-1);\n  padding: 10px 12px;\n  border: none;\n  border-radius: var(--sa-radius-sm);\n  background: var(--sa-primary);\n  color: #fff;\n  font: inherit;\n  font-weight: 600;\n  cursor: pointer;\n}\n.login-card[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: var(--sa-primary-dark);\n}\n.login-card[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: default;\n}\n.login-card[_ngcontent-%COMP%]   .error[_ngcontent-%COMP%] {\n  margin: 0;\n  color: var(--sa-danger);\n  font-size: 13px;\n}\n/*# sourceMappingURL=login.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LoginComponent, [{
    type: Component,
    args: [{ selector: "app-login", standalone: true, imports: [CommonModule, FormsModule], template: '<div class="login-page">\n  <form class="login-card" (ngSubmit)="submit()">\n    <h1>{{ t.title }}</h1>\n\n    <label>\n      {{ t.email }}\n      <input type="email" name="email" [(ngModel)]="email" required autocomplete="username" />\n    </label>\n\n    <label>\n      {{ t.password }}\n      <input type="password" name="password" [(ngModel)]="password" required autocomplete="current-password" />\n    </label>\n\n    @if (errorMessage()) {\n      <p class="error">{{ errorMessage() }}</p>\n    }\n\n    <button type="submit" [disabled]="loading()">\n      {{ loading() ? t.submitting : t.submit }}\n    </button>\n  </form>\n</div>\n', styles: ["/* src/app/core/auth/login/login.component.scss */\n.login-page {\n  min-height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: var(--sa-space-3);\n}\n.login-card {\n  width: 100%;\n  max-width: 360px;\n  background: var(--sa-surface);\n  border: 1px solid var(--sa-border);\n  border-radius: var(--sa-radius-lg);\n  padding: var(--sa-space-4);\n  display: flex;\n  flex-direction: column;\n  gap: var(--sa-space-3);\n  box-shadow: 0 10px 30px rgba(15, 23, 42, 0.06);\n}\n.login-card h1 {\n  margin: 0 0 var(--sa-space-2);\n  font-size: 20px;\n  text-align: center;\n  color: var(--sa-text);\n}\n.login-card label {\n  display: flex;\n  flex-direction: column;\n  gap: var(--sa-space-1);\n  font-size: 14px;\n  color: var(--sa-text-muted);\n}\n.login-card input {\n  font: inherit;\n  padding: 10px 12px;\n  border: 1px solid var(--sa-border);\n  border-radius: var(--sa-radius-sm);\n  color: var(--sa-text);\n}\n.login-card input:focus {\n  outline: 2px solid var(--sa-primary);\n  outline-offset: 1px;\n}\n.login-card button {\n  margin-top: var(--sa-space-1);\n  padding: 10px 12px;\n  border: none;\n  border-radius: var(--sa-radius-sm);\n  background: var(--sa-primary);\n  color: #fff;\n  font: inherit;\n  font-weight: 600;\n  cursor: pointer;\n}\n.login-card button:hover:not(:disabled) {\n  background: var(--sa-primary-dark);\n}\n.login-card button:disabled {\n  opacity: 0.6;\n  cursor: default;\n}\n.login-card .error {\n  margin: 0;\n  color: var(--sa-danger);\n  font-size: 13px;\n}\n/*# sourceMappingURL=login.component.css.map */\n"] }]
  }], () => [{ type: AuthService }, { type: Router }, { type: ActivatedRoute }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LoginComponent, { className: "LoginComponent", filePath: "src/app/core/auth/login/login.component.ts", lineNumber: 15 });
})();
export {
  LoginComponent
};
//# sourceMappingURL=chunk-GE6RPONY.js.map
