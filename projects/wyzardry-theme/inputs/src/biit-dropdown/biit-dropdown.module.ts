import {NgModule} from '@angular/core';
import {BiitDropdownComponent} from './biit-dropdown.component';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {BiitIconModule} from 'wyzardry-theme/icon';
import {BiitIconButtonModule} from "wyzardry-theme/button";

@NgModule({
  declarations: [
    BiitDropdownComponent
  ],
    imports: [
        FormsModule,
        CommonModule,
        BiitIconModule,
        BiitIconButtonModule
    ],
  exports: [
    BiitDropdownComponent
  ]
})
export class BiitDropdownModule { }
