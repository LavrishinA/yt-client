import { CanActivateFn, RedirectCommand, Router } from '@angular/router';
import { inject } from '@angular/core';
import AuthService from '../../auth/services/auth.service';

const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const authService = inject(AuthService);
  if (authService.isAuthenticated()) {
    return true;
  }
  return new RedirectCommand(router.parseUrl('/auth'));
};

export default authGuard;
