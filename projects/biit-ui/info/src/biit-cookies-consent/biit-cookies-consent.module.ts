import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BiitCookiesConsentComponent} from "./biit-cookies-consent.component";
import {BiitIconModule} from "biit-ui/icon";
import {BiitButtonModule} from "biit-ui/button";
import {TranslocoRootModule} from "biit-ui/i18n";

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
