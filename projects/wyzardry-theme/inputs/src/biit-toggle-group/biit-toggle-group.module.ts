import {NgModule} from '@angular/core';
import {BiitToggleGroupComponent} from './biit-toggle-group.component';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {BiitIconModule} from "wyzardry-theme/icon";
import {BiitToggleButtonComponent} from "./biit-toggle-button.component";

@NgModule({
  declarations: [
    BiitToggleGroupComponent,
    BiitToggleButtonComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    BiitIconModule,
  ],
  exports: [
    BiitToggleGroupComponent,
    BiitToggleButtonComponent
  ]
})
export class BiitToggleGroupModule { }
