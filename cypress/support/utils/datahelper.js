export const saveUser = (role, data) => {
  cy.readFile('cypress/fixtures/lastRegisteredUser.json', { timeout: 500, log: false })
    .then((existing = {}) => {
      existing[role] = data
      cy.writeFile('cypress/fixtures/lastRegisteredUser.json', existing)
    })
}

export const loadUser = (role) => {
  return cy.readFile('cypress/fixtures/lastRegisteredUser.json').then((data) => data[role])
}