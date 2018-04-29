import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import {SidebarComponent} from '../shared/sidebar/sidebar.component';
import {NavigationComponent} from '../shared/header-navigation/navigation.component';
import {BreadcrumbComponent} from '../shared/breadcrumb/breadcrumb.component';
import {NgbDropdownModule} from '@ng-bootstrap/ng-bootstrap';
import { LayoutsComponent } from './layouts.component';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgbDropdownModule,
    LayoutRoutingModule
  ],
  declarations: [
    SidebarComponent,
    NavigationComponent,
    BreadcrumbComponent,
    LayoutsComponent
  ]
})
export class LayoutModule { }
