import { Routes } from '@angular/router';
import LayoutComponent from './core/layout/layout.component';
import MainPageComponent from './search/pages/main-page/main-page.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: 'main', component: MainPageComponent },
    ],
  },
];

export default routes;
