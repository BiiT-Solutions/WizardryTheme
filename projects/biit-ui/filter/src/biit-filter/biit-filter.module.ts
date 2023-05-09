import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BiitFilterComponent} from "./biit-filter.component";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import {FormsModule} from "@angular/forms";
import {MatIconModule} from "@angular/material/icon";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {TRANSLOCO_SCOPE} from "@ngneat/transloco";
import {TranslocoRootModule} from "biit-ui/i18n";


@NgModule({
  declarations: [BiitFilterComponent],
  exports: [BiitFilterComponent],
  imports: [
    CommonModule,
    FormsModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    BrowserAnimationsModule,
    TranslocoRootModule
  ],
  providers: [{
    provide: TRANSLOCO_SCOPE,
    useValue: {scope: 'biit-ui/filter', alias: "filter"}
  }]
})
export class BiitFilterModule {
}
