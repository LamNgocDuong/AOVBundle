const { defineConfig } = require("cypress");

module.exports = defineConfig({
  browser: 'chrome',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    defaultCommandTimeout: 10000
  },
  // retries: {
  //   experimentalStrategy: 'detect-flake-and-pass-on-threshold',
  //   experimentalOptions: {
  //     maxRetries: 2,
  //     passesRequired: 2,
  //   },
  //
  //   openMode: true,
  //   runMode: true,
  // },
  "userAgent": "'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36'",
  chromeWebSecurity: false,
  viewportWidth: 1920,
  viewportHeight: 1080
});
