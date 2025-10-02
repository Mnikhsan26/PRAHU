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
import NmrLelangPhbl from "../pages/nmrlelangphbl"
import accountphbl from "../pages/accountphbl"

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


Cypress.Commands.add('isiNomorLelang', (tipe = 'normal', selector = '#nomor_lelang') => {
  const nomor = NmrLelangPhbl.generate(tipe)
  cy.get(selector).type(nomor)
  cy.log(`Nomor Lelang (${tipe.toUpperCase()}): ${nomor}`)

  // Simpan ke env agar bisa dipakai di step/test lain
  Cypress.env('nomorLelang', nomor)

  // return nomor
})

// session bidowner
Cypress.Commands.add('loginBidOwner', () => {
  cy.visit('https://phbidlautdev.prahu-hub.com/user/login')
  cy.get('.heading_1').should('have.text','LOGIN')
  accountphbl.BidOwner()
  accountphbl.PassAkun()
  accountphbl.BtnLogin()
  cy.url().should('not.include', '/login') // pastikan login berhasil
})

// session bidder
Cypress.Commands.add('loginBidder', () => {
  cy.visit('https://phbidlautdev.prahu-hub.com/user/login')
  cy.get('.heading_1').should('have.text','LOGIN')
  accountphbl.Bidder()
  accountphbl.PassAkun()
  accountphbl.BtnLogin()
  cy.url().should('not.include', '/login') // pastikan login berhasil
})

// session admin
Cypress.Commands.add('loginAdmin', () => {
  cy.visit('https://phbidlautdev.prahu-hub.com/user/login')
  cy.get('.heading_1').should('have.text','LOGIN')
  accountphbl.Admin()
  accountphbl.PassAdm()
  accountphbl.BtnLogin()
  cy.url().should('not.include', '/login') // pastikan login berhasil
})