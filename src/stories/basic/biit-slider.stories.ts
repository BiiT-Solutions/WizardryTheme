import { Story, Meta, moduleMetadata } from '@storybook/angular';
import {BiitSliderModule, BiitSliderComponent} from 'biit-ui/inputs';
import {FormsModule} from "@angular/forms";

export default {
  title: 'Basic/Inputs/Slider',
  decorators: [
    moduleMetadata({
      imports: [BiitSliderModule, FormsModule]
    }),
  ],
  args: {
    value: 2,
    min: 0,
    max: 10,
    step: 1,
    ticks: 6,
    labels: [0,2,4,6,8,10],
  }
} as Meta;

const Template: Story<BiitSliderComponent> = (args: BiitSliderComponent) => ({
  props: args,
  template:`
    <biit-slider [(ngModel)]="value"
                 [min]="min"
                 [max]="max"
                 [step]="step"
                 [ticks]="ticks"
                 [labels]="labels"
                 style="display: block"></biit-slider>
`
});

export const Default = Template.bind({});
