# BiitFrontendComponents

This project contains all common components that are used among all Angular projects developed by BiiT.

# Adding a new component

On the path `projects/biit-ui` generate a folder for your component. Inside this folder must exist a `src` component a
new folder inside it with the name of your component. For example `projects/biit-ui/mycomponent/src/mycustomcomponent`.

Now generate the component and the module files:
```
ng generate module ../../projects/biit-ui/mycomponent/src/mycustomcomponent
ng generate component ../../projects/biit-ui/mycomponent/src/mycustomcomponent
```

## Define your component

### Define public-api.ts

Generate a file `public-api.ts` on the `src` folder of your component (`projects/biit-ui/mycomponent/src/public-api.ts`)
. And define all the exports in it:

```
/*
 * Public API Surface of biit-ui/mycomponent
 */

export * from './mycustomcomponent/my-custom-component.component';
export * from './mycustomcomponent/my-custom-component.module';

```

### Define ng-package.json

Create this file on the root folder of your component (`projects/biit-ui/mycomponent/ng-package.json`). This file define the folder structure. As an example:

```
{
  "$schema": "../../../node_modules/ng-packagr/ng-package.schema.json",
  "dest": "../../../dist/biit-ui",
  "lib": {
    "entryFile": "src/public-api.ts"
  }
}
```

### Define package.json

Create this file on the root folder of your component (`projects/biit-ui/mycomponent/package.json`)Include the dependencies from your component there:

```
{
  "peerDependencies": {
    "@angular/material": "^15.1.0"
  }
}
```

### Add your new library to main `tsconfig.json` file

Open (`tsconfig.json`) file and add your component on section compilerOptions/paths:

```
 "compilerOptions": {
    ...
    "paths": {
      ...
      "biit-ui/filter": [
        "projects/biit-ui/filter/src/public-api"
      ]
    }
```

You will need this if you want to use this library in other libraries from this project.

To import them you have to use the short path:

```
import {BiitFilterModule} from "biit-ui/filter";
```

# Stories

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

### Translations

Remember to include the `i18n` folder in your application with the required translations.


### Executing the storybook

To run and test the storybook, simply execute:

```
npm run storybook
```

### Compiling the storybook

To compile storybook, run next command:

```
npm run build-storybook
```

### Publishing the storybook

If you need to publish. A script has been created on package.json.
To do it, just run the next command:

```
npm run publish-storybook
```

This command will compile the project it will copy README and package.json to 
the proper dist directory and, finally it will publish.

### Generating compressed distribution

To get a compressed distribution in /dist-zip/storyboo.gz. Simply run: 

```
npm run generate-zip
```

# Consuming a component in your application
