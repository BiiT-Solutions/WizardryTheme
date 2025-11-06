import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {BiitDatatableComponent} from "./biit-datatable.component";
import {BiitCheckboxModule, BiitInputTextModule, BiitMultiselectModule} from '@biit-solutions/wizardry-theme/inputs';
import {FormsModule} from '@angular/forms';
import {NgxDatatableModule} from "@siemens/ngx-datatable";
import {NgForOf, NgIf, NgTemplateOutlet} from "@angular/common";
import {BiitDatatablePagerModule} from "../biit-datatable-pager/biit-datatable-pager.module";
import {BiitProgressBarModule} from "@biit-solutions/wizardry-theme/info";
import {TranslocoModule} from "@ngneat/transloco";
import {BiitVerticalMenuModule} from "@biit-solutions/wizardry-theme/navigation";

@NgModule({
  declarations: [
    BiitDatatableComponent
  ],
  exports: [
    BiitDatatableComponent
  ],
    imports: [
        FormsModule,
        NgTemplateOutlet,
        BiitCheckboxModule,
        BiitDatatablePagerModule,
        NgForOf,
        NgIf,
        NgxDatatableModule,
        BiitProgressBarModule,
        BiitMultiselectModule,
        TranslocoModule,
        BiitInputTextModule,
        BiitVerticalMenuModule
    ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class BiitDatatableModule {
}
