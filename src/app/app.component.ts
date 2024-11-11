import { Component } from '@angular/core';
import HeaderComponent from './header/header.component';
import SearchResultComponent from './search/search-result/search-result.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    SearchResultComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export default class AppComponent {
  title = 'yt-client';

  isSearchComplete: boolean = false;

  onSubmit() {
    this.isSearchComplete = true;
  }
}
