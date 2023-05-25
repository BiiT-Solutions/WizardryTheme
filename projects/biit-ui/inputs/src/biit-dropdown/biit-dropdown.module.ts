import {NgModule} from '@angular/core';
import {BiitDropdownComponent} from './biit-dropdown.component';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [
    BiitDropdownComponent
  ],
  imports: [
    FormsModule,
    CommonModule
  ],
  exports: [
    BiitDropdownComponent
  ]
})
export class BiitDropdownModule { }
