import {AfterContentInit, Component, ContentChildren, ElementRef, Input, QueryList} from '@angular/core';
import {BiitIconButtonComponent} from "../biit-icon-button/biit-icon-button.component";

@Component({
  selector: 'biit-action-button',
  templateUrl: './biit-action-button.component.html',
  styleUrls: ['./biit-action-button.component.scss']
})
export class BiitActionButtonComponent implements AfterContentInit {

  @Input() position: FabPosition = 'bottom-right';
  @Input() additionalX: number = 0;
  @Input() additionalY: number = 0;
  @ContentChildren(BiitIconButtonComponent) inputButtons: QueryList<BiitIconButtonComponent>;
  protected buttons: BiitIconButtonComponent[];
  protected hover = false;

  constructor(private elementRef: ElementRef) {
  }

  ngAfterContentInit(): void {
    this.buttons = this.inputButtons.toArray();
  }

  positionStyle(): Object {
    const parentBoundingRect = this.elementRef.nativeElement.parentElement.getBoundingClientRect();
    const rem = parseFloat(getComputedStyle(document.documentElement).fontSize);
    const fabWidth = (rem * 2.125) + 6;
    const desiredOffsetX = (rem * 1.5) + this.additionalX;
    const desiredOffsetY = rem + this.additionalY;
    const bottomOffsetX = desiredOffsetY + (this.hover ? (rem * 2.125)*(this.buttons.length-1) : 0);

    const leftLeft = `${parentBoundingRect.left + desiredOffsetX}px`;
    const leftMid = `${parentBoundingRect.left + (parentBoundingRect.width / 2) - (fabWidth / 2) + this.additionalX}px`;
    const leftRight = `${parentBoundingRect.right - (fabWidth + desiredOffsetX)}px`;

    const topTop = `${parentBoundingRect.top + desiredOffsetY}px`;
    const topMid = `${parentBoundingRect.top + (parentBoundingRect.height / 2) - (fabWidth / 2) + this.additionalY}px`;
    const topBottom = `${parentBoundingRect.bottom - (fabWidth + bottomOffsetX)}px`;

    switch (this.position) {
      case 'top-left':
        return {top: topTop, left: leftLeft};
      case 'top-middle':
        return {top: topTop, left: leftMid};
      case 'top-right':
        return {top: topTop, left: leftRight};
      case 'middle-left':
        return {top: topMid, left: leftLeft};
      case 'middle-right':
        return {top: topMid, left: leftRight};
      case 'middle-middle':
        return {top: topMid, left: leftMid};
      case 'bottom-left':
        return {top: topBottom, left: leftLeft, 'flex-direction': 'column-reverse'};
      case 'bottom-middle':
        return {top: topBottom, left: leftMid, 'flex-direction': 'column-reverse'};
      case 'bottom-right':
        return {top: topBottom, left: leftRight, 'flex-direction': 'column-reverse'};
    }
  }
}

export type FabPosition = 'top-left' | 'top-middle' | 'top-right' | 'middle-left' | 'middle-middle' | 'middle-right' | 'bottom-left' | 'bottom-middle' | 'bottom-right';
