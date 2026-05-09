import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
  BiitTableComponent, BiitTableFooterlessDirective, BiitTableHeaderlessDirective,
  BiitTableSelectableDirective, BiitTableSelectableSingleDirective,
  BiitTableSortableDirective
} from "./biit-table.component";
import {FormsModule} from "@angular/forms";
import {BiitPaginatorModule} from '../biit-paginator/biit-paginator.module';
import {BiitCheckboxModule, BiitInputTextModule, BiitMultiselectModule} from '@biit-solutions/wizardry-theme/inputs';
import {BiitProgressBarModule} from '@biit-solutions/wizardry-theme/info';
import {LocalizedDatePipeModule} from '@biit-solutions/wizardry-theme/utils';
import {VisibleColumnsPipe} from './pipes/visible-columns-pipe';
import {TranslocoRootModule} from '@biit-solutions/wizardry-theme/i18n';
import {BiitIconModule} from '@biit-solutions/wizardry-theme/icon';
import {BiitButtonModule, BiitIconButtonModule} from "@biit-solutions/wizardry-theme/button";
import {ColumnDataPipe} from "./pipes/column-data-pipe";
import {BiitVerticalMenuModule} from "@biit-solutions/wizardry-theme/navigation";


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
