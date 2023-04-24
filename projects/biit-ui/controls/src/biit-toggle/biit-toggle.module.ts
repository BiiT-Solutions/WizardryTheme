import {NgModule} from '@angular/core';
import {BiitToggleComponent} from './biit-toggle.component';
import {BiitIconModule} from 'biit-ui/icon';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [
    BiitToggleComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    BiitIconModule
  ],
  exports: [
    BiitToggleComponent
  ]
})
export class BiitToggleModule { }
