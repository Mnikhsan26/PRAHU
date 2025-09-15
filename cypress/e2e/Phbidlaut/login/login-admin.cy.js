describe('phbidlaut login', () => {
  //Cek alert email
  it('login_mandatory_email', () => {
    cy.visit('https://phbidlautdemo.prahu-hub.com/user/login')
    cy.get('.heading_1').should('have.text','LOGIN')
    cy.get('#submitLogin').click()
    cy.get('.popover-body').should('have.text','Masukkan Email / No. Whatsapp')
    cy.wait(2000) // tunggu 2 detik
  });

  //Cek alert kata sandi
  it('login_mandatory_katasandi', () => {
    cy.visit('https://phbidlautdemo.prahu-hub.com/user/login')
    cy.get('.heading_1').should('have.text','LOGIN')
    cy.get('#email').type('prahu.bid20@gmail.com')
    cy.get('#submitLogin').click()
    cy.get('.popover-body').should('have.text','Masukkan Password')
    cy.wait(2000) // tunggu 2 detik
  });

  //Cek login sukses email
  it('login_succes_email', () => {
    cy.visit('https://phbidlautdemo.prahu-hub.com/user/login')
    cy.get('.heading_1').should('have.text','LOGIN')
    cy.get('#email').type('prahu.bid20@gmail.com')
    cy.get('#password').type('prahu12345.')
    cy.get('#submitLogin').click()
    cy.get('.col-12 > div > :nth-child(2)').should('have.text','Daftar Pengajuan Lelang')
  });

  //Cek akun tidak terdaftar  
  it('login_uregistered_account', () => {
    cy.visit('https://phbidlautdemo.prahu-hub.com/user/login')
    cy.get('.heading_1').should('have.text','LOGIN')
    cy.get('#email').type('emailtidakterdaftar@gmail.com')
    cy.get('#password').type('prahu12345.')
    cy.get('#submitLogin').click()
    cy.get('.heading_1').should('have.text','LOGIN')
  });

    //Cek kata sandi salah  
  it('login_invalid_password', () => {
    cy.visit('https://phbidlautdemo.prahu-hub.com/user/login')
    cy.get('.heading_1').should('have.text','LOGIN')
    cy.get('#email').type('prahu.bid20@gmail.com')
    cy.get('#password').type('katasandisalah')
    cy.get('#submitLogin').click()
    cy.get('.heading_1').should('have.text','LOGIN')
  });

    //Cek login sukses no whatsapp
  it('login_succes_ wa', () => {
    cy.visit('https://phbidlautdemo.prahu-hub.com/user/login')
    cy.get('.heading_1').should('have.text','LOGIN')
    cy.get('#email').type('0851550708691')
    cy.get('#password').type('prahu12345.')
    cy.get('#submitLogin').click()
    cy.get('.col-12 > div > :nth-child(2)').should('have.text','Daftar Pengajuan Lelang')
  });


})