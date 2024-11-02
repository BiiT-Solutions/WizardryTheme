import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MetaFilterComponent } from './meta-filter.component';
import {BiitInputTextModule} from "biit-ui/inputs";
import {FormsModule} from "@angular/forms";
import {PipesModule} from "../../pipes/pipes.module";
import {BarRangeModule} from "../bar-range/bar-range.module";
import {BiitIconModule} from "biit-ui/icon";
import {DateFilterSelectorModule} from "../date-filter-selector/date-filter-selector.module";



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
        DateFilterSelectorModule
    ]
})
export class MetaFilterModule { }
