import {componentWrapperDecorator, Meta, moduleMetadata, Story} from '@storybook/angular';
import {BiitFilterComponent} from "biit-ui/filter";
import {BiitFilterModule} from "biit-ui/filter";
import {I18nModule} from "../../app/i18n/i18n.module";

export default {
  title: 'Basic/Filter',
  decorators: [
    moduleMetadata({
      imports: [BiitFilterModule, I18nModule],
    }),
    componentWrapperDecorator(story => `<div style="margin: 3em">${story}</div>`),
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

const Template: Story<BiitFilterComponent> = (args: BiitFilterComponent) => ({
  props: args,
  template: `
    <biit-filter
      [resetValue]="resetValue"
      [disabled]="disabled"
      (filterChanged)="filterChanged()">
    </biit-filter>`
});

export const Default = Template.bind({});
Default.args = {
  disabled: false
}
