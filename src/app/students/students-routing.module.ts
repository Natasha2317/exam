import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentsListComponent } from './students-list/students-list.component';
import { StudentsEditComponent } from './students-edit/students-edit.component';
import { StudentsComponent } from './students.component';

const routes: Routes = [
  {
    path: '',
    component: StudentsComponent,
    children: [
      {
        path: '',
        component: StudentsListComponent,
      },
      {
        path: 'profile',
        component: StudentsEditComponent,
      },
      {
        path: 'profile/:id',
        component: StudentsEditComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentsRoutingModule { }
