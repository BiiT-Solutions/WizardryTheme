import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'has'
})
export class HasPipe implements PipeTransform {

  transform(map: Map<any, any>,key: string): boolean{
    return map && map.has(key);
  }

}
