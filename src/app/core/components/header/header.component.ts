import {
  Component, contentChild, EventEmitter, inject, Output,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgTemplateOutlet } from '@angular/common';
import ButtonComponent from '../../../shared/components/button/button.component';
import SettingsIconComponent from '../../../shared/components/icons/settings-icon/settings-icon.component';
import UserIconComponent from '../../../shared/components/icons/user-icon/user-icon.component';
import TemplateRefDirective from '../../../shared/directive/template-ref.directive';
import AuthService from '../../../auth/services/auth.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    ButtonComponent,
    SettingsIconComponent,
    UserIconComponent,
    FormsModule,
    NgTemplateOutlet,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export default class HeaderComponent {
  @Output() formSubmitted = new EventEmitter<void>();

  settings = contentChild.required(TemplateRefDirective);

  authService = inject(AuthService);

  isOpenSettingMenu: boolean = false;

  onChangeSetting() {
    this.isOpenSettingMenu = !this.isOpenSettingMenu;
  }

  onSubmit() {
    this.formSubmitted.emit();
  }

  logout() {
    this.authService.logout();
  }
}
