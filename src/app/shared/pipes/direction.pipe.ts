import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'direction'
})
export class DirectionPipe implements PipeTransform {

  transform(type: number): string {
    switch(type) {
      case 0:
        return 'IT';
        break;

      case 1:
        return 'Дизайн';
        break;

      case 2:
        return 'История';
        break;

      case 3:
        return 'Юрисдикция';
        break;
    }
  }

}
