import {Component, Directive} from '@angular/core';

@Directive({
    selector: '[primary]',
    standalone: false
})
export class BiitButtonPrimaryDirective {
  constructor(private parent: BiitButtonComponent) {
    parent.color = 'primary';
  }
}

@Directive({
    selector: '[secondary]',
    standalone: false
})
export class BiitButtonSecondaryDirective {
  constructor(private parent: BiitButtonComponent) {
    parent.color = 'secondary';
  }
}

@Directive({
    selector: '[tertiary]',
    standalone: false
})
export class BiitButtonTertiaryDirective {
  constructor(private parent: BiitButtonComponent) {
    parent.color = 'tertiary';
  }
}

@Directive({
    selector: '[quaternary]',
    standalone: false
})
export class BiitButtonQuaternaryDirective {
  constructor(private parent: BiitButtonComponent) {
    parent.color = 'quaternary';
  }
}

@Component({
    selector: 'button[biit-button]',
    templateUrl: 'biit-button.component.html',
    styleUrls: ['biit-button.component.scss'],
    standalone: false
})

export class BiitButtonComponent {
  color = 'primary';

  constructor() { }
}
