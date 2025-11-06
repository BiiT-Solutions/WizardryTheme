import {Component, Input} from '@angular/core';
import {biitIcon} from "biit-icons-collection";

@Component({
  selector: 'biit-gallery-card',
  templateUrl: './biit-gallery-card.component.html',
  styleUrls: ['./biit-gallery-card.component.scss']
})
export class BiitGalleryCardComponent {
  @Input() title: string = "";
  @Input() subtitle: string = "";
  @Input() icon: biitIcon;
}
