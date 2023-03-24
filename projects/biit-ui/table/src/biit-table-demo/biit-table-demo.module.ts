import {NgModule} from '@angular/core';
import {BiitTableDemoComponent} from "./biit-table-demo.component";
import {BiitTableModule} from '../biit-table/biit-table.module';


@NgModule({
  declarations: [BiitTableDemoComponent],
  exports: [BiitTableDemoComponent],
  imports: [
    BiitTableModule
  ]
})
export class BiitTableDemoModule {
}
