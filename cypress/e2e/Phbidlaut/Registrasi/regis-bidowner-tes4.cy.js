describe('Alternative: Mock reCAPTCHA API', () => {
  it('Should mock reCAPTCHA verification', () => {
    // Mock reCAPTCHA verification endpoint
    cy.intercept('POST', 'https://www.google.com/recaptcha/api/siteverify', {
      statusCode: 200,
      body: {
        success: true,
        challenge_ts: new Date().toISOString(),
        hostname: 'phbidlautdemo.prahu-hub.com'
      }
    }).as('mockCaptchaVerify');
    
    // Mock reCAPTCHA JavaScript files
    cy.intercept('GET', '**/recaptcha/releases/**/recaptcha__*.js', {
      statusCode: 200,
      body: `
        window.grecaptcha = {
          ready: function(callback) { callback(); },
          render: function() { return 'mocked-widget-id'; },
          getResponse: function() { return 'mocked-captcha-response'; },
          execute: function() { return Promise.resolve('mocked-captcha-response'); },
          reset: function() {}
        };
      `
    });
    
    cy.visit('https://phbidlautdemo.prahu-hub.com/user/login');
    
    // Lanjutkan dengan flow registrasi normal
    cy.get('.col-md-7 > .link_1').click();
    cy.get('#radioBidOwner').click();
    cy.get('#nama').type('Jayandaru Kintamani');
    cy.get('#no_telp').type('0838300118811111');
    cy.get('#nama_perusahaan').type('PT. Jaya Muda Abadi');
    cy.get('#email').type('ikbidowner22@yopmail.com');
    cy.get('#password').type('qwerty12345');
    cy.get('#password_ulang').type('qwerty12345');
    
    // Submit form
    cy.get('button[type="submit"]').click();
  });
});

// Method untuk disable reCAPTCHA via cypress.config.js
// Tambahkan di cypress.config.js:
/*
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
*/