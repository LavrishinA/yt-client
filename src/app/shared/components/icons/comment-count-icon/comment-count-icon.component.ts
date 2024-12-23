import { Component } from '@angular/core';

@Component({
  selector: 'app-comment-count-icon',
  standalone: true,
  imports: [],
  template: `
    <svg width="13" height="13" viewBox="0 0 13 13" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M0 4.1687V11.75C0 12.4406 0.559375 13 1.25 13H8.83125C9.52188 13 10.0813 12.4406 10.0813 11.75V4.1687C10.0813 3.47808 9.52188 2.9187 8.83125 2.9187H1.25C0.559375 2.9187 0 3.47808 0 4.1687Z"/>
      <path
        d="M2.91797 1.25V2.1375C2.91797 2.20625 2.97422 2.2625 3.04297 2.2625H9.23672C10.0617 2.2625 10.7367 2.9375 10.7367 3.7625V9.95625C10.7367 10.025 10.793 10.0813 10.8617 10.0813H11.7492C12.4398 10.0813 12.9992 9.52188 12.9992 8.83125V1.25C12.9992 0.559375 12.4398 0 11.7492 0H4.16797C3.47734 0 2.91797 0.559375 2.91797 1.25Z"/>
    </svg>
  `,
  styles: [`:host {
    display: flex;
  }`],
})
export default class CommentCountIconComponent {

}
