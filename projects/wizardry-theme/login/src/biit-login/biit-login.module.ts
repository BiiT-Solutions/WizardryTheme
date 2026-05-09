import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BiitLoginComponent } from './biit-login.component';
import {BiitPopupModule} from "@biit-solutions/wizardry-theme/popup";
import {BiitIconModule} from "@biit-solutions/wizardry-theme/icon";
import {BiitDropdownModule, BiitInputTextModule, BiitToggleModule} from "@biit-solutions/wizardry-theme/inputs";
import {FormsModule} from "@angular/forms";
import {BiitButtonModule} from "@biit-solutions/wizardry-theme/button";
import {TranslocoRootModule} from "@biit-solutions/wizardry-theme/i18n";


@NgModule({
  declarations: [
    BiitLoginComponent
  ],
  imports: [
    CommonModule,
    BiitPopupModule,
    BiitIconModule,
    BiitInputTextModule,
    FormsModule,
    BiitToggleModule,
    BiitButtonModule,
    TranslocoRootModule,
    BiitDropdownModule
  ], exports: [
    BiitLoginComponent
  ]
})
export class BiitLoginModule { }
