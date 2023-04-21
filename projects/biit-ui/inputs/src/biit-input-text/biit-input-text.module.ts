import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BiitInputTextComponent } from './biit-input-text.component';
import {BiitIconModule} from "biit-ui/icon";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    BiitInputTextComponent
  ],
    imports: [
        CommonModule,
        BiitIconModule,
        FormsModule
    ],
  exports: [BiitInputTextComponent]
})
export class BiitInputTextModule { }
