import {Component, EventEmitter, Input, Output} from '@angular/core';
import {MetaViewElementData} from "../../model/meta-view-element-data";
import {typeofExpr} from "@angular/compiler";

@Component({
  selector: 'biit-metadata-viewer',
  templateUrl: './metadata-viewer.component.html',
  styleUrls: ['./metadata-viewer.component.css']
})
export class MetadataViewerComponent {
  @Input() set data(data: MetaViewElementData) {
    this._data = data;
  }
  _data: MetaViewElementData;
  @Input() fields: string[];
  @Input() titleField: string;
  @Output() onClose: EventEmitter<void> = new EventEmitter<void>();

  protected close(): void {
    this.onClose.emit();
  }

  protected readonly typeofExpr = typeofExpr;
}
