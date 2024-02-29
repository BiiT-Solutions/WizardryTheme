import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {FormsModule} from '@angular/forms';
import {BiitActionButtonComponent} from "./biit-action-button.component";
import {BiitIconButtonModule} from "../biit-icon-button/biit-icon-button.module";

@NgModule({
  declarations: [
    BiitActionButtonComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    BiitIconButtonModule
  ],
  exports: [
    BiitActionButtonComponent
  ]
})
export class BiitActionButtonModule { }
