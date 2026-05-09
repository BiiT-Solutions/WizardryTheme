import {NgModule} from '@angular/core';
import {BiitRadioButtonComponent} from './biit-radio-button.component';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {BiitIconModule} from '@biit-solutions/wizardry-theme/icon';
import {BiitTooltipIconModule} from "@biit-solutions/wizardry-theme/info";

@NgModule({
  declarations: [
    BiitRadioButtonComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    BiitIconModule,
    BiitTooltipIconModule
  ],
  exports: [
    BiitRadioButtonComponent
  ]
})
export class BiitRadioButtonModule { }
