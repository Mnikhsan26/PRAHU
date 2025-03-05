describe('phbidlaut login', () => {
  it('login_mandatoryfeild', () => {
    cy.visit('https://phbidlautdev.prahu-hub.com/user/login')
    cy.get('.heading_1').should('have.text','LOGIN')
    cy.get('#email').type('phbiddaratadmean@gmail.com')
    cy.get('#password').type('qwerty12345')
    cy.get('#submitLogin').click()
    cy.get('.heading_1').should('have.text','AKUN SAYA')
  })
})