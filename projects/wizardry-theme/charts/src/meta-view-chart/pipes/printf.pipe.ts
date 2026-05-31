import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'printf',
    standalone: false
})
export class PrintfPipe implements PipeTransform {

  transform(value: string | Function): string {
    if (typeof value === 'function') {
      return value();
    }
    return value;
  }

}
