export class BiitTableData<T> {
  data: T[];
  totalItems: number;

  constructor(data: T[], totalItems: number) {
    this.data = data;
    this.totalItems = totalItems;
  }
}
