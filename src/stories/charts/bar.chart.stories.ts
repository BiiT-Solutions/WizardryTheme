import {Meta, moduleMetadata, Story} from '@storybook/angular';
import {
  BarChartData, BarChartCategory, BarChartModule, BarChartComponent
} from "biit-ui/charts";

export default {
  title: 'Charts/Bar',
  decorators: [
    moduleMetadata({
      imports: [BarChartModule],
    }),
  ],
  args: {
    data: new BarChartData([new BarChartCategory("Category 1", [3,7,5,9,1,12,10], "#F20D5E")], ["This", "is", "some", "test", "Dunno", "I am just", "trying"]),
    title: "Bar chart",
    width: 600
  },
  argTypes: {
    data: {
      name: 'data',
      type: {name: 'string', required: false},
      description: 'Defines the data of the chart',
      table: {
        type: {summary: 'BarChartData'},
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

const Template: Story<BarChartComponent> = (args: BarChartComponent) => ({
  props: args,
  template: `
    <biit-bar-chart [data]="data"
                    [title]="title"
                    [width]="width"
                    style="display: block; width:600px; height: 500px"
    ></biit-bar-chart>`
});

export const SingleBar = Template.bind({});
SingleBar.args = {}

export const MultiBar = Template.bind({});
MultiBar.args = {
  data: new BarChartData([
    new BarChartCategory("Rojo", [3,7,5,9,1,12,10], "#F20D5E"),
    new BarChartCategory("Azul", [11,2,6,3,4,9,8], "#1984C8")
    ],
    ["This", "is", "some", "test", "Dunno", "I am just", "trying"])
}
