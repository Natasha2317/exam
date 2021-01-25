import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MyStudent, MyStudentType} from 'src/app/shared/models/students.model';
import { FirstServiceService } from 'src/app/shared/services/first-service.service';

@Component({
  selector: 'app-students-edit',
  templateUrl: './students-edit.component.html',
  styleUrls: ['./students-edit.component.css']
})
export class StudentsEditComponent implements OnInit {
  id: number;
  student: MyStudent;
  personForm: FormGroup;
  myStudentType = MyStudentType;

  // public mask = ['+', 7, ' ', '(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/]

  constructor(
    private activatedRouter: ActivatedRoute,
    private FirstServiceService: FirstServiceService,
    private router: Router
  ) {
    this.activatedRouter.params.subscribe((param) => {
      this.id = param.id;
    });
  }

  ngOnInit(): void {
    this.personForm = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      surname: new FormControl(null, [Validators.required]),
      patronymic: new FormControl(),
      phone: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required]),
      birthday: new FormControl(null, [Validators.required]),
      group: new FormControl(null, [Validators.required]),
      type: new FormControl(0, [Validators.required])
    });
    this.getData();
  }

  async getData() {
    if ((this.id !== null)&&(this.id !== undefined)) {
      try {
        let student = this.FirstServiceService.getOneById(this.id);
        this.student = await student;
      } catch (err) {
        console.error(err);
      }
      this.personForm.patchValue({
        name: this.student.name,
        surname: this.student.surname,
        patronymic: this.student.patronymic,
        phone: this.student.phone,
        email: this.student.email,
        birthday: this.student.birthday,
        group: this.student.group,
        type: this.student.type
      });
    }
  }

  async onSave() {
    if ((this.id !== null)&&(this.id !== undefined)) {
      try {
        await this.FirstServiceService.putOneById(this.id, this.personForm.value);
      } catch (err) {
        console.error(err);
      }
    } else {
      try {
        let res = await this.FirstServiceService.postOne(this.personForm.value);
        this.router.navigate([this.router.url, res.id]);
        this.getData();
      } catch (err) {
        console.error(err);
      }
    }
  }

  async onDelete() {
    try {
      await this.FirstServiceService.deleteOneById(this.id);
    } catch (err) {
      console.error(err);
    }
    this.router.navigate(['/students']);
  }
}
