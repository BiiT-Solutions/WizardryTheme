import {Meta, moduleMetadata, Story} from '@storybook/angular';
import {
  LineChartComponent,
  LineChartData,
  LineChartModule,
  LineChartSeries
} from "wyzardry-theme/charts";

export default {
  title: 'Charts/Line',
  decorators: [
    moduleMetadata({
      imports: [LineChartModule],
    }),
  ],
  args: {
    data: null,
    title: "Line chart",
    xTitle: "Month",
    yTitle: "Temperature"
  },
  argTypes: {
    data: {
      name: 'data',
      type: {name: 'string', required: false},
      description: 'Defines the metadata of the chart',
      table: {
        type: {summary: 'LineChartData'},
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
    xTitle: {
      name: 'X-axis title',
      type: {name: 'string', required: false},
      description: 'Text of X-axis title',
      table: {
        type: {summary: 'number'},
        defaultValue: {summary: 'empty'},
        category: 'Inputs'
      },
      control: {
        type: 'text'
      }
    },
    yTitle: {
      name: 'Y-axis title',
      type: {name: 'string', required: false},
      description: 'Text of Y-axis title',
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

const Template: Story<LineChartComponent> = (args: LineChartComponent) => ({
  props: args,
  template: `
    <biit-line-chart [data]="data"
                     [title]="title"
                     [xTitle]="xTitle"
                     [yTitle]="yTitle"
                     style="display: block; width: 100%; height: 500px"
    ></biit-line-chart>`
});

export const SingleLine = Template.bind({});
SingleLine.storyName = "Single Line";
SingleLine.args = {
  data: new LineChartData([
      new LineChartSeries(
        "Patatas",
        "line",
        [23, 42, 35, 27, 43, 22, 17, 31, 22, 22, 12, 16],
        "#F20D5E"
      ),
    ],
    [
      "01 Jan",
      "02 Jan",
      "03 Jan",
      "04 Jan",
      "05 Jan",
      "06 Jan",
      "07 Jan",
      "08 Jan",
      "09 Jan",
      "10 Jan",
      "11 Jan",
      "12 Jan"
    ])
}

export const MultiLine = Template.bind({});
MultiLine.storyName = "Multi Line";
MultiLine.args = {
  data: new LineChartData([
      new LineChartSeries(
        "Patatas",
        "line",
        [23, 42, 35, 27, 43, 22, 17, 31, 22, 22, 12, 16],
        "#F20D5E"
      ),
      new LineChartSeries(
        "Queso",
        "line",
        [24, 30, 41, 15, 23, 12, 20, 45, 18, 15, 9, 20],
        "#1984C8"
      ),
    ],
    [
      "01 Jan",
      "02 Jan",
      "03 Jan",
      "04 Jan",
      "05 Jan",
      "06 Jan",
      "07 Jan",
      "08 Jan",
      "09 Jan",
      "10 Jan",
      "11 Jan",
      "12 Jan"
    ])
}

export const LineWithColumns = Template.bind({});
LineWithColumns.storyName = "Line with Columns";
LineWithColumns.args = {
  data: new LineChartData([
      new LineChartSeries(
        "Patatas",
        "line",
        [23, 42, 35, 27, 43, 22, 17, 31, 22, 22, 12, 16],
        "#F20D5E"
      ),
      new LineChartSeries(
        "Queso",
        "column",
        [24, 30, 41, 15, 23, 12, 20, 45, 18, 15, 9, 20],
        "#1984C8"
      ),
    ],
    [
      "01 Jan",
      "02 Jan",
      "03 Jan",
      "04 Jan",
      "05 Jan",
      "06 Jan",
      "07 Jan",
      "08 Jan",
      "09 Jan",
      "10 Jan",
      "11 Jan",
      "12 Jan"
    ])
}

export const LineWithArea = Template.bind({});
LineWithArea.storyName = "Line with Area";
LineWithArea.args = {
  data: new LineChartData([
      new LineChartSeries(
        "Patatas",
        "line",
        [23, 42, 35, 27, 43, 22, 17, 31, 22, 22, 12, 16],
        "#F20D5E"
      ),
      new LineChartSeries(
        "Queso",
        "area",
        [24, 30, 41, 15, 23, 12, 20, 45, 18, 15, 9, 20],
        "#1984C8"
      ),
    ],
    [
      "01 Jan",
      "02 Jan",
      "03 Jan",
      "04 Jan",
      "05 Jan",
      "06 Jan",
      "07 Jan",
      "08 Jan",
      "09 Jan",
      "10 Jan",
      "11 Jan",
      "12 Jan"
    ])
}
