import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PaymentComponent} from './payment.component';

const routes: Routes = [
  {
    path: '',
    data: {
      urls: [{title: 'Dashboard', url: '/dashboard'}, {title: 'Payment'}]
    },
    component: PaymentComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaymentRoutingModule { }
