import {Component, EventEmitter, Input, Output} from '@angular/core';
import {MetaViewElementData} from "../../model/meta-view-element-data";

@Component({
  selector: 'biit-meta-board',
  templateUrl: './meta-board.component.html',
  styleUrls: ['./meta-board.component.css']
})
export class MetaBoardComponent {
  @Input() data: MetaViewElementData[];
  @Output() elementClick: EventEmitter<MetaViewElementData> = new EventEmitter<MetaViewElementData>();
  protected size: string = '2rem';

  onElementClick(element: MetaViewElementData) {
    this.elementClick.emit(element);
  }
}
