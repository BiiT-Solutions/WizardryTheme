import {componentWrapperDecorator, Meta, moduleMetadata, Story} from '@storybook/angular';
import {I18nModule} from "../app/i18n/i18n.module";
import {BiitTableModule} from "../../projects/biit-ui/table/src/biit-table/biit-table.module";
import {BasicTableData} from "../../projects/biit-ui/table/src/biit-table/basic-table-data";
import {BiitTableComponent} from "../../projects/biit-ui/table/src/biit-table/biit-table.component";
import {SelectionModel} from "@angular/cdk/collections";

export default {
  title: 'Basic/Table',
  decorators: [
    moduleMetadata({
      imports: [BiitTableModule, I18nModule],
    }),
    //👇 Wraps our stories with a decorator
    componentWrapperDecorator(story => `<div style="margin: 3em">${story}</div>`),
  ],
  args: {
    disableRow: false,
    basicTableData: BasicTableData,
    locale: 'en'
  },
  argTypes: {
    disableRow: {
      name: 'disableRow',
      type: {name: 'function', required: false},
      defaultValue: false,
      description: 'Function that defines when a row must be disabled.',
      table: {
        type: {summary: 'function'},
        defaultValue: {summary: false},
        category: 'Inputs'
      },
      control: {
        type: 'boolean'
      }
    },
    locale: {
      name: 'locale',
      type: {name: 'string', required: false},
      defaultValue: 'en',
      description: 'Set the locale for the table labels',
      table: {
        type: {summary: 'boolean'},
        defaultValue: {summary: false},
        category: 'Inputs'
      },
      control: {
        type: 'boolean'
      }
    },
  }
} as Meta;

const Template: Story<BiitTableComponent> = (args: BiitTableComponent) => ({
  props: args,
  template: `
    <app-biit-table
       [basicTableData]="basicTableData"
       [locale]="locale"
       [disableRow]="disableRow">
    </app-biit-table>`
});

const users: User[] = [
  {id: 1, username: "tizioberlusconi", password: "", name: "Tizio", lastname: "Berlusconi"},
  {id: 2, username: "caiobaltar", password: "", name: "Caio", lastname: "Baltar"},
  {id: 3, username: "semproniograco", password: "", name: "Sempronio", lastname: "Graco"}
];

const userBasicTableData: BasicTableData<User> = new BasicTableData<User>();
userBasicTableData.columns = ['id', 'username', 'name', 'lastname'];
userBasicTableData.columnsTags = ['id', 'username', 'name', 'lastname'];
userBasicTableData.visibleColumns = ['username', 'name', 'lastname'];
userBasicTableData.selection = new SelectionModel<User>(false, []);
//userBasicTableData.dataSource = new MatTableDataSource<User>();
userBasicTableData.dataSource.data = users;

class User {
  public id?: number;
  public username?: string;
  public password?: string;
  public name?: string;
  public lastname?: string;
}

function disableRow() {
  return false;
}

export const Default = Template.bind({});
Default.args = {
  locale: "en",
  basicTableData: userBasicTableData,
  disableRow: disableRow
}


