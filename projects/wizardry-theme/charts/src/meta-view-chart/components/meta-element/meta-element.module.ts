import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MetaElementComponent} from './meta-element.component';
import {PipesModule} from "../../pipes/pipes.module";


@NgModule({
  declarations: [
    MetaElementComponent,
  ],
  exports: [
    MetaElementComponent
  ],
  imports: [
    CommonModule,
    PipesModule
  ]
})
export class MetaElementModule {
}
