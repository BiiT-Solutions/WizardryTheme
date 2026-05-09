import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BiitInputTextComponent } from './biit-input-text.component';
import {BiitIconModule} from "@biit-solutions/wizardry-theme/icon";
import {FormsModule} from "@angular/forms";
import {TranslocoRootModule} from "@biit-solutions/wizardry-theme/i18n";
import {BiitTooltipIconModule} from "@biit-solutions/wizardry-theme/info";

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
