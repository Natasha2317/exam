
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { StudentsRoutingModule } from './students-routing.module';
import { StudentsComponent } from './students.component';
import { StudentsListComponent } from './students-list/students-list.component';
import { StudentsEditComponent } from './students-edit/students-edit.component';
import { SortPipe } from 'src/app/shared/pipes/sort.pipe';
import { DirectionPipe } from 'src/app/shared/pipes/direction.pipe'
import { MyfilterPipe } from 'src/app/shared/pipes/myfilter.pipe'


@NgModule({
  declarations: [StudentsComponent, StudentsListComponent, StudentsEditComponent, SortPipe, DirectionPipe, MyfilterPipe],
  imports: [
    CommonModule,
    StudentsRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class StudentsModule { }
