import { Component } from '@angular/core';
import {ConnectedPosition} from "@angular/cdk/overlay";

@Component({
  selector: 'biit-vertical-menu',
  templateUrl: './biit-vertical-menu.component.html',
  styleUrls: ['./biit-vertical-menu.component.scss']
})
export class BiitVerticalMenuComponent {
  open = false;

  positions: ConnectedPosition[] = [
    { originX: 'start', originY: 'bottom', overlayX: 'start', overlayY: 'top', offsetY: 4 },
    { originX: 'end', originY: 'bottom', overlayX: 'end', overlayY: 'top', offsetY: 4 }
  ];

  toggleMenu(): void {
    this.open = !this.open;
  }

  close(): void {
    this.open = false;
  }

  onSelect(key: string): void {
    // emitir evento o lógica
    this.close();
  }
}
