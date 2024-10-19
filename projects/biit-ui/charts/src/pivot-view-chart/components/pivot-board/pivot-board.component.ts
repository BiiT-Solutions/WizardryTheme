import {Component, EventEmitter, Input, Output} from '@angular/core';
import {PivotViewElementData} from "../../model/pivot-view-element-data";

@Component({
  selector: 'biit-pivot-board',
  templateUrl: './pivot-board.component.html',
  styleUrls: ['./pivot-board.component.css']
})
export class PivotBoardComponent {
  @Input() data: PivotViewElementData[];
  @Output() elementClick: EventEmitter<PivotViewElementData> = new EventEmitter<PivotViewElementData>();
  protected size: string = '2rem';

  onElementClick(element: PivotViewElementData) {
    this.elementClick.emit(element);
  }
}
