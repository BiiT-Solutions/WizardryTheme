import {Component, Input} from '@angular/core';
import {MetaViewData} from "../../model/meta-view-data";
import {FieldType} from "./model/FieldType";

@Component({
  selector: 'biit-meta-sorter',
  templateUrl: './meta-sorter.component.html',
  styleUrls: ['./meta-sorter.component.css']
})
export class MetaSorterComponent {
  @Input() metadata: MetaViewData;
  protected selectedField: string = '';

  protected search: string = '';

  protected onFieldClick(field: string): void {
    if (this.selectedField === field) {
      this.selectedField = null;
      return;
    }
    this.selectedField = field;
  }

  protected readonly FieldType = FieldType;
}
