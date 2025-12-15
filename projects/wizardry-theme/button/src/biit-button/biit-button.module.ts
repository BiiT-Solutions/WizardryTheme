import {NgModule} from '@angular/core';
import {
  BiitButtonComponent,
  BiitButtonPrimaryDirective, BiitButtonQuaternaryDirective,
  BiitButtonSecondaryDirective,
  BiitButtonTertiaryDirective
} from './biit-button.component';
import {CommonModule} from "@angular/common";
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    BiitButtonComponent,
    BiitButtonPrimaryDirective,
    BiitButtonSecondaryDirective,
    BiitButtonTertiaryDirective,
    BiitButtonQuaternaryDirective
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    BiitButtonComponent,
    BiitButtonPrimaryDirective,
    BiitButtonSecondaryDirective,
    BiitButtonTertiaryDirective,
    BiitButtonQuaternaryDirective
  ]
})
export class BiitButtonModule { }
