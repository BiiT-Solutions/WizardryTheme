import {Meta, moduleMetadata, Story} from '@storybook/angular';
import {Colors} from "../../../projects/biit-ui/charts/src/colors";
import {
  HeatmapChartModule
} from "../../../projects/biit-ui/charts/src/heatmap-chart/heatmap-chart.module";
import {
  HeatmapChartComponent
} from "../../../projects/biit-ui/charts/src/heatmap-chart/heatmap-chart.component";

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
    borderRadius: 0,
    enableTotals: true,
    legendPosition: 'bottom',
    shadow: false,
    stackType: 'normal',
    strokeWidth: 0
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
    borderRadius: {
      type: {name: 'number', required: false},
      defaultValue: 0,
      description: 'Defines the border radius for each bar in %',
      table: {
        type: {summary: 'number'},
        defaultValue: {summary: 0},
        category: 'Inputs'
      },
      control: {
        type: 'number',
        min: 0, max: 200, step: 5,
      }
    },
    enableTotals: {
      name: 'enableTotals',
      type: {name: 'boolean', required: false},
      defaultValue: 'true',
      description: 'Shows the total amount for a bar',
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
      [borderRadius]="borderRadius"
      [enableTotals]="enableTotals"
      [legendPosition]="legendPosition"
      [shadow]="shadow"
      [stackType]="stackType"
      [strokeWidth]="strokeWidth"
    >
    </app-heatmap-chart>`
});

export const Default = Template.bind({});
Default.args = {}


