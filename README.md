# BiitFrontendComponents

This project contains all common components that are used among all Angular projects developed by BiiT.

# Adding a new component

On the path `projects/biit-ui` generate a folder for your component. Inside this folder must exist a `src` component a
new folder inside it with the name of your component. For example `projects/biit-ui/mycomponent/src/mycustomcomponent`.

Now generate the component and the module files:
```
ng generate component ../../projects/biit-ui/mycomponent/src/mycustomcomponent --skip-import
ng generate module ../../projects/biit-ui/mycomponent/src/mycustomcomponent
```

And write your code in them.

After it, create a `stories.ts` file for your component under `src/stories/` folder. Something like `src/stories/mycustomcomponent.stories.ts`:

```
export default {
  title: 'Section/MyComponent',
  decorators: [
    moduleMetadata({
      imports: [MyCustomComponentModule],
    }),
  ],
  args: {
    ...
  },
  argTypes: {
    ...
  }
} as Meta;

const Template: Story<MyCustomComponent> = (args: MyCustomComponent) => ({
  props: args,
  template: `
    <my-custom-component>
      ...
    </my-custom-component>`
}

export const Default = Template.bind({});
Default.args = {
  ...
}
```

### Use on an external application

Generate a file `public-api.ts` on the `src` folder of your component (`projects/biit-ui/mycomponent/src/public-api.ts`)
. And define all the exports in it:

```
/*
 * Public API Surface of biit-ui/mycomponent
 */

export * from './mycustomcomponent/my-custom-component.component';
export * from './mycustomcomponent/my-custom-component.module';

```

### Translations

Remember to include the `i18n` folder in your application with the required translations.


### Executing the storybook

To run and test the storybook, simply execute:

```
npm run storybook
```

# Consuming a component in your application
