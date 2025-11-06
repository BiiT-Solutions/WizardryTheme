import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BiitLoginComponent } from './biit-login.component';
import {BiitPopupModule} from "wyzardry-theme/popup";
import {BiitIconModule} from "wyzardry-theme/icon";
import {BiitDropdownModule, BiitInputTextModule, BiitToggleModule} from "wyzardry-theme/inputs";
import {FormsModule} from "@angular/forms";
import {BiitButtonModule} from "wyzardry-theme/button";
import {TranslocoRootModule} from "wyzardry-theme/i18n";


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
