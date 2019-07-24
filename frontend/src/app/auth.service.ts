import { Injectable, InjectionToken } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import {
  AbstractControl,
  ValidationErrors,
  AsyncValidatorFn
} from '@angular/forms';
import { BehaviorSubject, Observable, throwError, of } from 'rxjs';
import { pluck, tap, map, catchError } from 'rxjs/operators';

export const TOKEN_STORE = new InjectionToken<TokenStore>('TOKEN_STORE');

export interface AccessToken {
  access_token: string;
}

export interface TokenStore {
  getItem(key: string): string;
  setItem(key: string, value: string): void;
  removeItem(key: string): void;
}

@Injectable()
export class AuthService {
  private _token: AccessToken;

  readonly authStateChange$ = new BehaviorSubject<boolean>(false);

  constructor(
      private _http: HttpClient,
      private _store: TokenStore,
      private _tokenKeyInStore: string
  ) {}

  get token(): string {
    return this._token && this._token.access_token || '';
  }

  login(email, password): Observable<any> {
    const params = new HttpParams()
      .set('email', email)
      .set('password', password)
    ;

    return this._http
      .get( '/api/login', { params })
      .pipe(
        pluck('response'),
        tap((token: string) => {
          this.setToken({ access_token: token });
        })
      )
    ;
  }

  logout() {
    this.resetToken();
  }

  createUser(email, password, confirmPassword): Observable<any> {
    const params = new HttpParams()
      .set('email', email)
      .set('password', password)
      .set('confirmPassword', confirmPassword)
    ;

    return this._http.post( '/api/registration', '', { params } );
  }

  isUniqueUserEmail(email: string): Observable<boolean> {
    const params = new HttpParams()
      .set('email', email)
    ;

    return this._http.get<boolean>(
      '/api/is-unique-email',
       { params }
    ).pipe(
      pluck('response')
    );
  }

  UniqueUserEmailValidator(): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors|null> => {
      return this
        .isUniqueUserEmail(control.value)
        .pipe(
          catchError(() => of(false)),
          map(result =>
            result ? null : {UserUniqueEmail: true}
          )
        );
    };
  }

  isAuth(): boolean {
    return Boolean(this._token
      && this._token.access_token
    );
  }

  setToken(token: AccessToken) {
    this._token = token;
    this.saveToken();
  }

  resetToken() {
    this._token = undefined;
    this.removeTokenFromStore(this._tokenKeyInStore);
  }

  saveToken() {
    this.saveTokenToStore(this._tokenKeyInStore);
  }

  loadToken() {
    this.loadTokenFromStore(this._tokenKeyInStore);
  }

  private saveTokenToStore(key: string) {
    this._store.setItem(key, JSON.stringify(this._token));

    if (this.isAuth()) {
      this.authStateChange$.next(true);
    }
  }

  private loadTokenFromStore(key: string) {
    this._token = JSON.parse(this._store.getItem(key)) as AccessToken;

    if (this.isAuth()) {
      this.authStateChange$.next(true);
    }
  }

  private removeTokenFromStore(key: string) {
    this._store.removeItem(key);
    this.authStateChange$.next(false);
  }
}
