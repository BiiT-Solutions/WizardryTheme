import {Meta, moduleMetadata, Story} from '@storybook/angular';
import {APP_INITIALIZER} from '@angular/core';
import {completeIconSet} from 'biit-icons-collection';
import {BiitIconService} from 'biit-ui/icon';
import {TranslocoStorybookModule} from '../../app/transloco/transloco-storybook.module';
import {
  BiitDatatableDemoModule
} from "../../../projects/biit-ui/table/src/biit-datatable-demo/biit-datatable-demo.module";
import {BiitDatatableComponent} from "../../../projects/biit-ui/table/src/biit-datatable/biit-datatable.component";

function biitIconServiceFactory(service: BiitIconService) {
  service.registerIcons(completeIconSet);
  return () => service;
}

export default {
  title: 'Basic/Datatable',
  decorators: [
    moduleMetadata({
      imports: [BiitDatatableDemoModule],
      providers: [{
        provide: APP_INITIALIZER,
        useFactory: biitIconServiceFactory,
        multi: true,
        deps: [BiitIconService],
      }]
    })
  ],
  component: BiitDatatableComponent
} as Meta;

const Template: Story<BiitDatatableComponent<any>> = (args: BiitDatatableComponent<any>, { globals }) => {
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
