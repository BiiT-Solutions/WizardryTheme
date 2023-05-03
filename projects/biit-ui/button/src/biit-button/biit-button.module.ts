import {NgModule} from '@angular/core';
import {BiitButtonComponent} from './biit-button.component';
import {MatButtonModule} from "@angular/material/button";
import {NgClass, NgIf, NgStyle, NgTemplateOutlet} from "@angular/common";

@NgModule({
  declarations: [
    BiitButtonComponent
  ],
    imports: [
        MatButtonModule,
        NgIf,
        NgTemplateOutlet,
        NgClass,
        NgStyle
    ],
  exports: [
    BiitButtonComponent
  ]
})
export class BiitButtonModule { }
