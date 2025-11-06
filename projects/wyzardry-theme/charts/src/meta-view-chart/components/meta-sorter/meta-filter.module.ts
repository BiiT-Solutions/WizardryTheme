import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MetaFilterComponent } from './meta-filter.component';
import {BiitInputTextModule, BiitToggleModule} from "wyzardry-theme/inputs";
import {FormsModule} from "@angular/forms";
import {PipesModule} from "../../pipes/pipes.module";
import {BarRangeModule} from "../bar-range/bar-range.module";
import {BiitIconModule} from "wyzardry-theme/icon";
import {DateFilterSelectorModule} from "../date-filter-selector/date-filter-selector.module";
import {TextFilterModule} from "../text-filter/text-filter.module";
import {BooleanFilterModule} from "../boolean-filter/boolean-filter.module";
import {BiitIconButtonModule} from "wyzardry-theme/button";



@NgModule({
  declarations: [
    MetaFilterComponent
  ],
  exports: [
    MetaFilterComponent
  ],
  imports: [
    CommonModule,
    BiitInputTextModule,
    FormsModule,
    PipesModule,
    BarRangeModule,
    BiitIconModule,
    DateFilterSelectorModule,
    TextFilterModule,
    BooleanFilterModule,
    BiitIconButtonModule,
  ]
})
export class MetaFilterModule { }
