import { Story, Meta, moduleMetadata } from '@storybook/angular';
import {
  BiitSliderModule,
  BiitSliderComponent,
  BiitSliderRangeModule,
  BiitSliderRangeComponent,
  BiitSliderOptionModule,
  BiitSliderOptionComponent,
  BiitSliderOptionVerticalModule,
  BiitSliderOptionVerticalComponent
} from 'biit-ui/inputs';
import {FormsModule} from "@angular/forms";

export default {
  title: 'Basic/Inputs/Slider',
  decorators: [
    moduleMetadata({
      imports: [BiitSliderModule, BiitSliderRangeModule, BiitSliderOptionModule, BiitSliderOptionVerticalModule, FormsModule]
    }),
  ],
  args: {
    value: 2,
    valueRange: [2,6],
    valueOption: 'tick 1',
    min: 0,
    max: 10,
    step: 1,
    separator: 1,
    ticks: 6,
    labels: [0,2,4,6,8,10],
    optionData: [
      {value: 'tick 1', label: 'hola esto es una prueba del slider option', description: 'esto es una descripción del slider option'},
      {value: 'tick 1.5'},
      {value: 'tick 1.7'},
      {value: 'tick 2'},
      {value: 'central', label: 'el del medio de los chichos', description: 'se ma apareciiio en sueeeñooos'},
      {value: 'tick 3'},
      {value: 'tick 3.5'},
      {value: 'tick 4', label: 'you came in like a wreeeeeeeeeecking baaaaall', description: 'esto es otra descripción del slider option'}
    ],
    inverted: false,
    showDescription: false
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
    <biit-slider-option style="display: block; width: 40em; height: 20em; margin-left: 10em; margin-top: 2em"
                        [inverted]="inverted"
                        [showDescription]="showDescription"
                        [(ngModel)]="valueOption"
                        [data]="optionData"></biit-slider-option>
    <span>Selection: {{valueOption}}</span>
`
});

export const Option = TemplateOption.bind({});

const TemplateOptionVertical: Story<BiitSliderOptionVerticalComponent> = (args: BiitSliderOptionVerticalComponent) => ({
  props: args,
  template:`
    <biit-slider-option-vertical style="display: block; width: 40em; height: 20em; margin-left: 10em; margin-top: 2em"
                                 [inverted]="inverted"
                                 [showDescription]="showDescription"
                                 [(ngModel)]="valueOption"
                                 [data]="optionData"></biit-slider-option-vertical>
    <span>Selection: {{valueOption}}</span>
`
});

export const OptionVertical = TemplateOptionVertical.bind({});
