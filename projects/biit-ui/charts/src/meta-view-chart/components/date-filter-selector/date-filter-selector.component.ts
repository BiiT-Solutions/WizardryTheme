import {Component, Input, OnInit} from '@angular/core';
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
    if (this.selectedRanges[year + '']) {
      return;
    }
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

  protected onYearSelected(year: number) {
    if (this.selectedYear === year) {
      this.selectedYear = undefined;
    }
    this.convertSelectedRanges();
    this.emitSelextedRanges();
  }

  private convertSelectedRanges() {
    for(let date in this.selectedRanges) {
      if (this.selectedRanges[date]) {
        const splitDate: string[] = date.split('-');
        const startDate: Date = splitDate.length === 1 ? new Date(+splitDate[0], 0, 1) : new Date(+splitDate[0], +splitDate[1], 1);
        const endDate: Date = splitDate.length === 1 ? new Date(+splitDate[0], 11, 31) : new Date(+splitDate[0], +splitDate[1] + 1, 0);
        this.periodRange.push([startDate, endDate]);
      }
    }
  }

  private emitSelextedRanges() {
    console.log(this.periodRange);
  }
}
