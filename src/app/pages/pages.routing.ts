import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { PagesModule } from './pages.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graphic1Component } from './graphic1/graphic1.component';
import { PagesComponent } from './pages.component';

const routes: Routes = [
  { 
    path: 'dashboard', 
    component: PagesComponent,
    children: [
        { path: '', component: DashboardComponent },
        { path: 'progress', component: ProgressComponent },
        { path: 'graphic1', component: Graphic1Component },
      ]
  }      
];

@NgModule({
  exports: [  RouterModule ],
  imports: [  RouterModule.forChild( routes )],
})
export class PagesRoutingModule {}
