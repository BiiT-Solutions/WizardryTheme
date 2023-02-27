import {Component, EventEmitter, Input, Output} from '@angular/core';

export type BiitButtonType =
  | 'default'
  | 'flat'
  | 'raised'
  | 'stroked';

export type MaterialColor =
  | 'empty'
  | 'primary'
  | 'accent'
  | 'warn';

@Component({
  selector: 'app-biit-button',
  templateUrl: 'biit-button.component.html',
  styleUrls: ['biit-button.component.scss'],
})

export class BiitButtonComponent {

  _buttonType: BiitButtonType = 'default';
  _color: MaterialColor = 'primary';
  _disabled: boolean = false;

  @Input()
  set buttonType(value: BiitButtonType) {
    console.log('--->', value);
    this._buttonType = value;
  }
  get buttonType(): BiitButtonType {
    return this._buttonType;
  }

  @Input()
  set color(value: MaterialColor) {
    if (value === 'empty') {
      // @ts-ignore
      this._color = '';
    } else {
      this._color = value;
    }
  }
  get color(): MaterialColor {
    return this._color;
  }

  @Input()
  set disabled(value: boolean) {
    this._disabled = value;
  }
  get disabled(): boolean {
    return this._disabled;
  }

  @Output() onClick: EventEmitter<Event> = new EventEmitter<Event>();
}
