import {Meta, moduleMetadata, Story} from '@storybook/angular';
import {RadialChartComponent, RadialChartData, RadialChartModule} from "wyzardry-theme/charts";

export default {
  title: 'Charts/Radial - Gauge',
  decorators: [
    moduleMetadata({
      imports: [RadialChartModule],
    }),
  ],
  args: {
    data: null,
    title: "Radial / gauge chart",
    gauge: false,
    width: 600
  },
  argTypes: {
    data: {
      name: 'data',
      type: {name: 'string', required: false},
      description: 'Defines the data of the chart',
      table: {
        type: {summary: 'PieChartData'},
        defaultValue: {summary: 'undefined'},
        category: 'Inputs'
      },
      control: {
        type: 'object'
      }
    },
    title: {
      name: 'title',
      type: {name: 'string', required: false},
      description: 'Text of the chart title',
      table: {
        type: {summary: 'number'},
        defaultValue: {summary: 'empty'},
        category: 'Inputs'
      },
      control: {
        type: 'text'
      }
    },
    gauge: {
      name: 'gauge',
      type: {name: 'string', required: false},
      description: 'Show a half circle (gauge) instead of the full radius',
      table: {
        type: {summary: 'boolean'},
        defaultValue: {summary: 'false'},
        category: 'Inputs'
      },
      control: {
        type: 'boolean'
      }
    },
    width: {
      name: 'width',
      type: { name: 'number', required: false },
      description: 'Defines graph width. If empty, it will be 100%',
      table: {
        type: { summary: 'number' },
        category: 'Style'
      },
      control: {
        type: 'range',
        min: 400,
        max: 1000,
        step: 1
      }
    }
  }
} as Meta;

const Template: Story<RadialChartComponent> = (args: RadialChartComponent) => ({
  props: args,
  template: `
    <biit-radial-chart [data]="data"
                       [title]="title"
                       [width]="width"
                       [gauge]="gauge"
                       style="display: block; width:600px; height: 500px"
    ></biit-radial-chart>`
});

export const Radial = Template.bind({});
Radial.args = {
  title: 'Radial chart',
  data: new RadialChartData(
    [27, 13, 69, 40, 33],
    ["This", "is", "some", "test", "dunno"]
  ),
  gauge: false
}

export const Gauge = Template.bind({});
Gauge.args = {
  title: 'Gauge chart',
  data: new RadialChartData(
    [27, 13, 69, 40, 33],
    ["This", "is", "some", "test", "dunno"]
  ),
  gauge: true
}
