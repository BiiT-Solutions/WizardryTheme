import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooleanFilterComponent } from './boolean-filter.component';
import {BiitTernaryToggleModule, BiitToggleModule} from "biit-ui/inputs";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    BooleanFilterComponent
  ],
  exports: [
    BooleanFilterComponent
  ],
    imports: [
        CommonModule,
        BiitToggleModule,
        FormsModule,
        BiitTernaryToggleModule
    ]
})
export class BooleanFilterModule { }
