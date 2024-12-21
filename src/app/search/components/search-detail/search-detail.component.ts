import { Component, input } from '@angular/core';
import { DatePipe } from '@angular/common';
import CommentCountIconComponent
  from '../../../shared/components/icons/comment-count-icon/comment-count-icon.component';
import DislikeCountComponent from '../../../shared/components/icons/dislike-count-icon/dislike-count.component';
import LikeIconComponent from '../../../shared/components/icons/like-icon/like-icon.component';
import ViewCountsComponent from '../../../shared/components/icons/view-counts-icon/view-counts.component';
import ColoredBorderDirective from '../../../shared/directive/colored-border.directive';
import { Item } from '../../model/search-item.model';

@Component({
  selector: 'app-search-detail',
  standalone: true,
  imports: [
    CommentCountIconComponent,
    DislikeCountComponent,
    LikeIconComponent,
    ViewCountsComponent,
    DatePipe,
    ColoredBorderDirective,

  ],
  templateUrl: './search-detail.component.html',
  styleUrl: './search-detail.component.scss',
})
export default class SearchDetailComponent {
  itemDetail = input.required<Item>();
}
