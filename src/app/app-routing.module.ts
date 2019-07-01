import { EmployeesComponent } from './employees/employees.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddComponent } from './employees/add/add.component';
import { UpdateComponent } from './employees/update/update.component';

const routes: Routes = [
  {
  path:"",
  component: EmployeesComponent
  },

  {
    path:"add",
    component: AddComponent
  },
  {
    path: "update/:id",
    component: UpdateComponent
  },
  {
    path:"**",
    component: EmployeesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
