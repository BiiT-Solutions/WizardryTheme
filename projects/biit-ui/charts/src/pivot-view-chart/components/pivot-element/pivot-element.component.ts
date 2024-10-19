import {Component, Input} from '@angular/core';

@Component({
  selector: 'biit-pivot-element',
  templateUrl: './pivot-element.component.html',
  styleUrls: ['./pivot-element.component.css']
})
export class PivotElementComponent {
  @Input() icon: SVGElement;
  @Input() styles: string;
  @Input() classes: string;
}
