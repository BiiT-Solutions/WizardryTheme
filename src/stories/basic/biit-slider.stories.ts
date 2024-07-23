import { Story, Meta, moduleMetadata } from '@storybook/angular';
import {BiitSliderModule, BiitSliderComponent} from 'biit-ui/inputs';
import {FormsModule} from "@angular/forms";
import {BiitSliderRangeModule, BiitSliderRangeComponent} from "biit-ui/inputs";
import {
  BiitSliderOptionComponent
} from "../../../projects/biit-ui/inputs/src/biit-slider-option/biit-slider-option.component";
import {
  BiitSliderOptionModule
} from "../../../projects/biit-ui/inputs/src/biit-slider-option/biit-slider-option.module";

export default {
  title: 'Basic/Inputs/Slider',
  decorators: [
    moduleMetadata({
      imports: [BiitSliderModule, BiitSliderRangeModule, BiitSliderOptionModule, FormsModule]
    }),
  ],
  args: {
    value: 2,
    valueRange: [2,6],
    valueOption: 'hola',
    min: 0,
    max: 10,
    step: 1,
    separator: 1,
    ticks: 6,
    labels: [0,2,4,6,8,10]
  },
  parameters: {
    options: {
      storySort: {
        order: ['Single', 'Range']
      }
    }
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
                 style="display: block; margin-top: 10px"></biit-slider>
`
});

export const Single = Template.bind({});

const TemplateRange: Story<BiitSliderRangeComponent> = (args: BiitSliderRangeComponent) => ({
  props: args,
  template:`
    <biit-slider-range [(ngModel)]="valueRange"
                 [min]="min"
                 [max]="max"
                 [step]="step"
                 [separator]="separator"
                 [ticks]="ticks"
                 [labels]="labels"
                 style="display: block; margin-top: 10px"></biit-slider-range>
`
});

export const Range = TemplateRange.bind({});


const TemplateOption: Story<BiitSliderOptionComponent> = (args: BiitSliderOptionComponent) => ({
  props: args,
  template:`
    <biit-slider-option [(ngModel)]="valueOption"
                 [data]="[
                 {value: 'hola esto es una prueba del slider option', description: 'esto es una descripción del slider option'},
                 {value: 'hay mas opciones para que los textos sean mas largos'},
                 {value: 'esto no cabe pero ni a la de tres eh'},
                 {value: 'you came in like a wreeeeeeeeeecking baaaaall', description: 'esto es otra descripción del slider option'}
                 ]"
                 style="display: block; margin-top: 10px"></biit-slider-option>
                 <span>Selection: {{valueOption.value}}</span>
`
});

export const Option = TemplateOption.bind({});
