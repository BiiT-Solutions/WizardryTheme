import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
  BiitTableComponent, BiitTableFooterlessDirective, BiitTableHeaderlessDirective,
  BiitTableSelectableDirective, BiitTableSelectableSingleDirective,
  BiitTableSortableDirective
} from "./biit-table.component";
import {FormsModule} from "@angular/forms";
import {BiitPaginatorModule} from '../biit-paginator/biit-paginator.module';
import {BiitCheckboxModule, BiitInputTextModule, BiitMultiselectModule} from 'wyzardry-theme/inputs';
import {BiitProgressBarModule} from 'wyzardry-theme/info';
import {LocalizedDatePipeModule} from 'wyzardry-theme/utils';
import {VisibleColumnsPipe} from './pipes/visible-columns-pipe';
import {TranslocoRootModule} from 'wyzardry-theme/i18n';
import {BiitIconModule} from 'wyzardry-theme/icon';
import {BiitButtonModule, BiitIconButtonModule} from "wyzardry-theme/button";
import {ColumnDataPipe} from "./pipes/column-data-pipe";
import {BiitVerticalMenuModule} from "wyzardry-theme/navigation";


@NgModule({
  declarations: [
    BiitTableComponent,
    BiitTableSelectableDirective,
    BiitTableSelectableSingleDirective,
    BiitTableSortableDirective,
    BiitTableHeaderlessDirective,
    BiitTableFooterlessDirective,
    VisibleColumnsPipe,
    ColumnDataPipe
  ],
  exports: [
    BiitTableComponent,
    BiitTableSelectableDirective,
    BiitTableSelectableSingleDirective,
    BiitTableSortableDirective,
    BiitTableHeaderlessDirective,
    BiitTableFooterlessDirective
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
    BiitIconButtonModule,
    BiitVerticalMenuModule
  ]
})
export class BiitTableModule {
}
