
describe('Lupa Sandi Bid Owner', () => {

  it('lupasandi_berhasil', () => {
    cy.visit('https://phbidlautdev.prahu-hub.com/user/login')
    cy.get('.heading_1').should('contain.text', 'LOGIN')
    cy.get('.col-md-5 > .link_1').click()
    cy.get('.titleRegistrasi').should('contain.text', 'LUPA KATA SANDI')
    cy.get('#username').type('pengirim.ph2021@gmail.com')
    cy.get('.btn').click()

  //input kode verifikasi
    cy.get('.titleRegistrasi').should('contain.text', 'LUPA KATA SANDI')
    cy.wait(3000)
  //input kode yang dikirimkan ke email
    cy.get('#enc_kode').invoke('val').then((kode) => {
        cy.log('Kode ditemukan:', kode)
        cy.get('#kodeverifnya').type(kode)
      })
    cy.get('.mobbtn2').click()

  //input kata sandi baru
    cy.get('#password').type('qwerty12345')
    cy.get('#confirm_password').type('qwerty12345')
    cy.get('.mobbtnkonfirmasi').click()
})

})
