import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(students, type: string): string {
    if(students != undefined && type != null){

    switch(Number(type)) {
      case 0:
        return students.filter(function (student) {
          return (student.type == 0);
        });
        break;

      case 1:
        return students.filter(function (student) {
          return (student.type == 1);
        });
        break;

      case 2:
        return students.filter(function (student) {
          return (student.type == 2);
        });
        break;

      case 3:
        return students.filter(function (student) {
          return (student.type == 3);
        });
        break;

      case 4:
        return students;
        break;
      }
    }return students;
  }

}


