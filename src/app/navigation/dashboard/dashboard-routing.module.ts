import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { MainPageComponent } from './main-page/main-page.component';
import { Juego1PageComponent } from './juego1-page/juego1-page.component';
import { CvPageComponent } from '../cv-page/cv-page.component';
import { NotFoundComponent } from '../not-found/not-found.component';

const routes: Routes = [
  { path: '',component: DashboardComponent,children: [
    { path: '', pathMatch: 'full',component: MainPageComponent },
    { path: 'juego1' , pathMatch: 'full',component: Juego1PageComponent },
  ] },
  { path: 'cv',component: CvPageComponent },
  { path: '**', pathMatch: 'full', component: NotFoundComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}