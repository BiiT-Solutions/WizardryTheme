import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BiitVerticalMenuComponent} from "./biit-vertical-menu.component";
import {ContextMenuModule} from "@perfectmemory/ngx-contextmenu";
import {BiitIconModule} from "@biit-solutions/wizardry-theme/icon";
import {OverlayModule} from "@angular/cdk/overlay";
import {BiitIconButtonModule} from "@biit-solutions/wizardry-theme/button";



@NgModule({
  declarations: [BiitVerticalMenuComponent],
  imports: [
    CommonModule,
    ContextMenuModule,
    BiitIconModule,
    OverlayModule,
    BiitIconButtonModule
  ],
  exports: [BiitVerticalMenuComponent]
})
export class BiitVerticalMenuModule { }
