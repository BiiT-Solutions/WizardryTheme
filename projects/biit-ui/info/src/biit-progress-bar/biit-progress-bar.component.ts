import {Component, Input} from '@angular/core';

export enum BiitProgressBarType {
  INDETERMINATE = 'INDETERMINATE',
  DETERMINATE = 'DETERMINATE'
}

@Component({
  selector: 'biit-progress-bar',
  templateUrl: 'biit-progress-bar.component.html',
  styleUrls: ['biit-progress-bar.component.scss']
})

export class BiitProgressBarComponent {

  @Input() type: BiitProgressBarType = BiitProgressBarType.INDETERMINATE;
  @Input() _value: number = 0;
  @Input('value') set value(value: number) {
    this._value = value;
  }

  constructor() { }
}
