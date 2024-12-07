import { Component, inject } from '@angular/core';
import HeaderComponent from './core/components/header/header.component';
import SearchResultComponent from './search/components/search-result/search-result.component';

import SettingsComponent from './core/components/header/filter/filter.component';
import TemplateRefDirective from './shared/directive/template-ref.directive';
import SearchService from './search/services/search.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    SearchResultComponent,
    SettingsComponent,
    TemplateRefDirective,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export default class AppComponent {
  title = 'yt-client';

  logger(event: any) {
    console.log(event);
  }

  // sortData(fparams: { direction: 'asc' | 'desc', field: 'publishedAt' | 'likeCount' }) {
  //   let sortedItems;
  //   if (params.field === 'likeCount') {
  //     // eslint-disable-next-line max-len
  //     sortedItems = this.data.items.sort((a, b) => Number(b.statistics.likeCount) - Number(a.statistics.likeCount));
  //   }
  //   if (params.field === 'publishedAt') {
  //     // eslint-disable-next-line max-len
  //     sortedItems = this.data.items.sort((a, b) => new Date(b.snippet.publishedAt).getTime() - new Date(a.snippet.publishedAt).getTime());
  //   }
  //   if (sortedItems) {
  //     this.data = {
  //       ...this.data,
  //       items: params.direction === 'asc' ? [...sortedItems] : [...sortedItems.reverse()],
  //     };
  //   }
  // }
}
