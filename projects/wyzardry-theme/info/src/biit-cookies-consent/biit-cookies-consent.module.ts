import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BiitCookiesConsentComponent} from "./biit-cookies-consent.component";
import {BiitIconModule} from "wyzardry-theme/icon";
import {BiitButtonModule} from "wyzardry-theme/button";
import {TranslocoRootModule} from "wyzardry-theme/i18n";

@NgModule({
  declarations: [
    BiitCookiesConsentComponent
  ],
  imports: [
    CommonModule,
    BiitIconModule,
    BiitButtonModule,
    TranslocoRootModule
  ],
  exports: [
    BiitCookiesConsentComponent
  ]
})
export class BiitCookiesConsentModule { }
