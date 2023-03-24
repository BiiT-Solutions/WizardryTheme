import {Component, Input} from '@angular/core';
import {BasicTableData} from '../biit-table/basic-table-data';

@Component({
  selector: 'app-biit-table-demo',
  templateUrl: './biit-table-demo.component.html',
  styleUrls: ['./biit-table-demo.component.scss']
})
export class BiitTableDemoComponent {

  @Input() locale: string = 'en';

  basicTableData = new BasicTableData(
    ['id', 'title', 'available', 'releaseDate'],
    ['demo.id', 'demo.title', 'demo.available', 'demo.releaseDate'],
    ['id', 'title', 'available', 'releaseDate'],
    [
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
    ]
  );

  constructor() {}

}
