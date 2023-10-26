import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BiitInputTextComponent } from './biit-input-text.component';
import {BiitIconModule} from "biit-ui/icon";
import {FormsModule} from "@angular/forms";
import {TRANSLOCO_SCOPE} from "@ngneat/transloco";
import {TranslocoRootModule} from "biit-ui/i18n";

@NgModule({
  declarations: [
    BiitInputTextComponent
  ],
  imports: [
    CommonModule,
    BiitIconModule,
    FormsModule,
    TranslocoRootModule
  ],
  exports: [
    BiitInputTextComponent
  ],
  providers: [{
    provide: TRANSLOCO_SCOPE,
    useValue: {scope: 'biit-ui/inputs', alias: "inputs"}
  }]
})
export class BiitInputTextModule { }
