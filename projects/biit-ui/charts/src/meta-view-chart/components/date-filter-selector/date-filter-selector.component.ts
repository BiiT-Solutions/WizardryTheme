import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MetaViewElementData} from "../../model/meta-view-element-data";

@Component({
  selector: 'biit-date-filter-selector',
  templateUrl: './date-filter-selector.component.html',
  styleUrls: ['./date-filter-selector.component.css']
})
export class DateFilterSelectorComponent {
  @Input('items') set _items(value : MetaViewElementData[]) {
    this.items = value;
    this.sortValues();
  }
  @Input('field') set _field( value: string) {
    this.field = value;
    this.sortValues();
  }
  @Input('range') set _range(value: Date[][]) {
    if (!value) {return;}
    this.periodRange = value;
    this.selectedRanges = {};
    this.periodRange.forEach(range => {
      const startDate: Date = range[0];
      const endDate: Date = range[1];
      if (
        startDate.getTime() === new Date(range[0].getFullYear(), 0, 1).getTime()
        && endDate.getTime() === new Date(range[0].getFullYear(), 11, 31, 23, 59, 59, 999).getTime()) {
        this.selectedRanges[startDate.getFullYear().toString()] = true;
        this.selectedAllMonths(startDate.getFullYear())
      } else {
        this.selectedRanges[startDate.getFullYear() + '-' + startDate.getMonth()] = true;
      }
    });
  }
  @Output() rangeChange: EventEmitter<Date[][]> = new EventEmitter<Date[][]>();

  protected items: MetaViewElementData[] = [];
  protected field: string;
  protected sortByYear: Map<number, MetaViewElementData[]> = new Map<number, MetaViewElementData[]>();
  protected sortByMonth: Map<number, MetaViewElementData[]> = new Map<number, MetaViewElementData[]>();
  protected selectedYear: number;

  protected periodRange: Date[][] = [];
  protected selectedRanges: {} = {};

  private sortValues(): void {
    if (!this.items || !this.items.length || !this.field || !this.field.length) {
      return;
    }
    this.sortByYear = new Map<number, MetaViewElementData[]>();
    this.items.forEach(d => {
      const year: number = new Date(d.data[this.field]).getFullYear();
      if (!this.sortByYear.has(year)) {
        this.sortByYear.set(year, []);
      }
      this.sortByYear.get(year).push(d);
      this.sortByYear = this.sortMap(this.sortByYear);
    });
  }

  private sortMap(map: Map<number, MetaViewElementData[]>): Map<number, MetaViewElementData[]> {
    return new Map([...map.entries()].sort( (a, b) => b[0] - a[0]));
  }

  protected onDisplayYear(year: number) {
    if (year === this.selectedYear) {
      this.selectedYear = undefined;
      return;
    }
    this.selectedYear = year;
    this.loadMonthlyData(year);
  }

  private loadMonthlyData(year: number) {
    this.sortByMonth = new Map<number, MetaViewElementData[]>();
    this.sortByYear.get(year).forEach(d => {
      const month: number = new Date(d.data[this.field]).getMonth();
      if (!this.sortByMonth.has(month)) {
        this.sortByMonth.set(month, []);
      }
      this.sortByMonth.get(month).push(d);
      this.sortByMonth = this.sortMap(this.sortByMonth);
    });
  }

  protected onYearSelected(year: number, selected: boolean) {
    if (this.selectedYear === year) {
      this.selectedYear = undefined;
    }
    this.loadMonthlyData(year);
    selected ? this.selectedAllMonths(year) : this.removeSelectedRanges(year);
    this.convertSelectedRanges();
    this.emitSelectedRanges();
  }

  private selectedAllMonths(year: number): void {
    this.sortByMonth.forEach((months, month) => {
      const date: string = year + '-' + month;
      this.selectedRanges[date] = true;
    });
  }

  private removeSelectedRanges(year: number): void {
    for(let date in this.selectedRanges) {
      if (date.startsWith(year.toString())) {
        delete this.selectedRanges[date];
      }
    }
  }

  private convertSelectedRanges() {
    this.periodRange = [];
    const selectedRanges = {...this.selectedRanges}
    const years = Object.keys(selectedRanges).filter(date => !date.toString().includes('-'));
    years.forEach(year => {
      for (const key in selectedRanges) {
        if (key.startsWith(year + '-')) {
          delete selectedRanges[key];
        }
      }
    });
    for(let date in selectedRanges) {
      if (selectedRanges[date]) {
        const splitDate: string[] = date.split('-');
        const startDate: Date = splitDate.length === 1 ? new Date(+splitDate[0], 0, 1) : new Date(+splitDate[0], +splitDate[1], 1);
        const endDate: Date = splitDate.length === 1
          ? new Date(+splitDate[0], 11, 31, 23, 59, 59, 999)
          : new Date(+splitDate[0], +splitDate[1] + 1, 0, 23, 59, 59, 999);
        this.periodRange.push([startDate, endDate]);
      }
    }
  }

  private emitSelectedRanges(): void {
    if (this.periodRange.length === 0) {
      this.rangeChange.emit(null);
      return;
    }
    this.rangeChange.emit(this.periodRange);
  }

  onMonthSelected(year: number, month: number, selected: boolean): void {
    if (!selected && this.selectedRanges[year]) {
      delete this.selectedRanges[year];
    }
    this.convertSelectedRanges();
    this.emitSelectedRanges();
  }
}
