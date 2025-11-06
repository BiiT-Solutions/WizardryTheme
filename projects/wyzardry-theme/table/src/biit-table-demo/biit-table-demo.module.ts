import {NgModule} from '@angular/core';
import {BiitTableDemoComponent} from "./biit-table-demo.component";
import {BiitTableModule} from '../biit-table/biit-table.module';
import {BiitDropdownModule, BiitToggleModule} from 'wyzardry-theme/inputs';
import {BiitIconButtonModule} from 'wyzardry-theme/button';
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
