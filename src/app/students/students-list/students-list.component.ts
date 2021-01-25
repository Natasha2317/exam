import { Component, OnInit } from '@angular/core';
import { MyStudent } from 'src/app/shared/models/students.model';
import { FirstServiceService } from 'src/app/shared/services/first-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.css']
})
export class StudentsListComponent implements OnInit {

  students: MyStudent[];
  searchStr = '';
  initials = '';
  searchType = '4';


  constructor(private FirstServiceService: FirstServiceService, private router: Router) {}

  ngOnInit(): void {
    this.getData();
  }

  async getData() {
    try {
      let students = this.FirstServiceService.getAll();
      this.students = (await students === null)||(await students === undefined) ? [] : (await students).sort(function(a, b){
        if(a.surname < b.surname) { return -1; }
        if(a.surname > b.surname) { return 1; }
        return 0;
    });
    } catch (err) {
      console.error(err);
    }
  }

  onAddProfile() {
    this.router.navigate([this.router.url, 'profile']);
  }

  async onDelete(id: number) {
    try {
      await this.FirstServiceService.deleteOneById(id);
    } catch (err) {
      console.error(err);
    }
    this.getData();
  }

  onLinkProfile(id: number) {
    this.router.navigate([this.router.url, 'profile', id]);
  }

}
