const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // tambahkan plugin di sini kalau perlu
    },
    baseUrl: 'https://phbidlautdemo.prahu-hub.com', // opsional
    specPattern: "cypress/e2e/**/*.cy.{js,jsx,ts,tsx}", // default pattern test
  },
});
