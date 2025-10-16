import accountphbl from "../../../../pages/accountphbl";

describe('login_mandatoryfield', () => {
  //Cek alert email
  it('login_mandatory_email', () => {
    cy.visit('https://phbidlautdev.prahu-hub.com/user/login')
    cy.get('.heading_1').should('have.text','LOGIN')
    accountphbl.BtnLogin()
    cy.get('.popover-body').should('have.text','Masukkan Email / No. Whatsapp')
    cy.wait(2000) // tunggu 2 detik
  });

  //Cek alert kata sandi
  it('login_mandatory_katasandi', () => {
    cy.visit('https://phbidlautdev.prahu-hub.com/user/login')
    cy.get('.heading_1').should('have.text','LOGIN')
    accountphbl.Admin()
    accountphbl.BtnLogin()
    cy.get('.popover-body').should('have.text','Masukkan Password')
    cy.wait(2000) // tunggu 2 detik
  });

  //Cek login sukses email
  it('login_succes_email', () => {
    cy.visit('https://phbidlautdev.prahu-hub.com/user/login')
    cy.get('.heading_1').should('have.text','LOGIN')
    accountphbl.Admin()
    accountphbl.PassAdm()
    accountphbl.BtnLogin()
    cy.get('.col-12 > div > :nth-child(2)').should('have.text','Daftar Pengajuan Lelang')
  });

  //Cek akun tidak terdaftar  
  it('login_uregistered_account', () => {
    cy.visit('https://phbidlautdev.prahu-hub.com/user/login')
    cy.get('.heading_1').should('have.text','LOGIN')
    cy.get('#email').type('emailtidakterdaftar@gmail.com')
    cy.get('#password').type('prahu12345.')
    accountphbl.BtnLogin()
    cy.get('.heading_1').should('have.text','LOGIN')
  });

    //Cek kata sandi salah  
  it('login_invalid_password', () => {
    cy.visit('https://phbidlautdev.prahu-hub.com/user/login')
    cy.get('.heading_1').should('have.text','LOGIN')
    accountphbl.Admin()
    cy.get('#password').type('katasandisalah')
    accountphbl.BtnLogin()
    cy.get('.heading_1').should('have.text','LOGIN')
  });


})