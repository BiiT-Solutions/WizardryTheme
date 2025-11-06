import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterBy'
})
export class FilterByPipe implements PipeTransform {
  transform(value: string[], filterTerm: string): string[] {
    return value.filter((item) => item.toLowerCase().includes(filterTerm.toLowerCase()));
  }
}
