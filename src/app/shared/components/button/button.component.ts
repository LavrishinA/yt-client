import { Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({

  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'button[appButton], a[appButton]',
  standalone: true,
  imports: [
    NgClass,
  ],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export default class ButtonComponent {
  @Input({ required: true }) variant: 'primary' | 'icon-button' = 'primary';
}
