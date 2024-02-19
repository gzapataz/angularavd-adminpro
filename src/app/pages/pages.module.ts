import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DashboardComponent } from './dashboard/dashboard.component';
import { Graphic1Component } from './graphic1/graphic1.component';
import { PagesComponent } from './pages.component';
import { ProgressComponent } from './progress/progress.component';
import { SharedModule } from '../shared/shared.module';
import { AppRoutingModule } from '../app-routing.module';
import { ComponentsModule } from '../components/components.module';



@NgModule({
  declarations: [
    DashboardComponent,
    Graphic1Component,
    PagesComponent,
    ProgressComponent,
  ],
  exports: [
    DashboardComponent,
    Graphic1Component,
    PagesComponent,
    ProgressComponent,
  ],
  imports: [
    AppRoutingModule,
    CommonModule,
    ComponentsModule,
    FormsModule,
    SharedModule
  ]
})
export class PagesModule { }
