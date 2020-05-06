import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  transform(value: string, ...args: any[]): any {
    const wordAsArray = value.split('');
    const reverseArray = wordAsArray.reverse();
    const reversedString = reverseArray.join('');

    return reversedString;
  }

}
