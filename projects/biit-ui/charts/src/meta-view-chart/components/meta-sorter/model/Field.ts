export class Field {
  name: string;
  max: number | Date;
  min: number | Date;

  constructor(name: string = undefined, max: number | Date = undefined, min: number | Date = undefined) {
    this.name = name;
    this.max = max;
    this.min = min;
  }
}
