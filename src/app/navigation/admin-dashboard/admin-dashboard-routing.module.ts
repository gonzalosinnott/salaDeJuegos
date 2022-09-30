import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './admin-dashboard.component';
import { MainPageComponent } from './main-page/main-page.component';
import { CvPageComponent } from '../cv-page/cv-page.component';
import { NotFoundComponent } from '../not-found/not-found.component';

const routes: Routes = [
  { path: '',component: AdminDashboardComponent,children: [
    { path: '', pathMatch: 'full',component: MainPageComponent }]
  },
  { path: 'cv',component: CvPageComponent },
  { path: '**', pathMatch: 'full', component: NotFoundComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminDashboardRoutingModule {}