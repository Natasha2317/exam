import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'groups'
})
export class GroupsPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
