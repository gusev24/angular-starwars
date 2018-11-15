import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardModule } from './dashboard/dashboard.module';
import { RouterModule } from '@angular/router';
import { UserModule } from './user/user.module';

@NgModule({
  imports: [
    CommonModule,
    DashboardModule,
    UserModule
  ],
  declarations: [],
  exports: [
    RouterModule
  ]
})
export class PagesModule { }
