import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sum'
})
export class SumPipe implements PipeTransform {

  transform(arr: any, args?: any): any {

    let total = 0;
    if (arr) {
       for (let i = 0; i < arr.length; i++ ) {
            total += arr[i][args];
       }
    }
    return total;
  }

}
