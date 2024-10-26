import {Meta, moduleMetadata, Story} from '@storybook/angular';
import {PieChartComponent, PieChartData, PieChartModule} from "biit-ui/charts";

export default {
  title: 'Charts/Pie',
  decorators: [
    moduleMetadata({
      imports: [PieChartModule],
    }),
  ],
  args: {
    data: null,
    title: "Pie chart",
    width: 600
  },
  argTypes: {
    data: {
      name: 'data',
      type: {name: 'string', required: false},
      description: 'Defines the metadata of the chart',
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

const Template: Story<PieChartComponent> = (args: PieChartComponent) => ({
  props: args,
  template: `
    <biit-pie-chart [data]="data"
                    [title]="title"
                    [width]="width"
                    style="display: block; width:600px; height: 500px"
    ></biit-pie-chart>`
});

export const Default = Template.bind({});
Default.args = {
  data: new PieChartData(
    [27, 13, 69, 40, 33],
    ["This", "is", "some", "test", "dunno"]
  )
}
