import { Component, inject } from '@angular/core';
import AuthFormComponent from '../../components/auth-form/auth-form.component';
import AuthService from '../../services/auth.service';

@Component({
  selector: 'app-auth-page',
  standalone: true,
  imports: [
    AuthFormComponent,
  ],
  templateUrl: './auth-page.component.html',
  styleUrl: './auth-page.component.scss',
})
export default class AuthPageComponent {
  authService = inject(AuthService);

  onLogin(login: string, password: string) {
    this.authService.login(login, password);
  }
}
