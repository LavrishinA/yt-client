import {
  computed, inject, Injectable, signal,
} from '@angular/core';
import type { YouTubeSearchResponse } from '../model/search-response.model';
import SettingsService from '../../core/services/settings.service';
import data from '../../response.json';

@Injectable({
  providedIn: 'root',
})
export default class SearchService {
  settingsService = inject(SettingsService);

  sortDirection = this.settingsService.sortDirection;

  currentField = this.settingsService.currentField;

  searchTerm = this.settingsService.searchTerm;

  private _searchResultData = signal<YouTubeSearchResponse>(data);

  // eslint-disable-next-line max-len
  filteredResultData = computed(() => this.sortSearchResultData(this.sortDirection(), this.currentField()));

  sortSearchResultData(direction: 'asc' | 'desc', field: 'publishedAt' | 'likeCount' | null) {
    let sortedItems;
    if (field === 'likeCount') {
      // eslint-disable-next-line max-len
      sortedItems = [...this._searchResultData().items].sort((a, b) => Number(b.statistics.likeCount) - Number(a.statistics.likeCount));
    }
    if (field === 'publishedAt') {
      // eslint-disable-next-line max-len
      sortedItems = [...this._searchResultData().items].sort((a, b) => new Date(b.snippet.publishedAt).getTime() - new Date(a.snippet.publishedAt).getTime());
    }
    if (sortedItems) {
      return {
        ...this._searchResultData(),
        items: direction === 'asc' ? [...sortedItems] : [...sortedItems.reverse()],
      };
    }
    return this._searchResultData();
  }
}
