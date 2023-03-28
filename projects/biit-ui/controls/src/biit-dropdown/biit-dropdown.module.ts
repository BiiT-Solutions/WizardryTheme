import {NgModule} from '@angular/core';
import {BiitDropdownComponent} from './biit-dropdown.component';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';

@NgModule({
  declarations: [
    BiitDropdownComponent
  ],
  imports: [
    FormsModule,
    BrowserModule
  ],
  exports: [
    BiitDropdownComponent
  ]
})
export class BiitDropdownModule { }
