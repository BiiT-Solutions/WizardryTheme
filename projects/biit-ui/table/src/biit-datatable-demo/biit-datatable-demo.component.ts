import {Component} from '@angular/core';
import {BiitIconService} from "biit-ui/icon";
import {ColumnMode, SelectionType} from '@siemens/ngx-datatable';
import {DatatableColumn} from "../biit-datatable/models/datatable-column";

@Component({
  selector: 'biit-datatable-demo',
  templateUrl: './biit-datatable-demo.component.html',
  styleUrls: ['./biit-datatable-demo.component.scss']
})
export class BiitDatatableDemoComponent {
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
  loadingIndicator = true;

  columns = [
    new DatatableColumn('Nombre', 'name'),
    new DatatableColumn('Género', 'gender', undefined, 1),
    new DatatableColumn('Puesto', 'title')
  ];
  selected: any[] = [];

  ColumnMode = ColumnMode;

  constructor(private biitIconService: BiitIconService) {
  }

  protected readonly SelectionType = SelectionType;
}
