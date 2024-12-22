import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export default class AuthService {
  private readonly AUTH_TOKEN_KEY = 'authToken';

  router = inject(Router);

  login(username: string, password: string) {
    // console.log(username, password);
    // Simulate successful login by saving a fake token
    const fakeAuthToken = 'fake-auth-token';
    localStorage.setItem(this.AUTH_TOKEN_KEY, fakeAuthToken);
    this.router.navigate(['/main']);
  }

  logout(): void {
    localStorage.removeItem(this.AUTH_TOKEN_KEY);
    this.router.navigate(['/auth']);
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem(this.AUTH_TOKEN_KEY);
  }
}
