import type {Meta, StoryFn} from '@storybook/angular';
import {moduleMetadata} from '@storybook/angular';
import { APP_INITIALIZER } from '@angular/core';
import {completeIconSet} from '@biit-solutions/biit-icons-collection';
import {BiitIconService} from '@biit-solutions/wizardry-theme/icon';
import {TranslocoStorybookModule} from '../../app/transloco/transloco-storybook.module';
import {
  BiitDatatableDemoModule
} from "../../../projects/wizardry-theme/table/src/biit-datatable-demo/biit-datatable-demo.module";
import {BiitDatatableComponent} from "../../../projects/wizardry-theme/table/src/biit-datatable/biit-datatable.component";

function biitIconServiceFactory(service: BiitIconService) {
  service.registerIcons(completeIconSet);
  return () => service;
}

export default {
  title: 'Basic/Datatable',
  decorators: [
    moduleMetadata({
      imports: [BiitDatatableDemoModule],
      providers: [{ provide: APP_INITIALIZER, useFactory: biitIconServiceFactory, deps: [BiitIconService], multi: true }]
    })
  ],
  component: BiitDatatableComponent
} as any;

const Template: StoryFn<BiitDatatableComponent<any>> = (args: any, { globals }: any) => {
  TranslocoStorybookModule.setLanguage(globals);
  return {
    globals,
    props: args,
    template: `
    <biit-datatable-demo
      style="display: block; height: 500px"
    ></biit-datatable-demo>`
  }
};

export const Default = Template.bind({});

const ServerSideTemplate: StoryFn<BiitDatatableComponent<any>> = (args: any, { globals }: any) => {
  TranslocoStorybookModule.setLanguage(globals);
  return {
    globals,
    props: args,
    template: `
    <biit-datatable-demo
      [serverSide]="true"
      style="display: block; height: 500px"
    ></biit-datatable-demo>`
  }
};

export const ServerSide = ServerSideTemplate.bind({});
