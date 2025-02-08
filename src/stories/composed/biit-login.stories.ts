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
    login: login,
    teams: [{key: 'team1', label: 'Team 1'}, {key: 'team2', label: 'Team 2'}]
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
        type: 'Object'
      }
    },
    teams: Object,
    notificationTitle: {
      name: 'title',
      type: { name: 'string', required: false },
      description: 'Defines the header text of notification popup',
      table: {
        type: { summary: 'string' },
        category: 'Inputs'
      },
      control: {
        type: 'text'
      }
    },
    notification: {
      name: 'title',
      type: { name: 'string', required: false },
      description: 'Defines the body of notification popup',
      table: {
        type: { summary: 'string' },
        category: 'Inputs'
      },
      control: {
        type: 'text'
      }
    },
    onLogin: {
      action: 'onLogin',
      name: 'onLogin',
      description: 'Emits an event containing metadata introduced by the user.',
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

const SignUpTemplate: Story<BiitLoginComponent> = (args: BiitLoginComponent, { globals }) => {
  TranslocoStorybookModule.setLanguage(globals);
  return {
    globals,
    props: args,
    template: `
    <biit-login
     [login]="login"
     [allowSignUp]="true"
     [teams]="teams"
     notificationTitle="This is a notification title example"
     notification="<h1>This is a notification example</h1><br><p>With HTML Injected</p><a href='https://www.biit-solutions.com'>
     <img src='https://www.biit-solutions.com/images/Version2/BIITlogo.svg' alt='Biit Logo' /></a>"
     (onLogin)="onLogin($event)"
     (onNotRemember)="onNotRemember()"
    ></biit-login>`
  }
};

export const SignUp = SignUpTemplate.bind({});
