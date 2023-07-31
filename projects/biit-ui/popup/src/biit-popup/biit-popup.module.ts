import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  BiitPopupBackgroundDirective, BiitPopupClosableDirective,
  BiitPopupComponent,
  BiitPopupNoHeaderDirective,
  BiitPopupSixtyViewDirective
} from './biit-popup.component';
import {BiitIconModule} from 'biit-ui/icon';



@NgModule({
  declarations: [
    BiitPopupComponent,
    BiitPopupBackgroundDirective,
    BiitPopupNoHeaderDirective,
    BiitPopupClosableDirective,
    BiitPopupSixtyViewDirective
  ],
  imports: [
    CommonModule,
    BiitIconModule
  ],
  exports: [
    BiitPopupComponent,
    BiitPopupBackgroundDirective,
    BiitPopupNoHeaderDirective,
    BiitPopupClosableDirective,
    BiitPopupSixtyViewDirective
  ]
})
export class BiitPopupModule { }
