import {NgModule} from '@angular/core';
import {BiitDatatableDemoComponent} from "./biit-datatable-demo.component";
import {BiitTableModule} from '../biit-table/biit-table.module';
import {BiitCheckboxModule, BiitDropdownModule, BiitToggleModule} from '@biit-solutions/wizardry-theme/inputs';
import {BiitIconButtonModule} from '@biit-solutions/wizardry-theme/button';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {NgxDatatableModule} from "@siemens/ngx-datatable";
import {BiitDatatableModule} from "../biit-datatable/biit-datatable.module";
import {BiitDatatablePagerModule} from "../biit-datatable-pager/biit-datatable-pager.module";

@NgModule({
  declarations: [BiitDatatableDemoComponent],
  exports: [BiitDatatableDemoComponent],
  imports: [
    CommonModule,
    FormsModule,
    NgxDatatableModule,
    BiitDatatableModule,
    BiitCheckboxModule,
    BiitDatatablePagerModule,
    BiitIconButtonModule
  ]
})
export class BiitDatatableDemoModule {
}
