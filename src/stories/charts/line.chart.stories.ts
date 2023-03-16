import {Meta, moduleMetadata, Story} from '@storybook/angular';
import {LineChartModule} from "../../../projects/biit-ui/charts/src/line-chart/line-chart.module";

export default {
  title: 'Chart/Line',
  decorators: [
    moduleMetadata({
      imports: [LineChartModule],
    }),
  ],
  args: {
    width: 500,
    height: 250,
    showToolbar: true,
    colors: ["#fd7f6f", "#7eb0d5", "#b2e061", "#bd7ebe", "#ffb55a", "#ffee65", "#beb9db", "#fdcce5", "#8bd3c7"],
    horizontal: false,
    barThicknessPercentage: 75,
    showValuesLabels: true,
    xAxisOnTop: false,
    xAxisTitle: undefined,
    yAxisTitle: undefined,
    showYAxis: true,
    title: undefined,
    titleAlignment: 'center',
    fill: 'solid',
    curve: 'smooth',
    shadow: true,
    strokeWidth: 5
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
    horizontal: {
      name: 'horizontal',
      type: {name: 'boolean', required: false},
      defaultValue: 'true',
      description: 'Shows bars in horizontal mode.',
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
    barThicknessPercentage: {
      type: {name: 'number', required: false},
      defaultValue: 75,
      description: 'Defines the width of each bar in %',
      table: {
        type: {summary: 'number'},
        defaultValue: {summary: 75},
        category: 'Inputs'
      },
      control: {
        type: 'number',
        min: 5, max: 100, step: 5,
      }
    },
    showValuesLabels: {
      name: 'showValuesLabels',
      type: {name: 'boolean', required: false},
      defaultValue: 'true',
      description: 'Shows the value on the bars',
      table: {
        type: {summary: 'boolean'},
        defaultValue: {summary: true},
        category: 'Inputs'
      },
      control: {
        type: 'boolean'
      }
    },
    xAxisOnTop: {
      name: 'xAxisOnTop',
      type: {name: 'boolean', required: false},
      defaultValue: 'true',
      description: 'Shows the x bar at the top of the chart',
      table: {
        type: {summary: 'boolean'},
        defaultValue: {summary: true},
        category: 'Inputs'
      },
      control: {
        type: 'boolean'
      }
    },
    xAxisTitle: {
      name: 'xAxisTitle',
      type: {name: 'string', required: false},
      defaultValue: 'undefined',
      description: 'Shows a text on the X axis',
      table: {
        type: {summary: 'string'},
        defaultValue: {summary: true},
        category: 'Inputs'
      },
      control: {
        type: 'text'
      }
    },
    yAxisTitle: {
      name: 'yAxisTitle',
      type: {name: 'string', required: false},
      defaultValue: 'undefined',
      description: 'Shows a text on the X axis',
      table: {
        type: {summary: 'string'},
        defaultValue: {summary: true},
        category: 'Inputs'
      },
      control: {
        type: 'text'
      }
    },
    showYAxis: {
      name: 'showYAxis',
      type: {name: 'boolean', required: false},
      defaultValue: 'true',
      description: 'Shows or hides the Y Axis',
      table: {
        type: {summary: 'boolean'},
        defaultValue: {summary: true},
        category: 'Inputs'
      },
      control: {
        type: 'boolean'
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
    curve: {
      name: 'curve',
      type: {name: 'string', required: false},
      defaultValue: 'default',
      description: 'Defined the line\'s curves',
      table: {
        type: {summary: 'string'},
        defaultValue: {summary: 'empty'},
        category: 'Inputs'
      },
      options: ['straight', 'smooth', 'stepline'],
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
    strokeWidth: {
      type: {name: 'number', required: false},
      defaultValue: 5,
      description: 'Defines the width of the lines',
      table: {
        type: {summary: 'number'},
        defaultValue: {summary: 5},
        category: 'Inputs'
      },
      control: {
        type: 'number',
        min: 1, max: 30, step: 1,
      }
    },
  }
} as Meta;

const Template: Story<LineChartModule> = (args: LineChartModule) => ({
  props: args,
  template: `
    <app-line-chart
      [width]="width"
      [height]="height"
      [showToolbar]="showToolbar"
      [horizontal]="horizontal"
      [colors]="colors"
      [barThicknessPercentage]="barThicknessPercentage"
      [showValuesLabels]="showValuesLabels"
      [xAxisOnTop]="xAxisOnTop"
      [xAxisTitle]="xAxisTitle"
      [yAxisTitle]="yAxisTitle"
      [showYAxis]="showYAxis"
      [title]="title"
      [titleAlignment]="titleAlignment"
      [fill]="fill"
      [curve]="curve"
      [shadow]="shadow"
      [strokeWidth]="strokeWidth"
    >
    </app-line-chart>`
});

export const Default = Template.bind({});
Default.args = {}


