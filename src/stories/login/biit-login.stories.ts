import {Meta, moduleMetadata, Story} from '@storybook/angular';
import {BiitLoginComponent, BiitLoginModule} from "biit-ui/login";
import {BiitIconService} from "biit-ui/icon";
import {completeIconSet} from "biit-icons-collection";
import {APP_INITIALIZER} from "@angular/core";
import {BiitLogin} from "biit-ui/models";
import {TranslocoStorybookModule} from "../../app/transloco/transloco-storybook.module";

function biitIconServiceFactory(service: BiitIconService) {
  service.registerIcons(completeIconSet);
  return () => service;
}

const login: BiitLogin = new BiitLogin('biit', 'user', true);
export default {
  title: 'Composed/Login',
  component: BiitLoginComponent,
  decorators: [
    moduleMetadata({
      imports: [BiitLoginModule],
      providers: [{
        provide: APP_INITIALIZER,
        useFactory: biitIconServiceFactory,
        multi: true,
        deps: [BiitIconService],
      }]
    }),
  ],
  args: {
    login: login
  },
  argTypes: {
    login: {
      name: 'login',
      type: { name: 'string', required: false },
      defaultValue: new BiitLogin(),
      description: 'Login Data to be set in case necessary to pass parameters',
      table: {
        type: { summary: 'object' },
        defaultValue: { summary: new BiitLogin() },
        category: 'Input'
      },
      control: {
        type: 'object'
      }
    },
    onLogin: {
      action: 'onLogin',
      name: 'onLogin',
      description: 'Emits an event containing data introduced by the user.',
      table: {
        type: 'Event',
        category: 'Outputs'
      }
    },
    onNotRemember: {
      action: 'onNotRemember',
      name: 'onNotRemember',
      description: 'Emits an empty event if user clicks on not remember button.',
      table: {
        type: 'Event',
        category: 'Outputs'
      }
    }
  }
} as Meta;

const Template: Story<BiitLoginComponent> = (args: BiitLoginComponent, { globals }) => {
  TranslocoStorybookModule.setLanguage(globals);
  return {
    globals,
    props: args,
    template: `
    <biit-login
     [login]="login"
     (onLogin)="onLogin($event)"
     (onNotRemember)="onNotRemember()"
    ></biit-login>`
  }
};

export const Default = Template.bind({});
Default.args = {
}
