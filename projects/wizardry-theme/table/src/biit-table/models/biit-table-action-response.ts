export class BiitTableActionResponse {
  item: any;
  column: string;

  constructor(item: any, column: string) {
    this.item = item;
    this.column = column;
  }
}
