import { NgModule } from '@angular/core';
import { BiitButtonComponent } from './biit-button.component';
import {MatButtonModule} from "@angular/material/button";
import {NgIf, NgTemplateOutlet} from "@angular/common";

@NgModule({
  declarations: [
    BiitButtonComponent
  ],
  imports: [
    MatButtonModule,
    NgIf,
    NgTemplateOutlet
  ],
  exports: [
    BiitButtonComponent
  ]
})
export class BiitButtonModule { }
