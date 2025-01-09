import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'autoFormat'
})
export class AutoFormatPipe implements PipeTransform {

  transform(value: any): string {
    if (value instanceof Date) {
      return new Intl.DateTimeFormat(navigator.language, {dateStyle: "short", timeStyle: "short"}).format(value);
    }
    return value;
  }

}
