import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextFilterComponent } from './text-filter.component';
import {BiitInputTextModule} from "@biit-solutions/wizardry-theme/inputs";
import {FormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    TextFilterComponent
  ],
  exports: [
    TextFilterComponent
  ],
  imports: [
    CommonModule,
    BiitInputTextModule,
    FormsModule
  ]
})
export class TextFilterModule { }
