import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SafeHtmlPipe } from './safe-html.pipe';
import { FilterByPipe } from './filter-by.pipe';
import { FieldTypePipe } from './field-type.pipe';
import { MetaElementToBarChartPipe } from './meta-element-to-bar-chart.pipe';
import { MetaElementMaxValuePipe } from './meta-element-max-value.pipe';
import { MetaElementMinValuePipe } from './meta-element-min-value.pipe';



@NgModule({
  declarations: [
    SafeHtmlPipe,
    FilterByPipe,
    FieldTypePipe,
    MetaElementToBarChartPipe,
    MetaElementMaxValuePipe,
    MetaElementMinValuePipe
  ],
  exports: [
    SafeHtmlPipe,
    FilterByPipe,
    FieldTypePipe,
    MetaElementToBarChartPipe,
    MetaElementMinValuePipe,
    MetaElementMaxValuePipe
  ],
  imports: [
    CommonModule
  ]
})
export class PipesModule { }
