import { Component, contentChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgTemplateOutlet } from '@angular/common';
import ButtonComponent from '../../../shared/components/button/button.component';
import SettingsIconComponent from '../../../shared/components/icons/settings-icon/settings-icon.component';
import UserIconComponent from '../../../shared/components/icons/user-icon/user-icon.component';
import TemplateRefDirective from '../../../shared/directive/template-ref.directive';

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
  searchKey: string = '';

  settings = contentChild.required(TemplateRefDirective);

  isOpenSettingMenu: boolean = false;

  onChangeSetting() {
    this.isOpenSettingMenu = !this.isOpenSettingMenu;
  }

  onSubmit() {

  }
}
