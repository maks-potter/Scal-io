import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/internal/operators/tap';
import {map} from 'rxjs/internal/operators/map';

import {AuthService} from './auth.service';
import {ServerResponse} from '../models/response.model';
import {LoginService} from './login.service';

@Injectable({
  providedIn: 'root',
})
export class GuardService implements CanActivate {
  private isLoggedIn: Observable<boolean>;

  constructor(private router: Router,
              private authService: AuthService,
              private loginService: LoginService) {
    this.isLoggedIn = this.authService.isLoggedIn();
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
    if (!this.authService.status) {
      return this.loginService.onLogin()
        .pipe(
            tap((resp: ServerResponse) => {
              this.authService.status = resp.status === 200;
            }),
            map((resp: ServerResponse) => resp.status === 200)
          );
    } else {
      this.isLoggedIn
        .subscribe((loggedin: boolean) => {
          if (!loggedin) {
            this.router.navigate(['']);
          }
        });

      return this.isLoggedIn;
    }
  }
}
