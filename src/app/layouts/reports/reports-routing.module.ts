import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ReportsComponent} from './reports.component';
import {ReportsService} from '../../shared/services/reports.service';

const routes: Routes = [
  { path: '', component: ReportsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [ReportsService]
})
export class ReportsRoutingModule { }
