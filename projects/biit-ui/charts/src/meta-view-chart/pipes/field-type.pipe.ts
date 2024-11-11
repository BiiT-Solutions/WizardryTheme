import { Pipe, PipeTransform } from '@angular/core';
import {FieldType} from "../components/meta-sorter/model/FieldType";

@Pipe({
  name: 'fieldType'
})
export class FieldTypePipe implements PipeTransform {

  transform(field: string, data: any[]): FieldType {
    const item = data.find(item => item.data != null && item.data[field] != null);
    if (item == null) {
      return FieldType.NULL;
    }
    const value = item.data[field];
    if (typeof value === 'string') {
      return FieldType.STRING;
    }
    if (typeof value === 'boolean') {
      return FieldType.BOOLEAN;
    }
    if (typeof value === 'number') {
      return FieldType.NUMBER;
    }
    if (value instanceof Date) {
      return FieldType.DATE;
    }
    return FieldType.STRING;
  }

}
