export class MetaViewData {
  data: any[] = [];
  fields: string[] = [];

  constructor(data: any[] = [], fields: string[] = []) {
    this.data = data;
    this.fields = fields;
  }
}
