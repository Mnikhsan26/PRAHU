describe('phbidlaut login', () => {
  it('Should use mock recaptcha', () => {
    cy.visit('https://phbidlautdemo.prahu-hub.com/user/login')
    cy.mockRecaptcha()
    
    cy.get('.heading_1').should('have.text','LOGIN')
    cy.get('.col-md-7 > .link_1').click()
    cy.get('.heading_1').should('have.text','REGISTRASI')
    cy.get('#radioBidOwner').click()
    cy.get('#nama').type('Jayandaru Kintamani')
    cy.get('#no_telp').type('0838300118811111')
    cy.get('#nama_perusahaan').type('PT. Jaya Muda Abadi')
    cy.get('#email').type('ikbidowner22@yopmail.com')
    cy.get('#password').type('qwerty12345')
    cy.get('#password_ulang').type('qwerty12345')
     
    cy.solveRecaptcha()
    // cy.get('form').submit()
    cy.get('#submitRegistrasi').click()
    
    // cy.contains('Message sent successfully').should('be.visible')
  })

})