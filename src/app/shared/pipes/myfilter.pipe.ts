import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myfilter'
})
export class MyfilterPipe implements PipeTransform {

  transform(students, searchStr: string): any[] {
    if (students.length === 0 || searchStr === '') {
      return students;
    }
    else {
      let filteredItems = students.filter(function (student) {
          let fullname = student.name.toLowerCase() + ' ' + student.surname.toLowerCase();
          return fullname.indexOf(searchStr.toLowerCase()) !== -1;
        });
      return filteredItems;
    }
  }
}
