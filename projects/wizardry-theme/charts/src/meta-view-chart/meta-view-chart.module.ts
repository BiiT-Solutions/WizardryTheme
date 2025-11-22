import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MetaViewChartComponent } from './meta-view-chart.component';
import {MetaElementModule} from "./components/meta-element/meta-element.module";
import {MetaBoardModule} from "./components/meta-board/meta-board.module";
import {MetaFilterModule} from "./components/meta-sorter/meta-filter.module";
import {MetadataViewerModule} from "./components/metadata-viewer/metadata-viewer.module";
import {TimelineViewerChartModule} from "../timeline-viewer-chart/timeline-viewer-chart.module";
import {PipesModule} from "./pipes/pipes.module";
import {BiitIconModule} from "@biit-solutions/wizardry-theme/icon";
import {TranslocoRootModule} from "@biit-solutions/wizardry-theme/i18n";
import {BiitIconButtonModule} from "@biit-solutions/wizardry-theme/button";

@NgModule({
  declarations: [
    MetaViewChartComponent,
  ],
  imports: [
    CommonModule,
    MetaElementModule,
    MetaBoardModule,
    MetaFilterModule,
    MetadataViewerModule,
    TimelineViewerChartModule,
    PipesModule,
    BiitIconModule,
    TranslocoRootModule,
    BiitIconButtonModule
  ],
  exports: [
    MetaViewChartComponent
  ]
})
export class MetaViewChartModule { }
