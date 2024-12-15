import { Component, inject, Input } from '@angular/core';
import { DatePipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import SearchService from '../../services/search.service';
import CommentCountIconComponent
  from '../../../shared/components/icons/comment-count-icon/comment-count-icon.component';
import DislikeCountComponent from '../../../shared/components/icons/dislike-count-icon/dislike-count.component';
import LikeIconComponent from '../../../shared/components/icons/like-icon/like-icon.component';
import ViewCountsComponent from '../../../shared/components/icons/view-counts-icon/view-counts.component';
import ButtonComponent from '../../../shared/components/button/button.component';

@Component({
  selector: 'app-search-detail',
  standalone: true,
  imports: [
    CommentCountIconComponent,
    DislikeCountComponent,
    LikeIconComponent,
    ViewCountsComponent,
    DatePipe,
    RouterLink,
    ButtonComponent,

  ],
  templateUrl: './search-detail.component.html',
  styleUrl: './search-detail.component.scss',
})
export default class SearchDetailComponent {
  @Input({ required: true }) id!: string;

  private searchService = inject(SearchService);

  get itemDetail() {
    return this.searchService.getSearchItemDetail(this.id);
  }
}
