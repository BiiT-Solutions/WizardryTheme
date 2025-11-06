import {Meta, moduleMetadata, Story} from '@storybook/angular';
import {
  MetaViewChartComponent,
  MetaViewChartModule
} from "@biit-solutions/wizardry-theme/charts";
import {BiitIconService} from "@biit-solutions/wizardry-theme/icon";
import {completeIconSet} from "biit-icons-collection";
import {APP_INITIALIZER} from "@angular/core";
import {MetaViewData} from "@biit-solutions/wizardry-theme/charts";
import {View} from '../../../projects/wizardry-theme/charts/src/meta-view-chart/model/view';

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
          "name": "Aitor Etxeberria",
          "submitted at": new Date( new Date("2021-08-12T14:37:22Z")),
          "ReceptiveScore": 45.3,
          "InnovatorScore": 55.1,
          "StrategistScore": 60.2,
          "VisionaryScore": 50.0,
          "LeaderScore": 40.5,
          "BankerScore": 65.3,
          "ScientistScore": 70.1,
          "TradesmanScore": 55.2,
          "AdaptabilityActionScore": 60.0,
          "StructureInspirationScore": 50.4,
          "Pass": false
        },
        "styles": "clip-path: polygon(10% 0%, 90% 0%, 90% 10%, 100% 10%, 100% 90%, 90% 90%, 90% 100%, 10% 100%, 10% 90%, 0% 90%, 0% 10%, 10% 10%); background-color: rgb(255,0,0, 0); border: 11px solid rgb(255,0,0); box-sizing: border-box;",
        "statusColor": "rgb(255,0,0)"
      },
      {
        "data": {
          "name": "Ander Aizpurua",
          "submitted at":  new Date("2024-10-22T14:37:22Z"),
          "ReceptiveScore": 48.3,
          "InnovatorScore": 52.1,
          "StrategistScore": 58.2,
          "VisionaryScore": 49.0,
          "LeaderScore": 42.5,
          "BankerScore": 63.3,
          "ScientistScore": 68.1,
          "TradesmanScore": 53.2,
          "AdaptabilityActionScore": 59.0,
          "StructureInspirationScore": 51.4,
          "Pass": false
        },
        "styles": "clip-path: polygon(10% 0%, 90% 0%, 90% 10%, 100% 10%, 100% 90%, 90% 90%, 90% 100%, 10% 100%, 10% 90%, 0% 90%, 0% 10%, 10% 10%); background-color: rgb(255,0,0, 0); border: 11px solid rgb(255,0,0); box-sizing: border-box;",
        "statusColor": "rgb(255,0,0)"
      },
      {
        "data": {
          "name": "Michael Scott",
          "submitted at":  new Date("2025-01-05T14:37:22Z"),
          "ReceptiveScore": 48.3,
          "InnovatorScore": 52.1,
          "StrategistScore": 58.2,
          "VisionaryScore": 49.0,
          "LeaderScore": 42.5,
          "BankerScore": 63.3,
          "ScientistScore": 68.1,
          "TradesmanScore": 53.2,
          "AdaptabilityActionScore": 59.0,
          "StructureInspirationScore": 51.4,
          "Pass": false
        },
        "styles": "clip-path: polygon(10% 0%, 90% 0%, 90% 10%, 100% 10%, 100% 90%, 90% 90%, 90% 100%, 10% 100%, 10% 90%, 0% 90%, 0% 10%, 10% 10%); background-color: rgb(255,0,0, 0); border: 11px solid rgb(255,0,0); box-sizing: border-box;",
        "statusColor": "rgb(255,0,0)"
      },
      {
        "data": {
          "name": "Jordi Pujol",
          "submitted at":  new Date("2023-09-22T14:37:22Z"),
          "ReceptiveScore": 45.3,
          "InnovatorScore": 55.1,
          "StrategistScore": 60.2,
          "VisionaryScore": 50.0,
          "LeaderScore": 40.5,
          "BankerScore": 65.3,
          "ScientistScore": 70.1,
          "TradesmanScore": 55.2,
          "AdaptabilityActionScore": 60.0,
          "StructureInspirationScore": 50.4,
          "Pass": false
        },
        "styles": "clip-path: polygon(10% 0%, 90% 0%, 90% 10%, 100% 10%, 100% 90%, 90% 90%, 90% 100%, 10% 100%, 10% 90%, 0% 90%, 0% 10%, 10% 10%); background-color: rgb(255,0,0, 0); border: 11px solid rgb(255,0,0); box-sizing: border-box;",
        "statusColor": "rgb(255,0,0)"
      },
      {
        "data": {
          "name": "John Doe",
          "submitted at":  new Date("2024-11-15T14:37:22Z"),
          "ReceptiveScore": 95.0,
          "InnovatorScore": 5.0,
          "StrategistScore": 50.0,
          "VisionaryScore": 10.0,
          "LeaderScore": 90.0,
          "BankerScore": 20.0,
          "ScientistScore": 85.0,
          "TradesmanScore": 15.0,
          "AdaptabilityActionScore": 75.0,
          "StructureInspirationScore": 25.0,
          "Pass": false
        },
        "styles": "clip-path: polygon(10% 0%, 90% 0%, 90% 10%, 100% 10%, 100% 90%, 90% 90%, 90% 100%, 10% 100%, 10% 90%, 0% 90%, 0% 10%, 10% 10%); background-color: rgb(255,0,0, 0); border: 11px solid rgb(255,0,0); box-sizing: border-box;",
        "statusColor": "rgb(255,0,0)"
      },
      {
        "data": {
          "name": "Gemma Bosch",
          "submitted at":  new Date("2024-07-08T14:37:22Z"),
          "ReceptiveScore": 48.3,
          "InnovatorScore": 52.1,
          "StrategistScore": 58.2,
          "VisionaryScore": 49.0,
          "LeaderScore": 42.5,
          "BankerScore": 63.3,
          "ScientistScore": 68.1,
          "TradesmanScore": 53.2,
          "AdaptabilityActionScore": 59.0,
          "StructureInspirationScore": 51.4,
          "Pass": false
        },
        "styles": "clip-path: polygon(10% 0%, 90% 0%, 90% 10%, 100% 10%, 100% 90%, 90% 90%, 90% 100%, 10% 100%, 10% 90%, 0% 90%, 0% 10%, 10% 10%); background-color: rgb(255,0,0, 0); border: 11px solid rgb(255,0,0); box-sizing: border-box;",
        "statusColor": "rgb(255,0,0)"
      },
      {
        "data": {
          "name": "John Doe",
          "submitted at":  new Date("2025-01-05T14:37:22Z"),
          "ReceptiveScore": 45.3,
          "InnovatorScore": 55.1,
          "StrategistScore": 60.2,
          "VisionaryScore": 50.0,
          "LeaderScore": 40.5,
          "BankerScore": 65.3,
          "ScientistScore": 70.1,
          "TradesmanScore": 55.2,
          "AdaptabilityActionScore": 60.0,
          "StructureInspirationScore": 50.4,
          "Pass": false
        },
        "styles": "clip-path: polygon(10% 0%, 90% 0%, 90% 10%, 100% 10%, 100% 90%, 90% 90%, 90% 100%, 10% 100%, 10% 90%, 0% 90%, 0% 10%, 10% 10%); background-color: rgb(255,0,0, 0); border: 11px solid rgb(255,0,0); box-sizing: border-box;",
        "statusColor": "rgb(255,0,0)"
      },
      {
        "data": {
          "name": "Amaia Aranburu",
          "submitted at":  new Date("2024-03-27T14:37:22Z"),
          "ReceptiveScore": 50.0,
          "InnovatorScore": 45.0,
          "StrategistScore": 55.0,
          "VisionaryScore": 60.0,
          "LeaderScore": 50.0,
          "BankerScore": 45.0,
          "ScientistScore": 55.0,
          "TradesmanScore": 60.0,
          "AdaptabilityActionScore": 50.0,
          "StructureInspirationScore": 45.0,
          "Pass": false
        },
        "styles": "clip-path: polygon(10% 0%, 90% 0%, 90% 10%, 100% 10%, 100% 90%, 90% 90%, 90% 100%, 10% 100%, 10% 90%, 0% 90%, 0% 10%, 10% 10%); background-color: rgb(255,51,0, 0); border: 11px solid rgb(255,51,0); box-sizing: border-box;",
        "statusColor": "rgb(255,51,0)"
      },
      {
        "data": {
          "name": "Maite Garmendia",
          "submitted at":  new Date("2024-02-22T14:37:22Z"),
          "ReceptiveScore": 51.0,
          "InnovatorScore": 46.0,
          "StrategistScore": 54.0,
          "VisionaryScore": 61.0,
          "LeaderScore": 51.0,
          "BankerScore": 46.0,
          "ScientistScore": 54.0,
          "TradesmanScore": 61.0,
          "AdaptabilityActionScore": 51.0,
          "StructureInspirationScore": 46.0,
          "Pass": false
        },
        "styles": "clip-path: polygon(10% 0%, 90% 0%, 90% 10%, 100% 10%, 100% 90%, 90% 90%, 90% 100%, 10% 100%, 10% 90%, 0% 90%, 0% 10%, 10% 10%); background-color: rgb(255,51,0, 0); border: 11px solid rgb(255,51,0); box-sizing: border-box;",
        "statusColor": "rgb(255,51,0)"
      },
      {
        "data": {
          "name": "Oriol Mas",
          "submitted at":  new Date("2023-11-11T14:37:22Z"),
          "ReceptiveScore": 51.0,
          "InnovatorScore": 46.0,
          "StrategistScore": 54.0,
          "VisionaryScore": 61.0,
          "LeaderScore": 51.0,
          "BankerScore": 46.0,
          "ScientistScore": 54.0,
          "TradesmanScore": 61.0,
          "AdaptabilityActionScore": 51.0,
          "StructureInspirationScore": 46.0,
          "Pass": false
        },
        "styles": "clip-path: polygon(10% 0%, 90% 0%, 90% 10%, 100% 10%, 100% 90%, 90% 90%, 90% 100%, 10% 100%, 10% 90%, 0% 90%, 0% 10%, 10% 10%); background-color: rgb(255,51,0, 0); border: 11px solid rgb(255,51,0); box-sizing: border-box;",
        "statusColor": "rgb(255,51,0)"
      },
      {
        "data": {
          "name": "Pam Beesly",
          "submitted at":  new Date("2025-01-03T14:37:22Z"),
          "ReceptiveScore": 51.0,
          "InnovatorScore": 46.0,
          "StrategistScore": 54.0,
          "VisionaryScore": 61.0,
          "LeaderScore": 51.0,
          "BankerScore": 46.0,
          "ScientistScore": 54.0,
          "TradesmanScore": 61.0,
          "AdaptabilityActionScore": 51.0,
          "StructureInspirationScore": 46.0,
          "Pass": false
        },
        "styles": "clip-path: polygon(10% 0%, 90% 0%, 90% 10%, 100% 10%, 100% 90%, 90% 90%, 90% 100%, 10% 100%, 10% 90%, 0% 90%, 0% 10%, 10% 10%); background-color: rgb(255,51,0, 0); border: 11px solid rgb(255,51,0); box-sizing: border-box;",
        "statusColor": "rgb(255,51,0)"
      },
      {
        "data": {
          "name": "Montserrat Rovira",
          "submitted at":  new Date("2022-05-25T14:37:22Z"),
          "ReceptiveScore": 50.0,
          "InnovatorScore": 45.0,
          "StrategistScore": 55.0,
          "VisionaryScore": 60.0,
          "LeaderScore": 50.0,
          "BankerScore": 45.0,
          "ScientistScore": 55.0,
          "TradesmanScore": 60.0,
          "AdaptabilityActionScore": 50.0,
          "StructureInspirationScore": 45.0,
          "Pass": false
        },
        "styles": "clip-path: polygon(10% 0%, 90% 0%, 90% 10%, 100% 10%, 100% 90%, 90% 90%, 90% 100%, 10% 100%, 10% 90%, 0% 90%, 0% 10%, 10% 10%); background-color: rgb(255,51,0, 0); border: 11px solid rgb(255,51,0); box-sizing: border-box;",
        "statusColor": "rgb(255,51,0)"
      },
      {
        "data": {
          "name": "Jane Smith",
          "submitted at":  new Date("2025-01-01T14:37:22Z"),
          "ReceptiveScore": 50.0,
          "InnovatorScore": 45.0,
          "StrategistScore": 55.0,
          "VisionaryScore": 60.0,
          "LeaderScore": 50.0,
          "BankerScore": 45.0,
          "ScientistScore": 55.0,
          "TradesmanScore": 60.0,
          "AdaptabilityActionScore": 50.0,
          "StructureInspirationScore": 45.0,
          "Pass": false
        },
        "styles": "clip-path: polygon(10% 0%, 90% 0%, 90% 10%, 100% 10%, 100% 90%, 90% 90%, 90% 100%, 10% 100%, 10% 90%, 0% 90%, 0% 10%, 10% 10%); background-color: rgb(255,51,0, 0); border: 11px solid rgb(255,51,0); box-sizing: border-box;",
        "statusColor": "rgb(255,51,0)"
      },
      {
        "data": {
          "name": "Jane Smith",
          "submitted at":  new Date("2024-06-14T14:37:22Z"),
          "ReceptiveScore": 10.0,
          "InnovatorScore": 90.0,
          "StrategistScore": 20.0,
          "VisionaryScore": 80.0,
          "LeaderScore": 30.0,
          "BankerScore": 70.0,
          "ScientistScore": 40.0,
          "TradesmanScore": 60.0,
          "AdaptabilityActionScore": 50.0,
          "StructureInspirationScore": 55.0,
          "Pass": false
        },
        "styles": "clip-path: polygon(10% 0%, 90% 0%, 90% 10%, 100% 10%, 100% 90%, 90% 90%, 90% 100%, 10% 100%, 10% 90%, 0% 90%, 0% 10%, 10% 10%); background-color: rgb(255,51,0, 0); border: 11px solid rgb(255,51,0); box-sizing: border-box;",
        "statusColor": "rgb(255,51,0)"
      },
      {
        "data": {
          "name": "Iker Zubizarreta",
          "submitted at":  new Date("2024-03-02T14:37:22Z"),
          "ReceptiveScore": 55.0,
          "InnovatorScore": 50.0,
          "StrategistScore": 45.0,
          "VisionaryScore": 55.0,
          "LeaderScore": 60.0,
          "BankerScore": 50.0,
          "ScientistScore": 45.0,
          "TradesmanScore": 55.0,
          "AdaptabilityActionScore": 60.0,
          "StructureInspirationScore": 50.0,
          "Pass": false
        },
        "styles": "clip-path: polygon(10% 0%, 90% 0%, 90% 10%, 100% 10%, 100% 90%, 90% 90%, 90% 100%, 10% 100%, 10% 90%, 0% 90%, 0% 10%, 10% 10%); background-color: rgb(255,102,0, 0); border: 11px solid rgb(255,102,0); box-sizing: border-box;",
        "statusColor": "rgb(255,102,0)"
      },
      {
        "data": {
          "name": "Alice Johnson",
          "submitted at":  new Date("2021-10-26T14:37:22Z"),
          "ReceptiveScore": 55.0,
          "InnovatorScore": 50.0,
          "StrategistScore": 45.0,
          "VisionaryScore": 55.0,
          "LeaderScore": 60.0,
          "BankerScore": 50.0,
          "ScientistScore": 45.0,
          "TradesmanScore": 55.0,
          "AdaptabilityActionScore": 60.0,
          "StructureInspirationScore": 50.0,
          "Pass": false
        },
        "styles": "clip-path: polygon(10% 0%, 90% 0%, 90% 10%, 100% 10%, 100% 90%, 90% 90%, 90% 100%, 10% 100%, 10% 90%, 0% 90%, 0% 10%, 10% 10%); background-color: rgb(255,102,0, 0); border: 11px solid rgb(255,102,0); box-sizing: border-box;",
        "statusColor": "rgb(255,102,0)"
      },
      {
        "data": {
          "name": "Xabier Urrutia",
          "submitted at":  new Date("2023-05-05T14:37:22Z"),
          "ReceptiveScore": 56.0,
          "InnovatorScore": 51.0,
          "StrategistScore": 46.0,
          "VisionaryScore": 56.0,
          "LeaderScore": 61.0,
          "BankerScore": 51.0,
          "ScientistScore": 46.0,
          "TradesmanScore": 56.0,
          "AdaptabilityActionScore": 61.0,
          "StructureInspirationScore": 51.0,
          "Pass": false
        },
        "styles": "clip-path: polygon(10% 0%, 90% 0%, 90% 10%, 100% 10%, 100% 90%, 90% 90%, 90% 100%, 10% 100%, 10% 90%, 0% 90%, 0% 10%, 10% 10%); background-color: rgb(255,102,0, 0); border: 11px solid rgb(255,102,0); box-sizing: border-box;",
        "statusColor": "rgb(255,102,0)"
      },
      {
        "data": {
          "name": "Jim Halpert",
          "submitted at":  new Date("2025-01-06T14:37:22Z"),
          "ReceptiveScore": 56.0,
          "InnovatorScore": 51.0,
          "StrategistScore": 46.0,
          "VisionaryScore": 56.0,
          "LeaderScore": 61.0,
          "BankerScore": 51.0,
          "ScientistScore": 46.0,
          "TradesmanScore": 56.0,
          "AdaptabilityActionScore": 61.0,
          "StructureInspirationScore": 51.0,
          "Pass": false
        },
        "styles": "clip-path: polygon(10% 0%, 90% 0%, 90% 10%, 100% 10%, 100% 90%, 90% 90%, 90% 100%, 10% 100%, 10% 90%, 0% 90%, 0% 10%, 10% 10%); background-color: rgb(255,102,0, 0); border: 11px solid rgb(255,102,0); box-sizing: border-box;",
        "statusColor": "rgb(255,102,0)"
      },
      {
        "data": {
          "name": "Clara Solé",
          "submitted at":  new Date("2024-12-25T14:37:22Z"),
          "ReceptiveScore": 56.0,
          "InnovatorScore": 51.0,
          "StrategistScore": 46.0,
          "VisionaryScore": 56.0,
          "LeaderScore": 61.0,
          "BankerScore": 51.0,
          "ScientistScore": 46.0,
          "TradesmanScore": 56.0,
          "AdaptabilityActionScore": 61.0,
          "StructureInspirationScore": 51.0,
          "Pass": false
        },
        "styles": "clip-path: polygon(10% 0%, 90% 0%, 90% 10%, 100% 10%, 100% 90%, 90% 90%, 90% 100%, 10% 100%, 10% 90%, 0% 90%, 0% 10%, 10% 10%); background-color: rgb(255,102,0, 0); border: 11px solid rgb(255,102,0); box-sizing: border-box;",
        "statusColor": "rgb(255,102,0)"
      },
      {
        "data": {
          "name": "Pere Casals",
          "submitted at":  new Date("2021-09-27T14:37:22Z"),
          "ReceptiveScore": 55.0,
          "InnovatorScore": 50.0,
          "StrategistScore": 45.0,
          "VisionaryScore": 55.0,
          "LeaderScore": 60.0,
          "BankerScore": 50.0,
          "ScientistScore": 45.0,
          "TradesmanScore": 55.0,
          "AdaptabilityActionScore": 60.0,
          "StructureInspirationScore": 50.0,
          "Pass": false
        },
        "styles": "clip-path: polygon(10% 0%, 90% 0%, 90% 10%, 100% 10%, 100% 90%, 90% 90%, 90% 100%, 10% 100%, 10% 90%, 0% 90%, 0% 10%, 10% 10%); background-color: rgb(255,102,0, 0); border: 11px solid rgb(255,102,0); box-sizing: border-box;",
        "statusColor": "rgb(255,102,0)"
      },
      {
        "data": {
          "name": "Alice Johnson",
          "submitted at":  new Date("2024-02-07T14:37:22Z"),
          "ReceptiveScore": 85.0,
          "InnovatorScore": 15.0,
          "StrategistScore": 75.0,
          "VisionaryScore": 25.0,
          "LeaderScore": 65.0,
          "BankerScore": 35.0,
          "ScientistScore": 55.0,
          "TradesmanScore": 45.0,
          "AdaptabilityActionScore": 95.0,
          "StructureInspirationScore": 5.0,
          "Pass": false
        },
        "styles": "clip-path: polygon(10% 0%, 90% 0%, 90% 10%, 100% 10%, 100% 90%, 90% 90%, 90% 100%, 10% 100%, 10% 90%, 0% 90%, 0% 10%, 10% 10%); background-color: rgb(255,102,0, 0); border: 11px solid rgb(255,102,0); box-sizing: border-box;",
        "statusColor": "rgb(255,102,0)"
      },
      {
        "data": {
          "name": "Nerea Agirre",
          "submitted at":  new Date("2024-07-14T14:37:22Z"),
          "ReceptiveScore": 60.0,
          "InnovatorScore": 55.0,
          "StrategistScore": 50.0,
          "VisionaryScore": 45.0,
          "LeaderScore": 55.0,
          "BankerScore": 60.0,
          "ScientistScore": 50.0,
          "TradesmanScore": 45.0,
          "AdaptabilityActionScore": 55.0,
          "StructureInspirationScore": 60.0,
          "Pass": false
        },
        "styles": "clip-path: polygon(10% 0%, 90% 0%, 90% 10%, 100% 10%, 100% 90%, 90% 90%, 90% 100%, 10% 100%, 10% 90%, 0% 90%, 0% 10%, 10% 10%); background-color: rgb(255,153,0, 0); border: 11px solid rgb(255,153,0); box-sizing: border-box;",
        "statusColor": "rgb(255,153,0)"
      },
      {
        "data": {
          "name": "Ainhoa Lertxundi",
          "submitted at":  new Date("2023-05-05T14:37:22Z"),
          "ReceptiveScore": 61.0,
          "InnovatorScore": 56.0,
          "StrategistScore": 51.0,
          "VisionaryScore": 46.0,
          "LeaderScore": 56.0,
          "BankerScore": 61.0,
          "ScientistScore": 51.0,
          "TradesmanScore": 46.0,
          "AdaptabilityActionScore": 56.0,
          "StructureInspirationScore": 61.0,
          "Pass": false
        },
        "styles": "clip-path: polygon(10% 0%, 90% 0%, 90% 10%, 100% 10%, 100% 90%, 90% 90%, 90% 100%, 10% 100%, 10% 90%, 0% 90%, 0% 10%, 10% 10%); background-color: rgb(255,153,0, 0); border: 11px solid rgb(255,153,0); box-sizing: border-box;",
        "statusColor": "rgb(255,153,0)"
      },
      {
        "data": {
          "name": "Bob Brown",
          "submitted at":  new Date("2022-12-06T14:37:22Z"),
          "ReceptiveScore": 60.0,
          "InnovatorScore": 55.0,
          "StrategistScore": 50.0,
          "VisionaryScore": 45.0,
          "LeaderScore": 55.0,
          "BankerScore": 60.0,
          "ScientistScore": 50.0,
          "TradesmanScore": 45.0,
          "AdaptabilityActionScore": 55.0,
          "StructureInspirationScore": 60.0,
          "Pass": false
        },
        "styles": "clip-path: polygon(10% 0%, 90% 0%, 90% 10%, 100% 10%, 100% 90%, 90% 90%, 90% 100%, 10% 100%, 10% 90%, 0% 90%, 0% 10%, 10% 10%); background-color: rgb(255,153,0, 0); border: 11px solid rgb(255,153,0); box-sizing: border-box;",
        "statusColor": "rgb(255,153,0)"
      },
      {
        "data": {
          "name": "Dwight Schrute",
          "submitted at":  new Date("2021-04-18T14:37:22Z"),
          "ReceptiveScore": 61.0,
          "InnovatorScore": 56.0,
          "StrategistScore": 51.0,
          "VisionaryScore": 46.0,
          "LeaderScore": 56.0,
          "BankerScore": 61.0,
          "ScientistScore": 51.0,
          "TradesmanScore": 46.0,
          "AdaptabilityActionScore": 56.0,
          "StructureInspirationScore": 61.0,
          "Pass": false
        },
        "styles": "clip-path: polygon(10% 0%, 90% 0%, 90% 10%, 100% 10%, 100% 90%, 90% 90%, 90% 100%, 10% 100%, 10% 90%, 0% 90%, 0% 10%, 10% 10%); background-color: rgb(255,153,0, 0); border: 11px solid rgb(255,153,0); box-sizing: border-box;",
        "statusColor": "rgb(255,153,0)"
      },
      {
        "data": {
          "name": "Núria Font",
          "submitted at":  new Date("2023-11-26T14:37:22Z"),
          "ReceptiveScore": 60.0,
          "InnovatorScore": 55.0,
          "StrategistScore": 50.0,
          "VisionaryScore": 45.0,
          "LeaderScore": 55.0,
          "BankerScore": 60.0,
          "ScientistScore": 50.0,
          "TradesmanScore": 45.0,
          "AdaptabilityActionScore": 55.0,
          "StructureInspirationScore": 60.0,
          "Pass": false
        },
        "styles": "clip-path: polygon(10% 0%, 90% 0%, 90% 10%, 100% 10%, 100% 90%, 90% 90%, 90% 100%, 10% 100%, 10% 90%, 0% 90%, 0% 10%, 10% 10%); background-color: rgb(255,153,0, 0); border: 11px solid rgb(255,153,0); box-sizing: border-box;",
        "statusColor": "rgb(255,153,0)"
      },
      {
        "data": {
          "name": "Pol Martí",
          "submitted at":  new Date("2024-08-10T14:37:22Z"),
          "ReceptiveScore": 61.0,
          "InnovatorScore": 56.0,
          "StrategistScore": 51.0,
          "VisionaryScore": 46.0,
          "LeaderScore": 56.0,
          "BankerScore": 61.0,
          "ScientistScore": 51.0,
          "TradesmanScore": 46.0,
          "AdaptabilityActionScore": 56.0,
          "StructureInspirationScore": 61.0,
          "Pass": false
        },
        "styles": "clip-path: polygon(10% 0%, 90% 0%, 90% 10%, 100% 10%, 100% 90%, 90% 90%, 90% 100%, 10% 100%, 10% 90%, 0% 90%, 0% 10%, 10% 10%); background-color: rgb(255,153,0, 0); border: 11px solid rgb(255,153,0); box-sizing: border-box;",
        "statusColor": "rgb(255,153,0)"
      },
      {
        "data": {
          "name": "Bob Brown",
          "submitted at":  new Date("2024-09-19T14:37:22Z"),
          "ReceptiveScore": 20.0,
          "InnovatorScore": 80.0,
          "StrategistScore": 30.0,
          "VisionaryScore": 70.0,
          "LeaderScore": 40.0,
          "BankerScore": 60.0,
          "ScientistScore": 50.0,
          "TradesmanScore": 55.0,
          "AdaptabilityActionScore": 10.0,
          "StructureInspirationScore": 90.0,
          "Pass": false
        },
        "styles": "clip-path: polygon(10% 0%, 90% 0%, 90% 10%, 100% 10%, 100% 90%, 90% 90%, 90% 100%, 10% 100%, 10% 90%, 0% 90%, 0% 10%, 10% 10%); background-color: rgb(255,153,0, 0); border: 11px solid rgb(255,153,0); box-sizing: border-box;",
        "statusColor": "rgb(255,153,0)"
      },
      {
        "data": {
          "name": "Jon Etxebarria",
          "submitted at":  new Date("2024-11-10T14:37:22Z"),
          "ReceptiveScore": 65.0,
          "InnovatorScore": 60.0,
          "StrategistScore": 55.0,
          "VisionaryScore": 50.0,
          "LeaderScore": 45.0,
          "BankerScore": 55.0,
          "ScientistScore": 60.0,
          "TradesmanScore": 50.0,
          "AdaptabilityActionScore": 45.0,
          "StructureInspirationScore": 55.0,
          "Pass": false
        },
        "styles": "clip-path: polygon(10% 0%, 90% 0%, 90% 10%, 100% 10%, 100% 90%, 90% 90%, 90% 100%, 10% 100%, 10% 90%, 0% 90%, 0% 10%, 10% 10%); background-color: rgb(255,204,0, 0); border: 11px solid rgb(255,204,0); box-sizing: border-box;",
        "statusColor": "rgb(255,204,0)"
      },
      {
        "data": {
          "name": "Gorka Ibarretxe",
          "submitted at":  new Date("2024-03-17T14:37:22Z"),
          "ReceptiveScore": 66.0,
          "InnovatorScore": 61.0,
          "StrategistScore": 56.0,
          "VisionaryScore": 51.0,
          "LeaderScore": 46.0,
          "BankerScore": 56.0,
          "ScientistScore": 61.0,
          "TradesmanScore": 51.0,
          "AdaptabilityActionScore": 46.0,
          "StructureInspirationScore": 56.0,
          "Pass": false
        },
        "styles": "clip-path: polygon(10% 0%, 90% 0%, 90% 10%, 100% 10%, 100% 90%, 90% 90%, 90% 100%, 10% 100%, 10% 90%, 0% 90%, 0% 10%, 10% 10%); background-color: rgb(255,204,0, 0); border: 11px solid rgb(255,204,0); box-sizing: border-box;",
        "statusColor": "rgb(255,204,0)"
      },
      {
        "data": {
          "name": "Charlie Davis",
          "submitted at":  new Date("2021-05-11T14:37:22Z"),
          "ReceptiveScore": 65.0,
          "InnovatorScore": 60.0,
          "StrategistScore": 55.0,
          "VisionaryScore": 50.0,
          "LeaderScore": 45.0,
          "BankerScore": 55.0,
          "ScientistScore": 60.0,
          "TradesmanScore": 50.0,
          "AdaptabilityActionScore": 45.0,
          "StructureInspirationScore": 55.0,
          "Pass": false
        },
        "styles": "clip-path: polygon(10% 0%, 90% 0%, 90% 10%, 100% 10%, 100% 90%, 90% 90%, 90% 100%, 10% 100%, 10% 90%, 0% 90%, 0% 10%, 10% 10%); background-color: rgb(255,204,0, 0); border: 11px solid rgb(255,204,0); box-sizing: border-box;",
        "statusColor": "rgb(255,204,0)"
      },
      {
        "data": {
          "name": "Stanley Hudson",
          "submitted at":  new Date("2022-07-06T14:37:22Z"),
          "ReceptiveScore": 66.0,
          "InnovatorScore": 61.0,
          "StrategistScore": 56.0,
          "VisionaryScore": 51.0,
          "LeaderScore": 46.0,
          "BankerScore": 56.0,
          "ScientistScore": 61.0,
          "TradesmanScore": 51.0,
          "AdaptabilityActionScore": 46.0,
          "StructureInspirationScore": 56.0,
          "Pass": false
        },
        "styles": "clip-path: polygon(10% 0%, 90% 0%, 90% 10%, 100% 10%, 100% 90%, 90% 90%, 90% 100%, 10% 100%, 10% 90%, 0% 90%, 0% 10%, 10% 10%); background-color: rgb(255,204,0, 0); border: 11px solid rgb(255,204,0); box-sizing: border-box;",
        "statusColor": "rgb(255,204,0)"
      },
      {
        "data": {
          "name": "Marta Soler",
          "submitted at":  new Date("2024-03-30T14:37:22Z"),
          "ReceptiveScore": 65.0,
          "InnovatorScore": 60.0,
          "StrategistScore": 55.0,
          "VisionaryScore": 50.0,
          "LeaderScore": 45.0,
          "BankerScore": 55.0,
          "ScientistScore": 60.0,
          "TradesmanScore": 50.0,
          "AdaptabilityActionScore": 45.0,
          "StructureInspirationScore": 55.0,
          "Pass": false
        },
        "styles": "clip-path: polygon(10% 0%, 90% 0%, 90% 10%, 100% 10%, 100% 90%, 90% 90%, 90% 100%, 10% 100%, 10% 90%, 0% 90%, 0% 10%, 10% 10%); background-color: rgb(255,204,0, 0); border: 11px solid rgb(255,204,0); box-sizing: border-box;",
        "statusColor": "rgb(255,204,0)"
      },
      {
        "data": {
          "name": "Laia Ferran",
          "submitted at":  new Date("2025-01-07T14:37:22Z"),
          "ReceptiveScore": 66.0,
          "InnovatorScore": 61.0,
          "StrategistScore": 56.0,
          "VisionaryScore": 51.0,
          "LeaderScore": 46.0,
          "BankerScore": 56.0,
          "ScientistScore": 61.0,
          "TradesmanScore": 51.0,
          "AdaptabilityActionScore": 46.0,
          "StructureInspirationScore": 56.0,
          "Pass": true
        },
        "styles": "clip-path: polygon(10% 0%, 90% 0%, 90% 10%, 100% 10%, 100% 90%, 90% 90%, 90% 100%, 10% 100%, 10% 90%, 0% 90%, 0% 10%, 10% 10%); background-color: rgb(255,204,0, 0); border: 11px solid rgb(255,204,0); box-sizing: border-box;",
        "statusColor": "rgb(255,204,0)"
      },
      {
        "data": {
          "name": "Charlie Davis",
          "submitted at":  new Date("2024-01-05T14:37:22Z"),
          "ReceptiveScore": 75.0,
          "InnovatorScore": 25.0,
          "StrategistScore": 65.0,
          "VisionaryScore": 35.0,
          "LeaderScore": 55.0,
          "BankerScore": 45.0,
          "ScientistScore": 85.0,
          "TradesmanScore": 15.0,
          "AdaptabilityActionScore": 95.0,
          "StructureInspirationScore": 5.0,
          "Pass": true
        },
        "styles": "clip-path: polygon(10% 0%, 90% 0%, 90% 10%, 100% 10%, 100% 90%, 90% 90%, 90% 100%, 10% 100%, 10% 90%, 0% 90%, 0% 10%, 10% 10%); background-color: rgb(255,204,0, 0); border: 11px solid rgb(255,204,0); box-sizing: border-box;",
        "statusColor": "rgb(255,204,0)"
      },
      {
        "data": {
          "name": "Ane Goikoetxea",
          "submitted at":  new Date("2023-11-11T14:37:22Z"),
          "ReceptiveScore": 70.0,
          "InnovatorScore": 65.0,
          "StrategistScore": 60.0,
          "VisionaryScore": 55.0,
          "LeaderScore": 50.0,
          "BankerScore": 45.0,
          "ScientistScore": 55.0,
          "TradesmanScore": 60.0,
          "AdaptabilityActionScore": 50.0,
          "StructureInspirationScore": 45.0,
          "Pass": true
        },
        "styles": "clip-path: polygon(10% 0%, 90% 0%, 90% 10%, 100% 10%, 100% 90%, 90% 90%, 90% 100%, 10% 100%, 10% 90%, 0% 90%, 0% 10%, 10% 10%); background-color: rgb(255,255,0, 0); border: 11px solid rgb(255,255,0); box-sizing: border-box;",
        "statusColor": "rgb(255,255,0)"
      },
      {
        "data": {
          "name": "Joan Roca",
          "submitted at":  new Date("2024-10-22T14:37:22Z"),
          "ReceptiveScore": 70.0,
          "InnovatorScore": 65.0,
          "StrategistScore": 60.0,
          "VisionaryScore": 55.0,
          "LeaderScore": 50.0,
          "BankerScore": 45.0,
          "ScientistScore": 55.0,
          "TradesmanScore": 60.0,
          "AdaptabilityActionScore": 50.0,
          "StructureInspirationScore": 45.0,
          "Pass": true
        },
        "styles": "clip-path: polygon(10% 0%, 90% 0%, 90% 10%, 100% 10%, 100% 90%, 90% 90%, 90% 100%, 10% 100%, 10% 90%, 0% 90%, 0% 10%, 10% 10%); background-color: rgb(255,255,0, 0); border: 11px solid rgb(255,255,0); box-sizing: border-box;",
        "statusColor": "rgb(255,255,0)"
      },
      {
        "data": {
          "name": "Uxue Otxoa",
          "submitted at":  new Date("2022-08-04T14:37:22Z"),
          "ReceptiveScore": 71.0,
          "InnovatorScore": 66.0,
          "StrategistScore": 61.0,
          "VisionaryScore": 56.0,
          "LeaderScore": 51.0,
          "BankerScore": 46.0,
          "ScientistScore": 56.0,
          "TradesmanScore": 61.0,
          "AdaptabilityActionScore": 51.0,
          "StructureInspirationScore": 46.0,
          "Pass": true
        },
        "styles": "clip-path: polygon(10% 0%, 90% 0%, 90% 10%, 100% 10%, 100% 90%, 90% 90%, 90% 100%, 10% 100%, 10% 90%, 0% 90%, 0% 10%, 10% 10%); background-color: rgb(255,255,0, 0); border: 11px solid rgb(255,255,0); box-sizing: border-box;",
        "statusColor": "rgb(255,255,0)"
      },
      {
        "data": {
          "name": "Kevin Malone",
          "submitted at":  new Date("2024-10-22T14:37:22Z"),
          "ReceptiveScore": 71.0,
          "InnovatorScore": 66.0,
          "StrategistScore": 61.0,
          "VisionaryScore": 56.0,
          "LeaderScore": 51.0,
          "BankerScore": 46.0,
          "ScientistScore": 56.0,
          "TradesmanScore": 61.0,
          "AdaptabilityActionScore": 51.0,
          "StructureInspirationScore": 46.0,
          "Pass": true
        },
        "styles": "clip-path: polygon(10% 0%, 90% 0%, 90% 10%, 100% 10%, 100% 90%, 90% 90%, 90% 100%, 10% 100%, 10% 90%, 0% 90%, 0% 10%, 10% 10%); background-color: rgb(255,255,0, 0); border: 11px solid rgb(255,255,0); box-sizing: border-box;",
        "statusColor": "rgb(255,255,0)"
      },
      {
        "data": {
          "name": "Diana Evans",
          "submitted at":  new Date("2023-12-22T14:37:22Z"),
          "ReceptiveScore": 70.0,
          "InnovatorScore": 65.0,
          "StrategistScore": 60.0,
          "VisionaryScore": 55.0,
          "LeaderScore": 50.0,
          "BankerScore": 45.0,
          "ScientistScore": 55.0,
          "TradesmanScore": 60.0,
          "AdaptabilityActionScore": 50.0,
          "StructureInspirationScore": 45.0,
          "Pass": true
        },
        "styles": "clip-path: polygon(10% 0%, 90% 0%, 90% 10%, 100% 10%, 100% 90%, 90% 90%, 90% 100%, 10% 100%, 10% 90%, 0% 90%, 0% 10%, 10% 10%); background-color: rgb(255,255,0, 0); border: 11px solid rgb(255,255,0); box-sizing: border-box;",
        "statusColor": "rgb(255,255,0)"
      },
      {
        "data": {
          "name": "Diana Evans",
          "submitted at":  new Date("2021-06-22T14:37:22Z"),
          "ReceptiveScore": 30.0,
          "InnovatorScore": 70.0,
          "StrategistScore": 40.0,
          "VisionaryScore": 60.0,
          "LeaderScore": 50.0,
          "BankerScore": 55.0,
          "ScientistScore": 20.0,
          "TradesmanScore": 80.0,
          "AdaptabilityActionScore": 10.0,
          "StructureInspirationScore": 90.0,
          "Pass": true
        },
        "styles": "clip-path: polygon(10% 0%, 90% 0%, 90% 10%, 100% 10%, 100% 90%, 90% 90%, 90% 100%, 10% 100%, 10% 90%, 0% 90%, 0% 10%, 10% 10%); background-color: rgb(255,255,0, 0); border: 11px solid rgb(255,255,0); box-sizing: border-box;",
        "statusColor": "rgb(255,255,0)"
      },
      {
        "data": {
          "name": "Pau Vila",
          "submitted at":  new Date("2024-08-17T14:37:22Z"),
          "ReceptiveScore": 71.0,
          "InnovatorScore": 66.0,
          "StrategistScore": 61.0,
          "VisionaryScore": 56.0,
          "LeaderScore": 51.0,
          "BankerScore": 46.0,
          "ScientistScore": 56.0,
          "TradesmanScore": 61.0,
          "AdaptabilityActionScore": 51.0,
          "StructureInspirationScore": 46.0,
          "Pass": true
        },
        "styles": "clip-path: polygon(10% 0%, 90% 0%, 90% 10%, 100% 10%, 100% 90%, 90% 90%, 90% 100%, 10% 100%, 10% 90%, 0% 90%, 0% 10%, 10% 10%); background-color: rgb(255,255,0, 0); border: 11px solid rgb(255,255,0); box-sizing: border-box;",
        "statusColor": "rgb(255,255,0)"
      },
      {
        "data": {
          "name": "Mikel Lasa",
          "submitted at":  new Date("2024-02-16T14:37:22Z"),
          "ReceptiveScore": 75.0,
          "InnovatorScore": 70.0,
          "StrategistScore": 65.0,
          "VisionaryScore": 60.0,
          "LeaderScore": 55.0,
          "BankerScore": 50.0,
          "ScientistScore": 45.0,
          "TradesmanScore": 55.0,
          "AdaptabilityActionScore": 60.0,
          "StructureInspirationScore": 50.0,
          "Pass": true
        },
        "styles": "clip-path: polygon(10% 0%, 90% 0%, 90% 10%, 100% 10%, 100% 90%, 90% 90%, 90% 100%, 10% 100%, 10% 90%, 0% 90%, 0% 10%, 10% 10%); background-color: rgb(204,255,0, 0); border: 11px solid rgb(204,255,0); box-sizing: border-box;",
        "statusColor": "rgb(204,255,0)"
      },
      {
        "data": {
          "name": "Aitor Zabaleta",
          "submitted at":  new Date("2023-06-19T14:37:22Z"),
          "ReceptiveScore": 76.0,
          "InnovatorScore": 71.0,
          "StrategistScore": 66.0,
          "VisionaryScore": 61.0,
          "LeaderScore": 56.0,
          "BankerScore": 51.0,
          "ScientistScore": 46.0,
          "TradesmanScore": 56.0,
          "AdaptabilityActionScore": 61.0,
          "StructureInspirationScore": 51.0,
          "Pass": true
        },
        "styles": "clip-path: polygon(10% 0%, 90% 0%, 90% 10%, 100% 10%, 100% 90%, 90% 90%, 90% 100%, 10% 100%, 10% 90%, 0% 90%, 0% 10%, 10% 10%); background-color: rgb(204,255,0, 0); border: 11px solid rgb(204,255,0); box-sizing: border-box;",
        "statusColor": "rgb(204,255,0)"
      },
      {
        "data": {
          "name": "Ethan Foster",
          "submitted at":  new Date("2025-01-04T14:37:22Z"),
          "ReceptiveScore": 75.0,
          "InnovatorScore": 70.0,
          "StrategistScore": 65.0,
          "VisionaryScore": 60.0,
          "LeaderScore": 55.0,
          "BankerScore": 50.0,
          "ScientistScore": 45.0,
          "TradesmanScore": 55.0,
          "AdaptabilityActionScore": 60.0,
          "StructureInspirationScore": 50.0,
          "Pass": true
        },
        "styles": "clip-path: polygon(10% 0%, 90% 0%, 90% 10%, 100% 10%, 100% 90%, 90% 90%, 90% 100%, 10% 100%, 10% 90%, 0% 90%, 0% 10%, 10% 10%); background-color: rgb(204,255,0, 0); border: 11px solid rgb(204,255,0); box-sizing: border-box;",
        "statusColor": "rgb(204,255,0)"
      },
      {
        "data": {
          "name": "Angela Martin",
          "submitted at":  new Date("2022-09-04T14:37:22Z"),
          "ReceptiveScore": 76.0,
          "InnovatorScore": 71.0,
          "StrategistScore": 66.0,
          "VisionaryScore": 61.0,
          "LeaderScore": 56.0,
          "BankerScore": 51.0,
          "ScientistScore": 46.0,
          "TradesmanScore": 56.0,
          "AdaptabilityActionScore": 61.0,
          "StructureInspirationScore": 51.0,
          "Pass": true
        },
        "styles": "clip-path: polygon(10% 0%, 90% 0%, 90% 10%, 100% 10%, 100% 90%, 90% 90%, 90% 100%, 10% 100%, 10% 90%, 0% 90%, 0% 10%, 10% 10%); background-color: rgb(204,255,0, 0); border: 11px solid rgb(204,255,0); box-sizing: border-box;",
        "statusColor": "rgb(204,255,0)"
      },
      {
        "data": {
          "name": "Anna Puig",
          "submitted at":  new Date("2021-01-26T14:37:22Z"),
          "ReceptiveScore": 75.0,
          "InnovatorScore": 70.0,
          "StrategistScore": 65.0,
          "VisionaryScore": 60.0,
          "LeaderScore": 55.0,
          "BankerScore": 50.0,
          "ScientistScore": 45.0,
          "TradesmanScore": 55.0,
          "AdaptabilityActionScore": 60.0,
          "StructureInspirationScore": 50.0,
          "Pass": true
        },
        "styles": "clip-path: polygon(10% 0%, 90% 0%, 90% 10%, 100% 10%, 100% 90%, 90% 90%, 90% 100%, 10% 100%, 10% 90%, 0% 90%, 0% 10%, 10% 10%); background-color: rgb(204,255,0, 0); border: 11px solid rgb(204,255,0); box-sizing: border-box;",
        "statusColor": "rgb(204,255,0)"
      },
      {
        "data": {
          "name": "Mireia Prat",
          "submitted at":  new Date("2023-06-20T14:37:22Z"),
          "ReceptiveScore": 76.0,
          "InnovatorScore": 71.0,
          "StrategistScore": 66.0,
          "VisionaryScore": 61.0,
          "LeaderScore": 56.0,
          "BankerScore": 51.0,
          "ScientistScore": 46.0,
          "TradesmanScore": 56.0,
          "AdaptabilityActionScore": 61.0,
          "StructureInspirationScore": 51.0,
          "Pass": true
        },
        "styles": "clip-path: polygon(10% 0%, 90% 0%, 90% 10%, 100% 10%, 100% 90%, 90% 90%, 90% 100%, 10% 100%, 10% 90%, 0% 90%, 0% 10%, 10% 10%); background-color: rgb(204,255,0, 0); border: 11px solid rgb(204,255,0); box-sizing: border-box;",
        "statusColor": "rgb(204,255,0)"
      },
      {
        "data": {
          "name": "Eve Foster",
          "submitted at":  new Date("2023-07-11T14:37:22Z"),
          "ReceptiveScore": 65.0,
          "InnovatorScore": 35.0,
          "StrategistScore": 55.0,
          "VisionaryScore": 45.0,
          "LeaderScore": 75.0,
          "BankerScore": 25.0,
          "ScientistScore": 95.0,
          "TradesmanScore": 5.0,
          "AdaptabilityActionScore": 85.0,
          "StructureInspirationScore": 15.0,
          "Pass": true
        },
        "styles": "clip-path: polygon(10% 0%, 90% 0%, 90% 10%, 100% 10%, 100% 90%, 90% 90%, 90% 100%, 10% 100%, 10% 90%, 0% 90%, 0% 10%, 10% 10%); background-color: rgb(204,255,0, 0); border: 11px solid rgb(204,255,0); box-sizing: border-box;",
        "statusColor": "rgb(204,255,0)"
      },
      {
        "data": {
          "name": "Irati Mendizabal",
          "submitted at":  new Date("2022-05-22T14:37:22Z"),
          "ReceptiveScore": 80.0,
          "InnovatorScore": 75.0,
          "StrategistScore": 70.0,
          "VisionaryScore": 65.0,
          "LeaderScore": 60.0,
          "BankerScore": 55.0,
          "ScientistScore": 50.0,
          "TradesmanScore": 45.0,
          "AdaptabilityActionScore": 55.0,
          "StructureInspirationScore": 60.0,
          "Pass": true
        },
        "styles": "clip-path: polygon(10% 0%, 90% 0%, 90% 10%, 100% 10%, 100% 90%, 90% 90%, 90% 100%, 10% 100%, 10% 90%, 0% 90%, 0% 10%, 10% 10%); background-color: rgb(153,255,0, 0); border: 11px solid rgb(153,255,0); box-sizing: border-box;",
        "statusColor": "rgb(153,255,0)"
      },
      {
        "data": {
          "name": "Fiona Green",
          "submitted at":  new Date("2024-04-12T14:37:22Z"),
          "ReceptiveScore": 80.0,
          "InnovatorScore": 75.0,
          "StrategistScore": 70.0,
          "VisionaryScore": 65.0,
          "LeaderScore": 60.0,
          "BankerScore": 55.0,
          "ScientistScore": 50.0,
          "TradesmanScore": 45.0,
          "AdaptabilityActionScore": 55.0,
          "StructureInspirationScore": 60.0,
          "Pass": true
        },
        "styles": "clip-path: polygon(10% 0%, 90% 0%, 90% 10%, 100% 10%, 100% 90%, 90% 90%, 90% 100%, 10% 100%, 10% 90%, 0% 90%, 0% 10%, 10% 10%); background-color: rgb(153,255,0, 0); border: 11px solid rgb(153,255,0); box-sizing: border-box;",
        "statusColor": "rgb(153,255,0)"
      },
      {
        "data": {
          "name": "Miren Eguiguren",
          "submitted at":  new Date("2024-02-16T14:37:22Z"),
          "ReceptiveScore": 81.0,
          "InnovatorScore": 76.0,
          "StrategistScore": 71.0,
          "VisionaryScore": 66.0,
          "LeaderScore": 61.0,
          "BankerScore": 56.0,
          "ScientistScore": 51.0,
          "TradesmanScore": 46.0,
          "AdaptabilityActionScore": 56.0,
          "StructureInspirationScore": 61.0,
          "Pass": true
        },
        "styles": "clip-path: polygon(10% 0%, 90% 0%, 90% 10%, 100% 10%, 100% 90%, 90% 90%, 90% 100%, 10% 100%, 10% 90%, 0% 90%, 0% 10%, 10% 10%); background-color: rgb(153,255,0, 0); border: 11px solid rgb(153,255,0); box-sizing: border-box;",
        "statusColor": "rgb(153,255,0)"
      },
      {
        "data": {
          "name": "Carles Ferrer",
          "submitted at":  new Date("2021-08-22T14:37:22Z"),
          "ReceptiveScore": 80.0,
          "InnovatorScore": 75.0,
          "StrategistScore": 70.0,
          "VisionaryScore": 65.0,
          "LeaderScore": 60.0,
          "BankerScore": 55.0,
          "ScientistScore": 50.0,
          "TradesmanScore": 45.0,
          "AdaptabilityActionScore": 55.0,
          "StructureInspirationScore": 60.0,
          "Pass": true
        },
        "styles": "clip-path: polygon(10% 0%, 90% 0%, 90% 10%, 100% 10%, 100% 90%, 90% 90%, 90% 100%, 10% 100%, 10% 90%, 0% 90%, 0% 10%, 10% 10%); background-color: rgb(153,255,0, 0); border: 11px solid rgb(153,255,0); box-sizing: border-box;",
        "statusColor": "rgb(153,255,0)"
      },
      {
        "data": {
          "name": "Oscar Martinez",
          "submitted at":  new Date("2024-10-22T14:37:22Z"),
          "ReceptiveScore": 81.0,
          "InnovatorScore": 76.0,
          "StrategistScore": 71.0,
          "VisionaryScore": 66.0,
          "LeaderScore": 61.0,
          "BankerScore": 56.0,
          "ScientistScore": 51.0,
          "TradesmanScore": 46.0,
          "AdaptabilityActionScore": 56.0,
          "StructureInspirationScore": 61.0,
          "Pass": true
        },
        "styles": "clip-path: polygon(10% 0%, 90% 0%, 90% 10%, 100% 10%, 100% 90%, 90% 90%, 90% 100%, 10% 100%, 10% 90%, 0% 90%, 0% 10%, 10% 10%); background-color: rgb(153,255,0, 0); border: 11px solid rgb(153,255,0); box-sizing: border-box;",
        "statusColor": "rgb(153,255,0)"
      },
      {
        "data": {
          "name": "Roger Sanz",
          "submitted at":  new Date("2025-01-01T14:37:22Z"),
          "ReceptiveScore": 81.0,
          "InnovatorScore": 76.0,
          "StrategistScore": 71.0,
          "VisionaryScore": 66.0,
          "LeaderScore": 61.0,
          "BankerScore": 56.0,
          "ScientistScore": 51.0,
          "TradesmanScore": 46.0,
          "AdaptabilityActionScore": 56.0,
          "StructureInspirationScore": 61.0,
          "Pass": true
        },
        "styles": "clip-path: polygon(10% 0%, 90% 0%, 90% 10%, 100% 10%, 100% 90%, 90% 90%, 90% 100%, 10% 100%, 10% 90%, 0% 90%, 0% 10%, 10% 10%); background-color: rgb(153,255,0, 0); border: 11px solid rgb(153,255,0); box-sizing: border-box;",
        "statusColor": "rgb(153,255,0)"
      },
      {
        "data": {
          "name": "Frank Green",
          "submitted at":  new Date("2024-04-11T14:37:22Z"),
          "ReceptiveScore": 40.0,
          "InnovatorScore": 60.0,
          "StrategistScore": 50.0,
          "VisionaryScore": 55.0,
          "LeaderScore": 45.0,
          "BankerScore": 65.0,
          "ScientistScore": 35.0,
          "TradesmanScore": 75.0,
          "AdaptabilityActionScore": 25.0,
          "StructureInspirationScore": 85.0,
          "Pass": true
        },
        "styles": "clip-path: polygon(10% 0%, 90% 0%, 90% 10%, 100% 10%, 100% 90%, 90% 90%, 90% 100%, 10% 100%, 10% 90%, 0% 90%, 0% 10%, 10% 10%); background-color: rgb(153,255,0, 0); border: 11px solid rgb(153,255,0); box-sizing: border-box;",
        "statusColor": "rgb(153,255,0)"
      },
      {
        "data": {
          "name": "Unai Olabarria",
          "submitted at":  new Date("2024-12-07T14:37:22Z"),
          "ReceptiveScore": 85.0,
          "InnovatorScore": 80.0,
          "StrategistScore": 75.0,
          "VisionaryScore": 70.0,
          "LeaderScore": 65.0,
          "BankerScore": 60.0,
          "ScientistScore": 55.0,
          "TradesmanScore": 50.0,
          "AdaptabilityActionScore": 45.0,
          "StructureInspirationScore": 55.0,
          "Pass": true
        },
        "styles": "clip-path: polygon(10% 0%, 90% 0%, 90% 10%, 100% 10%, 100% 90%, 90% 90%, 90% 100%, 10% 100%, 10% 90%, 0% 90%, 0% 10%, 10% 10%); background-color: rgb(153,255,0, 0); border: 11px solid rgb(153,255,0); box-sizing: border-box;",
        "statusColor": "rgb(102,255,0)"
      },
      {
        "data": {
          "name": "Laura Vidal",
          "submitted at":  new Date("2023-08-22T14:37:22Z"),
          "ReceptiveScore": 85.0,
          "InnovatorScore": 80.0,
          "StrategistScore": 75.0,
          "VisionaryScore": 70.0,
          "LeaderScore": 65.0,
          "BankerScore": 60.0,
          "ScientistScore": 55.0,
          "TradesmanScore": 50.0,
          "AdaptabilityActionScore": 45.0,
          "StructureInspirationScore": 55.0,
          "Pass": true
        },
        "styles": "clip-path: polygon(10% 0%, 90% 0%, 90% 10%, 100% 10%, 100% 90%, 90% 90%, 90% 100%, 10% 100%, 10% 90%, 0% 90%, 0% 10%, 10% 10%); background-color: rgb(153,255,0, 0); border: 11px solid rgb(153,255,0); box-sizing: border-box;",
        "statusColor": "rgb(102,255,0)"
      },
      {
        "data": {
          "name": "Koldo Azkue",
          "submitted at":  new Date("2023-04-11T14:37:22Z"),
          "ReceptiveScore": 86.0,
          "InnovatorScore": 81.0,
          "StrategistScore": 76.0,
          "VisionaryScore": 71.0,
          "LeaderScore": 66.0,
          "BankerScore": 61.0,
          "ScientistScore": 56.0,
          "TradesmanScore": 51.0,
          "AdaptabilityActionScore": 46.0,
          "StructureInspirationScore": 56.0,
          "Pass": true
        },
        "styles": "clip-path: polygon(10% 0%, 90% 0%, 90% 10%, 100% 10%, 100% 90%, 90% 90%, 90% 100%, 10% 100%, 10% 90%, 0% 90%, 0% 10%, 10% 10%); background-color: rgb(153,255,0, 0); border: 11px solid rgb(153,255,0); box-sizing: border-box;",
        "statusColor": "rgb(102,255,0)"
      },
      {
        "data": {
          "name": "George Harris",
          "submitted at":  new Date("2021-09-11T14:37:22Z"),
          "ReceptiveScore": 85.0,
          "InnovatorScore": 80.0,
          "StrategistScore": 75.0,
          "VisionaryScore": 70.0,
          "LeaderScore": 65.0,
          "BankerScore": 60.0,
          "ScientistScore": 55.0,
          "TradesmanScore": 50.0,
          "AdaptabilityActionScore": 45.0,
          "StructureInspirationScore": 55.0,
          "Pass": true
        },
        "styles": "clip-path: polygon(10% 0%, 90% 0%, 90% 10%, 100% 10%, 100% 90%, 90% 90%, 90% 100%, 10% 100%, 10% 90%, 0% 90%, 0% 10%, 10% 10%); background-color: rgb(153,255,0, 0); border: 11px solid rgb(153,255,0); box-sizing: border-box;",
        "statusColor": "rgb(102,255,0)"
      },
      {
        "data": {
          "name": "Meredith Palmer",
          "submitted at":  new Date("2024-04-22T14:37:22Z"),
          "ReceptiveScore": 86.0,
          "InnovatorScore": 81.0,
          "StrategistScore": 76.0,
          "VisionaryScore": 71.0,
          "LeaderScore": 66.0,
          "BankerScore": 61.0,
          "ScientistScore": 56.0,
          "TradesmanScore": 51.0,
          "AdaptabilityActionScore": 46.0,
          "StructureInspirationScore": 56.0,
          "Pass": true
        },
        "styles": "clip-path: polygon(10% 0%, 90% 0%, 90% 10%, 100% 10%, 100% 90%, 90% 90%, 90% 100%, 10% 100%, 10% 90%, 0% 90%, 0% 10%, 10% 10%); background-color: rgb(153,255,0, 0); border: 11px solid rgb(153,255,0); box-sizing: border-box;",
        "statusColor": "rgb(102,255,0)"
      },
      {
        "data": {
          "name": "Aina Pons",
          "submitted at":  new Date("2021-05-22T14:37:22Z"),
          "ReceptiveScore": 86.0,
          "InnovatorScore": 81.0,
          "StrategistScore": 76.0,
          "VisionaryScore": 71.0,
          "LeaderScore": 66.0,
          "BankerScore": 61.0,
          "ScientistScore": 56.0,
          "TradesmanScore": 51.0,
          "AdaptabilityActionScore": 46.0,
          "StructureInspirationScore": 56.0,
          "Pass": true
        },
        "styles": "clip-path: polygon(10% 0%, 90% 0%, 90% 10%, 100% 10%, 100% 90%, 90% 90%, 90% 100%, 10% 100%, 10% 90%, 0% 90%, 0% 10%, 10% 10%); background-color: rgb(153,255,0, 0); border: 11px solid rgb(153,255,0); box-sizing: border-box;",
        "statusColor": "rgb(102,255,0)"
      },
      {
        "data": {
          "name": "Grace Harris",
          "submitted at":  new Date("2022-07-22T14:37:22Z"),
          "ReceptiveScore": 55.0,
          "InnovatorScore": 45.0,
          "StrategistScore": 65.0,
          "VisionaryScore": 35.0,
          "LeaderScore": 75.0,
          "BankerScore": 25.0,
          "ScientistScore": 85.0,
          "TradesmanScore": 15.0,
          "AdaptabilityActionScore": 95.0,
          "StructureInspirationScore": 5.0,
          "Pass": true
        },
        "styles": "clip-path: polygon(10% 0%, 90% 0%, 90% 10%, 100% 10%, 100% 90%, 90% 90%, 90% 100%, 10% 100%, 10% 90%, 0% 90%, 0% 10%, 10% 10%); background-color: rgb(153,255,0, 0); border: 11px solid rgb(153,255,0); box-sizing: border-box;",
        "statusColor": "rgb(102,255,0)"
      },
      {
        "data": {
          "name": "Arnau Rius",
          "submitted at":  new Date("2024-06-11T14:37:22Z"),
          "ReceptiveScore": 91.0,
          "InnovatorScore": 86.0,
          "StrategistScore": 81.0,
          "VisionaryScore": 76.0,
          "LeaderScore": 71.0,
          "BankerScore": 66.0,
          "ScientistScore": 61.0,
          "TradesmanScore": 56.0,
          "AdaptabilityActionScore": 51.0,
          "StructureInspirationScore": 46.0,
          "Pass": true
        },
        "styles": "clip-path: polygon(10% 0%, 90% 0%, 90% 10%, 100% 10%, 100% 90%, 90% 90%, 90% 100%, 10% 100%, 10% 90%, 0% 90%, 0% 10%, 10% 10%); background-color: rgb(102,255,0, 0); border: 11px solid rgb(102,255,0); box-sizing: border-box;",
        "statusColor": "rgb(51,255,0)"
      },
      {
        "data": {
          "name": "Ryan Howard",
          "submitted at":  new Date("2024-11-19T14:37:22Z"),
          "ReceptiveScore": 91.0,
          "InnovatorScore": 86.0,
          "StrategistScore": 81.0,
          "VisionaryScore": 76.0,
          "LeaderScore": 71.0,
          "BankerScore": 66.0,
          "ScientistScore": 61.0,
          "TradesmanScore": 56.0,
          "AdaptabilityActionScore": 51.0,
          "StructureInspirationScore": 46.0,
          "Pass": true
        },
        "styles": "clip-path: polygon(10% 0%, 90% 0%, 90% 10%, 100% 10%, 100% 90%, 90% 90%, 90% 100%, 10% 100%, 10% 90%, 0% 90%, 0% 10%, 10% 10%); background-color: rgb(102,255,0, 0); border: 11px solid rgb(102,255,0); box-sizing: border-box;",
        "statusColor": "rgb(51,255,0)"
      },
      {
        "data": {
          "name": "Marc Serra",
          "submitted at":  new Date("2025-01-02T14:37:22Z"),
          "ReceptiveScore": 90.0,
          "InnovatorScore": 85.0,
          "StrategistScore": 80.0,
          "VisionaryScore": 75.0,
          "LeaderScore": 70.0,
          "BankerScore": 65.0,
          "ScientistScore": 60.0,
          "TradesmanScore": 55.0,
          "AdaptabilityActionScore": 50.0,
          "StructureInspirationScore": 45.0,
          "Pass": true
        },
        "styles": "clip-path: polygon(10% 0%, 90% 0%, 90% 10%, 100% 10%, 100% 90%, 90% 90%, 90% 100%, 10% 100%, 10% 90%, 0% 90%, 0% 10%, 10% 10%); background-color: rgb(102,255,0, 0); border: 11px solid rgb(102,255,0); box-sizing: border-box;",
        "statusColor": "rgb(51,255,0)"
      },
      {
        "data": {
          "name": "Aitor Zabaleta",
          "submitted at":  new Date("2022-06-01T14:37:22Z"),
          "ReceptiveScore": 91.0,
          "InnovatorScore": 86.0,
          "StrategistScore": 81.0,
          "VisionaryScore": 76.0,
          "LeaderScore": 71.0,
          "BankerScore": 66.0,
          "ScientistScore": 61.0,
          "TradesmanScore": 56.0,
          "AdaptabilityActionScore": 51.0,
          "StructureInspirationScore": 46.0,
          "Pass": true
        },
        "styles": "clip-path: polygon(10% 0%, 90% 0%, 90% 10%, 100% 10%, 100% 90%, 90% 90%, 90% 100%, 10% 100%, 10% 90%, 0% 90%, 0% 10%, 10% 10%); background-color: rgb(102,255,0, 0); border: 11px solid rgb(102,255,0); box-sizing: border-box;",
        "statusColor": "rgb(51,255,0)"
      },
      {
        "data": {
          "name": "Hannah Jackson",
          "submitted at":  new Date("2024-09-18T14:37:22Z"),
          "ReceptiveScore": 90.0,
          "InnovatorScore": 85.0,
          "StrategistScore": 80.0,
          "VisionaryScore": 75.0,
          "LeaderScore": 70.0,
          "BankerScore": 65.0,
          "ScientistScore": 60.0,
          "TradesmanScore": 55.0,
          "AdaptabilityActionScore": 50.0,
          "StructureInspirationScore": 45.0,
          "Pass": true
        },
        "styles": "clip-path: polygon(10% 0%, 90% 0%, 90% 10%, 100% 10%, 100% 90%, 90% 90%, 90% 100%, 10% 100%, 10% 90%, 0% 90%, 0% 10%, 10% 10%); background-color: rgb(102,255,0, 0); border: 11px solid rgb(102,255,0); box-sizing: border-box;",
        "statusColor": "rgb(51,255,0)"
      },
      {
        "data": {
          "name": "Leire Urkullu",
          "submitted at":  new Date("2023-05-22T14:37:22Z"),
          "ReceptiveScore": 90.0,
          "InnovatorScore": 85.0,
          "StrategistScore": 80.0,
          "VisionaryScore": 75.0,
          "LeaderScore": 70.0,
          "BankerScore": 65.0,
          "ScientistScore": 60.0,
          "TradesmanScore": 55.0,
          "AdaptabilityActionScore": 50.0,
          "StructureInspirationScore": 45.0,
          "Pass": true
        },
        "styles": "clip-path: polygon(10% 0%, 90% 0%, 90% 10%, 100% 10%, 100% 90%, 90% 90%, 90% 100%, 10% 100%, 10% 90%, 0% 90%, 0% 10%, 10% 10%); background-color: rgb(102,255,0, 0); border: 11px solid rgb(102,255,0); box-sizing: border-box;",
        "statusColor": "rgb(51,255,0)"
      },
      {
        "data": {
          "name": "Henry Jackson",
          "submitted at":  new Date("2025-01-03T14:37:22Z"),
          "ReceptiveScore": 50.0,
          "InnovatorScore": 50.0,
          "StrategistScore": 50.0,
          "VisionaryScore": 50.0,
          "LeaderScore": 50.0,
          "BankerScore": 50.0,
          "ScientistScore": 50.0,
          "TradesmanScore": 50.0,
          "AdaptabilityActionScore": 50.0,
          "StructureInspirationScore": 50.0,
          "Pass": true
        },
        "styles": "clip-path: polygon(10% 0%, 90% 0%, 90% 10%, 100% 10%, 100% 90%, 90% 90%, 90% 100%, 10% 100%, 10% 90%, 0% 90%, 0% 10%, 10% 10%); background-color: rgb(102,255,0, 0); border: 11px solid rgb(102,255,0); box-sizing: border-box;",
        "statusColor": "rgb(51,255,0)"
      }
    ],
    "fields": ["name",
      "submitted at",
      "ReceptiveScore",
      "InnovatorScore",
      "StrategistScore",
      "VisionaryScore",
      "LeaderScore",
      "BankerScore",
      "ScientistScore",
      "TradesmanScore",
      "AdaptabilityActionScore",
      "StructureInspirationScore",
      "Pass"
    ], "titleField": "name",
    "preselection": [
      {key: "ReceptiveScore", value: [33, 55]}
    ]
  },
  view: View.GRID
}
