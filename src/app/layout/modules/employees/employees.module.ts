import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeesRoutingModule } from './employees-routing.module';
import { EmployeesComponent } from './employees.component';
import { LayoutModule } from '../../layout.module';
import { EditComponent } from './edit/edit.component';


@NgModule({
  declarations: [
    EmployeesComponent,
    EditComponent
  ],
  imports: [
    CommonModule,
    EmployeesRoutingModule,
    LayoutModule
  ],
  entryComponents: [EditComponent]
})
export class EmployeesModule { }
