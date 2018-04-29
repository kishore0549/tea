import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportsRoutingModule } from './reports-routing.module';
import { ReportsComponent } from './reports.component';
import {ChartsModule} from 'ng2-charts';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    CommonModule,
    ChartsModule,
    ReportsRoutingModule
  ],
  declarations: [ReportsComponent]
})
export class ReportsModule { }
