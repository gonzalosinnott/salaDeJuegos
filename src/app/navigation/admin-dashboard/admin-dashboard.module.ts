import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AdminDashboardRoutingModule } from './admin-dashboard-routing.module';
import { AdminDashboardComponent } from './admin-dashboard.component';
import { MainPageComponent } from './main-page/main-page.component';



@NgModule({
  declarations: [
    AdminDashboardComponent,
    MainPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    AdminDashboardRoutingModule
  ]
})
export class AdminDashboardModule { }
