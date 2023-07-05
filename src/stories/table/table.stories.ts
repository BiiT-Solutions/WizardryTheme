import {Meta, moduleMetadata, Story} from '@storybook/angular';
import {BiitTableComponent} from "../../../projects/biit-ui/table/src/biit-table/biit-table.component";
import {BiitTableDemoModule} from '../../../projects/biit-ui/table/src/biit-table-demo/biit-table-demo.module';
import {APP_INITIALIZER} from '@angular/core';
import {completeIconSet} from 'biit-icons-collection';
import {BiitIconService} from 'biit-ui/icon';

function biitIconServiceFactory(service: BiitIconService) {
  service.registerIcons(completeIconSet);
  return () => service;
}

export default {
  title: 'Basic/Table',
  decorators: [
    moduleMetadata({
      imports: [BiitTableDemoModule],
      providers: [{
        provide: APP_INITIALIZER,
        useFactory: biitIconServiceFactory,
        multi: true,
        deps: [BiitIconService],
      }]
    })
  ],
  component: BiitTableComponent,
  args: {
    locale: 'en'
  }
} as Meta;

const Template: Story<BiitTableComponent> = (args: BiitTableComponent) => ({
  props: args,
  template: `
    <biit-table-demo
      [locale]="locale"
    ></biit-table-demo>`
});

export const Default = Template.bind({});
