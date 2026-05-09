import { Story, Meta, moduleMetadata } from '@storybook/angular';
import {BiitNavMenuModule} from '../../../projects/wizardry-theme/navigation/src/biit-nav-menu/biit-nav-menu.module';
import {BiitNavMenuComponent} from '../../../projects/wizardry-theme/navigation/src/biit-nav-menu/biit-nav-menu.component';
import { RouterTestingModule } from "@angular/router/testing";
import {RouterModule} from '@angular/router';
import {BiitButtonComponent} from '@biit-solutions/wizardry-theme/button';

export default {
  title: 'Navigation/Nav Menu',
  decorators: [
    moduleMetadata({
      imports: [BiitNavMenuModule,
                RouterTestingModule,
                RouterModule]
    })
  ],
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      values: [
        {
          name: 'default',
          value: '#EDEDED'
        }
      ]
    },
    routes: [
      {
        path: '',
        redirectTo: '/users',
        pathMatch: 'full'
      },
      {
        path: "users",
        component: BiitButtonComponent,
        title: "Users",
        children: [
          {
            path: "name",
            component: BiitButtonComponent,
            title: "Name"
          },
          {
            path: "location",
            component: BiitButtonComponent,
            title: "Location"
          },
          {
            path: "ability",
            component: BiitButtonComponent,
            title: "Ability"
          }
        ]
      },
      {
        path: "users",
        component: BiitButtonComponent,
        title: "Users",
        children: [
          {
            path: "name",
            component: BiitButtonComponent,
            title: "Name"
          },
          {
            path: "location",
            component: BiitButtonComponent,
            title: "Location"
          },
          {
            path: "ability",
            component: BiitButtonComponent,
            title: "Ability"
          }
        ]
      },
      {
        path: "users",
        component: BiitButtonComponent,
        title: "Users",
        children: [
          {
            path: "name",
            component: BiitButtonComponent,
            title: "Name"
          },
          {
            path: "location",
            component: BiitButtonComponent,
            title: "Location"
          },
          {
            path: "ability",
            component: BiitButtonComponent,
            title: "Ability"
          }
        ]
      },
      {
        path: "users",
        component: BiitButtonComponent,
        title: "Users",
        children: [
          {
            path: "name",
            component: BiitButtonComponent,
            title: "Name"
          },
          {
            path: "location",
            component: BiitButtonComponent,
            title: "Location"
          },
          {
            path: "ability",
            component: BiitButtonComponent,
            title: "Ability"
          }
        ]
      },
      {
        path: "users",
        component: BiitButtonComponent,
        title: "Users",
        children: [
          {
            path: "name",
            component: BiitButtonComponent,
            title: "Name"
          },
          {
            path: "location",
            component: BiitButtonComponent,
            title: "Location"
          },
          {
            path: "ability",
            component: BiitButtonComponent,
            title: "Ability"
          }
        ]
      },
      {
        path: "users",
        component: BiitButtonComponent,
        title: "Users",
        children: [
          {
            path: "name",
            component: BiitButtonComponent,
            title: "Name"
          },
          {
            path: "location",
            component: BiitButtonComponent,
            title: "Location"
          },
          {
            path: "ability",
            component: BiitButtonComponent,
            title: "Ability"
          }
        ]
      },
      {
        path: "roles",
        component: BiitButtonComponent,
        title: "Roles",
        children: [
          {
            path: "higher",
            component: BiitButtonComponent,
            title: "Higher"
          },
          {
            path: "lower",
            component: BiitButtonComponent,
            title: "Lower"
          }
        ]
      },
      {
        path: "groups",
        component: BiitButtonComponent,
        title: "Groups",
        data: {
          disabled: true
        }
      }
    ]
  },
  args: {
    routes: [
      {
        path: "users",
        component: BiitButtonComponent,
        title: "Users",
        children: [
          {
            path: "name",
            component: BiitButtonComponent,
            title: "Name"
          },
          {
            path: "location",
            component: BiitButtonComponent,
            title: "Location"
          },
          {
            path: "ability",
            component: BiitButtonComponent,
            title: "Ability"
          }
        ]
      },
      {
        path: "users",
        component: BiitButtonComponent,
        title: "Users",
        children: [
          {
            path: "name",
            component: BiitButtonComponent,
            title: "Name"
          },
          {
            path: "location",
            component: BiitButtonComponent,
            title: "Location"
          },
          {
            path: "ability",
            component: BiitButtonComponent,
            title: "Ability"
          }
        ]
      },
      {
        path: "users",
        component: BiitButtonComponent,
        title: "Users",
        children: [
          {
            path: "name",
            component: BiitButtonComponent,
            title: "Name"
          },
          {
            path: "location",
            component: BiitButtonComponent,
            title: "Location"
          },
          {
            path: "ability",
            component: BiitButtonComponent,
            title: "Ability"
          }
        ]
      },
      {
        path: "users",
        component: BiitButtonComponent,
        title: "Users",
        children: [
          {
            path: "name",
            component: BiitButtonComponent,
            title: "Name"
          },
          {
            path: "location",
            component: BiitButtonComponent,
            title: "Location"
          },
          {
            path: "ability",
            component: BiitButtonComponent,
            title: "Ability"
          }
        ]
      },
      {
        path: "users",
        component: BiitButtonComponent,
        title: "Users",
        children: [
          {
            path: "name",
            component: BiitButtonComponent,
            title: "Name"
          },
          {
            path: "location",
            component: BiitButtonComponent,
            title: "Location"
          },
          {
            path: "ability",
            component: BiitButtonComponent,
            title: "Ability"
          }
        ]
      },
      {
        path: "users",
        component: BiitButtonComponent,
        title: "Users",
        children: [
          {
            path: "name",
            component: BiitButtonComponent,
            title: "Name"
          },
          {
            path: "location",
            component: BiitButtonComponent,
            title: "Location"
          },
          {
            path: "ability",
            component: BiitButtonComponent,
            title: "Ability"
          }
        ]
      },
      {
        path: "users",
        component: BiitButtonComponent,
        title: "Users",
        children: [
          {
            path: "name",
            component: BiitButtonComponent,
            title: "Name"
          },
          {
            path: "location",
            component: BiitButtonComponent,
            title: "Location"
          },
          {
            path: "ability",
            component: BiitButtonComponent,
            title: "Ability"
          }
        ]
      },
      {
        path: "users",
        component: BiitButtonComponent,
        title: "Users",
        children: [
          {
            path: "name",
            component: BiitButtonComponent,
            title: "Name"
          },
          {
            path: "location",
            component: BiitButtonComponent,
            title: "Location"
          },
          {
            path: "ability",
            component: BiitButtonComponent,
            title: "Ability"
          }
        ]
      },
      {
        path: "users",
        component: BiitButtonComponent,
        title: "Users",
        children: [
          {
            path: "name",
            component: BiitButtonComponent,
            title: "Name"
          },
          {
            path: "location",
            component: BiitButtonComponent,
            title: "Location"
          },
          {
            path: "ability",
            component: BiitButtonComponent,
            title: "Ability"
          }
        ]
      },
      {
        path: "roles",
        component: BiitButtonComponent,
        title: "Roles",
        children: [
          {
            path: "higher",
            component: BiitButtonComponent,
            title: "Higher"
          },
          {
            path: "lower",
            component: BiitButtonComponent,
            title: "Lower"
          }
        ]
      },
      {
        path: "groups",
        component: BiitButtonComponent,
        title: "Groups",
        data: {
          disabled: true
        }
      },
    ]
  }
} as Meta;

const Template: Story<BiitNavMenuComponent> = (args: BiitNavMenuComponent) => ({
  props: args,
  template: `
    <div style="display: block; background: white; width: 100%; height: 2.5rem; box-sizing: border-box;">
      <biit-nav-menu [routes]="routes"
      ></biit-nav-menu>
    </div>
`
});

export const Default = Template.bind({});
