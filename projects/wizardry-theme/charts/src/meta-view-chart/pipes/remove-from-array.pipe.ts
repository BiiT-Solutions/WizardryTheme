import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'removeFromArray',
    standalone: false
})
export class RemoveFromArrayPipe implements PipeTransform {

  transform(value: any[], remove: any[]): any[] {
    return value.filter(v => !remove.includes(v));
  }

}
