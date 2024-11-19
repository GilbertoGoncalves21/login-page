import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  private _form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) {
    this._form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    })
  }

  get form(): FormGroup {
    return this._form;
  }

  submit(): void {
    if (this.form.valid) {
      console.log(this.form.value);
    } else {
      console.error('Formulário inválido!');
    }
  }

  navigate(): void {
    this.router.navigate(["/sign-up"])
  }
}
