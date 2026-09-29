import {
  AuthService,
  Injectable,
  MockBackendService,
  SupabaseService,
  __async,
  environment,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-Q4IH74E4.js";

// src/app/core/services/data.service.ts
var DataService = class _DataService {
  supabase;
  mock;
  auth;
  constructor(supabase, mock, auth) {
    this.supabase = supabase;
    this.mock = mock;
    this.auth = auth;
  }
  get trainerId() {
    const id = this.auth.user()?.id;
    if (!id) {
      throw new Error("Utente non autenticato");
    }
    return id;
  }
  listClients() {
    return __async(this, null, function* () {
      if (environment.mock) {
        return this.mock.listClients(this.trainerId);
      }
      const { data, error } = yield this.supabase.client.from("clients").select("*").order("first_name", { ascending: true });
      if (error)
        throw error;
      return data;
    });
  }
  getClient(clientId) {
    return __async(this, null, function* () {
      if (environment.mock) {
        return this.mock.getClient(clientId);
      }
      const { data, error } = yield this.supabase.client.from("clients").select("*").eq("id", clientId).maybeSingle();
      if (error)
        throw error;
      return data;
    });
  }
  createClient(firstName, lastName) {
    return __async(this, null, function* () {
      if (environment.mock) {
        return this.mock.createClient(this.trainerId, firstName, lastName);
      }
      const { data, error } = yield this.supabase.client.from("clients").insert({ trainer_id: this.trainerId, first_name: firstName, last_name: lastName }).select().single();
      if (error)
        throw error;
      return data;
    });
  }
  listSheetsForClient(clientId) {
    return __async(this, null, function* () {
      if (environment.mock) {
        return this.mock.listSheetsForClient(clientId);
      }
      const { data, error } = yield this.supabase.client.from("workout_sheets").select("*").eq("client_id", clientId).order("created_at", { ascending: false });
      if (error)
        throw error;
      return data;
    });
  }
  getSheet(sheetId) {
    return __async(this, null, function* () {
      if (environment.mock) {
        return this.mock.getSheet(sheetId);
      }
      const { data, error } = yield this.supabase.client.from("workout_sheets").select("*").eq("id", sheetId).maybeSingle();
      if (error)
        throw error;
      return data;
    });
  }
  createSheet(clientId, title, days) {
    return __async(this, null, function* () {
      if (environment.mock) {
        return this.mock.createSheet(this.trainerId, clientId, title, days);
      }
      const { data, error } = yield this.supabase.client.from("workout_sheets").insert({ trainer_id: this.trainerId, client_id: clientId, title, days }).select().single();
      if (error)
        throw error;
      return data;
    });
  }
  updateSheet(sheetId, title, days) {
    return __async(this, null, function* () {
      if (environment.mock) {
        this.mock.updateSheet(sheetId, title, days);
        return;
      }
      const { error } = yield this.supabase.client.from("workout_sheets").update({ title, days }).eq("id", sheetId);
      if (error)
        throw error;
    });
  }
  deleteSheet(sheetId) {
    return __async(this, null, function* () {
      if (environment.mock) {
        this.mock.deleteSheet(sheetId);
        return;
      }
      const { error } = yield this.supabase.client.from("workout_sheets").delete().eq("id", sheetId);
      if (error)
        throw error;
    });
  }
  static \u0275fac = function DataService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DataService)(\u0275\u0275inject(SupabaseService), \u0275\u0275inject(MockBackendService), \u0275\u0275inject(AuthService));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _DataService, factory: _DataService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DataService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: SupabaseService }, { type: MockBackendService }, { type: AuthService }], null);
})();

export {
  DataService
};
//# sourceMappingURL=chunk-BB27IXKD.js.map
