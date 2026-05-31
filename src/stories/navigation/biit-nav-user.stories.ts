import type {Meta, StoryFn} from '@storybook/angular';
import {moduleMetadata} from '@storybook/angular';
import {BiitNavUserModule, BiitNavUserComponent} from '@biit-solutions/wizardry-theme/navigation';

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
} as any;

const Template: StoryFn<BiitNavUserComponent> = (args: any) => ({
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
