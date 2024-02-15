import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BiitTabGroupComponent} from './biit-tab-group.component';
import {BiitTabComponent} from './biit-tab.component';
import {BiitProgressBarModule, BiitTooltipModule} from "biit-ui/info";



@NgModule({
  declarations: [
    BiitTabGroupComponent,
    BiitTabComponent
  ],
    imports: [
        CommonModule,
        BiitTooltipModule,
        BiitProgressBarModule
    ],
  exports: [
    BiitTabGroupComponent,
    BiitTabComponent
  ]
})
export class BiitTabGroupModule { }
