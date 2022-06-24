import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { SidebarComponent } from '../components/sidebar/sidebar.component';
import { SharedModule } from '../shared/shared.module';
import { TopnavComponent } from '../components/topnav/topnav.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [
    LayoutComponent,
    SidebarComponent,
    TopnavComponent,
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule
  ],
  exports: [
    SharedModule,
    FormsModule
  ]
})
export class LayoutModule { }
