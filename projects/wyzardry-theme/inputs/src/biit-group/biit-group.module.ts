import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {BiitGroupComponent} from "./biit-group.component";
import {FormsModule} from "@angular/forms";
import {BiitIconButtonModule} from "wyzardry-theme/button";

@NgModule({
  declarations: [
    BiitGroupComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    BiitIconButtonModule
  ],
  exports: [
    BiitGroupComponent
  ]
})
export class BiitGroupModule { }
