import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MetadataViewerComponent } from './metadata-viewer.component';
import {MetaElementModule} from "../meta-element/meta-element.module";
import {BiitTooltipModule} from "@biit-solutions/wizardry-theme/info";
import {PipesModule} from "../../pipes/pipes.module";
import {BiitInputTextModule} from "@biit-solutions/wizardry-theme/inputs";
import {FormsModule} from "@angular/forms";
import {BiitIconButtonModule} from "@biit-solutions/wizardry-theme/button";



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
