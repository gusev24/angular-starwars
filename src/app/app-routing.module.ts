import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardModule } from './pages/dashboard/dashboard.module';
import { PagesModule } from './pages/pages.module';

const routes: Routes = [];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    PagesModule
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
