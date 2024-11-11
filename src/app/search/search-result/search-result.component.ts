import { Component } from '@angular/core';
import data from '../response.json';
import SearchItemComponent from '../search-item/search-item.component';

@Component({
  selector: 'app-search-result',
  standalone: true,
  imports: [
    SearchItemComponent,
  ],
  templateUrl: './search-result.component.html',
  styleUrl: './search-result.component.scss',
})
export default class SearchResultComponent {
  protected readonly data = data;
}
