import { Pipe, PipeTransform } from '@angular/core';
import {BiitTableColumn} from '../models/biit-table-column';

@Pipe({
    name: 'visibleColumns',
    standalone: false
})

export class VisibleColumnsPipe implements PipeTransform {
  transform(value: BiitTableColumn[]): any {
    return value.filter(column => column.visible);
  }
}
