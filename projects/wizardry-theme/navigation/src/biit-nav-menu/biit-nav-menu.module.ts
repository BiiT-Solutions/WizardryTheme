import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import {BiitNavMenuComponent} from './biit-nav-menu.component';
import {RouterModule} from '@angular/router';
import {ContextMenuModule} from "@perfectmemory/ngx-contextmenu";

@NgModule({
  declarations: [
    BiitNavMenuComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ContextMenuModule
  ],
  exports: [
    BiitNavMenuComponent
  ]
})
export class BiitNavMenuModule { }
