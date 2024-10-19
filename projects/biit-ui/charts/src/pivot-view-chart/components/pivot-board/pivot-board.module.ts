import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PivotBoardComponent } from './pivot-board.component';
import {PivotElementModule} from "../pivot-element/pivot-element.module";



@NgModule({
  declarations: [
    PivotBoardComponent
  ],
  exports: [
    PivotBoardComponent
  ],
  imports: [
    CommonModule,
    PivotElementModule
  ]
})
export class PivotBoardModule { }
