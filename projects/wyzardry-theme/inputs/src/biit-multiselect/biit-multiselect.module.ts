import {NgModule} from '@angular/core';
import {BiitMultiselectComponent} from './biit-multiselect.component';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {BiitIconModule} from 'wyzardry-theme/icon';
import {BiitCheckboxModule} from '../biit-checkbox/biit-checkbox.module';
import {BiitIconButtonModule} from 'wyzardry-theme/button';

@NgModule({
  declarations: [
    BiitMultiselectComponent
  ],
    imports: [
        FormsModule,
        CommonModule,
        BiitIconModule,
        BiitCheckboxModule,
        BiitIconButtonModule
    ],
  exports: [
    BiitMultiselectComponent
  ]
})
export class BiitMultiselectModule { }
