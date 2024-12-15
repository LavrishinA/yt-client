import { Component, inject } from '@angular/core';
import SearchService from '../../services/search.service';
import SearchResultComponent from '../../components/search-result/search-result.component';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [
    SearchResultComponent,
  ],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss',
})
export default class MainPageComponent {
  searchService = inject(SearchService);

  searchResultData = this.searchService.searchResultData;
}
