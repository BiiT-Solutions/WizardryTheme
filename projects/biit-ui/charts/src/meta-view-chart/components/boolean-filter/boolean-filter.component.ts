import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'biit-boolean-filter',
  templateUrl: './boolean-filter.component.html',
  styleUrls: ['./boolean-filter.component.css']
})
export class BooleanFilterComponent {
  @Input() set filter(value: boolean) {
    this.value = !!value;
  }
  @Output() filterChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  protected value: boolean = false;

  onFilterChanged(value: boolean) {
    this.filterChange.emit(value);
  }
}
