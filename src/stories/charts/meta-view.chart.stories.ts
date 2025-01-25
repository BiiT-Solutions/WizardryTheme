import {Meta, moduleMetadata, Story} from '@storybook/angular';
import {
  MetaViewChartComponent,
  MetaViewChartModule
} from "biit-ui/charts";
import {BiitIconService} from "biit-ui/icon";
import {completeIconSet} from "biit-icons-collection";
import {APP_INITIALIZER} from "@angular/core";
import {MetaViewData} from "../../../projects/biit-ui/charts/src/meta-view-chart/model/meta-view-data";
import {View} from 'projects/biit-ui/charts/src/meta-view-chart/model/view';
import {Type} from "biit-ui/inputs";

function biitIconServiceFactory(service: BiitIconService) {
  service.registerIcons(completeIconSet);
  return () => service;
}

export default {
  title: 'Charts/Meta View',
  decorators: [
    moduleMetadata({
      imports: [MetaViewChartModule],
      providers: [{
        provide: APP_INITIALIZER,
        useFactory: biitIconServiceFactory,
        multi: true,
        deps: [BiitIconService],
      }]
    }),
  ],
  args: {
    data: null,
    view: View.GRID
  },
  argTypes: {
    data: MetaViewData,
    view: {
      name: 'type',
      type: {name: 'string', required: false},
      defaultValue: 'text',
      description: 'Defines the input type',
      table: {
        type: {summary: 'string'},
        defaultValue: {summary: 'text'},
        category: 'Inputs'
      },
      options: Object.keys(View),
      control: {
        type: 'select'
      }
    },
  },
  parameters: {}
} as Meta;

const Template: Story<MetaViewChartComponent> = (args: MetaViewChartComponent) => ({
  props: args,
  template: `
    <biit-meta-view-chart
                    style="display: block; width:100%; height: 30rem;"
                    [data]="data"
                    [view]="view"
    ></biit-meta-view-chart>`
});

export const Default = Template.bind({});
Default.args = {
  data: {
    "data": [
      {
      "data": {
        "name": "pOslwVXrhr",
        "date": new Date("2024-08-16T16:47:42.972Z"),
        "v1": 70,
        "v2": 77,
        "v3": 0.77,
        "b1": false
      }, "styles": "border-radius: 100%; background-color: #309158", "statusColor": "#309158"
    }, {
      "data": {"name": "enqBuAeoEt", "date": new Date("2022-10-17T22:15:18.772Z"), "v1": 54, "v2": 65, "v3": 0.97, "b1": false},
      "styles": "border-radius: 100%; background-color: #803c3c",
      "statusColor": "#803c3c"
    }, {
      "data": {"name": "kjNtbidQbL", "date": new Date("2024-08-02T04:09:49.672Z"), "v1": 82, "v2": 70, "v3": 0.98, "b1": true},
      "styles": "border-radius: 100%; background-color: #c8b043",
      "statusColor": "#c8b043"
    }, {
      "data": {"name": "JgeHaPiobL", "date": new Date("2023-04-27T06:46:59.972Z"), "v1": 53, "v2": 68, "v3": 0.21, "b1": false},
      "styles": "border-radius: 100%; background-color: #a04fb0",
      "statusColor": "#a04fb0"
    }, {
      "data": {"name": "QDeoLkKBWm", "date": new Date("2023-12-16T07:35:20.472Z"), "v1": 76, "v2": 67, "v3": 0.26, "b1": true},
      "styles": "border-radius: 100%; background-color: #9e3121",
      "statusColor": "#9e3121"
    }, {
      "data": {"name": "HdSeeYsrEE", "date": new Date("2022-04-02T05:23:54.272Z"), "v1": 63, "v2": 67, "v3": 0.51, "b1": true},
      "styles": "border-radius: 100%; background-color: #c325ec",
      "statusColor": "#c325ec"
    }, {
      "data": {"name": "HLceJDosyZ", "date": new Date("2024-08-30T21:20:53.572Z"), "v1": 72, "v2": 77, "v3": 0.67, "b1": false},
      "styles": "border-radius: 100%; background-color: #2d9d62",
      "statusColor": "#2d9d62"
    }, {
      "data": {"name": "XjcJbdsMrx", "date": new Date("2024-02-28T00:22:23.772Z"), "v1": 61, "v2": 67, "v3": 0.76, "b1": true},
      "styles": "border-radius: 100%; background-color: #364510",
      "statusColor": "#364510"
    }, {
      "data": {"name": "TRMbfpJxcU", "date": new Date("2021-12-14T11:25:51.372Z"), "v1": 55, "v2": 68, "v3": 0.39, "b1": true},
      "styles": "border-radius: 100%; background-color: #a7d52d",
      "statusColor": "#a7d52d"
    }, {
      "data": {"name": "oQkrcVdBMf", "date": new Date("2024-09-09T04:25:16.372Z"), "v1": 57, "v2": 71, "v3": 0.55, "b1": true},
      "styles": "border-radius: 100%; background-color: #480c24",
      "statusColor": "#480c24"
    }], "fields": ["name", "date", "v1", "v2", "v3", "b1"], "titleField": "name",
    "preselection": [
      {key: "b1", value: true}
    ]
  },
  view: View.GRID
}
