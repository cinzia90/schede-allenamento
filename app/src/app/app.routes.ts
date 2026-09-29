import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';

export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () => import('./core/auth/login/login.component').then((m) => m.LoginComponent),
  },
  {
    path: '',
    canActivate: [authGuard],
    loadComponent: () => import('./features/clients/client-list/client-list.component').then((m) => m.ClientListComponent),
  },
  {
    path: 'clienti/:id',
    canActivate: [authGuard],
    loadComponent: () =>
      import('./features/clients/client-detail/client-detail.component').then((m) => m.ClientDetailComponent),
  },
  {
    path: 'clienti/:id/schede/nuova',
    canActivate: [authGuard],
    loadComponent: () =>
      import('./features/sheets/sheet-builder/sheet-builder.component').then((m) => m.SheetBuilderComponent),
  },
  {
    path: 'clienti/:id/schede/:sheetId/modifica',
    canActivate: [authGuard],
    loadComponent: () =>
      import('./features/sheets/sheet-builder/sheet-builder.component').then((m) => m.SheetBuilderComponent),
  },
  {
    path: 'clienti/:id/schede/:sheetId',
    canActivate: [authGuard],
    loadComponent: () => import('./features/sheets/sheet-view/sheet-view.component').then((m) => m.SheetViewComponent),
  },
  { path: '**', redirectTo: '' },
];
