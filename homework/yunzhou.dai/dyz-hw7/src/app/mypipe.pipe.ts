import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mypipe'
})
export class MypipePipe implements PipeTransform {

  transform(origin_str : String): any {
    return origin_str + '(pipe AAA)';
  }

}
