import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { PagesModule } from './pages.module';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graphic1Component } from './graphic1/graphic1.component';
import { PagesComponent } from './pages.component';
import { PromisesComponent } from './promises/promises.component';
import { RxjsComponent } from './rxjs/rxjs.component';

const routes: Routes = [
  { 
    path: 'dashboard', 
    component: PagesComponent,
    children: [
        { path: '', component: DashboardComponent, data: { title: 'Dashboard'}},
        { path: 'progress', component: ProgressComponent, data: { title: 'Progress Bar'}},
        { path: 'graphic1', component: Graphic1Component, data: { title: 'Graphic 1'}},
        { path: 'account-settings', component: AccountSettingsComponent, data: { title: 'Theme'}},
        { path: 'promises', component: PromisesComponent, data: { title: 'Promises'}},
        { path: 'rxjs', component: RxjsComponent, data: { title: 'RxJs'}},
      ]
  }      
];

@NgModule({
  exports: [  RouterModule ],
  imports: [  RouterModule.forChild( routes )],
})
export class PagesRoutingModule {}
