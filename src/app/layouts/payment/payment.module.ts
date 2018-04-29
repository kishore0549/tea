import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaymentRoutingModule } from './payment-routing.module';
import { PaymentComponent } from './payment.component';
import {ChallansService} from '../challans/challans.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {DataTableModule} from 'angular5-data-table';
import {SumPipe} from '../../shared/pipe/sum.pipe';
import {NgbModalModule, NgbTooltip, NgbTooltipModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    DataTableModule,
    ReactiveFormsModule,
    NgbModalModule,
    PaymentRoutingModule
  ],
  declarations: [PaymentComponent, SumPipe],
  providers: [ChallansService]
})
export class PaymentModule { }
