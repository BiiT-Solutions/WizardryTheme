import {Component, Directive} from '@angular/core';

@Directive({
  selector: '[primary]'
})
export class BiitButtonPrimaryDirective {
  constructor(private parent: BiitButtonComponent) {
    parent.color = 'primary';
  }
}

@Directive({
  selector: '[secondary]'
})
export class BiitButtonSecondaryDirective {
  constructor(private parent: BiitButtonComponent) {
    parent.color = 'secondary';
  }
}

@Directive({
  selector: '[tertiary]'
})
export class BiitButtonTertiaryDirective {
  constructor(private parent: BiitButtonComponent) {
    parent.color = 'tertiary';
  }
}

@Directive({
  selector: '[quaternary]'
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
})

export class BiitButtonComponent {
  color = 'primary';

  constructor() { }
}
