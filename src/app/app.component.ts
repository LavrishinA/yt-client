import { Component, inject } from '@angular/core';
import HeaderComponent from './core/components/header/header.component';
import SettingsComponent from './core/components/header/filter/filter.component';
import SearchService from './search/services/search.service';
import TemplateRefDirective from './shared/directive/template-ref.directive';
import SearchResultComponent from './search/components/search-result/search-result.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    SettingsComponent,
    TemplateRefDirective,
    SearchResultComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export default class AppComponent {
  title = 'yt-client';

  searchService = inject(SearchService);

  searchResultData = this.searchService.searchResultData;

  onSortParamsChanged(params: { selectedField: 'publishedAt' | 'likeCount'; sortDirection: 'asc' | 'desc' }) {
    this.searchService.sortData(params); // Get sorted data
  }

  onFilterTermChanged(term: string) {
    this.searchService.setFilterTerm(term);
  }
}
