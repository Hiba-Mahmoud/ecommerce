import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'amount'
})
export class AmountPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): string {
    
      if (value > 0) {
        return 'In stock';
      } else {
        return 'Out of stock';
      }
    }
  }


