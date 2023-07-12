import {Directive, Host} from '@angular/core';
import {BiitTableComponent} from '../biit-table.component';

@Directive({
  selector: '[sortable]'
})
export class BiitTableSortableDirective {
  constructor(@Host() parent: BiitTableComponent) {
    parent.sortable = true;
  }
}
