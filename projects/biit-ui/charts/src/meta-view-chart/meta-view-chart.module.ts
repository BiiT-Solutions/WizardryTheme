import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MetaViewChartComponent } from './meta-view-chart.component';
import {MetaElementModule} from "./components/meta-element/meta-element.module";
import {MetaBoardModule} from "./components/meta-board/meta-board.module";
import {MetaSorterModule} from "./components/meta-sorter/meta-sorter.module";




@NgModule({
  declarations: [
    MetaViewChartComponent,
  ],
  imports: [
    CommonModule,
    MetaElementModule,
    MetaBoardModule,
    MetaSorterModule
  ],
  exports: [
    MetaViewChartComponent
  ]
})
export class MetaViewChartModule { }
