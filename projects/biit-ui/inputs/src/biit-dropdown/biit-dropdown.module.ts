import {NgModule} from '@angular/core';
import {BiitDropdownComponent} from './biit-dropdown.component';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {BiitIconModule} from 'biit-ui/icon';

@NgModule({
  declarations: [
    BiitDropdownComponent
  ],
    imports: [
        FormsModule,
        CommonModule,
        BiitIconModule
    ],
  exports: [
    BiitDropdownComponent
  ]
})
export class BiitDropdownModule { }
