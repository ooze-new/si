import { FormGroup } from '@angular/forms';

export class BaseFormComponent {
  form: FormGroup;

  isValidField(name: string): boolean {
    const control = this.form.controls[name];

    return control.valid;
  }

  isTouchedField(name: string): boolean {
    const control = this.form.controls[name];

    return control.touched;
  }

  fieldError(name: string, error: string) {
    const control = this.form.controls[name];

    return control.errors && control.errors[error];
  }
}
