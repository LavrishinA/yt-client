import { Injectable, signal } from '@angular/core';
import { YouTubeSearchResponse } from '../model/search-response.model';
import data from '../response.json';

@Injectable({
  providedIn: 'root',
})
export default class SearchService {
  private searchResult = signal<YouTubeSearchResponse>({} as YouTubeSearchResponse);

  private filterTermValue = signal<string>('');

  searchResultData = this.searchResult.asReadonly();

  filterTerm = this.filterTermValue.asReadonly();

  getData() {
    this.searchResult.set(data);
  }

  setFilterTerm(term: string) {
    this.filterTermValue.set(term);
  }

  getSearchItemDetail(id: string) {
    if (!this.searchResultData().items) return null;
    return this.searchResult()?.items.find((item) => item.id === id);
  }

  sortData(params: { selectedField: 'publishedAt' | 'likeCount'; sortDirection: 'asc' | 'desc' }) {
    const originalItems = this.searchResult().items;
    const itemsToSort = [...originalItems];

    if (params.selectedField === 'likeCount') {
      itemsToSort.sort((a, b) => Number(b.statistics.likeCount) - Number(a.statistics.likeCount));
    } else if (params.selectedField === 'publishedAt') {
      // eslint-disable-next-line max-len
      itemsToSort.sort((a, b) => new Date(b.snippet.publishedAt).getTime() - new Date(a.snippet.publishedAt).getTime());
    }

    if (params.sortDirection === 'asc') {
      itemsToSort.reverse();
    }

    this.searchResult.update((prev) => ({ ...prev, items: itemsToSort }));
  }
}
