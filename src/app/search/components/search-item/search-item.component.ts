import { Component, Input } from '@angular/core';
import { Item } from '../../model/search-item.model';
import ViewCountsComponent from '../../../shared/components/icons/view-counts-icon/view-counts.component';
import LikeIconComponent from '../../../shared/components/icons/like-icon/like-icon.component';
import DislikeCountComponent from '../../../shared/components/icons/dislike-count-icon/dislike-count.component';
import CommentCountIconComponent
  from '../../../shared/components/icons/comment-count-icon/comment-count-icon.component';
import ButtonComponent from '../../../shared/components/button/button.component';
import ColoredBorderDirective from '../../../shared/directive/colored-border.directive';

@Component({
  selector: 'app-search-item',
  standalone: true,
  imports: [
    ViewCountsComponent,
    LikeIconComponent,
    DislikeCountComponent,
    CommentCountIconComponent,
    ButtonComponent,
    ColoredBorderDirective,
  ],
  templateUrl: './search-item.component.html',
  styleUrl: './search-item.component.scss',
})
export default class SearchItemComponent {
  @Input({ required: true }) itemData!: Item;
}
