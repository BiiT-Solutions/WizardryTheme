import {Meta, moduleMetadata, Story} from '@storybook/angular';
import {
  TimelineViewerChartModule,
  TimelineViewerChartComponent,
  TimelineViewerChartData
} from "biit-ui/charts";

export default {
  title: 'Charts/Timeline Viewer',
  decorators: [
    moduleMetadata({
      imports: [TimelineViewerChartModule],
    }),
  ],
  args: {
    data: null,
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
    onItemClick: {
      action: 'onItemClick',
      name: 'onItemClick',
      description: 'Emits the selected object.',
      table: {
        type: 'Event',
        category: 'Outputs'
      }
    }
  },
} as Meta;

const Template: Story<TimelineViewerChartComponent<any>> = (args: TimelineViewerChartComponent<any>) => ({
  props: args,
  template: `
    <biit-timeline-viewer-chart [data]="data"
                                (onItemClick)="onItemClick($event)"
                                style="display: block; width:1200px; height: 700px"
    ></biit-timeline-viewer-chart>`
});

export const SingleBar = Template.bind({});
SingleBar.storyName = "Single Bar";
SingleBar.args = {
  data: TimelineViewerChartData.generate(
    [
      {
        date: new Date('2024-11-16'),
        color: '#FF0000',
        name: 'Perico Palotes',
        title: 'Total Score',
        value: '33'
      },
      {
        date: new Date('2024-11-16'),
        color: '#00FF00',
        name: 'Paco Gonzalez',
        title: 'Total Score',
        value: '69'
      },
      {
        date: new Date('2024-11-16'),
        color: '#0000FF',
        name: 'Manolo Lama',
        title: 'Total Score',
        value: '96'
      },
      {
        date: new Date('2024-11-11'),
        color: '#FF0000',
        name: 'Perico Palotes',
        title: 'Total Score',
        value: '33'
      },
      {
        date: new Date('2024-11-11'),
        color: '#00FF00',
        name: 'Paco Gonzalez',
        title: 'Total Score',
        value: '69'
      },
      {
        date: new Date('2024-11-11'),
        color: '#0000FF',
        name: 'Manolo Lama',
        title: 'Total Score',
        value: '96'
      },
      {
        date: new Date('2024-11-3'),
        color: '#FF0000',
        name: 'Perico Palotes',
        title: 'Total Score',
        value: '33'
      },
      {
        date: new Date('2024-11-3'),
        color: '#00FF00',
        name: 'Paco Gonzalez',
        title: 'Total Score',
        value: '69'
      },
      {
        date: new Date('2024-11-3'),
        color: '#0000FF',
        name: 'Manolo Lama',
        title: 'Total Score',
        value: '96'
      },
      {
        date: new Date('2024-11-3'),
        name: 'Silvester Stallone',
        title: 'Total Score',
        value: '33'
      },
      {
        date: new Date('2024-11-3'),
        name: 'Arnold Schwarzenegger',
        title: 'Total Score',
        value: '69'
      },
      {
        date: new Date('2024-11-3'),
        name: 'Jason Statham',
        title: 'Total Score',
        value: '96'
      },
    ],
    {
      date: 'date',
      color: 'color',
      tooltipHeader: 'name',
      tooltipTitle1: 'title',
      tooltipValue1: 'value'
    })
}
