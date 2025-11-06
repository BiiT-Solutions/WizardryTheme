import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BiitDatatablePagerComponent} from "./biit-datatable-pager.component";
import {FormsModule} from "@angular/forms";
import {BiitIconModule} from 'wyzardry-theme/icon';
import {BiitIconButtonModule} from 'wyzardry-theme/button';
import {TranslocoRootModule} from 'wyzardry-theme/i18n';
import {TRANSLOCO_SCOPE} from '@ngneat/transloco';
import {BiitTooltipModule} from 'wyzardry-theme/info';


@NgModule({
  declarations: [BiitDatatablePagerComponent],
  exports: [BiitDatatablePagerComponent],
  imports: [
    CommonModule,
    FormsModule,
    BiitIconModule,
    BiitIconButtonModule,
    TranslocoRootModule,
    BiitTooltipModule
  ]
})
export class BiitDatatablePagerModule {
}
