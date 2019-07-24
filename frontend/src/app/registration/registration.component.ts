import { Component, OnDestroy } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { AuthService } from '../auth.service';
import { BaseFormComponent } from '../base-form-component';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.styl']
})
export class RegistrationComponent extends BaseFormComponent implements OnDestroy {
  private unsubscribe$ = new Subject<void>();
  constructor(
    private _formBuilder: FormBuilder,
    private _router: Router,
    private _auth: AuthService
  ) {
    super();

    this.form = this._formBuilder.group({
      email: [
        '',
        [Validators.required, Validators.email],
        [this._auth.UniqueUserEmailValidator()]
      ],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(6)]]
    }, { updateOn: 'blur' });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  submit() {
    if (this.form.valid) {
      const registration = this.form.value;

      this._auth
        .createUser(
          registration.email,
          registration.password,
          registration.confirmPassword
        )
        .pipe(takeUntil(this.unsubscribe$))
        .subscribe((val) => { this._router.navigate(['login']); })
      ;
    }
  }

  cancel() {
    this._router.navigate(['']);
  }
}
