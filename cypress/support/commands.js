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

//untuk import atau upload file
import 'cypress-file-upload'

import NmrLelangPhbl from '../pages/phbl/nmrlelangphbl'
import accountphbl from '../pages/phbl/accountphbl'


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