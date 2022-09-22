import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { NavbarPageComponent } from './navbar-page/navbar-page.component';
import { FooterPageComponent } from './footer-page/footer-page.component';
import { MainPageComponent } from './main-page/main-page.component';
import { AhorcadoPageComponent } from './ahorcado-page/ahorcado-page.component';
import { RouterModule } from '@angular/router';
import { ChatComponent } from './chat/chat.component';
import { MayorMenorPageComponent } from './mayor-menor-page/mayor-menor-page.component';

@NgModule({
  declarations: [
    DashboardComponent,
    NavbarPageComponent,
    FooterPageComponent,
    MainPageComponent,
    AhorcadoPageComponent,
    ChatComponent,
    MayorMenorPageComponent,
  ],
  imports: [
    FormsModule,
    CommonModule,
    DashboardRoutingModule,
    RouterModule
  ]
})
export class DashboardModule { }
