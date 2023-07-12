import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BiitTableComponent} from "./biit-table.component";
import {FormsModule} from "@angular/forms";
import {BiitIconModule} from 'biit-ui/icon';
import {BiitPaginatorModule} from '../biit-paginator/biit-paginator.module';
import {BiitIconButtonModule} from 'biit-ui/button';
import {BiitCheckboxModule, BiitInputTextModule, BiitMultiselectModule} from 'biit-ui/inputs';
import {BiitProgressBarModule} from 'biit-ui/info';
import {LocalizedDatePipeModule} from 'biit-ui/utils';
import {VisibleColumnsPipe} from './pipes/visible-columns-pipe';
import {BiitTableSelectableDirective} from './directives/biit-table-selectable.directive';
import {BiitTableSortableDirective} from './directives/biit-table-sortable.directive';
import {TRANSLOCO_SCOPE} from '@ngneat/transloco';
import {TranslocoRootModule} from 'biit-ui/i18n';


@NgModule({
  declarations: [
    BiitTableComponent,
    BiitTableSelectableDirective,
    BiitTableSortableDirective,
    VisibleColumnsPipe
  ],
  exports: [
    BiitTableComponent,
    BiitTableSelectableDirective,
    BiitTableSortableDirective
  ],
  imports: [
    CommonModule,
    FormsModule,
    BiitIconModule,
    BiitPaginatorModule,
    BiitIconButtonModule,
    BiitMultiselectModule,
    BiitInputTextModule,
    BiitCheckboxModule,
    BiitProgressBarModule,
    LocalizedDatePipeModule,
    TranslocoRootModule
  ],
  providers: [{
    provide: TRANSLOCO_SCOPE,
    useValue: {scope: 'biit-ui/table', alias: "table"}
  }]
})
export class BiitTableModule {
}
