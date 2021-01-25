import { Component } from '@angular/core';
import { MyStudent, MyStudentType } from './shared/models/students.model';
import { FirstServiceService } from './shared/services/first-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  title = 'Список студентов';
  students: MyStudent[];
  myStudentType = MyStudentType;

  searchStr = '';

  constructor(
    private FirstServiceService: FirstServiceService, private router: Router
    ) {}

  ngOnInit() {
    this.getData();
  }

  async getData() {
    try {
      let students = this.FirstServiceService.getAll();
      this.students = (await students === null)||(await students === undefined) ? [] : await students;

    } catch (err) {
      console.error(err);
    }
  }

  getByType(type: number) {
    if (this.students == undefined){
      this.students = [];
    }
    return this.students.filter((student) => student.type === type);
  }

  async onAddStudent(student: MyStudent) {
    try {
        let id =
          this.students.length > 0
            ? this.students[this.students.length - 1].id + 1
            : 0;
        student.id = id;
      await this.FirstServiceService.postOne(student);
    } catch (err) {
      console.error(err);
    } finally {
      this.getData();
    }
  }

  async onDeleteById(id: number) {
    try {
      await this.FirstServiceService.deleteOneById(id);
    } catch (err) {
      console.error(err);
    } finally {
      this.getData();
    }
  }

  async onEditWorker(student) {
    try {
      await this.FirstServiceService.putOneById(student.id, student);
    } catch (err) {
      console.error(err);
    } finally {
      this.getData();
    }
  }
}
