import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BiitTabGroupComponent} from './biit-tab-group.component';
import {BiitTabComponent} from './biit-tab.component';



@NgModule({
  declarations: [
    BiitTabGroupComponent,
    BiitTabComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BiitTabGroupComponent,
    BiitTabComponent
  ]
})
export class BiitTabGroupModule { }
