import {NgModule} from '@angular/core';
import {BiitCheckboxComponent} from './biit-checkbox.component';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {BiitTooltipIconModule} from "biit-ui/info";

@NgModule({
  declarations: [
    BiitCheckboxComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    BiitTooltipIconModule,
  ],
  exports: [
    BiitCheckboxComponent
  ]
})
export class BiitCheckboxModule { }
