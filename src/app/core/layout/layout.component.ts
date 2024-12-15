import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import SearchService from '../../search/services/search.service';
import FilterComponent from '../components/header/filter/filter.component';
import HeaderComponent from '../components/header/header.component';
import SearchResultComponent from '../../search/components/search-result/search-result.component';
import TemplateRefDirective from '../../shared/directive/template-ref.directive';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [
    FilterComponent,
    HeaderComponent,
    SearchResultComponent,
    TemplateRefDirective,
    RouterOutlet,
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
})
export default class LayoutComponent {
  searchService = inject(SearchService);

  onSortParamsChanged(params: { selectedField: 'publishedAt' | 'likeCount'; sortDirection: 'asc' | 'desc' }) {
    this.searchService.sortData(params); // Get sorted data
  }

  onFilterTermChanged(term: string) {
    this.searchService.setFilterTerm(term);
  }
}
