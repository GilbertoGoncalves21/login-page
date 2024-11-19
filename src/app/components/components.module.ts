import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultLoginLayoutComponent } from './default-login-layout/default-login-layout.component';



@NgModule({
  declarations: [
    DefaultLoginLayoutComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DefaultLoginLayoutComponent
  ]
})
export class ComponentsModule { }
