import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GroupsRoutingModule } from './groups-routing.module';
import { GroupsComponent } from './groups.component';
import { LayoutModule } from '../../layout.module';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [
    GroupsComponent
  ],
  imports: [
    CommonModule,
    GroupsRoutingModule,
    LayoutModule,
    FlexLayoutModule.withConfig({ addFlexToParent: false }),

  ]
})
export class GroupsModule { }
