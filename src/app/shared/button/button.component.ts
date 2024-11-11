import { Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({

  selector: 'app-button',
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
