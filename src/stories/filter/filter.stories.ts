import {componentWrapperDecorator, Meta, moduleMetadata, Story} from '@storybook/angular';
import {BiitFilterComponent, BiitFilterModule} from "biit-ui/filter";
import {TranslocoStorybookModule} from "../../app/transloco/transloco-storybook.module";

export default {
  title: 'Basic/Filter',
  decorators: [
    moduleMetadata({
      imports: [BiitFilterModule, TranslocoStorybookModule],
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

const Template: Story<BiitFilterComponent> = (args: BiitFilterComponent, { globals }) =>
  {
    TranslocoStorybookModule.setLanguage(globals);
    return {
      globals,
      props: args,
      template: `
    <biit-filter
      [resetValue]="resetValue"
      [disabled]="disabled"
      (filterChanged)="filterChanged()">
    </biit-filter>`
    }
};

export const Default = Template.bind({});
Default.args = {
  disabled: false
}
