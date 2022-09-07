import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { NavbarPageComponent } from './navbar-page/navbar-page.component';
import { FooterPageComponent } from './footer-page/footer-page.component';
import { MainPageComponent } from './main-page/main-page.component';
import { Juego1PageComponent } from './juego1-page/juego1-page.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    DashboardComponent,
    NavbarPageComponent,
    FooterPageComponent,
    MainPageComponent,
    Juego1PageComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    RouterModule
  ]
})
export class DashboardModule { }
