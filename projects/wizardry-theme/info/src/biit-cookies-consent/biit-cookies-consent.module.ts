import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BiitCookiesConsentComponent} from "./biit-cookies-consent.component";
import {BiitIconModule} from "@biit-solutions/wizardry-theme/icon";
import {BiitButtonModule} from "@biit-solutions/wizardry-theme/button";
import {TranslocoRootModule} from "@biit-solutions/wizardry-theme/i18n";

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
