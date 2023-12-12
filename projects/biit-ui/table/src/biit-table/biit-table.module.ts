import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
  BiitTableComponent,
  BiitTableSelectableDirective,
  BiitTableSortableDirective,
  BiitTableCompactDirective
} from "./biit-table.component";
import {FormsModule} from "@angular/forms";
import {BiitPaginatorModule} from '../biit-paginator/biit-paginator.module';
import {BiitCheckboxModule, BiitInputTextModule, BiitMultiselectModule} from 'biit-ui/inputs';
import {BiitProgressBarModule} from 'biit-ui/info';
import {LocalizedDatePipeModule} from 'biit-ui/utils';
import {VisibleColumnsPipe} from './pipes/visible-columns-pipe';
import {TranslocoRootModule} from 'biit-ui/i18n';
import {BiitIconModule} from 'biit-ui/icon';
import {BiitButtonModule, BiitIconButtonModule} from "biit-ui/button";
import {ColumnDataPipe} from "./pipes/column-data-pipe";


@NgModule({
  declarations: [
    BiitTableComponent,
    BiitTableSelectableDirective,
    BiitTableSortableDirective,
    BiitTableCompactDirective,
    VisibleColumnsPipe,
    ColumnDataPipe
  ],
  exports: [
    BiitTableComponent,
    BiitTableSelectableDirective,
    BiitTableSortableDirective,
    BiitTableCompactDirective
  ],
  imports: [
    CommonModule,
    FormsModule,
    BiitPaginatorModule,
    BiitMultiselectModule,
    BiitInputTextModule,
    BiitCheckboxModule,
    BiitProgressBarModule,
    LocalizedDatePipeModule,
    TranslocoRootModule,
    BiitIconModule,
    BiitButtonModule,
    BiitIconButtonModule
  ]
})
export class BiitTableModule {
}
