import {Meta, moduleMetadata, Story} from '@storybook/angular';
import {Colors} from "../../../projects/biit-ui/charts/src/colors";
import {HeatmapChartModule} from "../../../projects/biit-ui/charts/src/heatmap-chart/heatmap-chart.module";
import {HeatmapChartComponent} from "../../../projects/biit-ui/charts/src/heatmap-chart/heatmap-chart.component";
import {HeatmapChartRange} from "../../../projects/biit-ui/charts/src/heatmap-chart/heatmap-chart-range";

export default {
  title: 'Charts/Heatmap',
  decorators: [
    moduleMetadata({
      imports: [HeatmapChartModule],
    }),
  ],
  args: {
    width: 250,
    showToolbar: true,
    colors: Colors.defaultPalette,
    ranges: [new HeatmapChartRange(0, 30, "#ff0000"), new HeatmapChartRange(31, 60, "#0000ff"), new HeatmapChartRange(61, 100, "#00ff00")],
    showValuesLabels: true,
    xAxisOnTop: false,
    xAxisTitle: undefined,
    yAxisTitle: undefined,
    showYAxis: true,
    title: undefined,
    titleAlignment: 'center',
    radius: 30,
    singleColor: false,
    enableColorFading: true,
    distributed: false,
    legendPosition: 'bottom',
    shadow: false
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
    ranges: {
      name: 'ranges',
      type: {name: 'string', required: false},
      //defaultValue: [{from: 0, to: 30, color: "#ff0000"}, {from: 31, to: 60, color: "#0000ff"}, {from: 61, to: 100, color: "#00ff00"}],
        defaultValue: [new HeatmapChartRange(0, 30, "#ff0000"), new HeatmapChartRange(31, 60, "#0000ff"), new HeatmapChartRange(61, 100, "#00ff00")],
      description: 'Define the colors of the circles by its value',
      table: {
        type: {summary: 'array'},
        defaultValue: {summary: 'empty'},
        category: 'Inputs'
      },
      control: {
        type: 'object'
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
    radius: {
      type: {name: 'number', required: false},
      defaultValue: 0,
      description: 'Defines the border radius for each dot',
      table: {
        type: {summary: 'number'},
        defaultValue: {summary: 30},
        category: 'Inputs'
      },
      control: {
        type: 'number',
        min: 0, max: 100, step: 5,
      }
    },
    singleColor: {
      name: 'singleColor',
      type: {name: 'boolean', required: false},
      defaultValue: 'true',
      description: 'Use only one color',
      table: {
        type: {summary: 'boolean'},
        defaultValue: {summary: false},
        category: 'Inputs'
      },
      control: {
        type: 'boolean'
      }
    },
    enableColorFading: {
      name: 'enableColorFading',
      type: {name: 'boolean', required: false},
      defaultValue: 'true',
      description: 'Fading out circles depending on their value',
      table: {
        type: {summary: 'boolean'},
        defaultValue: {summary: true},
        category: 'Inputs'
      },
      control: {
        type: 'boolean'
      }
    },
    distributed: {
      name: 'distributed',
      type: {name: 'boolean', required: false},
      defaultValue: 'true',
      description: 'In a multi-series heat map chart, each row in a heatmap can have it’s own lowest and highest range and colors will be shaded for each series. Helpful in situations when each series has a big difference in values.',
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
      defaultValue: 'right',
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
    stackType: {
      name: 'stackType',
      type: {name: 'string', required: false},
      defaultValue: 'normal',
      description: 'Defines the alignment of the title',
      table: {
        type: {summary: 'string'},
        defaultValue: {summary: 'empty'},
        category: 'Inputs'
      },
      options: ['normal', '100%'],
      control: {
        type: 'select'
      }
    },
  }
} as Meta;

const Template: Story<HeatmapChartComponent> = (args: HeatmapChartComponent) => ({
  props: args,
  template: `
    <app-heatmap-chart
      [width]="width"
      [showToolbar]="showToolbar"
      [colors]="colors"
      [ranges]="ranges"
      [showValuesLabels]="showValuesLabels"
      [xAxisOnTop]="xAxisOnTop"
      [xAxisTitle]="xAxisTitle"
      [yAxisTitle]="yAxisTitle"
      [showYAxis]="showYAxis"
      [title]="title"
      [titleAlignment]="titleAlignment"
      [radius]="radius"
      [singleColor]="singleColor"
      [enableColorFading]="enableColorFading"
      [distributed]="distributed"
      [legendPosition]="legendPosition"
      [shadow]="shadow"
    >
    </app-heatmap-chart>`
});

export const Default = Template.bind({});
Default.args = {}


