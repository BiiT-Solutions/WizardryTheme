import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BiitInputTextComponent } from './biit-input-text.component';
import {BiitIconModule} from "biit-ui/icon";
import {FormsModule} from "@angular/forms";
import {TranslocoRootModule} from "biit-ui/i18n";
import {BiitTooltipIconModule} from "biit-ui/info";

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
