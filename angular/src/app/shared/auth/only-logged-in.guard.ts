import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OnlyLoggedInGuard implements CanActivate {

  constructor(private authService: AuthService,
    private router: Router) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (this.authService.isAuthenticated())
      return true;
    return this.authService.checkLogin().pipe(map(result => {
      if (!result) {
        this.router.navigate(['/login'], {
          queryParams: {
            return: state.url
          }
        });
        return false;
      }
      return true;
    }
    ));
  }
}
