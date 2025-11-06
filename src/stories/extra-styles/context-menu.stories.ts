import { Story, Meta, moduleMetadata } from '@storybook/angular';
import {BiitNavUserComponent} from 'wyzardry-theme/navigation';
import {ContextMenuModule} from "@perfectmemory/ngx-contextmenu";
import {BiitButtonModule} from "wyzardry-theme/button";
import {BiitIconModule, BiitIconService} from "wyzardry-theme/icon";
import {completeIconSet} from "biit-icons-collection";
import {APP_INITIALIZER} from "@angular/core";

function biitIconServiceFactory(service: BiitIconService) {
  service.registerIcons(completeIconSet);
  return () => service;
}

export default {
  title: 'Extra Styles/Context Menu',
  decorators: [
    moduleMetadata({
      imports: [ContextMenuModule, BiitButtonModule, BiitIconModule],
      providers: [{
        provide: APP_INITIALIZER,
        useFactory: biitIconServiceFactory,
        multi: true,
        deps: [BiitIconService],
      }]
    }),
  ],
  args: {
    title: 'John Doe',
    subtitle: ''
  }
} as Meta;

const Template: Story<BiitNavUserComponent> = (args: BiitNavUserComponent) => ({
  props: args,
  template:`
    <button biit-button [contextMenu]="contextMenu">Show</button>
    <context-menu #contextMenu [menuClass]="biit-contextmenu">
        <ng-template contextMenuItem><biit-icon name="cauldron"/>Test 1</ng-template>
        <ng-template contextMenuItem>Testing 2</ng-template>
        <ng-template contextMenuItem><biit-icon name="column_selection"/>Testing even longer 3</ng-template>
        <ng-template contextMenuItem>Testing a much much longer title because reasons</ng-template>
        <ng-template contextMenuItem [divider]="true"></ng-template>
        <ng-template contextMenuItem [subMenu]="subMenu">Sub-menu</ng-template>
        <context-menu #subMenu>
            <ng-template contextMenuItem>Without icon</ng-template>
            <ng-template contextMenuItem><biit-icon name="cross"/>With icon</ng-template>
        </context-menu>
    </context-menu>
`
});

export const Default = Template.bind({});
