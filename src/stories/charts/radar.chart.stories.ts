import {Meta, moduleMetadata, Story} from '@storybook/angular';
import {RadarChartComponent, RadarChartModule, RadarChartData, RadarChartSeries} from "biit-ui/charts";

export default {
  title: 'Charts/Radar',
  decorators: [
    moduleMetadata({
      imports: [RadarChartModule],
    }),
  ],
  args: {
    data: null,
    title: "Radar chart"
  },
  argTypes: {
    data: {
      name: 'data',
      type: {name: 'string', required: false},
      description: 'Defines the data of the chart',
      table: {
        type: {summary: 'RadarChartData'},
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
    }
  }
} as Meta;

const Template: Story<RadarChartComponent> = (args: RadarChartComponent) => ({
  props: args,
  template: `
    <biit-radar-chart [data]="data"
                      [title]="title"
                      [min]="0"
                      [max]="100"
                      style="display: block; width: 650px; height: 500px"
    ></biit-radar-chart>`
});

export const Default = Template.bind({});
Default.args = {
  data: new RadarChartData(
    [
      new RadarChartSeries(
        "Series 1",
        [27, 13, 69, 40, 33],
        "#FF005B"
      ),
      new RadarChartSeries(
        "Series 2",
        [93, 24, 59, 83, 12],
        "#5E92DE"
      )
    ],
    ["This", "is", "some", "test", "dunno"]
  )
}
