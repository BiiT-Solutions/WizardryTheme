import {Component, Directive, EventEmitter, Input, Output} from '@angular/core';

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



@Component({
  selector: 'biit-popup',
  templateUrl: './biit-popup.component.html',
  styleUrls: ['./biit-popup.component.scss']
})
export class BiitPopupComponent {
  @Input() title: string = '';
  @Output() onClosed: EventEmitter<void> = new EventEmitter<void>();

  background: boolean = true;
  header: boolean = true;
  closable: boolean = false;
  closableOutside: boolean = false;
  type: BiitPopupType = BiitPopupType.DEFAULT;

  protected readonly Type = BiitPopupType;
}

enum BiitPopupType {
  DEFAULT = 'default',
  SIXTY = 'sixty'
}
