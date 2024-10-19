import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PivotElementComponent} from './pivot-element.component';
import {PipesModule} from "../../pipes/pipes.module";


@NgModule({
  declarations: [
    PivotElementComponent,
  ],
  exports: [
    PivotElementComponent
  ],
  imports: [
    CommonModule,
    PipesModule
  ]
})
export class PivotElementModule {
}
