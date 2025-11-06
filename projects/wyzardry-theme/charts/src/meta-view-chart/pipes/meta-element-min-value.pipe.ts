import { Pipe, PipeTransform } from '@angular/core';
import {MetaViewElementData} from "../model/meta-view-element-data";

@Pipe({
  name: 'metaElementMinValue'
})
export class MetaElementMinValuePipe implements PipeTransform {

  transform(data: MetaViewElementData[], field: string): number {
    if (!data) {
      return 0;
    }
    const values: number[] = data.map(d => d.data).map(d => d[field]);
    return Math.min(...values);
  }

}
