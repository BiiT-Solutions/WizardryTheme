import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MetaBoardComponent } from './meta-board.component';
import {MetaElementModule} from "../meta-element/meta-element.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

@NgModule({
  declarations: [
    MetaBoardComponent
  ],
  exports: [
    MetaBoardComponent
  ],
  imports: [
    CommonModule,
    MetaElementModule,
    BrowserAnimationsModule
  ]
})
export class MetaBoardModule { }
