import {Component, Input} from '@angular/core';

@Component({
  selector: 'biit-popup',
  templateUrl: './biit-popup.component.html',
  styleUrls: ['./biit-popup.component.scss']
})
export class BiitPopupComponent {
  @Input() background: boolean = true;
}
