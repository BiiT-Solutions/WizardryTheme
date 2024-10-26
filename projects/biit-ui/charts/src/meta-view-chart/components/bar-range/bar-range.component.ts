import {Component, Input} from '@angular/core';
import {MetaViewElementData} from "../../model/meta-view-element-data";

@Component({
  selector: 'biit-bar-range',
  templateUrl: './bar-range.component.html',
  styleUrls: ['./bar-range.component.css']
})
export class BarRangeComponent {
  @Input() items: MetaViewElementData[];
  @Input() field: string;
}
