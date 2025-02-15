import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'biit-boolean-filter',
  templateUrl: './boolean-filter.component.html',
  styleUrls: ['./boolean-filter.component.css']
})
export class BooleanFilterComponent {
  @Input() set filter(value: boolean | undefined) {
    value === undefined ? this.value = undefined : this.value = !!value;
  }
  @Output() filterChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  protected value: boolean = undefined;

  onFilterChanged(value: boolean) {
    this.filterChange.emit(value);
  }
}
