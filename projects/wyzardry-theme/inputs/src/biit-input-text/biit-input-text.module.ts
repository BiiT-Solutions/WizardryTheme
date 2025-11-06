import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BiitInputTextComponent } from './biit-input-text.component';
import {BiitIconModule} from "wyzardry-theme/icon";
import {FormsModule} from "@angular/forms";
import {TranslocoRootModule} from "wyzardry-theme/i18n";
import {BiitTooltipIconModule} from "wyzardry-theme/info";

@NgModule({
  declarations: [
    BiitInputTextComponent
  ],
    imports: [
        CommonModule,
        BiitIconModule,
        FormsModule,
        TranslocoRootModule,
        BiitTooltipIconModule
    ],
  exports: [
    BiitInputTextComponent
  ]
})
export class BiitInputTextModule { }
