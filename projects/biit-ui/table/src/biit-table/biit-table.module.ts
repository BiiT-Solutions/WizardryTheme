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
import {BiitFilterModule} from "biit-ui/filter";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatDialogModule} from "@angular/material/dialog";
import {FormsModule} from "@angular/forms";
import {BiitIconModule} from 'biit-ui/icon';
import {BiitPaginatorModule} from '../biit-paginator/biit-paginator.module';
import {BiitIconButtonModule} from 'biit-ui/button';
import {BiitCheckboxModule, BiitInputTextModule, BiitMultiselectModule} from 'biit-ui/inputs';
import {BiitProgressBarModule} from 'biit-ui/info';
import {LocalizedDatePipeModule} from 'biit-ui/utils';
import {VisibleColumnsPipe} from './pipes/visible-columns-pipe';


@NgModule({
  declarations: [
    BiitTableComponent,
    VisibleColumnsPipe
  ],
  exports: [BiitTableComponent],
  imports: [
    CommonModule,
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
    FormsModule,
    BiitIconModule,
    BiitPaginatorModule,
    BiitIconButtonModule,
    BiitMultiselectModule,
    BiitInputTextModule,
    BiitCheckboxModule,
    BiitProgressBarModule,
    LocalizedDatePipeModule
  ]
})
export class BiitTableModule {
}
