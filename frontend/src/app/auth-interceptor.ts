import { Injectable } from '@angular/core';
import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest
} from '@angular/common/http';
import { Observable } from 'rxjs';

import { AuthService } from './auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor (
      private _auth: AuthService
    ) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      if (!this._auth.isAuth) {
        return next.handle(req);
      }

      const modified = req.clone({
        setHeaders: {
          'X-AUTH-TOKEN': `Bearer ${this._auth.token}`
        }
      });

      return next.handle(modified);
    }
}
