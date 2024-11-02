import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SafeHtmlPipe } from './safe-html.pipe';
import { FilterByPipe } from './filter-by.pipe';
import { FieldTypePipe } from './field-type.pipe';
import { MetaElementToBarChartPipe } from './meta-element-to-bar-chart.pipe';
import { MetaElementMaxValuePipe } from './meta-element-max-value.pipe';
import { MetaElementMinValuePipe } from './meta-element-min-value.pipe';
import { StepValueExtractorPipe } from './step-value-extractor.pipe';
import { HasPipe } from './has.pipe';
import { MonthNamePipe } from './month-name.pipe';



@NgModule({
  declarations: [
    SafeHtmlPipe,
    FilterByPipe,
    FieldTypePipe,
    MetaElementToBarChartPipe,
    MetaElementMaxValuePipe,
    MetaElementMinValuePipe,
    StepValueExtractorPipe,
    HasPipe,
    MonthNamePipe
  ],
  exports: [
    SafeHtmlPipe,
    FilterByPipe,
    FieldTypePipe,
    MetaElementToBarChartPipe,
    MetaElementMinValuePipe,
    MetaElementMaxValuePipe,
    StepValueExtractorPipe,
    HasPipe,
    MonthNamePipe
  ],
  imports: [
    CommonModule
  ]
})
export class PipesModule { }
