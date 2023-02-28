import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BiitTableComponent} from "./biit-table.component";
import {I18nModule} from "../../../../../src/app/i18n/i18n.module";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatTableModule} from "@angular/material/table";
import {MatSortModule} from "@angular/material/sort";
import {MatMenuModule} from "@angular/material/menu";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatIconModule} from "@angular/material/icon";
import {MatTooltipModule} from "@angular/material/tooltip";
import {BiitFilterModule} from "../../../filter/src/biit-filter/biit-filter.module";


@NgModule({
  declarations: [BiitTableComponent],
  exports: [BiitTableComponent],
  imports: [
    CommonModule,
    I18nModule,
    MatPaginatorModule,
    MatTableModule,
    MatSortModule,
    MatMenuModule,
    MatCheckboxModule,
    MatIconModule,
    MatTooltipModule,
    BiitFilterModule
  ]
})
export class BiitTableModule {
}
