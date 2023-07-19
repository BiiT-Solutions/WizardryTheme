import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Subject} from "rxjs";
import {FilterResetService} from "./filter-reset.service";
import {TRANSLOCO_SCOPE} from "@ngneat/transloco";

@Component({
  selector: 'biit-filter',
  templateUrl: './biit-filter.component.html',
  styleUrls: ['./biit-filter.component.scss'],
  providers: [{
    provide: TRANSLOCO_SCOPE,
    useValue: {scope: 'biit-ui/filter', alias: "filter"}
  }]
})
export class BiitFilterComponent implements OnInit {

  filterString: string = '';

  @Output() filterChanged: EventEmitter<string> = new EventEmitter();

  @Input() disabled: boolean = false;

  @Input() resetValue: Subject<boolean> = new Subject<boolean>();

  constructor(private filterResetService: FilterResetService) {
  }

  ngOnInit() {
    if (this.resetValue) {
      this.resetValue.subscribe(() => {
        this.reset();
      });
    }
    this.filterResetService.resetFilter.subscribe(() => {
      this.reset();
    })
  }

  filter(event: Event) {
    const filter: string = (event.target as HTMLInputElement).value.toLowerCase();
    this.filterChanged.emit(filter);
  }

  reset() {
    this.filterString = '';
    this.filterChanged.emit(this.filterString);
  }
}
