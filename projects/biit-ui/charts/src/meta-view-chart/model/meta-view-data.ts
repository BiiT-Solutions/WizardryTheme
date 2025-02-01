import {MetaViewElementData} from "./meta-view-element-data";

export class MetaViewData {
  data: MetaViewElementData[] = [];
  fields: string[] = [];
  titleField: string;
  timelineDateField: string;

  constructor(data: MetaViewElementData[] = [], fields: string[] = [], titleField: string = undefined, timelineDateField: string = undefined) {
    this.data = data;
    this.fields = fields;
    this.titleField = titleField;
    this.timelineDateField = timelineDateField;
  }
}
