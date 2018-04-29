import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NewChallanComponent} from './new-challan.component';

const routes: Routes = [
    { path: '',
      data: {
        urls: [{title: 'Dashboard', url: '/dashboard'}, {title: 'Create Challan'}]
      },
      component: NewChallanComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewChallanRoutingModule { }
