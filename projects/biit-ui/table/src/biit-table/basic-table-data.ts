import {SelectionModel} from "@angular/cdk/collections";
import {MatTableDataSource} from "@angular/material/table";

export class BasicTableData<T> {
  columns: string[] = [];
  columnsTags: string[] = [];
  visibleColumns: string[] = [];
  selection: SelectionModel<T> = new SelectionModel<T>(false, []);
  dataSource: MatTableDataSource<T> = new MatTableDataSource<T>();
  selectedElement: T;

  constructor(columns: string[], columnsTags: string[], visibleColumns: string[], data: T[]) {
    this.columns = columns;
    this.columnsTags = columnsTags;
    this.visibleColumns = visibleColumns;
    this.dataSource = new MatTableDataSource<T>(data);
  }

  selectItem(item: any): void {
    this.selection.toggle(item);
    this.selectedElement = item;
  }

}
