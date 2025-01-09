import {Component, EventEmitter, Input, Output} from '@angular/core';
import {MetaViewElementData} from "../../model/meta-view-element-data";
import {animate, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'biit-meta-board',
  templateUrl: './meta-board.component.html',
  styleUrls: ['./meta-board.component.css'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ width: 0, height: 0, opacity: 0, 'align-self': 'center' }),
        animate('300ms ease-in', style({ width: '*', height: '*', opacity: 1, 'align-self': 'center' }))
      ]),
      transition(':leave', [
        style({ width: '*', height: '*', opacity: 1, 'align-self': 'center' }),
        animate('300ms ease-in', style({ width: 0, height: 0, opacity: 0, 'align-self': 'center' }))
      ])
    ])
  ]
})
export class MetaBoardComponent {
  @Input() data: MetaViewElementData[];
  @Input() selected: MetaViewElementData;
  protected size: string = '2rem';
  @Output() elementClick: EventEmitter<MetaViewElementData> = new EventEmitter<MetaViewElementData>();

  protected onElementClick(element: MetaViewElementData) {
    this.elementClick.emit(element);
  }
}
