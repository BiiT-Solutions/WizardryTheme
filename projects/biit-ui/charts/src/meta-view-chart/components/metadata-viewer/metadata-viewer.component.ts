import {Component, Input} from '@angular/core';
import {MetaViewElementData} from "../../model/meta-view-element-data";

@Component({
  selector: 'biit-metadata-viewer',
  templateUrl: './metadata-viewer.component.html',
  styleUrls: ['./metadata-viewer.component.css']
})
export class MetadataViewerComponent {
  @Input() data: MetaViewElementData;
  @Input() fields: string[];
  @Input() titleField: string;
}
