import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import HeaderService from '../../../services/header.service';

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
  settings = inject(HeaderService);

  currentField = this.settings.currentField;

  onChangeSortParams(field: 'publishedAt' | 'likeCount') {
    this.settings.changeSortParams(field);
  }
}
