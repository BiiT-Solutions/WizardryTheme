import {Meta, moduleMetadata, Story} from '@storybook/angular';
import {BiitTableComponent} from "../../../projects/biit-ui/table/src/biit-table/biit-table.component";
import {APP_INITIALIZER} from '@angular/core';
import {completeIconSet} from 'biit-icons-collection';
import {BiitIconService} from 'biit-ui/icon';
import {TranslocoStorybookModule} from '../../app/transloco/transloco-storybook.module';
import {
  BiitDatatableDemoModule
} from "../../../projects/biit-ui/table/src/biit-datatable-demo/biit-datatable-demo.module";

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
  // component: BiitTableComponent
} as Meta;

// const Template: Story<BiitTableComponent> = (args: BiitTableComponent, { globals }) => {
//   TranslocoStorybookModule.setLanguage(globals);
//   return {
//     globals,
//     props: args,
//     template: `
//     <biit-datatable-demo
//       style="display: block; height: 500px"
//     ></biit-datatable-demo>`
//   }
// };

const Template: Story<any> = (args: any, { globals }) => {
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
