import {NgModule} from '@angular/core';
import {BiitTableDemoComponent} from "./biit-table-demo.component";
import {BiitTableModule} from '../biit-table/biit-table.module';
import {BiitDropdownModule, BiitToggleModule} from 'biit-ui/inputs';
import {BiitIconButtonModule} from 'biit-ui/button';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [BiitTableDemoComponent],
  exports: [BiitTableDemoComponent],
  imports: [
    BiitTableModule,
    BiitIconButtonModule,
    BiitToggleModule,
    BiitDropdownModule,
    FormsModule
  ]
})
export class BiitTableDemoModule {
}
