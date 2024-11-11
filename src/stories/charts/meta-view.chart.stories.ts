import {Meta, moduleMetadata, Story} from '@storybook/angular';
import {
  MetaViewChartComponent,
  MetaViewChartModule
} from "biit-ui/charts";
import {BiitIconService} from "biit-ui/icon";
import {completeIconSet} from "biit-icons-collection";
import {APP_INITIALIZER} from "@angular/core";

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
        multi:true,
        deps: [BiitIconService],
      }]
    }),
  ],
  args: {
  },
  argTypes: {

  },
  parameters: {
  }
} as Meta;

const Template: Story<MetaViewChartComponent> = (args: MetaViewChartComponent) => ({
  props: args,
  template: `
    <biit-meta-view-chart
                    style="display: block; width:100%; height: 100%;"
    ></biit-meta-view-chart>`
});

export const Default = Template.bind({});
