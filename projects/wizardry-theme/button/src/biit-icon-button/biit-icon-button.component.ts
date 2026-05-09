import {Component, Input} from '@angular/core';
import {biitIcon} from '@biit-solutions/biit-icons-collection';

@Component({
  selector: 'button[biit-icon]',
  templateUrl: 'biit-icon-button.component.html',
  styleUrls: ['biit-icon-button.component.scss'],
})

export class BiitIconButtonComponent {

  @Input() icon: biitIcon;
  @Input() checked: boolean = false;
}
