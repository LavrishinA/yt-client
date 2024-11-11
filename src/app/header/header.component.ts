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

  isOpenSettingMenu: boolean = false;

  onChangeSetting() {
    this.isOpenSettingMenu = !this.isOpenSettingMenu;
  }

  onSubmit() {
    this.isSubmitted.emit();
  }
}
