import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ChallansListComponent} from './challans-list/challans-list.component';
import {DetailsComponent} from './details/details.component';
import {ChallanResolver} from './challan-resolver';

const routes: Routes = [
    {
      path: '',
      data: {
        urls: [{title: 'Dashboard', url: '/dashboard'}, {title: 'Challan List'}]
       },
      component: ChallansListComponent,
      resolve: {
        challansList: ChallanResolver
      }
    },
    {
        path: ':id',
      data: {
        urls: [{title: 'Dashboard', url: '/dashboard'}, {title: 'Challans List', url: '/challans'}, {title: 'Challan Details'}]
      },
        component: DetailsComponent
    }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChallansRoutingModule { }
