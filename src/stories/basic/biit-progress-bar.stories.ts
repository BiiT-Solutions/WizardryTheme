import {Meta, moduleMetadata, Story} from "@storybook/angular";
import {BiitProgressBarComponent, BiitProgressBarModule, BiitProgressBarType} from '@biit-solutions/wizardry-theme/info';

export default {
  title: "Basic/Info/Progress Bar",
  decorators: [
    moduleMetadata({
      imports: [BiitProgressBarModule],
    }),
  ],
  args: {
    type: 'INDETERMINATE',
    value: 0
  },
  argTypes: {
    type: {
      name: 'type',
      type: {name: "string", required: false},
      defaultValue: 'INDETERMINATE',
      description: 'Progress bar type.',
      table: {
        type: { summary: 'string' },
        category: 'Inputs'
      },
      options: ['INDETERMINATE', 'DETERMINATE'],
      control: {
        type: 'select'
      }
    },
    value: {
      name: 'value',
      type: {name: 'number', required: false},
      description: 'Sets the progress bar size (on determinate mode)',
      table: {
        type: {summary: 'number'},
        category: 'Inputs'
      },
      control: {
        type: 'range',
        min: 0,
        max: 100,
        step: 1
      },
      if: { arg: 'type', eq: 'DETERMINATE' }
    }
  }
} as Meta;


const Template: Story<BiitProgressBarComponent> = (args: BiitProgressBarComponent) => ({
  props: args,
  template: `
    <biit-progress-bar [type]="type" [value]="value"></biit-progress-bar>
    <div style="display: block; background:lightblue; padding: 1rem;">
        This is an overlapping test (Progress bar does not take actual space)
    </div>
  `
});

export const Determinate = Template.bind({});
Determinate.args={type: BiitProgressBarType.DETERMINATE};

export const Indeterminate = Template.bind({});
Indeterminate.args={type: BiitProgressBarType.INDETERMINATE};
