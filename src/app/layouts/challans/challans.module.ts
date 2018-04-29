import {CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';

import {NgbDropdownModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from '@angular/forms';
import {ChallansRoutingModule} from './challans-routing.module';
import {ChallansComponent} from './challans.component';
import {ChallansListComponent} from './challans-list/challans-list.component';
import {DetailsComponent} from './details/details.component';
import {ChallansService} from './challans.service';
import {DataTableModule} from 'angular5-data-table';
import {NgxDatatableModule} from '@swimlane/ngx-datatable';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import {ChallanResolver} from './challan-resolver';




@NgModule({
    imports: [
        FormsModule,
        CommonModule,
        NgbDropdownModule.forRoot(),
        DataTableModule,
        NgxDatatableModule,
        Ng2SmartTableModule,
        ChallansRoutingModule
    ],
    declarations: [
        ChallansComponent,
        ChallansListComponent,
        DetailsComponent
    ],
    providers: [ChallansService, ChallanResolver],
    schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class ChallansModule { }
