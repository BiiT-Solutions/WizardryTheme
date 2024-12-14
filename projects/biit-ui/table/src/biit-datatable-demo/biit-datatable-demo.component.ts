import {Component, Input} from '@angular/core';
import {BiitIconService} from "biit-ui/icon";
import {ColumnMode, SelectionType} from '@siemens/ngx-datatable';
import {DatatableColumn} from "../biit-datatable/models/datatable-column";
import {Page} from "../biit-datatable/models/page";

@Component({
  selector: 'biit-datatable-demo',
  templateUrl: './biit-datatable-demo.component.html',
  styleUrls: ['./biit-datatable-demo.component.scss']
})
export class BiitDatatableDemoComponent {
  @Input() serverSide = false;

  rows = [
    {name: "Dwight Schrute",gender: "male",title: "Assistant to the Regional Manager"},
    {name: "James Halpert",gender: "male",title: "Regional Co-Manager"},
    {name: "Andy Bernard",gender: "male",title: "Sales Representative"},
    {name: "Michael Scott",gender: "male",title: "Regional Manager"},
    {name: "Pam Beesly",gender: "female",title: "Office Administrator"},
    {name: "Phyllis Lapin",gender: "female",title: "Regional Director of Sales"},
    {name: "Oscar Martinez",gender: "male",title: "Chief Accountant"},
    {name: "Kelly Kapoor",gender: "female",title: "Customer Service Representative"},
    {name: "Angela Martin",gender: "female",title: "Head of Accounting"},
    {name: "Ryan Howard",gender: "male",title: "VP of Northeast Sales"},
    {name: "Creed Bratton",gender: "male",title: "Head of Quality Assurance"},
    {name: "Stanley Hudson",gender: "male",title: "Sales Representative"},
  ];
  _rows = [
    {name: "Dwight Schrute",gender: "male",title: "Assistant to the Regional Manager"},
    {name: "James Halpert",gender: "male",title: "Regional Co-Manager"},
    {name: "Andy Bernard",gender: "male",title: "Sales Representative"},
    {name: "Michael Scott",gender: "male",title: "Regional Manager"},
    {name: "Pam Beesly",gender: "female",title: "Office Administrator"},
  ]

  loadingIndicator = true;

  columns = [
    new DatatableColumn('Nombre', 'name'),
    new DatatableColumn('Género', 'gender', false),
    new DatatableColumn('Puesto', 'title')
  ];
  selected: any[] = [];
  page = new Page(0, 5, 12);

  SelectionType = SelectionType;
  ColumnMode = ColumnMode;
  pageSize = 5

  constructor(private biitIconService: BiitIconService) {
  }

  onPageChange(newPage: Page) {
    this.page = newPage;
    const pointer = this.page.pageNumber * this.page.pageSize;
    this._rows = this.rows.slice(pointer, pointer + this.page.pageSize);
  }
}
