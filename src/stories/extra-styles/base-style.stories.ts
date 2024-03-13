import { Story, Meta, moduleMetadata } from '@storybook/angular';

export default {
  title: 'Extra Styles/Base Style (Template)',
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
    <p>Add the html structure to root component's css file ("show code" in Docs)</p>
    <p>Add the css classes to root component's css file ("show code" in Docs)</p>
`
});

export const Default = Template.bind({});
Default.parameters = {
  docs: {
    source: {
      code: `
/* SCSS - BASE HTML (usually styles.scss) */
@import "../node_modules/angular-calendar/css/angular-calendar.css";

html, body{
  height: 100%;
  padding: 0;
  margin: 0;
  font-family: Montserrat, "Montserrat", sans-serif;
  font-size: 16px;
  color: #262626;
  background-color: #EDEDED;
}

* {
  box-sizing: border-box;
}

input {
  font-family: Montserrat, "Montserrat", sans-serif;
}

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

/* HTML - ROOT COMPONENT (usually app.component.html) */
<biit-snackbar></biit-snackbar>
<div class="container">
  <div class="header">
    <biit-navbar *ngIf="sessionService.isLoggedIn"></biit-navbar>
  </div>
  <div class="content">
    <router-outlet id="router-outlet"></router-outlet>
  </div>
</div>

/* CSS - ROOT COMPONENT (usually app.component.scss) */
.container{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.header{
  flex-shrink: 0;
  flex-grow: 0;
}

.content{
  flex-shrink: 1;
  flex-grow: 1;
  position: relative;
  overflow-y: auto;
}

biit-navbar {
  position: sticky;
  width: 100%;
  z-index: 1;
}

.hidden {
  visibility: hidden;
}
      `
    }
  }
}
