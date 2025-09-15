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

module.exports = {
  e2e: {
    setupNodeEvents(on, config) {
      on('before:browser:launch', (browser = {}, launchOptions) => {
        if (browser.name === 'chrome') {
          launchOptions.args.push('--disable-features=VizDisplayCompositor');
          launchOptions.args.push('--disable-web-security');
          launchOptions.args.push('--disable-site-isolation-trials');
        }
        return launchOptions;
      });
    }
  }
};