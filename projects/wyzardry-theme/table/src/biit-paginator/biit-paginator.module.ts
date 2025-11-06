import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BiitPaginatorComponent} from "./biit-paginator.component";
import {FormsModule} from "@angular/forms";
import {BiitIconModule} from 'wyzardry-theme/icon';
import {BiitIconButtonModule} from 'wyzardry-theme/button';
import {TranslocoRootModule} from 'wyzardry-theme/i18n';
import {TRANSLOCO_SCOPE} from '@ngneat/transloco';
import {BiitTooltipModule} from 'wyzardry-theme/info';


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
    useValue: {scope: 'wyzardry-theme/table', alias: "table"}
  }]
})
export class BiitPaginatorModule {
}
