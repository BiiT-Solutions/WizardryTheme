const webpack = require("webpack");

module.exports = {
  "stories": [
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-docs"
  ],
  "framework": {
    "name": "@storybook/angular",
    "options": {}
  },
  "core": {
    "builder": "@storybook/builder-webpack5"
  },
  "webpackFinal": async (config) => {
    config.plugins = config.plugins || [];
    // The Angular CLI defines these compile-time globals when building for the browser.
    // Storybook's webpack builder does not, so they are left undefined in the bundle and
    // `@angular/core` throws "ngServerMode is not defined" while bootstrapping the app
    // (the production build calls `enableProdMode()`, which sets `ngDevMode` to false and
    // makes Angular evaluate the unguarded `ngDevMode || ngServerMode` expression).
    config.plugins.push(new webpack.DefinePlugin({
      "ngServerMode": JSON.stringify(false),
    }));
    config.resolve = config.resolve || {};
    config.resolve.fallback = {
      ...(config.resolve.fallback || {}),
      "util": false,
      "stream": false,
    };
    return config;
  }
};
