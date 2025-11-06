import {Meta, moduleMetadata, Story} from "@storybook/angular";
import {BiitIconService, BiitIconComponent, BiitIconModule} from "@biit-solutions/wizardry-theme/icon";
import {completeIconSet} from "biit-icons-collection";
import {APP_INITIALIZER} from "@angular/core";

function biitIconServiceFactory(service: BiitIconService) {
  service.registerIcons(completeIconSet);
  return () => service;
}

export default {
  title: "Basic/Icon",
  decorators: [
    moduleMetadata({
      imports: [BiitIconModule],
      providers: [{
        provide: APP_INITIALIZER,
        useFactory: biitIconServiceFactory,
        multi: true,
        deps: [BiitIconService],
      }]
    }),
  ],
  args: {
    name: 'biit_logo',
    width: '200px',
    height: '200px',
    style: {backgroundColor: 'transparent'},
    pathStyle: {fill: '#f20d5e'}
  },
  argTypes: {
    name: {
      name: 'name',
      type: {name: "string", required: false},
      defaultValue: 'biit_icon',
      description: 'Icon name to be shown.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'default' },
        category: 'Inputs'
      },
      options: completeIconSet.map(iconSet => iconSet.name),
      control: {
        type: 'select'
      }
    },
    width: {
      name: 'width',
      type: {name: 'string', required: false},
      defaultValue: '200px',
      description: 'Changes the icon width',
      table: {
        type: {summary: 'string'},
        defaultValue: {summary: true},
        category: 'Inputs'
      },
      control: {
        type: 'text'
      }
    },
    height: {
      name: 'height',
      type: {name: 'string', required: false},
      defaultValue: '200px',
      description: 'Changes the icon height.',
      table: {
        type: {summary: 'string'},
        defaultValue: {summary: true},
        category: 'Inputs'
      },
      control: {
        type: 'text'
      }
    },
    style: {
      name: 'style',
      defaultValue: {backgroundColor: 'transparent'},
      description: 'Set SVG style.',
      table: {
        type: {summary: 'object'},
        defaultValue: {summary: true},
        category: 'Inputs'
      },
      control: {
        type: 'object'
      }
    },
    pathStyle: {
      name: 'pathStyle',
      defaultValue: {fill: '#f20d5e'},
      description: 'Set SVG Path style.',
      table: {
        type: {summary: 'object'},
        defaultValue: {summary: true},
        category: 'Inputs'
      },
      control: {
        type: 'object'
      }
    }
  }
} as Meta;


const Template: Story<BiitIconComponent> = (args: BiitIconComponent) => ({
  props: args,
  template: `
       <biit-icon [name]="name"
                  [svgStyle]="style"
                  [pathStyle]="pathStyle"
                  style="width: 200px; height: 200px; display: block;"
       ></biit-icon>
  `
});

export const Default = Template.bind({});
Default.args={};
