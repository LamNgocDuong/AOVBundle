const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    defaultCommandTimeout: 10000
  },

  retries: {
    experimentalStrategy: 'detect-flake-and-pass-on-threshold',
    experimentalOptions: {
      maxRetries: 2,
      passesRequired: 2,
    },

    openMode: true,
    runMode: true,
  },
});
