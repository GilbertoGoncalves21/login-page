import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LoginService } from 'src/app/services/login-service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  private _form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private loginService: LoginService,
    private toastrService: ToastrService

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
    if (!this.form.valid) {
    }

    this.loginService.login(this._form.value.email, this._form.value.password).subscribe({
      next: () => this.toastrService.success("Login efetuado com sucesso!"),
      error: () => this.toastrService.error("Ocorreu uma falha ao realizar o login.")
    })
  }

  navigate(): void {
    this.router.navigate(["/sign-up"])
  }
}
