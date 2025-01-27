import {ChangeDetectorRef, Component, EventEmitter, Input, Output, ViewEncapsulation} from '@angular/core';
import {MetaViewElementData} from "./model/meta-view-element-data";
import {MetaViewData} from "./model/meta-view-data";
import {View} from "./model/view";
import {TimelineViewerChartOptions} from "../timeline-viewer-chart/models/timeline-viewer-chart-options";
import {TimelineViewerChartData} from "../timeline-viewer-chart/models/timeline-viewer-chart-data";
import {v4 as uuid} from 'uuid';
import {animate, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'biit-meta-view-chart',
  templateUrl: './meta-view-chart.component.html',
  styleUrls: ['./meta-view-chart.component.css'],
  encapsulation: ViewEncapsulation.None,
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('300ms ease-in', style({ opacity: 1 }))
      ]),
      transition(':leave', [
        style({ opacity: 1 }),
        animate('300ms ease-out', style({ opacity: 0 }))
      ])
    ])
  ]
})
export class MetaViewChartComponent {
  @Input('data') set _data(data: MetaViewData) {
    this.data = data;
    this.data.data.forEach(element => {
      {
        element.data['_id'] = uuid();
        element.data['_color'] = element.statusColor;
      }
    });
    this.cdRef.detectChanges();
    this.timelineOptions = {
      date: 'date',
      color: '_color',
      tooltipHeader: data.titleField,
      tooltipInfo: []
    };
    this.elements = this.data.data;
  }
  @Input() view: View = View.GRID;
  @Output() selected: EventEmitter<MetaViewElementData>= new EventEmitter<MetaViewElementData>();
  @Output() unselected: EventEmitter<void>= new EventEmitter<void>();

  protected readonly View = View;

  protected data: MetaViewData;
  protected fields: string[] = ['name', 'date', 'v1', 'v2', 'v3', 'b1'];
  protected elements: MetaViewElementData[] = [];
  protected selectedElement: MetaViewElementData;

  protected timelineOptions: TimelineViewerChartOptions;
  private delayedFilter: NodeJS.Timeout;
  private static FILTER_DELAY: number = 500;

  constructor(protected cdRef: ChangeDetectorRef) {
  }

  protected onElementClick(element: MetaViewElementData) {
    this.selectedElement = element;
    this.selected.emit(element);
  }

  protected unselectElement() {
    this.selectedElement = undefined;
    this.unselected.emit();
    this.cdRef.detectChanges()
  }

  protected onTimeLineElementClick(element: TimelineViewerChartData) {
    this.selectedElement = this.data.data.find(e => e.data['_id'] === element.meta['_id']);
    this.selected.emit(this.selectedElement);
    this.cdRef.detectChanges();
  }

  protected onFilter(filters: Map<string, any>): void {
    if (this.delayedFilter != null) {
      clearTimeout(this.delayedFilter);
    }
    this.delayedFilter = setTimeout(() => {
      this.filter(filters);
      this.delayedFilter = null;
    }, MetaViewChartComponent.FILTER_DELAY);
  }

  private filter(filters: Map<string, any>): void {
    this.elements = this.data.data.filter((element: MetaViewElementData) => {
      return !Array.from(filters.entries()).map(filter =>  this.resolveFilter(filter[1], element.data[filter[0]])).some(result => !result);
    });
  }

  private resolveFilter(restriction:  any, value: any): boolean {
    if (Array.isArray(restriction) && !restriction.some(Array.isArray) && restriction.length === 2) {
      return value >= restriction[0] && value <= restriction[1];
    }
    if (Array.isArray(restriction) && restriction.every(Array.isArray)) {
      if (value instanceof Date) {
        return restriction.some(range => (range[0] as Date).getTime() <= value.getTime() && value.getTime() <= (range[1] as Date).getTime());
      }
    }
    const regex: RegExp = new RegExp(restriction, 'i');
    return regex.test(value);
  }
}


