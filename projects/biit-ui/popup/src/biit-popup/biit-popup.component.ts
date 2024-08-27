import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  Directive,
  ElementRef,
  EventEmitter, HostListener,
  Input,
  Output,
  ViewChild
} from '@angular/core';

@Directive({
  selector: '[clear-bg]'
})
export class BiitPopupBackgroundDirective {
  constructor(private parent: BiitPopupComponent) {
    parent.background = false;
  }
}

@Directive({
  selector: '[no-header]'
})
export class BiitPopupNoHeaderDirective {
  constructor(private parent: BiitPopupComponent) {
    parent.header = false;
  }
}

@Directive({
  selector: '[closable]'
})
export class BiitPopupClosableDirective {
  constructor(private parent: BiitPopupComponent) {
    parent.closable = true;
  }
}

@Directive({
  selector: '[closable-outside]'
})
export class BiitPopupClosableOutsideDirective {
  constructor(private parent: BiitPopupComponent) {
    parent.closableOutside = true;
  }
}

@Directive({
  selector: '[sixty-view]'
})
export class BiitPopupSixtyViewDirective {
  constructor(private parent: BiitPopupComponent) {
    parent.type = BiitPopupType.SIXTY;
  }
}

@Directive({
  selector: '[info-box]'
})
export class BiitPopupInfoBoxDirective {
  constructor(private parent: BiitPopupComponent) {
    parent.type = BiitPopupType.INFO_BOX;
  }
}



@Component({
  selector: 'biit-popup',
  templateUrl: './biit-popup.component.html',
  styleUrls: ['./biit-popup.component.scss']
})
export class BiitPopupComponent implements AfterViewInit {
  @Input() title: string = '';
  @Input() mouseEvent: MouseEvent;
  @Output() onClosed: EventEmitter<void> = new EventEmitter<void>();
  @ViewChild('popup') popup: ElementRef;

  background: boolean = true;
  header: boolean = true;
  closable: boolean = false;
  closableOutside: boolean = false;
  type: BiitPopupType = BiitPopupType.DEFAULT;
  coordinates: { x: string, y: string } = { x: undefined, y: undefined };

  protected readonly Type = BiitPopupType;

  @HostListener('document:keydown.escape', ['$event']) onEscPress(event: KeyboardEvent) {
    this.onClosed.emit();
  }

  constructor(private cdRef : ChangeDetectorRef) {
  }

  ngAfterViewInit() {
    if (this.type == BiitPopupType.INFO_BOX) {
      const rem = parseFloat(getComputedStyle(document.documentElement).fontSize);
      const popupWidth = rem * 26.5 + 6;

      // Checking available screen space
      const fitsBottom = this.mouseEvent.y + this.popup.nativeElement.offsetHeight + 0.5*rem < window.innerHeight;
      const fitsLeft = this.mouseEvent.x - popupWidth/2 > 0;
      const fitsRight = this.mouseEvent.x + popupWidth/2 < window.innerWidth;

      if (fitsBottom) {
        this.coordinates.y = this.mouseEvent.y + 0.5*rem + "px";
      } else {
        this.coordinates.y = this.mouseEvent.y - this.popup.nativeElement.offsetHeight + "px";
      }

      if (!fitsLeft) {
        this.coordinates.x = "0px";
      } else if (!fitsRight) {
        this.coordinates.x = window.innerWidth - popupWidth + "px";
      } else {
        this.coordinates.x = this.mouseEvent.x - popupWidth/2 + "px";
      }

      this.cdRef.detectChanges();
    }
  }
}

enum BiitPopupType {
  DEFAULT = 'default',
  SIXTY = 'sixty',
  INFO_BOX = 'info-box'
}
