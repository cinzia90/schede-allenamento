import {
  AuthService,
  Component,
  Router,
  RouterOutlet,
  __async,
  bootstrapApplication,
  inject,
  provideRouter,
  provideZoneChangeDetection,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵelement
} from "./chunk-Q4IH74E4.js";

// src/app/core/guards/auth.guard.ts
var authGuard = (_route, state) => __async(null, null, function* () {
  const auth = inject(AuthService);
  const router = inject(Router);
  if (!auth.ready()) {
    yield new Promise((resolve) => {
      const check = () => auth.ready() ? resolve() : setTimeout(check, 25);
      check();
    });
  }
  if (auth.isAuthenticated()) {
    return true;
  }
  return router.createUrlTree(["/login"], { queryParams: { returnUrl: state.url } });
});

// src/app/app.routes.ts
var routes = [
  {
    path: "login",
    loadComponent: () => import("./chunk-QQXBANWW.js").then((m) => m.LoginComponent)
  },
  {
    path: "",
    canActivate: [authGuard],
    loadComponent: () => import("./chunk-5XAFOVBC.js").then((m) => m.ClientListComponent)
  },
  {
    path: "clienti/:id",
    canActivate: [authGuard],
    loadComponent: () => import("./chunk-NED673P5.js").then((m) => m.ClientDetailComponent)
  },
  {
    path: "clienti/:id/schede/nuova",
    canActivate: [authGuard],
    loadComponent: () => import("./chunk-MOVQQCM5.js").then((m) => m.SheetBuilderComponent)
  },
  {
    path: "clienti/:id/schede/:sheetId/modifica",
    canActivate: [authGuard],
    loadComponent: () => import("./chunk-MOVQQCM5.js").then((m) => m.SheetBuilderComponent)
  },
  {
    path: "clienti/:id/schede/:sheetId",
    canActivate: [authGuard],
    loadComponent: () => import("./chunk-CORSN5YX.js").then((m) => m.SheetViewComponent)
  },
  { path: "**", redirectTo: "" }
];

// src/app/app.config.ts
var appConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes)]
};

// src/app/app.component.ts
var AppComponent = class _AppComponent {
  static \u0275fac = function AppComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AppComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "router-outlet");
    }
  }, dependencies: [RouterOutlet], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AppComponent, [{
    type: Component,
    args: [{ selector: "app-root", imports: [RouterOutlet], template: "<router-outlet />\n" }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppComponent, { className: "AppComponent", filePath: "src/app/app.component.ts", lineNumber: 10 });
})();

// src/main.ts
bootstrapApplication(AppComponent, appConfig).catch((err) => console.error(err));
//# sourceMappingURL=main.js.map
