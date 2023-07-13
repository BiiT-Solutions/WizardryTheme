import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BiitPaginatorComponent} from "./biit-paginator.component";
import {FormsModule} from "@angular/forms";
import {BiitIconModule} from 'biit-ui/icon';
import {BiitIconButtonModule} from 'biit-ui/button';
import {TranslocoRootModule} from 'biit-ui/i18n';
import {TRANSLOCO_SCOPE} from '@ngneat/transloco';
import {BiitTooltipModule} from 'biit-ui/info';


@NgModule({
  declarations: [BiitPaginatorComponent],
  exports: [BiitPaginatorComponent],
  imports: [
    CommonModule,
    FormsModule,
    BiitIconModule,
    BiitIconButtonModule,
    TranslocoRootModule,
    BiitTooltipModule
  ],
  providers: [{
    provide: TRANSLOCO_SCOPE,
    useValue: {scope: 'biit-ui/table', alias: "table"}
  }]
})
export class BiitPaginatorModule {
}
