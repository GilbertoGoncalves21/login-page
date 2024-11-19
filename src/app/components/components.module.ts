import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultLoginLayoutComponent } from './default-login-layout/default-login-layout.component';
import { PrimaryInputComponent } from './primary-input/primary-input.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    DefaultLoginLayoutComponent,
    PrimaryInputComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    DefaultLoginLayoutComponent,
    PrimaryInputComponent
  ]
})
export class ComponentsModule { }
