import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BiitPaginatorComponent} from "./biit-paginator.component";
import {FormsModule} from "@angular/forms";
import {BiitIconModule} from '@biit-solutions/wizardry-theme/icon';
import {BiitIconButtonModule} from '@biit-solutions/wizardry-theme/button';
import {TranslocoRootModule} from '@biit-solutions/wizardry-theme/i18n';
import {TRANSLOCO_SCOPE} from '@ngneat/transloco';
import {BiitTooltipModule} from '@biit-solutions/wizardry-theme/info';


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
    useValue: {scope: 'wizardry-theme/table', alias: "table"}
  }]
})
export class BiitPaginatorModule {
}
