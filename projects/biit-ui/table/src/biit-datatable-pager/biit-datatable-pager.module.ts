import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BiitDatatablePagerComponent} from "./biit-datatable-pager.component";
import {FormsModule} from "@angular/forms";
import {BiitIconModule} from 'biit-ui/icon';
import {BiitIconButtonModule} from 'biit-ui/button';
import {TranslocoRootModule} from 'biit-ui/i18n';
import {TRANSLOCO_SCOPE} from '@ngneat/transloco';
import {BiitTooltipModule} from 'biit-ui/info';


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
