import { Component, inject } from '@angular/core';
import HeaderComponent from './core/components/header/header.component';
import SearchResultComponent from './search/components/search-result/search-result.component';

import SettingsComponent from './core/components/header/settings/settings.component';
import TemplateRefDirective from './shared/directive/template-ref.directive';
import SearchService from './search/services/search.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    SearchResultComponent,
    SettingsComponent,
    TemplateRefDirective,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export default class AppComponent {
  title = 'yt-client';

  searchService = inject(SearchService);

  data = this.searchService.filteredResultData;
}
