import {CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgSelectModule, NG_SELECT_DEFAULT_CONFIG } from '@ng-select/ng-select';
import { NewChallanRoutingModule } from './new-challan-routing.module';
import {NewChallanComponent} from './new-challan.component';
import {NgbDatepickerModule, NgbDropdownModule} from '@ng-bootstrap/ng-bootstrap';
import {FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {FileUploadService} from '../../shared/services/file-upload.service';
import {ZoneService} from '../../shared/services/zone.service';
import {SiteLocationService} from '../../shared/services/site-location.service';
import {NewChallanService} from './new-challan.service';



@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    NgbDatepickerModule,
    NgSelectModule,
    NewChallanRoutingModule
  ],
  declarations: [NewChallanComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
  providers: [
    FileUploadService,
    ZoneService,
    SiteLocationService,
    NewChallanService,
  {
    provide: NG_SELECT_DEFAULT_CONFIG,
    useValue: {
      notFoundText: 'Custom not found'
    }
  }
  ]
})
export class NewChallanModule { }
