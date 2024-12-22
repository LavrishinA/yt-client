import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import ButtonComponent from '../../../shared/components/button/button.component';

@Component({
  selector: 'app-auth-form',
  standalone: true,
  imports: [
    ButtonComponent,
    FormsModule,
  ],
  templateUrl: './auth-form.component.html',
  styleUrl: './auth-form.component.scss',
})
export default class AuthFormComponent {
  @Output() login = new EventEmitter<{ login: string, password: string }>();

  onSubmit(login: string, password: string) {
    this.login.emit({ login, password });
  }
}
