export class PivotViewElementData {
  data: any;
  styles: string;
  classes: string;
  icon: SVGElement;
  custom: HTMLDivElement;


  constructor(data: any, styles: string) {
    this.data = data;
    this.styles = styles;
  }
}
