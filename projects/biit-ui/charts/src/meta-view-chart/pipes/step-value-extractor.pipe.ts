import { Pipe, PipeTransform } from '@angular/core';
import {MetaViewElementData} from "../model/meta-view-element-data";

@Pipe({
  name: 'stepValueExtractor'
})
export class StepValueExtractorPipe implements PipeTransform {

  transform(data: MetaViewElementData[], field: string): number {
    if (!data) {
      return 1;
    }
    const values: number[] = data.map(d => d.data).map(d => d[field]);
    const decimalCounts: number[] = values.map(value => this.getDecimalCount(value));
    const maxDecimals = Math.max(...decimalCounts);
    if (maxDecimals === 0) {
      return 1;
    }
    return  +('0.' + (maxDecimals === 1 ? '1' : '0'.repeat(maxDecimals - 1)) + '1');
  }

  private getDecimalCount(value: number): number {
    const numStr = value.toString();
    if (numStr.includes('.')) {
      return numStr.split('.')[1].length;
    } else {
      return 0;
    }
  }
}
