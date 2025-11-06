import {Component, Input} from '@angular/core';

@Component({
  selector: 'biit-meta-element',
  templateUrl: './meta-element.component.html',
  styleUrls: ['./meta-element.component.css']
})
export class MetaElementComponent {
  @Input() icon: SVGElement;
  @Input() styles: string;
  @Input() classes: string;
}
