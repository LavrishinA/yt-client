import { Routes } from '@angular/router';
import LayoutComponent from './core/layout/layout.component';
import MainPageComponent from './search/pages/main-page/main-page.component';
import DetailPageComponent from './search/pages/detail-page/detail-page.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'main',
        component: MainPageComponent,
      },
      { path: 'detail/:id', component: DetailPageComponent },
    ],
  },
];

export default routes;
