import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'columnData'
})

export class ColumnDataPipe implements PipeTransform {
  transform(value: any, columnName: string): any {
    const dataTree = columnName.split('.');
    let data = value;
    dataTree.forEach(variable => {
      data = data[variable];
    })
    return data;
  }
}
