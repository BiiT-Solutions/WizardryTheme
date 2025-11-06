import {Component, ViewChild, ElementRef} from '@angular/core';

@Component({
  selector: 'biit-tooltip',
  templateUrl: 'biit-tooltip.component.html',
  styleUrls: ['biit-tooltip.component.scss']
})

export class BiitTooltipComponent {
  @ViewChild('tooltip', {static: true}) tooltip: ElementRef;

  text: string = '';
  top: string = '';
  left: string = '';

  constructor() { }
}
