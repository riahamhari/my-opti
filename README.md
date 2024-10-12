# my-opti

## Requirements

[Node](https://nodejs.org/en/) - LTS version recommended
[NPM](https://www.npmjs.com/) - should be installed with Node

### Inital install

Clone the directory.

Navigate to the folder.

Install the dependencies using `npm install`.

Create a config.json file in the root directory and update the `name` key.

### To start developing a new test

In the command line/terminal type `npm run opti`.

Answer the questions and the new folder structure will be set up. The compiler will start automatically.

To start the compiler without creating a new project use `npm run start`.

Coding should be done in the `src` folder and will be compiled to the `dist` folder.

`dev.app.js` is for use in the browser console/devtools snippets
`prod.app.html` is for use in [Adobe Target](https://experience.adobe.com/#/@tuiukltd/target/activities).

### Helper functions

To import a helper function, include an import statement at the top of your `app.js` file e.g.

`import { elementWait } from "helpers.js"`

NB, you do not need to include the file path for the helper file.

### Sass media query mixins

Include `@use 'sass/base' as *;` at the top of `src/scss/styles.scss`.

Usage is as follows:

```
.container {
  @include max(sm) {
    background: blue;
  }

  @include min(xl) {
    background: green;
  }

  @include min-max(sm, lg) {
    color: red;
  }
}
```
