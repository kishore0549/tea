import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LayoutsComponent} from './layouts.component';
import {AuthGuard} from '../shared/guard';

const routes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    component: LayoutsComponent,
    children: [
      {path: 'challans', loadChildren: './challans/challans.module#ChallansModule', canActivate: [AuthGuard]},
      {path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule', canActivate: [AuthGuard]},
      {path: 'create-challan', loadChildren: './new-challan/new-challan.module#NewChallanModule', canActivate: [AuthGuard]},
      {path: 'payment', loadChildren: './payment/payment.module#PaymentModule', canActivate: [AuthGuard]},
      {path: 'reports', loadChildren: './reports/reports.module#ReportsModule', canActivate: [AuthGuard]}
    ]
  }];

@NgModule({
imports: [RouterModule.forChild(routes)],
exports: [RouterModule]
})
export class LayoutRoutingModule { }
