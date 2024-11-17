import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import ButtonComponent from '../shared/button/button.component';
import SettingsIconComponent from '../shared/icons/settings-icon/settings-icon.component';
import UserIconComponent from '../shared/icons/user-icon/user-icon.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    ButtonComponent,
    SettingsIconComponent,
    UserIconComponent,
    FormsModule,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export default class HeaderComponent {
  @Output() isSubmitted = new EventEmitter<void>();

  @Output() sortParams = new EventEmitter<{ direction: 'asc' | 'desc', field: 'publishedAt' | 'likeCount' }>();

  @Output() changeSearchTerm = new EventEmitter<string>();

  isOpenSettingMenu: boolean = false;

  sortDirection: 'asc' | 'desc' = 'asc';

  currentField: 'publishedAt' | 'likeCount' | null = null;

  searchTerm: string = '';

  onChangeSetting() {
    this.isOpenSettingMenu = !this.isOpenSettingMenu;
  }

  onSubmit() {
    this.isSubmitted.emit();
  }

  onChangeSortParams(field: 'publishedAt' | 'likeCount') {
    if (this.currentField !== field) {
      this.sortDirection = 'asc';
    } else {
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    }
    this.currentField = field;
    this.sortParams.emit({ direction: this.sortDirection, field });
  }

  onChangeSearchTerm(searchTerm: string) {
    this.changeSearchTerm.emit(searchTerm);
  }
}
