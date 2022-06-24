import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../shared/guard/auth.guard';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        loadChildren: () =>
          import('./modules/home/home.module').then(
            (m) => m.HomeModule
          ),
        data: {
          breadcrumb: 'Home',
          urlhistory: '',
        },
      },
      {
        path: 'employees',
        loadChildren: () =>
          import('./modules/employees/employees.module').then(
            (m) => m.EmployeesModule
          ),
        data: {
          breadcrumb: 'Empleados',
          urlhistory: '',
        },
      },
      {
        path: 'groups',
        loadChildren: () =>
          import('./modules/groups/groups.module').then(
            (m) => m.GroupsModule
          ),
        data: {
          breadcrumb: 'Grupos',
          urlhistory: '',
        },
      },
    ],
    canActivateChild: [AuthGuard],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
