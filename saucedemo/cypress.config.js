const { defineConfig } = require('cypress')

module.exports = defineConfig({
  video: true,

  reporter: 'mocha-junit-reporter',

  reporterOptions: {
    mochaFile: 'cypress/reports/results-[hash].xml',
    toConsole: true,
  },

  e2e: {
    setupNodeEvents(on, config) {},
  },
})