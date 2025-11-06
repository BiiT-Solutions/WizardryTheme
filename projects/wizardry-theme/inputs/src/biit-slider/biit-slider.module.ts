import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {FormsModule} from '@angular/forms';
import {BiitIconModule} from '@biit-solutions/wizardry-theme/icon';
import {BiitSliderComponent} from "./biit-slider.component";

@NgModule({
  declarations: [
    BiitSliderComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    BiitIconModule
  ],
  exports: [
    BiitSliderComponent,
  ]
})
export class BiitSliderModule { }
