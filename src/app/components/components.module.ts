import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgChartsModule } from 'ng2-charts';

import { IncrementerComponent } from './incrementer/incrementer.component';
import { FormsModule } from '@angular/forms';
import { DonaComponent } from './dona/dona.component';



@NgModule({
  declarations: [
    IncrementerComponent,
    DonaComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgChartsModule
  ],
  exports: [
    IncrementerComponent,
    DonaComponent
  ]
})
export class ComponentsModule { }
