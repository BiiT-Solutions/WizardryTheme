import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'printf'
})
export class PrintfPipe implements PipeTransform {

  transform(value: string | function): string {
    if (typeof value === 'function') {
      return value();
    }
    return value;
  }

}
