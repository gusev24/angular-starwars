import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'circus'
})
export class CircusPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value ? value.split('')
      .map((val, i) => i % 2 ? val : val.toUpperCase())
      .join('') : value;
  }

}