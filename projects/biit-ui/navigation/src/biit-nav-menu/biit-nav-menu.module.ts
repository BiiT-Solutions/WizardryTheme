import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import {BiitNavMenuComponent} from './biit-nav-menu.component';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    BiitNavMenuComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    BiitNavMenuComponent
  ]
})
export class BiitNavMenuModule { }
