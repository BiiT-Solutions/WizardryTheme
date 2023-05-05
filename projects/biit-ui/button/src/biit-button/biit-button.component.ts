import {
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

export type BiitButtonColor =
  | 'primary'
  | 'secondary'
  | 'tertiary'

export enum Type {
  BUTTON = 'BUTTON',
  SUBMIT = 'SUBMIT',
  RESET = 'RESET'
}

@Component({
  selector: 'biit-button',
  templateUrl: 'biit-button.component.html',
  styleUrls: ['biit-button.component.scss'],
})

export class BiitButtonComponent {

  @Input() color: BiitButtonColor = 'primary';
  @Input() disabled: boolean = false;
  @Input() type: Type = Type.BUTTON;

  @Output() onClick: EventEmitter<Event> = new EventEmitter<Event>();
  @Output() onDblClick: EventEmitter<Event> = new EventEmitter<Event>();

  protected readonly Type = Type;
}
