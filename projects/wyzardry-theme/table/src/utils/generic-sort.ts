import {BiitTableColumn, BiitTableColumnFormat} from "../biit-table/models/biit-table-column";
import {BiitTableSorting} from "../biit-table/models/biit-table-sorting";

export class GenericSort {
  public static sort<T>(data: T[], sorting: BiitTableSorting, columns: BiitTableColumn[]): T[] {
    if (sorting) {
      return data.sort((a, b) => {
        switch (columns.find(i => i.name == sorting.name).format) {
          case BiitTableColumnFormat.BOOLEAN:
            if (a[sorting.name] == b[sorting.name])
              return 0;
            if (sorting.order == 'asc') {
              return a[sorting.name] ? -1 : 1;
            } else {
              return a[sorting.name] ? 1 : -1;
            }
          case BiitTableColumnFormat.DATE:
            if (new Date(a[sorting.name]).getTime() == new Date(b[sorting.name]).getTime())
              return 0;
            if (sorting.order == 'asc') {
              return (new Date(a[sorting.name]).getTime() > new Date(b[sorting.name]).getTime()) ? 1 : -1;
            } else {
              return (new Date(a[sorting.name]).getTime() > new Date(b[sorting.name]).getTime()) ? -1 : 1;
            }
          default:
            if (a[sorting.name] == b[sorting.name])
              return 0;
            if (sorting.order == 'asc') {
              return a[sorting.name] > b[sorting.name] ? 1 : -1;
            } else {
              return a[sorting.name] > b[sorting.name] ? -1 : 1;
            }
        }
      });
    } else {
      return data;
    }
  }
}
