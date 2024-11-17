import { Component, Input } from '@angular/core';

import SearchItemComponent from '../search-item/search-item.component';
import { YouTubeSearchResponse } from '../search-response.model';
import FindByWordPipe from '../pipe/find-by-word.pipe';

@Component({
  selector: 'app-search-result',
  standalone: true,
  imports: [
    SearchItemComponent,
    FindByWordPipe,
  ],
  templateUrl: './search-result.component.html',
  styleUrl: './search-result.component.scss',
})
export default class SearchResultComponent {
  @Input({ required: true }) searchResultItems!: YouTubeSearchResponse;

  @Input({ required: true }) searchTerm!: string;
}
