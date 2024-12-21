import { Component, inject, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import ButtonComponent from '../../../shared/components/button/button.component';
import SearchService from '../../services/search.service';
import SearchDetailComponent from '../../components/search-detail/search-detail.component';

@Component({
  selector: 'app-detail-page',
  standalone: true,
  imports: [
    ButtonComponent,
    RouterLink,
    SearchDetailComponent,
  ],
  templateUrl: './detail-page.component.html',
  styleUrl: './detail-page.component.scss',
})
export default class DetailPageComponent {
  @Input({ required: true }) id!: string;

  private searchService = inject(SearchService);

  get itemDetail() {
    return this.searchService.getSearchItemDetail(this.id);
  }
}
