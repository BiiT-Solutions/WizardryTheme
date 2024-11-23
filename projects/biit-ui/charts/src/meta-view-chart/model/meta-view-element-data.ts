export class MetaViewElementData {
  data: Object;
  statusColor: string;
  styles: string;
  classes: string;
  icon: SVGElement;
  custom: HTMLDivElement;

  constructor(data: Object, styles: string) {
    this.data = data;
    this.styles = styles;
  }
}
