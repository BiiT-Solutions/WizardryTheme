export class BiitTableColumn {
  name: string;
  label: string;
  width: number;
  format: BiitTableColumnFormat;
  visible: boolean;

  constructor(name: string,
              label: string,
              width?: number,
              format?: BiitTableColumnFormat,
              visible?: boolean) {
    this.name = name;
    this.label = label;
    this.width = width;
    this.format = format ? format : BiitTableColumnFormat.DEFAULT;
    this.visible = visible == undefined ? true : visible;
  }
}

export enum BiitTableColumnFormat {
  DEFAULT = 'default',
  BOOLEAN = 'boolean',
  DATE = 'date'
}
