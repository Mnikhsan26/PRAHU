const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // Ambil environment type dari CLI, default ke "devphbd"
      const envType = config.env.envType || "devphbd";

      // Daftar baseUrl untuk berbagai environment
      const urls = {
        devphbd: "https://phbid3.prahu-hub.com",
        rcphbd: "https://phbiddaratrc.prahu-hub.com",
        betaphbd: "https://phbiddaratdemo.prahu-hub.com",
        devphbl: "https://phbidlautdev.prahu-hub.com",
        rcphbl: "https://phbidlautrc.prahu-hub.com",
        betaphbl: "https://phbidlautdemo.prahu-hub.com",
      };

      // Validasi: kalau envType tidak ditemukan, kasih peringatan
      if (!urls[envType]) {
        console.warn(`⚠️ Environment "${envType}" tidak dikenal. Gunakan salah satu dari:`);
        console.table(urls);
        throw new Error(`Environment "${envType}" tidak valid.`);
      }

      // Set baseUrl dinamis
      config.baseUrl = urls[envType];

      console.log(`✅ Base URL digunakan: ${config.baseUrl}`);
      //cara menggunakan : npx cypress open --env envType=rcphbl

      return config;
    },

    viewportWidth: 1280,
    viewportHeight: 720,
    specPattern: "cypress/e2e/**/*.cy.{js,jsx,ts,tsx}",
  },
});
