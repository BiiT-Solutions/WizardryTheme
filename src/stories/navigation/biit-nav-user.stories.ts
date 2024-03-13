import { Story, Meta, moduleMetadata } from '@storybook/angular';
import {BiitNavUserModule, BiitNavUserComponent} from 'biit-ui/navigation';

export default {
  title: 'Navigation/Nav User',
  decorators: [
    moduleMetadata({
      imports: [BiitNavUserModule]
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
    <div>
      <biit-nav-user style="display: block"
                     [title]="title"
                     [subtitle]="subtitle"
                     left-align>
      </biit-nav-user>
      <biit-nav-user style="display: block"
                     [title]="title"
                     [subtitle]="subtitle"></biit-nav-user>
    </div>
`
});

export const Default = Template.bind({});
