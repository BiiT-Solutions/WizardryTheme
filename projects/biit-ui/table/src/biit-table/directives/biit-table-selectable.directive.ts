import {Directive, Host} from '@angular/core';
import {BiitTableComponent} from '../biit-table.component';

@Directive({
  selector: '[selectable]'
})
export class BiitTableSelectableDirective {
  constructor(@Host() parent: BiitTableComponent) {
    parent.selectable = true;
  }
}
