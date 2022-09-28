import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { MainPageComponent } from './main-page/main-page.component';
import { AhorcadoPageComponent } from './ahorcado-page/ahorcado-page.component';
import { MayorMenorPageComponent } from './mayor-menor-page/mayor-menor-page.component';
import { PreguntadosPageComponent } from './preguntados-page/preguntados-page.component';
import { SnakePageComponent } from './snake-page/snake-page.component';
import { CvPageComponent } from '../cv-page/cv-page.component';
import { EncuestaPageComponent } from './encuesta-page/encuesta-page.component';
import { NotFoundComponent } from '../not-found/not-found.component';

const routes: Routes = [
  { path: '',component: DashboardComponent,children: [
    { path: '', pathMatch: 'full',component: MainPageComponent },
    { path: 'ahorcado' , pathMatch: 'full',component: AhorcadoPageComponent },
    { path: 'mayormenor' , pathMatch: 'full',component: MayorMenorPageComponent },
    { path: 'preguntados' , pathMatch: 'full',component: PreguntadosPageComponent },
    { path: 'snake' , pathMatch: 'full',component: SnakePageComponent },
    { path: 'encuesta' , pathMatch: 'full',component: EncuestaPageComponent },
  ] },
  { path: 'cv',component: CvPageComponent },
  { path: '**', pathMatch: 'full', component: NotFoundComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}