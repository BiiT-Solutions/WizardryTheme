import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MetadataViewerComponent } from './metadata-viewer.component';
import {MetaElementModule} from "../meta-element/meta-element.module";
import {BiitTooltipModule} from "biit-ui/info";
import {PipesModule} from "../../pipes/pipes.module";
import {BiitInputTextModule} from "biit-ui/inputs";
import {FormsModule} from "@angular/forms";
import {BiitIconButtonModule} from "biit-ui/button";



@NgModule({
  declarations: [
    MetadataViewerComponent
  ],
  exports: [
    MetadataViewerComponent
  ],
  imports: [
    CommonModule,
    MetaElementModule,
    BiitTooltipModule,
    PipesModule,
    BiitInputTextModule,
    FormsModule,
    BiitIconButtonModule
  ]
})
export class MetadataViewerModule { }
