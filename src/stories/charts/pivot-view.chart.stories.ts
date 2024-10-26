import {Meta, moduleMetadata, Story} from '@storybook/angular';
import {
  MetaViewChartComponent,
  MetaViewChartModule
} from "biit-ui/charts";

export default {
  title: 'Charts/Meta View',
  decorators: [
    moduleMetadata({
      imports: [MetaViewChartModule],
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
