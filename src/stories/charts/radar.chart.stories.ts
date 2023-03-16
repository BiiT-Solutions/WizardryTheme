import {Meta, moduleMetadata, Story} from '@storybook/angular';
import {PieChartModule} from "../../../projects/biit-ui/charts/src/pie-chart/pie-chart.module";
import {RadarChartModule} from "../../../projects/biit-ui/charts/src/radar-chart/radar-chart.module";
import {Colors} from "../../../projects/biit-ui/charts/src/colors";

export default {
  title: 'Charts/Radar',
  decorators: [
    moduleMetadata({
      imports: [RadarChartModule],
    }),
  ],
  args: {
    width: 500,
    radarSize: 140,
    showToolbar: true,
    colors: Colors.defaultPalette,
    showValuesLabels: true,
    title: undefined,
    titleAlignment: 'center',
    fill: 'solid',
    shadow: true,
    opacity: 0.4,
    strokeWidth: 5,
    innerColors: ["#ffffff", "#efefef"],
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
    radarSize: {
      type: {name: 'number', required: false},
      defaultValue: 500,
      description: 'Defines the size of the drawing',
      table: {
        type: {summary: 'number'},
        defaultValue: {summary: 140},
        category: 'Inputs'
      },
      control: {
        type: 'number',
        min: 50, max: 1000, step: 20,
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
    showValuesLabels: {
      name: 'showValuesLabels',
      type: {name: 'boolean', required: false},
      defaultValue: 'true',
      description: 'Shows or hide the values on the radar.',
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
    innerColors: {
      name: 'innerColors',
      type: {name: 'string', required: false},
      defaultValue: '["#ffffff"]',
      description: 'Change the colors of the areas of the radar',
      table: {
        type: {summary: 'array'},
        defaultValue: {summary: 'empty'},
        category: 'Inputs'
      },
      control: {
        type: 'object'
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

const Template: Story<RadarChartModule> = (args: RadarChartModule) => ({
  props: args,
  template: `
    <app-radar-chart
      [width]="width"
      [radarSize]="radarSize"
      [showToolbar]="showToolbar"
      [colors]="colors"
      [showValuesLabels]="showValuesLabels"
      [title]="title"
      [titleAlignment]="titleAlignment"
      [fill]="fill"
      [shadow]="shadow"
      [opacity]="opacity"
      [strokeWidth]="strokeWidth"
      [innerColors]="innerColors"
      [legendPosition]="legendPosition"
    >
    </app-radar-chart>`
});

export const Default = Template.bind({});
Default.args = {}


