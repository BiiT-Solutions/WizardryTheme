import {NgModule} from '@angular/core';
import {
  BiitTextareaComponent,
} from './biit-textarea.component';
import {CommonModule} from "@angular/common";
import {FormsModule} from '@angular/forms';
import {BiitIconModule} from 'biit-ui/icon';

@NgModule({
  declarations: [
    BiitTextareaComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    BiitIconModule
  ],
  exports: [
    BiitTextareaComponent,
  ]
})
export class BiitTextareaModule { }
