import RegisterPage from "../../../../pages/regisphbl"

describe('case_registrasi', () => {

  it('case_alert_radiobutton', () => {
    cy.visit('https://phbidlautdev.prahu-hub.com/user/login')        
    cy.get('.heading_1').should('have.text','LOGIN')
    cy.get('.col-md-7 > .link_1').click()
    cy.get('.heading_1').should('have.text','REGISTRASI')
    cy.get('#submitRegistrasi').click()
    cy.get('.popover-body').should('contain.text', 'Pilih Jenis User')
  })

  it('case_alert_nama', () => {
    cy.visit('https://phbidlautdev.prahu-hub.com/user/login')        
    cy.get('.heading_1').should('have.text','LOGIN')
    cy.get('.col-md-7 > .link_1').click()
    cy.get('.heading_1').should('have.text','REGISTRASI')
    cy.get('#radioBidOwner').click()
    cy.get('#submitRegistrasi').click()
    cy.get('.popover-body').should('contain.text', 'Masukkan Nama')
  })

  it('case_alert_notlp', () => {
    cy.visit('https://phbidlautdev.prahu-hub.com/user/login')        
    cy.get('.heading_1').should('have.text','LOGIN')
    cy.get('.col-md-7 > .link_1').click()
    cy.get('.heading_1').should('have.text','REGISTRASI')
    cy.get('#radioBidOwner').click()
    cy.get('#nama').type('Jayandaru Kintamani')
    cy.get('#submitRegistrasi').click()
    cy.get('.popover-body').should('contain.text', 'Masukkan No. Telepon')
  })

  it('case_alert_notlpsama', () => {
    const page = new RegisterPage()

    cy.visit('https://phbidlautdev.prahu-hub.com/user/login')        
    cy.get('.heading_1').should('have.text','LOGIN')
    cy.get('.col-md-7 > .link_1').click()
    cy.get('.heading_1').should('have.text','REGISTRASI')
    cy.get('#radioBidOwner').click()
    cy.get('#nama').type('Jayandaru Kintamani')
    cy.get('#no_telp').type('083830011881')
    cy.get('#submitRegistrasi').click()
    cy.get('.popover-body').should('contain.text', 'Nomor whatsapp sudah terdaftar di sistem')
  })

  it('case_alert_namaperusahaan', () => {
    const page = new RegisterPage()

    cy.visit('https://phbidlautdev.prahu-hub.com/user/login')        
    cy.get('.heading_1').should('have.text','LOGIN')
    cy.get('.col-md-7 > .link_1').click()
    cy.get('.heading_1').should('have.text','REGISTRASI')
    cy.get('#radioBidOwner').click()
    cy.get('#nama').type('Jayandaru Kintamani')
    const phone = page.inputPhone()
    cy.get('#submitRegistrasi').click()
    cy.get('.popover-body').should('contain.text', 'Masukkan Nama Perusahaan')
  })

  it('case_alert_email', () => {
    const page = new RegisterPage()

    cy.visit('https://phbidlautdev.prahu-hub.com/user/login')        
    cy.get('.heading_1').should('have.text','LOGIN')
    cy.get('.col-md-7 > .link_1').click()
    cy.get('.heading_1').should('have.text','REGISTRASI')
    cy.get('#radioBidOwner').click()
    cy.get('#nama').type('Jayandaru Kintamani')
    const phone = page.inputPhone()
    cy.get('#nama_perusahaan').type('PT. Jaya Muda Abadi')
    cy.get('#submitRegistrasi').click()
    cy.get('.popover-body').should('contain.text', 'Masukkan Email')
  })

  it('case_alert_emailsama', () => {
    const page = new RegisterPage()

    cy.visit('https://phbidlautdev.prahu-hub.com/user/login')        
    cy.get('.heading_1').should('have.text','LOGIN')
    cy.get('.col-md-7 > .link_1').click()
    cy.get('.heading_1').should('have.text','REGISTRASI')
    cy.get('#radioBidOwner').click()
    cy.get('#nama').type('Jayandaru Kintamani')
    const phone = page.inputPhone()
    cy.get('#nama_perusahaan').type('PT. Jaya Muda Abadi')
    cy.get('#email').type('prahu.bid20@gmail.com')
    cy.get('#submitRegistrasi').click()
    cy.get('.popover-body').should('contain.text', 'Email sudah terdaftar di sistem')
  })

  it('case_alert_emailtdkvalid', () => {
    const page = new RegisterPage()

    cy.visit('https://phbidlautdev.prahu-hub.com/user/login')        
    cy.get('.heading_1').should('have.text','LOGIN')
    cy.get('.col-md-7 > .link_1').click()
    cy.get('.heading_1').should('have.text','REGISTRASI')
    cy.get('#radioBidOwner').click()
    cy.get('#nama').type('Jayandaru Kintamani')
    const phone = page.inputPhone()
    cy.get('#nama_perusahaan').type('PT. Jaya Muda Abadi')
    cy.get('#email').type('prahu.bi')
    cy.get('#password').type('qwerty12345')
    cy.get('#password_ulang').type('qwerty12345')
    cy.get('#submitRegistrasi').click()
    cy.get('.popover-body').should('contain.text', 'Masukkan Email Dengan Benar')
  })

  it('case_alert_katasandi', () => {
    const page = new RegisterPage()

    cy.visit('https://phbidlautdev.prahu-hub.com/user/login')        
    cy.get('.heading_1').should('have.text','LOGIN')
    cy.get('.col-md-7 > .link_1').click()
    cy.get('.heading_1').should('have.text','REGISTRASI')
    cy.get('#radioBidOwner').click()
    cy.get('#nama').type('Jayandaru Kintamani')
    const phone = page.inputPhone()
    cy.get('#nama_perusahaan').type('PT. Jaya Muda Abadi')
    const email = page.inputEmail('bidowner')
    cy.get('#submitRegistrasi').click()
    cy.get('.popover-body').should('contain.text', 'Masukkan Kata Sandi')
  })

  it('case_alert_sandikrg6digit', () => {
    const page = new RegisterPage()

    cy.visit('https://phbidlautdev.prahu-hub.com/user/login')        
    cy.get('.heading_1').should('have.text','LOGIN')
    cy.get('.col-md-7 > .link_1').click()
    cy.get('.heading_1').should('have.text','REGISTRASI')
    cy.get('#radioBidOwner').click()
    cy.get('#nama').type('Jayandaru Kintamani')
    const phone = page.inputPhone()
    cy.get('#nama_perusahaan').type('PT. Jaya Muda Abadi')
    const email = page.inputEmail('bidowner')
    cy.get('#password').type('qwer')
    cy.get('#submitRegistrasi').click()
    cy.get('.popover-body').should('contain.text', 'Kata Sandi Minimal 6 Digit')
  })

  it('case_alert_sandikmbinasi', () => {
    const page = new RegisterPage()

    cy.visit('https://phbidlautdev.prahu-hub.com/user/login')        
    cy.get('.heading_1').should('have.text','LOGIN')
    cy.get('.col-md-7 > .link_1').click()
    cy.get('.heading_1').should('have.text','REGISTRASI')
    cy.get('#radioBidOwner').click()
    cy.get('#nama').type('Jayandaru Kintamani')
    const phone = page.inputPhone()
    cy.get('#nama_perusahaan').type('PT. Jaya Muda Abadi')
    const email = page.inputEmail('bidowner')
    cy.get('#password').type('qwerrwerewrwerwer')
    cy.get('#submitRegistrasi').click()
    cy.get('.popover-body').should('contain.text', 'Kombinasi Hanya Boleh Huruf dan Angka')
  })

  it('case_alert_ketikulangkatasandi', () => {
    const page = new RegisterPage()

    cy.visit('https://phbidlautdev.prahu-hub.com/user/login')        
    cy.get('.heading_1').should('have.text','LOGIN')
    cy.get('.col-md-7 > .link_1').click()
    cy.get('.heading_1').should('have.text','REGISTRASI')
    cy.get('#radioBidOwner').click()
    cy.get('#nama').type('Jayandaru Kintamani')
    const phone = page.inputPhone()
    cy.get('#nama_perusahaan').type('PT. Jaya Muda Abadi')
    const email = page.inputEmail('bidowner')
    cy.get('#password').type('qwerty12345')
    cy.get('#submitRegistrasi').click()
    cy.get('.popover-body').should('contain.text', 'Masukkan Ulang Kata Sandi')
  })

  it('case_alert_katasanditidakcocok', () => {
    const page = new RegisterPage()

    cy.visit('https://phbidlautdev.prahu-hub.com/user/login')        
    cy.get('.heading_1').should('have.text','LOGIN')
    cy.get('.col-md-7 > .link_1').click()
    cy.get('.heading_1').should('have.text','REGISTRASI')
    cy.get('#radioBidOwner').click()
    cy.get('#nama').type('Jayandaru Kintamani')
    const phone = page.inputPhone()
    cy.get('#nama_perusahaan').type('PT. Jaya Muda Abadi')
    const email = page.inputEmail('bidowner')
    cy.get('#password').type('qwerty12345')
    cy.get('#password_ulang').type('qwert')
    cy.get('#submitRegistrasi').click()
    cy.get('.popover-body').should('contain.text', 'Kata Sandi Tidak Cocok')
  })

  it('registrasi_berhasil', () => {
    const page = new RegisterPage()

    cy.visit('https://phbidlautdev.prahu-hub.com/user/login')        
    cy.get('.heading_1').should('have.text','LOGIN')
    cy.get('.col-md-7 > .link_1').click()
    cy.get('.heading_1').should('have.text','REGISTRASI')
    cy.get('#radioBidOwner').click()
    cy.get('#nama').type('Jayandaru Kintamani')

    const phone = page.inputPhone()
    cy.get('#nama_perusahaan').type('PT. Jaya Muda Abadi')
    const email = page.inputEmail('bidowner')

    cy.get('#password').type('qwerty12345')
    cy.get('#password_ulang').type('qwerty12345')
    cy.get('#submitRegistrasi').click()
    
  })


})