import { Injectable } from '@angular/core';
import { CanActivate, UrlTree, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class IsAuthGuard implements CanActivate {
  constructor (
    private _auth: AuthService,
    private _router: Router
  ) {}

  canActivate(): boolean | UrlTree {
    return this._auth.isAuth()
      ? true
      : this._router.parseUrl('/login');
  }
}
