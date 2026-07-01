import { Pipe, PipeTransform } from '@angular/core';
import {TranslocoService} from "@jsverse/transloco";
import {Observable} from "rxjs";

@Pipe({
    name: 'monthSelectorLabel',
    pure: false,
    standalone: false
})

export class MonthSelectorLabelPipe implements PipeTransform {

  constructor(private transloco: TranslocoService) {
  }
  transform(date: Date): Observable<string> {
    let month = 'inputs.month-' + (date.getMonth()+1);
    return this.transloco.selectTranslate(month);
  }
}
