import { Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';
import { Item } from '../search-item.model';
import ViewCountsComponent from '../../shared/icons/view-counts-icon/view-counts.component';
import LikeIconComponent from '../../shared/icons/like-icon/like-icon.component';
import DislikeCountComponent from '../../shared/icons/dislike-count-icon/dislike-count.component';
import CommentCountIconComponent from '../../shared/icons/comment-count-icon/comment-count-icon.component';
import ButtonComponent from '../../shared/button/button.component';

@Component({
  selector: 'app-search-item',
  standalone: true,
  imports: [
    ViewCountsComponent,
    LikeIconComponent,
    DislikeCountComponent,
    CommentCountIconComponent,
    ButtonComponent,
    NgClass,
  ],
  templateUrl: './search-item.component.html',
  styleUrl: './search-item.component.scss',
})
export default class SearchItemComponent {
  @Input({ required: true }) itemData!: Item;

  timeDiff: number = 0;

  setBorderClass(publishedAt: string): string {
    const now = new Date();

    this.timeDiff = (now.getTime() - new Date(publishedAt).getTime()) / (1000 * 60 * 60 * 24);

    if (this.timeDiff > 180) {
      return 'border-red';
    }
    if (this.timeDiff > 30) {
      return 'border-yellow';
    }
    if (this.timeDiff > 7) {
      return 'border-green';
    }
    return 'border-blue';
  }
}
