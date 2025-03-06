describe('phbidlaut login', () => {
  it('login_mandatoryfeild', () => {
    cy.visit('https://phbidlautdemo.prahu-hub.com/user/login')
    cy.get('.heading_1').should('have.text','LOGIN')
    cy.get('#email').type('pengirim.ph2021@gmail.com')
    cy.get('#password').type('qwerty12345')
    cy.get('#submitLogin').click()
    cy.get('.mb_20 > .col-12 > div > :nth-child(2)').should('have.text','Cari Penawaran Lelang')
    
  })
})