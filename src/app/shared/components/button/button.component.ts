import { Component, Input } from '@angular/core';

@Component({

  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'button[appButton], a[appButton]',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export default class ButtonComponent {
  @Input({ required: true }) variant: 'primary' | 'icon-button' = 'primary';
}
