import {Meta, moduleMetadata, Story} from '@storybook/angular';
import {HeatmapChartModule, HeatmapChartComponent, HeatmapChartRange, HeatmapChartData, HeatmapChartDataElement} from "@biit-solutions/wizardry-theme/charts";

export default {
  title: 'Charts/Heatmap',
  decorators: [
    moduleMetadata({
      imports: [HeatmapChartModule],
    }),
  ],
  args: {
    data: {
      name: undefined,
      elements: [
        new HeatmapChartDataElement([
          ["Value1", Math.floor(Math.random() * 100)], ["Value2", Math.floor(Math.random() * 100)], ["Value3", Math.floor(Math.random() * 100)], ["Value4", Math.floor(Math.random() * 100)], ["Value5", Math.floor(Math.random() * 100)], ["Value6", Math.floor(Math.random() * 100)], ["Value7", Math.floor(Math.random() * 100)], ["Value8", Math.floor(Math.random() * 100)], ["Value9", Math.floor(Math.random() * 100)], ["Value10", Math.floor(Math.random() * 100)]
        ], "Group1"),
        new HeatmapChartDataElement([
          ["Value1", Math.floor(Math.random() * 100)], ["Value2", Math.floor(Math.random() * 100)], ["Value3", Math.floor(Math.random() * 100)], ["Value4", Math.floor(Math.random() * 100)], ["Value5", Math.floor(Math.random() * 100)], ["Value6", Math.floor(Math.random() * 100)], ["Value7", Math.floor(Math.random() * 100)], ["Value8", Math.floor(Math.random() * 100)], ["Value9", Math.floor(Math.random() * 100)], ["Value10", Math.floor(Math.random() * 100)]
        ], "Group2"),
        new HeatmapChartDataElement([
          ["Value1", Math.floor(Math.random() * 100)], ["Value2", Math.floor(Math.random() * 100)], ["Value3", Math.floor(Math.random() * 100)], ["Value4", Math.floor(Math.random() * 100)], ["Value5", Math.floor(Math.random() * 100)], ["Value6", Math.floor(Math.random() * 100)], ["Value7", Math.floor(Math.random() * 100)], ["Value8", Math.floor(Math.random() * 100)], ["Value9", Math.floor(Math.random() * 100)], ["Value10", Math.floor(Math.random() * 100)]
        ], "Group3"),
        new HeatmapChartDataElement([
          ["Value1", Math.floor(Math.random() * 100)], ["Value2", Math.floor(Math.random() * 100)], ["Value3", Math.floor(Math.random() * 100)], ["Value4", Math.floor(Math.random() * 100)], ["Value5", Math.floor(Math.random() * 100)], ["Value6", Math.floor(Math.random() * 100)], ["Value7", Math.floor(Math.random() * 100)], ["Value8", Math.floor(Math.random() * 100)], ["Value9", Math.floor(Math.random() * 100)], ["Value10", Math.floor(Math.random() * 100)]
        ], "Group4"),
        new HeatmapChartDataElement([
          ["Value1", Math.floor(Math.random() * 100)], ["Value2", Math.floor(Math.random() * 100)], ["Value3", Math.floor(Math.random() * 100)], ["Value4", Math.floor(Math.random() * 100)], ["Value5", Math.floor(Math.random() * 100)], ["Value6", Math.floor(Math.random() * 100)], ["Value7", Math.floor(Math.random() * 100)], ["Value8", Math.floor(Math.random() * 100)], ["Value9", Math.floor(Math.random() * 100)], ["Value10", Math.floor(Math.random() * 100)]
        ], "Group5"),
        new HeatmapChartDataElement([
          ["Value1", Math.floor(Math.random() * 100)], ["Value2", Math.floor(Math.random() * 100)], ["Value3", Math.floor(Math.random() * 100)], ["Value4", Math.floor(Math.random() * 100)], ["Value5", Math.floor(Math.random() * 100)], ["Value6", Math.floor(Math.random() * 100)], ["Value7", Math.floor(Math.random() * 100)], ["Value8", Math.floor(Math.random() * 100)], ["Value9", Math.floor(Math.random() * 100)], ["Value10", Math.floor(Math.random() * 100)]
        ], "Group6")
      ]
    } as HeatmapChartData,
    ranges: [new HeatmapChartRange(0, 30, "#ff0000"), new HeatmapChartRange(31, 60, "#0000ff"), new HeatmapChartRange(61, 100, "#00ff00")],
    title: "Heatmap chart",
    itemsPerPage: 7
  },
  argTypes: {
    data: {
      name: 'data',
      type: {name: 'string', required: false},
      description: 'Defines the metadata of the chart',
      table: {
        type: {summary: 'HeatmapChartData'},
        defaultValue: {summary: 'undefined'},
        category: 'Inputs'
      },
      control: {
        type: 'object'
      }
    },
    ranges: {
      name: 'ranges',
      type: {name: 'string', required: false},
      description: 'Defines the ranges of values of the circles and its color',
      table: {
        type: {summary: 'HeatmapChartRange[]'},
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
        type: {summary: 'string'},
        defaultValue: {summary: 'empty'},
        category: 'Inputs'
      },
      control: {
        type: 'text'
      }
    },
    itemsPerPage: {
      name: 'itemsPerPage',
      type: {name: 'number', required: false},
      description: 'Number of columns to show per page',
      table: {
        type: {summary: 'number'},
        defaultValue: {summary: '20'},
        category: 'Inputs'
      },
      control: {
        type: 'range',
        min: 1,
        max: 10,
        step: 1
      }
    },
  }
} as Meta;

const Template: Story<HeatmapChartComponent> = (args: HeatmapChartComponent) => ({
  props: args,
  template: `
    <biit-heatmap [data]="data"
                  [ranges]="ranges"
                  [title]="title"
                  [itemsPerPage]="itemsPerPage"
    >
    </biit-heatmap>`
});

export const Default = Template.bind({});
Default.args = {}


