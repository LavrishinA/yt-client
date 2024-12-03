import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [
    FormsModule,
  ],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.scss',
})
export default class SettingsComponent {
  @Output() sortParams = new EventEmitter<{ direction: 'asc' | 'desc', field: 'publishedAt' | 'likeCount' }>();

  @Output() changeSearchTerm = new EventEmitter<string>();

  sortDirection: 'asc' | 'desc' = 'asc';

  currentField: 'publishedAt' | 'likeCount' | null = null;

  searchTerm: string = '';

  onChangeSortParams(field: 'publishedAt' | 'likeCount') {
    if (this.currentField !== field) {
      this.sortDirection = 'asc';
    } else {
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    }
    this.currentField = field;
    this.sortParams.emit({ direction: this.sortDirection, field });
  }

  onChangeSearchTerm(searchTerm: string) {
    this.changeSearchTerm.emit(searchTerm);
  }
}
