import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BiitLoginComponent } from './biit-login.component';
import {BiitPopupModule} from "biit-ui/popup";
import {BiitIconModule} from "biit-ui/icon";
import {BiitInputTextModule, BiitToggleModule} from "biit-ui/inputs";
import {FormsModule} from "@angular/forms";
import {BiitButtonModule} from "biit-ui/button";
import {I18nModule} from "biit-ui/global";


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
    I18nModule
  ], exports: [
    BiitLoginComponent
  ]
})
export class BiitLoginModule { }
