import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BiitTableComponent} from "./biit-table.component";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatTableModule} from "@angular/material/table";
import {MatSortModule} from "@angular/material/sort";
import {MatMenuModule} from "@angular/material/menu";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatIconModule} from "@angular/material/icon";
import {MatTooltipModule} from "@angular/material/tooltip";
import {BiitFilterModule} from "../../../filter/src/biit-filter/biit-filter.module";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatDialogModule} from "@angular/material/dialog";
import {I18nModule} from "../../../../../src/app/i18n/i18n.module";
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [BiitTableComponent],
  exports: [BiitTableComponent],
  imports: [
    CommonModule,
    I18nModule,
    MatIconModule,
    MatFormFieldModule,
    MatMenuModule,
    MatCheckboxModule,
    MatPaginatorModule,
    MatTableModule,
    MatInputModule,
    MatSortModule,
    MatButtonModule,
    MatTooltipModule,
    BiitFilterModule,
    MatDialogModule,
    FormsModule
  ]
})
export class BiitTableModule {
}
