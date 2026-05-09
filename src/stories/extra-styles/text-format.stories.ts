import { Story, Meta, moduleMetadata } from '@storybook/angular';
import {} from '@biit-solutions/wizardry-theme/navigation';

export default {
  title: 'Extra Styles/Text Format',
  decorators: [
    moduleMetadata({
      imports: []
    }),
  ],
  args: {
  }
} as Meta;

const Template: Story = (args) => ({
  props: args,
  template:`
    <p>Add the css classes to base css file ("show code" in Docs)</p>

    <h3>General Text</h3>
    <p class="biit-general-text" style="display: block; width: 600px">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
    </p>

    <h3>Extra Comment</h3>
    <p class="biit-extra-comment" style="display: block; width: 600px">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
    </p>
`
});

export const Default = Template.bind({});
Default.parameters = {
  docs: {
    source: {
      code: `
.biit-general-text {
  font-size: 1rem;
  color: #262626;
  text-align: left;
}

.biit-extra-comment {
  font-family: "Cormorant Garamond", serif;
  font-size: 0.7rem;
  color: #262626;
  text-align: left;
}
      `
    }
  }
}
