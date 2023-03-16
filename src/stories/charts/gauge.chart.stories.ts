import {Meta, moduleMetadata, Story} from '@storybook/angular';
import {GaugeChartModule} from "../../../projects/biit-ui/charts/src/gauge-chart/gauge-chart.module";
import {Colors} from "../../../projects/biit-ui/charts/src/colors";

export default {
  title: 'Charts/Gauge',
  decorators: [
    moduleMetadata({
      imports: [GaugeChartModule],
    }),
  ],
  args: {
    width: 500,
    height: 200,
    showToolbar: true,
    colors: Colors.defaultPalette,
    title: undefined,
    titleAlignment: 'center',
    fill: 'solid',
    shadow: true,
    innerCirclePercentage: 50,
    trackBackgroundColor: "#e7e7e7",
    trackBackgroundThicknessPercentage: 97
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
    height: {
      type: {name: 'number', required: false},
      defaultValue: 250,
      description: 'Defines the height of the chart in pixels',
      table: {
        type: {summary: 'number'},
        defaultValue: {summary: 250},
        category: 'Inputs'
      },
      control: {
        type: 'number',
        min: 200, max: 800, step: 50,
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
    opacity: {
      type: {name: 'number', required: false},
      defaultValue: 1,
      description: 'Defines the opacity of the arc [0..1]',
      table: {
        type: {summary: 'number'},
        defaultValue: {summary: 1},
        category: 'Inputs'
      },
      control: {
        type: 'number',
        min: 0, max: 1, step: 0.1,
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
    innerCirclePercentage: {
      type: {name: 'number', required: false},
      defaultValue: 50,
      description: 'Defines the size of the inner circle in %',
      table: {
        type: {summary: 'number'},
        defaultValue: {summary: 50},
        category: 'Inputs'
      },
      control: {
        type: 'number',
        min: 5, max: 95, step: 5,
      }
    },
    trackBackgroundColor: {
      name: 'trackBackgroundColor',
      type: {name: 'string', required: false},
      defaultValue: '#e7e7e7',
      description: 'Change the colors of the track bar',
      table: {
        type: {summary: 'array'},
        defaultValue: {summary: 'empty'},
        category: 'Inputs'
      },
      control: {
        type: 'color'
      }
    },
    trackBackgroundThicknessPercentage: {
      type: {name: 'number', required: false},
      defaultValue: 50,
      description: 'Defines the size of the background of the arc on %',
      table: {
        type: {summary: 'number'},
        defaultValue: {summary: 97},
        category: 'Inputs'
      },
      control: {
        type: 'number',
        min: 5, max: 100, step: 5,
      }
    },
  }
} as Meta;

const Template: Story<GaugeChartModule> = (args: GaugeChartModule) => ({
  props: args,
  template: `
    <app-gauge-chart
      [width]="width"
      [height]="height"
      [showToolbar]="showToolbar"
      [colors]="colors"
      [title]="title"
      [titleAlignment]="titleAlignment"
      [fill]="fill"
      [opacity]="opacity"
      [shadow]="shadow"
      [innerCirclePercentage]="innerCirclePercentage"
      [trackBackgroundColor]="trackBackgroundColor"
      [trackBackgroundThicknessPercentage]="trackBackgroundThicknessPercentage"
    >
    </app-gauge-chart>`
});

export const Default = Template.bind({});
Default.args = {}


