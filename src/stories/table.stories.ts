import {Meta, moduleMetadata, Story} from '@storybook/angular';
import {BiitTableComponent} from "../../projects/biit-ui/table/src/biit-table/biit-table.component";
import {I18nModule} from "../app/i18n/i18n.module";
import {BiitTableDemoModule} from '../../projects/biit-ui/table/src/biit-table-demo/biit-table-demo.module';

export default {
  title: 'Basic/Table',
  decorators: [
    moduleMetadata({
      imports: [BiitTableDemoModule, I18nModule],
    })
  ],
  component: BiitTableComponent,
  args: {
    locale: 'en'
  }
} as Meta;

const Template: Story<BiitTableComponent> = (args: BiitTableComponent) => ({
  props: args,
  template: `
    <app-biit-table-demo
      [locale]="locale"
    ></app-biit-table-demo>`
});

export const Default = Template.bind({});
