import { DatePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';
import {TranslocoLocaleService} from "@ngneat/transloco-locale";

@Pipe({
  name: 'localizedDate',
  pure: false
})
export class LocalizedDatePipe implements PipeTransform {

  constructor(private translocoLocale: TranslocoLocaleService) {
  }

  transform(value: any, pattern: string = 'shortDate'): any {
    const datePipe: DatePipe = new DatePipe(this.translocoLocale.getLocale());
    return datePipe.transform(value, pattern);
  }

}
