import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, PageEvent} from "@angular/material/paginator";
import {MatDialog} from "@angular/material/dialog";
import {TranslateService} from "@ngx-translate/core";
import {MatSort} from "@angular/material/sort";
import {BasicTableData} from "./basic-table-data";
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-biit-table',
  templateUrl: './biit-table.component.html',
  styleUrls: ['./biit-table.component.scss']
})
export class BiitTableComponent implements OnInit {

  @ViewChild(MatPaginator) paginator?: MatPaginator;
  @ViewChild(MatSort) sort?: MatSort;

  @Input()
  basicTableData?: BasicTableData<any>;

  @Input()
  disableRow: undefined | ((argument: () => any) => boolean);

  @Input()
  locale: string = "en";

  pipe: DatePipe | undefined;

  constructor(public dialog: MatDialog, private translateService: TranslateService) {

  }

  ngOnInit(): void {
    this.setLocale(this.locale);
    this.basicTableData!.dataSource.filterPredicate = (data: any, filter: string): boolean => {
      filter = filter.toLowerCase().normalize('NFD').replace(/\p{Diacritic}/gu, "");
      const dataSearch = Object.keys(data).reduce((searchTerm: string, key: string) => {
        return (searchTerm + (data as { [key: string]: any })[key]);
      }, '').normalize('NFD').replace(/\p{Diacritic}/gu, "").toLowerCase();

      const transformedFilter = filter.trim().normalize('NFD').replace(/\p{Diacritic}/gu, "").toLowerCase();

      return dataSearch.indexOf(transformedFilter) != -1;
    }
  }

  ngAfterViewInit() {
    this.basicTableData!.dataSource.paginator = this.paginator!;
    this.basicTableData!.dataSource.sort = this.sort!;
  }

  private setLocale(locale: string) {
    if (locale === 'es' || locale === 'ca') {
      this.pipe = new DatePipe('es');
    } else if (locale === 'it') {
      this.pipe = new DatePipe('it');
    } else if (locale === 'de') {
      this.pipe = new DatePipe('de');
    } else if (locale === 'nl') {
      this.pipe = new DatePipe('nl');
    } else {
      this.pipe = new DatePipe('en-US');
    }
  }

  setSelectedItem(row: any): void {
    if (row === this.basicTableData!.selectedElement) {
      this.basicTableData!.selectedElement = undefined;
    } else {
      this.basicTableData!.selectedElement = row;
    }
  }

  filter(filter: string) {
    this.basicTableData!.dataSource.filter = filter;
  }

  isColumnVisible(column: string): boolean {
    return this.basicTableData!.visibleColumns.includes(column);
  }

  toggleColumnVisibility(column: string) {
    const index: number = this.basicTableData!.visibleColumns.indexOf(column);
    if (index !== -1) {
      this.basicTableData!.visibleColumns.splice(index, 1);
    } else {
      let oldVisibleColumns: string[];
      oldVisibleColumns = [...this.basicTableData!.visibleColumns];
      oldVisibleColumns.push(column);
      this.basicTableData!.visibleColumns.length = 0;
      //Maintain columns order.
      for (let tableColumn of this.basicTableData!.columns) {
        if (oldVisibleColumns.includes(tableColumn)) {
          this.basicTableData!.visibleColumns.push(tableColumn);
        }
      }
    }
  }

  getDefaultPageSize(): number {
    //Get from user session storage
    return 10;
  }


  onPaginateChange($event: PageEvent) {
    //Store into user session storage
  }

  getColumnData(column: any): any {
    if (typeof column === 'number') {
      return column;
    } else if (typeof column === 'boolean') {
      return column ? this.translateService.instant('yes') : this.translateService.instant('no');
    } else if (!isNaN(Date.parse(column))) {
      return this.pipe!.transform(column, 'short');
    } else {
      if (column) {
        const text: string = (column as string);
        if (text.toUpperCase() === text) {
          //probably is an enum
          return this.translateService.instant(this.snakeToCamel(text.toLowerCase()));
        } else {
          return this.translateService.instant(text);
        }
      } else {
        return "";
      }
    }
  }

  snakeToCamel(string: string): string {
    return string.toLowerCase().replace(/[-_][a-z]/g, (group) => group.slice(-1).toUpperCase());
  }
}
