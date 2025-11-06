import {Meta, moduleMetadata, Story} from '@storybook/angular';
import {
  BarChartComponent,
  BarChartData,
  BarChartGoal,
  BarChartModule,
  BarChartOrientation,
  BarChartSeries,
  BarChartSeriesData
} from "wyzardry-theme/charts";

export default {
  title: 'Charts/Bar',
  decorators: [
    moduleMetadata({
      imports: [BarChartModule],
    }),
  ],
  args: {
    data: null,
    title: "Bar chart",
    width: 600
  },
  argTypes: {
    data: {
      name: 'data',
      type: {name: 'string', required: false},
      description: 'Defines the metadata of the chart',
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
  },
  parameters: {
    options: {
      storySort: {
        order: [['SingleBar', 'SingleBarWithGoals'], ['MultipleBars', 'MultipleBarsWithGoals']]
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
SingleBar.storyName = "Single Bar";
SingleBar.args = {
  data: new BarChartData([
      new BarChartSeries(
        "Rojo",
        [
          new BarChartSeriesData(3),
          new BarChartSeriesData(7),
          new BarChartSeriesData(5),
          new BarChartSeriesData(9),
          new BarChartSeriesData(1),
          new BarChartSeriesData(12),
          new BarChartSeriesData(10)
        ],
        "#F20D5E"
      ),
    ],
    ["This", "is", "some", "test", "Dunno", "I am just", "trying"])
}

export const SingleBarWithGoals = Template.bind({});
SingleBarWithGoals.storyName = "Single Bar With Goals";
SingleBarWithGoals.args = {
  data: new BarChartData([
      new BarChartSeries(
        "Rojo",
        [
          new BarChartSeriesData(3, [new BarChartGoal("Goal example", 5, "#262626", 4)]),
          new BarChartSeriesData(7, [new BarChartGoal("Another goal example", 6, "#262626", 4)]),
          new BarChartSeriesData(5,[new BarChartGoal("Yet another", 3, "#262626", 4)]),
          new BarChartSeriesData(9),
          new BarChartSeriesData(1, [new BarChartGoal("Woah this one really is underperforming", 10, "#262626", 4)]),
          new BarChartSeriesData(12, [new BarChartGoal("This has", 8, "#262626", 5), new BarChartGoal("Multiple goals", 4, "#E6A91A", 4)]),
          new BarChartSeriesData(10)
        ],
        "#F20D5E"
      ),
    ],
    ["This", "is", "some", "test", "Dunno", "I am just", "trying"])
}
export const MultiBar = Template.bind({});

MultiBar.storyName = "Multi Bar";
MultiBar.args = {
  data: new BarChartData([
      new BarChartSeries(
        "Rojo",
        [
          new BarChartSeriesData(3),
          new BarChartSeriesData(7),
          new BarChartSeriesData(5),
          new BarChartSeriesData(9),
          new BarChartSeriesData(1),
          new BarChartSeriesData(12),
          new BarChartSeriesData(10)
        ],
        "#F20D5E"
      ),
      new BarChartSeries(
        "Azul",
        [
          new BarChartSeriesData(11),
          new BarChartSeriesData(2),
          new BarChartSeriesData(6),
          new BarChartSeriesData(3),
          new BarChartSeriesData(4),
          new BarChartSeriesData(9),
          new BarChartSeriesData(8)
        ],
        "#1984C8"
      ),
    ],
    ["This", "is", "some", "test", "Dunno", "I am just", "trying"]
  ),
}

export const MultiBarWithGoals = Template.bind({});
MultiBarWithGoals.storyName = "Multi Bar With Goals";
MultiBarWithGoals.args = {
  data: new BarChartData([
      new BarChartSeries(
        "Rojo",
        [
          new BarChartSeriesData(3, [new BarChartGoal("Goal example", 5, "#262626", 4)]),
          new BarChartSeriesData(7, [new BarChartGoal("Another goal example", 6, "#262626", 4)]),
          new BarChartSeriesData(5,[new BarChartGoal("Yet another", 3, "#262626", 4)]),
          new BarChartSeriesData(9),
          new BarChartSeriesData(1, [new BarChartGoal("Woah this one really is underperforming", 10, "#262626", 4)]),
          new BarChartSeriesData(12),
          new BarChartSeriesData(10, [new BarChartGoal("This has", 8, "#262626", 4), new BarChartGoal("Multiple goals", 4, "#E6A91A", 4)])
        ],
        "#F20D5E"
      ),
      new BarChartSeries(
        "Azul",
        [
          new BarChartSeriesData(11),
          new BarChartSeriesData(2, [new BarChartGoal("Goal example", 5, "#262626", 5)]),
          new BarChartSeriesData(6),
          new BarChartSeriesData(3),
          new BarChartSeriesData(4),
          new BarChartSeriesData(9),
          new BarChartSeriesData(8)
        ],
        "#1984C8"
      ),
    ],
    ["This", "is", "some", "test", "Dunno", "I am just", "trying"]
  ),
}

export const StackedNormal = Template.bind({});
StackedNormal.args = {
  data: new BarChartData([
      new BarChartSeries(
        "Rojo",
        [
          new BarChartSeriesData(3),
          new BarChartSeriesData(7),
          new BarChartSeriesData(5),
          new BarChartSeriesData(9),
          new BarChartSeriesData(1),
          new BarChartSeriesData(12),
          new BarChartSeriesData(10)
        ],
        "#F20D5E"
      ),
      new BarChartSeries(
        "Azul",
        [
          new BarChartSeriesData(11),
          new BarChartSeriesData(2),
          new BarChartSeriesData(6),
          new BarChartSeriesData(3),
          new BarChartSeriesData(4),
          new BarChartSeriesData(9),
          new BarChartSeriesData(8)
        ],
        "#1984C8"
      ),
    ],
    ["This", "is", "some", "test", "Dunno", "I am just", "trying"],
    null,
    true
  ),
}

export const StackedFill = Template.bind({});
StackedFill.args = {
  data: new BarChartData([
      new BarChartSeries(
        "Rojo",
        [
          new BarChartSeriesData(3),
          new BarChartSeriesData(7),
          new BarChartSeriesData(5),
          new BarChartSeriesData(9),
          new BarChartSeriesData(1),
          new BarChartSeriesData(12),
          new BarChartSeriesData(10)
        ],
        "#F20D5E"
      ),
      new BarChartSeries(
        "Azul",
        [
          new BarChartSeriesData(11),
          new BarChartSeriesData(2),
          new BarChartSeriesData(6),
          new BarChartSeriesData(3),
          new BarChartSeriesData(4),
          new BarChartSeriesData(9),
          new BarChartSeriesData(8)
        ],
        "#1984C8"
      ),
    ],
    ["This", "is", "some", "test", "Dunno", "I am just", "trying"],
    null,
    true,
    '100%'
  ),
}

export const Horizontal = Template.bind({});
Horizontal.args = {
  data: new BarChartData([
      new BarChartSeries(
        "Rojo",
        [
          new BarChartSeriesData(3),
          new BarChartSeriesData(7),
          new BarChartSeriesData(5),
          new BarChartSeriesData(9),
          new BarChartSeriesData(1),
          new BarChartSeriesData(12),
          new BarChartSeriesData(10)
        ],
        "#F20D5E"
      ),
    ],
    ["This", "is", "some", "test", "Dunno", "I am just", "trying"],
    BarChartOrientation.HORIZONTAL
  )
}
