import {NgModule} from '@angular/core';
import {BiitMultiselectComponent} from './biit-multiselect.component';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {BiitIconModule} from '@biit-solutions/wizardry-theme/icon';
import {BiitCheckboxModule} from '../biit-checkbox/biit-checkbox.module';
import {BiitIconButtonModule} from '@biit-solutions/wizardry-theme/button';

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
