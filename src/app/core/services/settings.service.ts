import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export default class SettingsService {
  private _sortDirection = signal<'asc' | 'desc'>('asc');

  private _currentField = signal<'publishedAt' | 'likeCount' | null>(null);

  private _searchTerm = signal<string>('');

  get sortDirection() {
    return this._sortDirection.asReadonly();
  }

  get currentField() {
    return this._currentField.asReadonly();
  }

  get searchTerm() {
    return this._searchTerm.asReadonly();
  }

  setSearchTerm(value: string) {
    this._searchTerm.set(value);
  }

  changeSortParams(field: 'publishedAt' | 'likeCount') {
    if (this._currentField() !== field) {
      this._sortDirection.set('asc');
    } else {
      this._sortDirection.update((previousDirection) => (previousDirection === 'asc' ? 'desc' : 'asc'));
    }
    this._currentField.set(field);
  }
}
