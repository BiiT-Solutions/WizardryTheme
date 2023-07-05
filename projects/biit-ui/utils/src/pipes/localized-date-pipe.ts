import { DatePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';
import {TranslocoService} from '@ngneat/transloco';

@Pipe({
  name: 'localizedDate',
  pure: false
})
export class LocalizedDatePipe implements PipeTransform {

  constructor(private translateService: TranslocoService) {
  }

  transform(value: any, pattern: string = 'shortDate'): any {
    const datePipe: DatePipe = new DatePipe(this.translateService.getActiveLang());
    return datePipe.transform(value, pattern);
  }

}
