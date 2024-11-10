import { Component } from '@angular/core';
import HeaderComponent from './header/header.component';
import SearchItemComponent from './search/search-item/search-item.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    SearchItemComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export default class AppComponent {
  title = 'yt-client';
}
