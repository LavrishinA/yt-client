import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import SettingsService from '../../../services/settings.service';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [
    FormsModule,
  ],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.scss',
})
export default class SettingsComponent {
  settingsService = inject(SettingsService);

  currentField = this.settingsService.currentField;

  onChangeSortParams(field: 'publishedAt' | 'likeCount') {
    this.settingsService.changeSortParams(field);
  }
}
