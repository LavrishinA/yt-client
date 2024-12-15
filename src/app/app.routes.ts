import { Routes } from '@angular/router';
import LayoutComponent from './core/layout/layout.component';
import MainPageComponent from './search/pages/main-page/main-page.component';
import SearchDetailComponent from './search/components/search-detail/search-detail.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'main',
        component: MainPageComponent,
      },
      { path: 'detail/:id', component: SearchDetailComponent },
    ],
  },
];

export default routes;
