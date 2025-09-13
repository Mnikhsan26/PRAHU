describe('phbidlaut login', () => {
  //Registrasi
  it('login_mandatory_email', () => {
    cy.visit('https://phbidlautdemo.prahu-hub.com/user/login')
    cy.get('.heading_1').should('have.text','LOGIN')
    cy.get('#submitLogin').click()
    cy.get('.popover-body').should('have.text','Masukkan Email / No. Whatsapp')
    cy.wait(2000) // tunggu 2 detik
  });


})