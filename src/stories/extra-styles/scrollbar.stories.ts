import { Story, Meta, moduleMetadata } from '@storybook/angular';

export default {
  title: 'Extra Styles/Scrollbar',
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

    <div style="display: block; height: 300px; width: 300px; background: #eeeeee; overflow-y: scroll">
      <ul>
        <li>Test</li>
        <li>Test</li>
        <li>Test</li>
        <li>Test</li>
        <li>Test</li>
        <li>Test</li>
        <li>Test</li>
        <li>Test</li>
        <li>Test</li>
        <li>Test</li>
        <li>Test</li>
        <li>Test</li>
        <li>Test</li>
        <li>Test</li>
        <li>Test</li>
        <li>Test</li>
      </ul>
    </div>
`
});

export const Default = Template.bind({});
Default.parameters = {
  docs: {
    source: {
      code: `
/* Works on Firefox */
@-moz-document url-prefix() {
  * {
    scrollbar-width: thin;
    scrollbar-color: #262626 #EDEDED;
  }
  *:hover {
    scrollbar-color: #F20D5E #EDEDED;
  }
  *:active {
    scrollbar-color: #F20D5E #EDEDED;
  }
}

/* Works on Chrome, Edge, and Safari */
::-webkit-scrollbar {
  width: 0.7rem;
}
::-webkit-scrollbar-thumb {
  border: 0.2rem solid rgba(0, 0, 0, 0);
  background-clip: padding-box;
  background-color: #262626;
}
::-webkit-scrollbar-thumb:hover {
  background-color: #F20D5E;
}
      `
    }
  }
}
