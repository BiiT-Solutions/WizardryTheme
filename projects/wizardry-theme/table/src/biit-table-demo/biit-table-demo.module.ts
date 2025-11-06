import {NgModule} from '@angular/core';
import {BiitTableDemoComponent} from "./biit-table-demo.component";
import {BiitTableModule} from '../biit-table/biit-table.module';
import {BiitDropdownModule, BiitToggleModule} from '@biit-solutions/wizardry-theme/inputs';
import {BiitIconButtonModule} from '@biit-solutions/wizardry-theme/button';
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
