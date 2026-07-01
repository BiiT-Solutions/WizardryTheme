require('web-file-polyfill');

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
    config.resolve = config.resolve || {};
    config.resolve.fallback = {
      ...(config.resolve.fallback || {}),
      "util": false,
      "stream": false,
    };
    return config;
  }
};
