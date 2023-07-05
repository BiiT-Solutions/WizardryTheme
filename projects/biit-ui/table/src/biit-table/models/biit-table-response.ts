import {BiitTableSorting} from './biit-table-sorting';

export class BiitTableResponse {
  currentPage: number;
  pageSize: number;
  search: string;
  sorting: BiitTableSorting;

  constructor(currentPage: number, pageSize: number, search: string, sorting: BiitTableSorting) {
    this.currentPage = currentPage;
    this.pageSize = pageSize;
    this.search = search;
    this.sorting = sorting;
  }
}
