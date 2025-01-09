import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DateFilterSelectorComponent } from './date-filter-selector.component';
import {BiitCheckboxModule} from "biit-ui/inputs";
import {BiitIconModule} from "biit-ui/icon";
import {PipesModule} from "../../pipes/pipes.module";
import {FormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    DateFilterSelectorComponent
  ],
  exports: [
    DateFilterSelectorComponent
  ],
  imports: [
    CommonModule,
    BiitCheckboxModule,
    BiitIconModule,
    PipesModule,
    FormsModule
  ]
})
export class DateFilterSelectorModule { }
