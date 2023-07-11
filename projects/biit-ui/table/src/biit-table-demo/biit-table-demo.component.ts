import {Component, Input, OnInit} from '@angular/core';
import {BiitTableColumn, BiitTableColumnFormat} from '../biit-table/models/biit-table-column';
import {BiitTableResponse} from '../biit-table/models/biit-table-response';
import {BiitTableData} from '../biit-table/models/biit-table-data';

@Component({
  selector: 'biit-table-demo',
  templateUrl: './biit-table-demo.component.html',
  styleUrls: ['./biit-table-demo.component.scss']
})
export class BiitTableDemoComponent implements OnInit {

  @Input() locale: string = 'en';

  data = [
    { id: 1, title: 'Super Metroid', available: true, releaseDate: new Date('1994-03-19') },
    { id: 2, title: 'F-Zero GX', available: false, releaseDate: new Date('2003-07-25') },
    { id: 3, title: 'Paper Mario', available: true, releaseDate: new Date('2000-08-11') },
    { id: 4, title: 'Pokémon SoulSilver', available: false, releaseDate: new Date('2009-09-12') },
    { id: 5, title: "Geoff Crammond's Grand Prix 4", available: false, releaseDate: new Date('2002-12-09') },
    { id: 6, title: "Alex Kidd in Miracle World", available: false, releaseDate: new Date('1986-11-01') },
    { id: 7, title: "Tomb Raider", available: true, releaseDate: new Date('1996-10-25') },
    { id: 8, title: "Rayman 3: Hoodlum Havoc", available: true, releaseDate: new Date('2003-03-18') },
    { id: 9, title: "God of War", available: true, releaseDate: new Date('2018-04-20') },
    { id: 10, title: "S4 League", available: false, releaseDate: new Date('2008-10-09') },
    { id: 11, title: "Battlefield 2142", available: false, releaseDate: new Date('2006-10-17') },
    { id: 12, title: "Lotus III: The Ultimate Challenge", available: false, releaseDate: new Date('1992-06-13') }
  ];

  columns = [
    new BiitTableColumn('id', 'ID', 50, undefined, true),
    new BiitTableColumn('title', 'title', undefined, undefined, true),
    new BiitTableColumn('available', 'available', undefined, BiitTableColumnFormat.BOOLEAN, true),
    new BiitTableColumn('releaseDate', 'release date', undefined, BiitTableColumnFormat.DATE, true),
  ]

  filteredData;
  loading = true;

  constructor() {}

  ngOnInit() {
    setTimeout(() => {
      this.filteredData = new BiitTableData([
        { id: 1, title: 'Super Metroid', available: true, releaseDate: new Date('1994-03-19') },
        { id: 2, title: 'F-Zero GX', available: false, releaseDate: new Date('2003-07-25') },
        { id: 3, title: 'Paper Mario', available: true, releaseDate: new Date('2000-08-11') },
        { id: 4, title: 'Pokémon SoulSilver', available: false, releaseDate: new Date('2009-09-12') },
        { id: 5, title: "Geoff Crammond's Grand Prix 4", available: false, releaseDate: new Date('2002-12-09') },
        { id: 6, title: "Alex Kidd in Miracle World", available: false, releaseDate: new Date('1986-11-01') },
        { id: 7, title: "Tomb Raider", available: true, releaseDate: new Date('1996-10-25') },
        { id: 8, title: "Rayman 3: Hoodlum Havoc", available: true, releaseDate: new Date('2003-03-18') },
        { id: 9, title: "God of War", available: true, releaseDate: new Date('2018-04-20') },
        { id: 10, title: "S4 League", available: false, releaseDate: new Date('2008-10-09') }
      ], 12);
      this.loading = false;
    }, 3000)
  }

  onUpdate(response: BiitTableResponse) {
    let tempData = JSON.parse(JSON.stringify(this.data));
    if (response.search && response.search.length) {
      tempData = tempData.filter(item =>
        Object.keys(item).some(k => item[k].toString().toLowerCase().includes(
          response.search.normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase())));
    }
    if (response.sorting) {
      tempData = tempData.sort((a, b) => {
        switch (this.columns.find(i => i.name == response.sorting.name).format) {
          case BiitTableColumnFormat.BOOLEAN:
            if (a[response.sorting.name] == b[response.sorting.name])
              return 0;
            if (response.sorting.order == 'asc') {
              return a[response.sorting.name] ? -1 : 1;
            } else {
              return a[response.sorting.name] ? 1 : -1;
            }
          case BiitTableColumnFormat.DATE:
            if (new Date(a[response.sorting.name]).getTime() == new Date(b[response.sorting.name]).getTime())
              return 0;
            if (response.sorting.order == 'asc') {
              return (new Date(a[response.sorting.name]).getTime() > new Date(b[response.sorting.name]).getTime()) ? 1 : -1;
            } else {
              return (new Date(a[response.sorting.name]).getTime() > new Date(b[response.sorting.name]).getTime()) ? -1 : 1;
            }
          default:
            if (a[response.sorting.name] == b[response.sorting.name])
              return 0;
            if (response.sorting.order == 'asc') {
              return a[response.sorting.name] > b[response.sorting.name] ? 1 : -1;
            } else {
              return a[response.sorting.name] > b[response.sorting.name] ? -1 : 1;
            }
        }
      });
    }
    this.filteredData = new BiitTableData(
      tempData.slice(
        response.currentPage * response.pageSize - response.pageSize,
        response.currentPage * response.pageSize),
      tempData.length);
  }

}
