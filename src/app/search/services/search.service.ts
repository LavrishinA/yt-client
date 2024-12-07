import { Injectable, signal } from '@angular/core';
import { YouTubeSearchResponse } from '../model/search-response.model';
import data from '../response.json';

@Injectable({
  providedIn: 'root',
})
export default class SearchService {
  private searchResult = signal<YouTubeSearchResponse>({} as YouTubeSearchResponse);

  searchResultData = this.searchResult.asReadonly();

  getData() {
    this.searchResult.set(data);
  }

  sortData(params: { selectedField: 'publishedAt' | 'likeCount'; sortDirection: 'asc' | 'desc' }) {
    const originalItems = this.searchResult().items;
    const sortedItems = [...originalItems];

    if (params.selectedField === 'likeCount') {
      sortedItems.sort((a, b) => Number(b.statistics.likeCount) - Number(a.statistics.likeCount));
    } else if (params.selectedField === 'publishedAt') {
      // eslint-disable-next-line max-len
      sortedItems.sort((a, b) => new Date(b.snippet.publishedAt).getTime() - new Date(a.snippet.publishedAt).getTime());
    }

    if (params.sortDirection === 'asc') {
      sortedItems.reverse();
    }

    this.searchResult.set({
      ...this.searchResult(),
      items: sortedItems,
    });
  }
}
