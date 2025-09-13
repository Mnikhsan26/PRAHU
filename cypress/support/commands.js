// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('mockRecaptcha', () => {
  cy.window().then((win) => {
    win.grecaptcha = {
      ready: (cb) => cb(),
      execute: () => Promise.resolve('mock-token-' + Date.now()),
      render: () => 'mock-widget-id'
    }
  })
})

Cypress.Commands.add('solveRecaptcha', () => {
  cy.window().then((win) => {
    // Set token directly ke hidden field jika ada
    const recaptchaInput = document.querySelector('[name="g-recaptcha-response"]')
    if (recaptchaInput) {
      recaptchaInput.value = 'mock-recaptcha-response'
    }
    
    // Trigger event change
    if (recaptchaInput) {
      const event = new Event('change', { bubbles: true })
      recaptchaInput.dispatchEvent(event)
    }
  })
})