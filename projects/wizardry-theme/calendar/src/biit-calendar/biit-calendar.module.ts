import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BiitCalendarComponent } from './biit-calendar.component';
import {TranslocoRootModule} from "@biit-solutions/wizardry-theme/i18n";
import {CalendarModule, DateAdapter} from "angular-calendar";
import {adapterFactory} from "angular-calendar/date-adapters/date-fns";
import {ContextMenuModule} from "@perfectmemory/ngx-contextmenu";
import {TranslocoDatePipe} from "@ngneat/transloco-locale";


@NgModule({
  declarations: [
    BiitCalendarComponent
  ],
    imports: [
        CommonModule,
        TranslocoRootModule,
        CalendarModule.forRoot({
            provide: DateAdapter,
            useFactory: adapterFactory,
        }),
        ContextMenuModule,
        TranslocoDatePipe,
    ], exports: [
    BiitCalendarComponent
  ]
})
export class BiitCalendarModule { }
