import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MetaSorterComponent } from './meta-sorter.component';
import {BiitInputTextModule} from "biit-ui/inputs";
import {FormsModule} from "@angular/forms";
import {PipesModule} from "../../pipes/pipes.module";
import {BarRangeModule} from "../bar-range/bar-range.module";



@NgModule({
  declarations: [
    MetaSorterComponent
  ],
  exports: [
    MetaSorterComponent
  ],
  imports: [
    CommonModule,
    BiitInputTextModule,
    FormsModule,
    PipesModule,
    BarRangeModule
  ]
})
export class MetaSorterModule { }
