import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  BiitPopupBackgroundDirective, BiitPopupClosableDirective, BiitPopupClosableOutsideDirective,
  BiitPopupComponent, BiitPopupInfoBoxDirective,
  BiitPopupNoHeaderDirective,
  BiitPopupSixtyViewDirective
} from './biit-popup.component';
import {BiitIconModule} from '@biit-solutions/wizardry-theme/icon';



@NgModule({
  declarations: [
    BiitPopupComponent,
    BiitPopupBackgroundDirective,
    BiitPopupNoHeaderDirective,
    BiitPopupClosableDirective,
    BiitPopupClosableOutsideDirective,
    BiitPopupSixtyViewDirective,
    BiitPopupInfoBoxDirective
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
    BiitPopupClosableOutsideDirective,
    BiitPopupSixtyViewDirective,
    BiitPopupInfoBoxDirective
  ]
})
export class BiitPopupModule { }
