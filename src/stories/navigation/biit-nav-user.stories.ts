import { Story, Meta, moduleMetadata } from '@storybook/angular';
import {BiitNavUserModule} from '../../../projects/biit-ui/navigation/src/biit-nav-user/biit-nav-user.module';
import {BiitNavUserComponent} from '../../../projects/biit-ui/navigation/src/biit-nav-user/biit-nav-user.component';

export default {
  title: 'Navigation/Nav User',
  decorators: [
    moduleMetadata({
      imports: [BiitNavUserModule]
    }),
  ]
} as Meta;

const Template: Story<BiitNavUserComponent> = (args: BiitNavUserComponent) => ({
  props: args,
  template:`
    <div>
      <biit-nav-user style="display: block"
                     title="John Doe"
                     left-align>
      </biit-nav-user>
      <biit-nav-user style="display: block"
                     title="John Doe"></biit-nav-user>
    </div>
`
});

export const Default = Template.bind({});
