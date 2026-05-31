import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'has',
    standalone: false
})
export class HasPipe implements PipeTransform {

  transform(map: Map<any, any>,key: string): boolean{
    return map && map.has(key);
  }

}
