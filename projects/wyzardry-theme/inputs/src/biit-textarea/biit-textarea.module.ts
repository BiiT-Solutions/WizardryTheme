import {NgModule} from '@angular/core';
import {
  BiitTextareaComponent,
} from './biit-textarea.component';
import {CommonModule} from "@angular/common";
import {FormsModule} from '@angular/forms';
import {BiitIconModule} from 'wyzardry-theme/icon';
import {BiitTooltipIconModule} from "wyzardry-theme/info";

@NgModule({
  declarations: [
    BiitTextareaComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    BiitIconModule,
    BiitTooltipIconModule
  ],
  exports: [
    BiitTextareaComponent,
  ]
})
export class BiitTextareaModule { }
