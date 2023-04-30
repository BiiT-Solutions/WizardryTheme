import {Component, EventEmitter, Input, Output} from '@angular/core';
import {biitIcon} from 'biit-icons-collection';

@Component({
  selector: 'biit-icon-button',
  templateUrl: 'biit-icon-button.component.html',
  styleUrls: ['biit-icon-button.component.scss'],
})

export class BiitIconButtonComponent {

  @Input() icon: biitIcon;
  @Input() disabled: boolean = false;

  @Output() onClick: EventEmitter<Event> = new EventEmitter<Event>();
  @Output() onDoubleClick: EventEmitter<Event> = new EventEmitter<Event>();

  active = false;
}
