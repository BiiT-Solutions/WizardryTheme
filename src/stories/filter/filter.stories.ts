import {componentWrapperDecorator, Meta, moduleMetadata, Story} from '@storybook/angular';
import {BiitInputTextModule} from '../../../projects/biit-ui/inputs/src/biit-input-text/biit-input-text.module';
import {BiitInputTextComponent} from '../../../projects/biit-ui/inputs/src/biit-input-text/biit-input-text.component';
import {APP_INITIALIZER} from '@angular/core';
import {BiitIconService} from '../../../projects/biit-ui/icon/src/biit-icon/biit-icon.service';
import {completeIconSet} from 'biit-icons-collection';
import {FormsModule} from '@angular/forms';
import {TranslocoStorybookModule} from "../../app/transloco/transloco-storybook.module";


function biitIconServiceFactory(service: BiitIconService) {
  service.registerIcons(completeIconSet);
  return () => service;
}

export default {
  title: 'Basic/Table/Filter',
  decorators: [
    moduleMetadata({
      imports: [BiitInputTextModule, FormsModule],
      providers: [{
        provide: APP_INITIALIZER,
        useFactory: biitIconServiceFactory,
        deps: [BiitIconService],
      }]
    }),
    componentWrapperDecorator(story => `<div style="margin: 3em">${story}</div>`),
  ],
  args: {
    value: "",
    disabled: false
  },
  argTypes: {
    disabled: {
      name: 'disabled',
      type: {name: 'boolean', required: false},
      defaultValue: 'false',
      description: 'Disables the component interaction.',
      table: {
        type: {summary: 'boolean'},
        defaultValue: {summary: false},
        category: 'Inputs'
      },
      control: {
        type: 'boolean'
      }
    },
    filterChanged: {
      action: 'Changed',
      name: 'filterChanged',
      description: 'Emits an event when the content inside the filter changes.',
      table: {
        type: 'EventEmitter<string>',
        category: 'Outputs'
      }
    },
    onActionPerformed: {
      action: 'onActionPerformed',
      name: 'onActionPerformed',
      description: 'Emits a void event to tell the performed action by the icon has been performed by user.',
      table: {
        type: 'EventEmitter<void>',
        category: 'Outputs'
      }
    },
  }
} as Meta;

const Template: Story<BiitInputTextComponent> = (args: BiitInputTextComponent, { globals }) =>
{
  TranslocoStorybookModule.setLanguage(globals);
  return {
    globals,
    props: args,
    template: `
    <biit-input-text
      [(ngModel)]="value"
      type="TEXT"
      placeholder="Search"
      icon="search"
      [disabled]="disabled"
      (onActionPerformed)="onActionPerformed()"
      style="display: block; width: 256px">
    </biit-input-text>`
  }
};


export const Default = Template.bind({});
