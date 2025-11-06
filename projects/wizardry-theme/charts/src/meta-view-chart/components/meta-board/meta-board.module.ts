import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MetaBoardComponent } from './meta-board.component';
import {MetaElementModule} from "../meta-element/meta-element.module";

@NgModule({
  declarations: [
    MetaBoardComponent
  ],
  exports: [
    MetaBoardComponent
  ],
  imports: [
    CommonModule,
    MetaElementModule
  ]
})
export class MetaBoardModule { }
