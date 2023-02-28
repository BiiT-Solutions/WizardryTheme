import {Meta, moduleMetadata, Story} from '@storybook/angular';
import {BiiTFilterComponent} from "../../projects/biit-ui/filter/src/biit-filter/biit-filter.component";
import {BiitFilterModule} from "../../projects/biit-ui/filter/src/biit-filter/biit-filter.module";

export default {
  title: 'Basic/Filter',
  decorators: [
    moduleMetadata({
      imports: [BiitFilterModule],
    }),
  ],
  args: {
    disabled: false
  },
  argTypes: {
    disabled: {
      name: 'disabled',
      type: {name: 'boolean', required: false},
      defaultValue: 'false',
      description: 'Disables the component interaction.',
      table: {
        type: {summary: 'boolean'},
        defaultValue: {summary: false},
        category: 'Inputs'
      },
      control: {
        type: 'boolean'
      }
    },
    filterChanged: {
      action: 'Changed',
      name: 'filterChanged',
      description: 'Emits an event when the content inside the filter changes.',
      table: {
        type: 'EventEmitter<string>',
        category: 'Outputs'
      }
    }
  }
} as Meta;

const Template: Story<BiiTFilterComponent> = (args: BiiTFilterComponent) => ({
  props: args,
  template: `
    <app-biit-filter
      [resetValue]="resetValue"
      [disabled]="disabled"
      (filterChanged)="filterChanged()">
    </app-biit-filter>`
});

export const Default = Template.bind({});
Default.args = {
  disabled: false
}
