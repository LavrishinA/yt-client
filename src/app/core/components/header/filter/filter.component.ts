import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [
    FormsModule,
  ],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss',
})
export default class FilterComponent {
  @Output() filterParams = new EventEmitter<{
    selectedField: 'publishedAt' | 'likeCount',
    sortDirection: 'asc' | 'desc'
  }>();

  @Output() filterTerm = new EventEmitter<string>();

  selectedField: 'publishedAt' | 'likeCount' = 'publishedAt';

  sortDirection: 'asc' | 'desc' = 'asc';

  filterTermValue: string = '';

  setSortParams(field: 'publishedAt' | 'likeCount') {
    if (this.selectedField !== field) {
      this.sortDirection = 'asc';
    } else {
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    }
    this.selectedField = field;
    this.filterParams.emit(
      { selectedField: this.selectedField, sortDirection: this.sortDirection },
    );
  }

  onChangeFilterTerm(term: string) {
    this.filterTerm.emit(term);
  }
}
