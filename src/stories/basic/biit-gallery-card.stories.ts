import { Story, Meta, moduleMetadata } from '@storybook/angular';
import {FormsModule} from '@angular/forms';
import {BiitToggleComponent} from 'wyzardry-theme/inputs';
import {APP_INITIALIZER} from "@angular/core";
import {BiitIconService} from "wyzardry-theme/icon";
import {completeIconSet} from "biit-icons-collection";
import {BiitGalleryCardModule} from "../../../projects/wyzardry-theme/info/src/biit-gallery-card/biit-gallery-card.module";

function biitIconServiceFactory(service: BiitIconService) {
  service.registerIcons(completeIconSet);
  return () => service;
}

export default {
  title: 'Basic/Info/Gallery Card',
  decorators: [
    moduleMetadata({
      imports: [BiitGalleryCardModule, FormsModule],
      providers: [{
        provide: APP_INITIALIZER,
        useFactory: biitIconServiceFactory,
        multi: true,
        deps: [BiitIconService],
      }]
    }),
  ],
  args: {
    title: 'User Stuff Management',
    subtitle: 'This is a subtitle'
  },
  argTypes: {
    icon: {
      name: 'icon',
      type: {name: "string", required: false},
      defaultValue: 'landing_surveys',
      description: 'Card icon to show.',
      table: {
        type: {summary: 'string'},
        defaultValue: {summary: 'default'},
        category: 'Inputs'
      },
      options: completeIconSet.map(iconSet => iconSet.name),
      control: {
        type: 'select'
      }
    }
  }
} as Meta;

const Template: Story<BiitToggleComponent> = (args: BiitToggleComponent) => ({
  props: args,
  template:`
    <div style="display:block">
      <biit-gallery-card [title]="title" [subtitle]="subtitle" [icon]="icon"></biit-gallery-card>
    </div>

`
});

export const Default = Template.bind({});
