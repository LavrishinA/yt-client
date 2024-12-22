import { Routes } from '@angular/router';
import LayoutComponent from './core/layout/layout.component';
import MainPageComponent from './search/pages/main-page/main-page.component';
import DetailPageComponent from './search/pages/detail-page/detail-page.component';
import NotFoundPageComponent from './core/pages/not-found-page/not-found-page.component';
import AuthPageComponent from './auth/pages/auth-page/auth-page.component';
import AuthGuard from './core/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,

    children: [
      { path: '', redirectTo: 'auth', pathMatch: 'full' },
      {
        path: 'main',
        component: MainPageComponent,
        canMatch: [AuthGuard],
      },
      { path: 'detail/:id', component: DetailPageComponent, canMatch: [AuthGuard] },
      { path: 'auth', component: AuthPageComponent },
      { path: '**', component: NotFoundPageComponent },
    ],
  },
];

export default routes;
