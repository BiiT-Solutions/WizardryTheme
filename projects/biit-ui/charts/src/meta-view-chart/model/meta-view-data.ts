import {MetaViewElementData} from "./meta-view-element-data";
import {MetaViewPreselection} from "./meta-view-preselection";

export class MetaViewData {
  data: MetaViewElementData[] = [];
  fields: string[] = [];
  preselection: MetaViewPreselection[] = [];
  titleField: string;

  constructor(data: MetaViewElementData[] = [], fields: string[] = [], titleField: string = undefined, preselection: MetaViewPreselection[] = []) {
    this.data = data;
    this.fields = fields;
    this.titleField = titleField;
    this.preselection = preselection;
  }
}
