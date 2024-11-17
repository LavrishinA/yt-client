import { Component } from '@angular/core';
import HeaderComponent from './header/header.component';
import SearchResultComponent from './search/search-result/search-result.component';
import data from './response.json';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    SearchResultComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export default class AppComponent {
  title = 'yt-client';

  data = data;

  isSearchComplete: boolean = false;

  searchTerm: string = '';

  onSubmit() {
    this.isSearchComplete = true;
  }

  sortData(params: { direction: 'asc' | 'desc', field: 'publishedAt' | 'likeCount' }) {
    let sortedItems;
    if (params.field === 'likeCount') {
      // eslint-disable-next-line max-len
      sortedItems = this.data.items.sort((a, b) => Number(b.statistics.likeCount) - Number(a.statistics.likeCount));
    }
    if (params.field === 'publishedAt') {
      // eslint-disable-next-line max-len
      sortedItems = this.data.items.sort((a, b) => new Date(b.snippet.publishedAt).getTime() - new Date(a.snippet.publishedAt).getTime());
    }
    if (sortedItems) {
      this.data = {
        ...this.data,
        items: params.direction === 'asc' ? [...sortedItems] : [...sortedItems.reverse()],
      };
    }
  }
}
