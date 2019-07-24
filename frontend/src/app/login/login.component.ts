import { Component, OnDestroy } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject, throwError, of } from 'rxjs';
import { takeUntil, catchError, mapTo, tap } from 'rxjs/operators';

import { AuthService } from '../auth.service';
import { BaseFormComponent } from '../base-form-component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.styl']
})
export class LoginComponent extends BaseFormComponent implements OnDestroy {
  private unsubscribe$ = new Subject<void>();
  userNotExist = false;

  constructor(
    private _formBuilder: FormBuilder,
    private _router: Router,
    private _auth: AuthService
  ) {
    super();

    this.form = this._formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  submit() {
    this.userNotExist = false;

    if (this.form.valid) {
      const registration = this.form.value;

      this._auth
        .login(
          registration.email,
          registration.password
        )
        .pipe(
          takeUntil(this.unsubscribe$),
          catchError(() => {
            this.userNotExist = true;

            return of(false);
          })
        )
        .subscribe((state) => {
          if (state) {
            this._router.navigate(['']);
          }
        })
      ;
    }
  }
}
