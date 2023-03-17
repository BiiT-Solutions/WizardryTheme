import {Meta, moduleMetadata, Story} from '@storybook/angular';
import {Colors} from "../../../projects/biit-ui/charts/src/colors";
import {RadialChartModule} from "../../../projects/biit-ui/charts/src/radial-chart/radial-chart.module";

export default {
  title: 'Charts/Radial',
  decorators: [
    moduleMetadata({
      imports: [RadialChartModule],
    }),
  ],
  args: {
    width: 500,
    showToolbar: true,
    colors: Colors.defaultPalette,
    title: undefined,
    titleAlignment: 'center',
    fill: 'solid',
    legendPosition: 'bottom',
    shadow: true,

    innerCirclePercentage: 40,
    startAngle: 0,
    endAngle: 360
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
      type: {name: 'string', required: false},
      defaultValue: 'default',
      description: 'Defines where the legend is shown',
      table: {
        type: {summary: 'string'},
        defaultValue: {summary: 'empty'},
        category: 'Inputs'
      },
      options: ['left', 'bottom', 'right', 'top'],
      control: {
        type: 'select'
      }
    },
    innerCirclePercentage: {
      type: {name: 'number', required: false},
      defaultValue: 40,
      description: 'Defines the inner circle size as a %',
      table: {
        type: {summary: 'number'},
        defaultValue: {summary: 1},
        category: 'Inputs'
      },
      control: {
        type: 'number',
        min: 5, max: 100, step: 5,
      }
    },
    startAngle: {
      type: {name: 'number', required: false},
      defaultValue: 0,
      description: 'Defines the starting angle of the arc (on 360º)',
      table: {
        type: {summary: 'number'},
        defaultValue: {summary: 1},
        category: 'Inputs'
      },
      control: {
        type: 'number',
        min: 5, max: 100, step: 5,
      }
    },
    endAngle: {
      type: {name: 'number', required: false},
      defaultValue: 360,
      description: 'Defines the ending angle of the arc (on 360º)',
      table: {
        type: {summary: 'number'},
        defaultValue: {summary: 1},
        category: 'Inputs'
      },
      control: {
        type: 'number',
        min: 5, max: 100, step: 5,
      }
    },
  }
} as Meta;

const Template: Story<RadialChartModule> = (args: RadialChartModule) => ({
  props: args,
  template: `
    <app-radial-chart
      [width]="width"
      [showToolbar]="showToolbar"
      [colors]="colors"
      [title]="title"
      [titleAlignment]="titleAlignment"
      [fill]="fill"
      [shadow]="shadow"
      [legendPosition]="legendPosition"
      [innerCirclePercentage]="innerCirclePercentage"
      [startAngle]="startAngle"
      [endAngle]="endAngle"
    >
    </app-radial-chart>`
});

export const Default = Template.bind({});
Default.args = {}


