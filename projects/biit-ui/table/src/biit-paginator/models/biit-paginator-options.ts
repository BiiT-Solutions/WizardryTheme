export class BiitPaginatorOptions {
  currentPage: number;
  pageSize: number;
  pageSizeOptions: number[];
  totalItems: number;
  hidePageSize: boolean;
  hideFirstLastButtons: boolean;

  constructor(currentPage: number,
              pageSize: number,
              pageSizeOptions: number[],
              totalItems?: number,
              hidePageSize?: boolean,
              hideFirstLastButtons?: boolean) {
    this.currentPage = currentPage;
    this.pageSize = pageSize;
    this.pageSizeOptions = pageSizeOptions;
    this.totalItems = totalItems;
    this.hidePageSize = hidePageSize || !totalItems ? true : false;
    this.hideFirstLastButtons = hideFirstLastButtons ? true : false;
  }
}
