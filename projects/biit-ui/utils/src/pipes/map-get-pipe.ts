import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mapGet',
  pure: false
})
export class MapGetPipe implements PipeTransform {

  transform(value: Map<any, any>, key: any): any {
    return value.get(key);
  }

}
