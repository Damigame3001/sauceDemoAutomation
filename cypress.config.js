const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // Register the mochawesome reporter plugin
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    reporter: "cypress-mochawesome-reporter",
    reporterOptions: {
      reportDir: "cypress/reports",
      overwrite: false,
      html: true,
      json: true
    },
    screenshotOnRunFailure: true, 
  },
});
