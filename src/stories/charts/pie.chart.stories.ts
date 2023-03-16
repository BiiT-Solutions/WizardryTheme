import {Meta, moduleMetadata, Story} from '@storybook/angular';
import {PieChartModule} from "../../../projects/biit-ui/charts/src/pie-chart/pie-chart.module";
import {Colors} from "../../../projects/biit-ui/charts/src/colors";

export default {
  title: 'Charts/Pie',
  decorators: [
    moduleMetadata({
      imports: [PieChartModule],
    }),
  ],
  args: {
    width: 500,
    showToolbar: true,
    colors: Colors.defaultPalette,
    title: undefined,
    titleAlignment: 'center',
    isDonut: false,
    fill: 'solid',
    shadow: true,
    legendPosition: 'bottom',
  },
  argTypes: {
    width: {
      type: {name: 'number', required: false},
      defaultValue: 500,
      description: 'Defines the width of the chart in pixels',
      table: {
        type: {summary: 'number'},
        defaultValue: {summary: 500},
        category: 'Inputs'
      },
      control: {
        type: 'number',
        min: 300, max: 1000, step: 50,
      }
    },
    showToolbar: {
      name: 'showToolbar',
      type: {name: 'boolean', required: false},
      defaultValue: 'true',
      description: 'Disables the toolbar.',
      table: {
        type: {summary: 'boolean'},
        defaultValue: {summary: true},
        category: 'Inputs'
      },
      control: {
        type: 'boolean'
      }
    },
    colors: {
      name: 'colors',
      type: {name: 'string', required: false},
      defaultValue: '["#fd7f6f", "#7eb0d5", "#b2e061", "#bd7ebe", "#ffb55a", "#ffee65", "#beb9db", "#fdcce5", "#8bd3c7"]',
      description: 'Change the colors of the bars',
      table: {
        type: {summary: 'array'},
        defaultValue: {summary: 'empty'},
        category: 'Inputs'
      },
      control: {
        type: 'object'
      }
    },
    title: {
      name: 'title',
      type: {name: 'string', required: false},
      defaultValue: 'undefined',
      description: 'Shows the title of the chart',
      table: {
        type: {summary: 'string'},
        defaultValue: {summary: true},
        category: 'Inputs'
      },
      control: {
        type: 'text'
      }
    },
    titleAlignment: {
      name: 'titleAlignment',
      type: {name: 'string', required: false},
      defaultValue: 'default',
      description: 'Defines the alignment of the title',
      table: {
        type: {summary: 'string'},
        defaultValue: {summary: 'empty'},
        category: 'Inputs'
      },
      options: ['left', 'center', 'right'],
      control: {
        type: 'select'
      }
    },
    isDonut: {
      name: 'isDonut',
      type: {name: 'boolean', required: false},
      defaultValue: 'true',
      description: 'Draws a hole at the center',
      table: {
        type: {summary: 'boolean'},
        defaultValue: {summary: true},
        category: 'Inputs'
      },
      control: {
        type: 'boolean'
      }
    },
    fill: {
      name: 'fill',
      type: {name: 'string', required: false},
      defaultValue: 'default',
      description: 'Defines how the bars are filled',
      table: {
        type: {summary: 'string'},
        defaultValue: {summary: 'empty'},
        category: 'Inputs'
      },
      options: ['gradient', 'solid', 'pattern'],
      control: {
        type: 'select'
      }
    },
    shadow: {
      name: 'shadow',
      type: {name: 'boolean', required: false},
      defaultValue: 'true',
      description: 'Draws a shadow on the element',
      table: {
        type: {summary: 'boolean'},
        defaultValue: {summary: true},
        category: 'Inputs'
      },
      control: {
        type: 'boolean'
      }
    },
    legendPosition: {
      name: 'legendPosition',
      type: { name: 'string', required: false },
      defaultValue: 'default',
      description: 'Defines where the legend is shown',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'empty' },
        category: 'Inputs'
      },
      options: ['left', 'bottom', 'right', 'top'],
      control: {
        type: 'select'
      }
    },
  }
} as Meta;

const Template: Story<PieChartModule> = (args: PieChartModule) => ({
  props: args,
  template: `
    <app-pie-chart
      [width]="width"
      [showToolbar]="showToolbar"
      [colors]="colors"
      [title]="title"
      [titleAlignment]="titleAlignment"
      [isDonut]="isDonut"
      [fill]="fill"
      [shadow]="shadow"
      [legendPosition]="legendPosition"
    >
    </app-pie-chart>`
});

export const Default = Template.bind({});
Default.args = {}


