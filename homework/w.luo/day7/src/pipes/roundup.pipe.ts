import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'roundup'
})
export class RoundupPipe implements PipeTransform {

  transform(value: number){
    return Math.ceil(value);
    // return value+plus;
  }

}
