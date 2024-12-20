import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { ComponentsModule } from '../components/components.module';
import { RoutingModule } from './routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginService } from '../services/login-service/login.service';
import { SignUpComponent } from './sign-up/sign-up.component';

@NgModule({
  declarations: [
    LoginComponent,
    SignUpComponent
  ],
  imports: [
    CommonModule,
    RoutingModule,
    ComponentsModule,
    ReactiveFormsModule,
  ],
  providers: [
    LoginService
  ]
})
export class PagesModule { }
