import {NgModule} from '@angular/core';
import {BiitMultiselectComponent} from './biit-multiselect.component';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {BiitIconModule} from 'biit-ui/icon';
import {BiitCheckboxModule} from '../biit-checkbox/biit-checkbox.module';

@NgModule({
  declarations: [
    BiitMultiselectComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    BiitIconModule,
    BiitCheckboxModule
  ],
  exports: [
    BiitMultiselectComponent
  ]
})
export class BiitMultiselectModule { }
