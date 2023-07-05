export class BiitTableSorting {
  name: string;
  order: BiitTableSortingOrder;

  constructor(name: string,
              order: BiitTableSortingOrder) {
    this.name = name;
    this.order = order;
  }
}

export enum BiitTableSortingOrder {
  ASC = 'asc',
  DESC = 'desc'
}
