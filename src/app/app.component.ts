import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import ButtonComponent from './shared/button/button.component';
import SettingsIconComponent from './shared/icons/settings-icon/settings-icon.component';
import UserIconComponent from './shared/icons/user-icon/user-icon.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ButtonComponent, SettingsIconComponent, UserIconComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export default class AppComponent {
  title = 'yt-client';
}
