export class Page {
  totalElements: number = 0;
  pageNumber: number = 0;
  pageSize: number = 0;

  constructor(pageNumber: number, pageSize: number, totalElements?: number) {
    this.pageNumber = pageNumber ?? 0;
    this.pageSize = pageSize ?? 0;
    this.totalElements = totalElements ?? 0;
  }
}
