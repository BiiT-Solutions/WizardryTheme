import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BiitGalleryCardComponent} from "./biit-gallery-card.component";
import {BiitIconModule} from "biit-ui/icon";

@NgModule({
  declarations: [
    BiitGalleryCardComponent
  ],
  imports: [
    CommonModule,
    BiitIconModule
  ],
  exports: [
    BiitGalleryCardComponent
  ]
})
export class BiitGalleryCardModule { }
