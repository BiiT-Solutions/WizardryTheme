import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MetaViewChartComponent } from './meta-view-chart.component';
import {MetaElementModule} from "./components/meta-element/meta-element.module";
import {MetaBoardModule} from "./components/meta-board/meta-board.module";
import {MetaFilterModule} from "./components/meta-sorter/meta-filter.module";




@NgModule({
  declarations: [
    MetaViewChartComponent,
  ],
  imports: [
    CommonModule,
    MetaElementModule,
    MetaBoardModule,
    MetaFilterModule
  ],
  exports: [
    MetaViewChartComponent
  ]
})
export class MetaViewChartModule { }
