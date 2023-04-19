import {Component, EventEmitter, Input, Output} from '@angular/core';

export type BiitButtonType =
  | 'primary'
  | 'secondary'
  | 'tertiary'

@Component({
  selector: 'app-biit-button',
  templateUrl: 'biit-button.component.html',
  styleUrls: ['biit-button.component.scss'],
})

export class BiitButtonComponent {

  _type: BiitButtonType = 'primary';
  _disabled: boolean = false;

  @Input()
  set type(value: BiitButtonType) {
    this._type = value;
  }
  get type(): BiitButtonType {
    return this._type;
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
