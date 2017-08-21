import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tok'
})
export class TokPipe implements PipeTransform {
  /*
    Version 0.2 2017-03-21
    Count aboved 1000 to 1.0k
   */
  transform(value: any, ...args: any[]) {
    if (!value || value < 0) {
      return '0'
    }
    if (value < 1000) {
      return String(value)
    } else {
      value = value / 1000
      return String(value.toFixed(1)) + "k"
    }
  }
}
