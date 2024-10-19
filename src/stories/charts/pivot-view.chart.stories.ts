import {Meta, moduleMetadata, Story} from '@storybook/angular';
import {
  PivotViewChartComponent,
  PivotViewChartModule
} from "biit-ui/charts";

export default {
  title: 'Charts/Pivot View',
  decorators: [
    moduleMetadata({
      imports: [PivotViewChartModule],
    }),
  ],
  args: {
  },
  argTypes: {

  },
  parameters: {
  }
} as Meta;

const Template: Story<PivotViewChartComponent> = (args: PivotViewChartComponent) => ({
  props: args,
  template: `
    <biit-pivot-view-chart
                    style="display: block; width:100%; height: 100%;"
    ></biit-pivot-view-chart>`
});

export const Default = Template.bind({});
