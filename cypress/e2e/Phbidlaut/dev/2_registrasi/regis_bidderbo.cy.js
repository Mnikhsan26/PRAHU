import RegisterPage from "../../../../pages/regisphbl"
import { saveUser } from "../../../../support/utils/datahelper"
import { loadUser } from "../../../../support/utils/datahelper"

describe.skip('case_registrasimandatory', () => {

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

})

describe('case_registrasi', () => {

  it('registrasibo_berhasil', () => {
    const page = new RegisterPage()

    cy.visit('https://phbidlautdev.prahu-hub.com/user/login')        
    cy.get('.heading_1').should('have.text','LOGIN')
    cy.get('.col-md-7 > .link_1').click()
    cy.get('.heading_1').should('have.text','REGISTRASI')
    cy.get('#radioBidOwner').click()
    cy.get('#nama').type('Jaya Wijaya Kusuma')

    const phone = page.inputPhone()
    cy.get('#nama_perusahaan').type('PT. Jaya Muda Abadi')
    const email = page.inputEmail('bidowner')

    cy.get('#password').type('qwerty12345')
    cy.get('#password_ulang').type('qwerty12345')
    cy.get('#submitRegistrasi').click()
    cy.wait(3000)

    cy.get('.titleRegistrasi > .text_label_regular')
      .should('have.text','KONFIRMASI EMAIL')
    
    cy.get('#vkey').click({ force: true }) //aktifkan akun

    saveUser('bidowner', { email, password: 'qwerty12345' })
    
  })

  it('registrasibidder_berhasil', () => {
    const page = new RegisterPage()

    cy.visit('https://phbidlautdev.prahu-hub.com/user/login')        
    cy.get('.heading_1').should('have.text','LOGIN')
    cy.get('.col-md-7 > .link_1').click()
    cy.get('.heading_1').should('have.text','REGISTRASI')
    cy.get('#radioBidder').click()
    cy.get('#nama').type('Jayandaru Kintamani')

    const phone = page.inputPhone()
    cy.get('#nama_perusahaan').type('PT. Transportasi Jaya Umum')
    const email = page.inputEmail('bidder')

    cy.get('#password').type('qwerty12345')
    cy.get('#password_ulang').type('qwerty12345')
    cy.get('#submitRegistrasi').click()
    cy.wait(3000)

    cy.get('.titleRegistrasi > .text_label_regular')
      .should('have.text','KONFIRMASI EMAIL')
    
    cy.get('#vkey').click({ force: true }) //aktifkan akun

    saveUser('bidder', { email, password: 'qwerty12345' })
    
  })

})

describe('case_kelengkapanregistrasi', () => { // akfitkfan akun melalui email dahulu

  it('kelengkapanregis_bidowner', () => {
    loadUser('bidowner').then((user) => {
      cy.visit('https://phbidlautdev.prahu-hub.com/user/login')
      cy.get('#email').type(user.email)
      cy.get('#password').type(user.password)
      cy.get('#submitLogin').click()  
      cy.get('#span-province').click()
        .type('DKI Jakarta{enter}')
      cy.get('#span-city1')
        .type('Kota Jakarta Barat{enter}')
      cy.get('#alamat')
        .type('Jalan Kalianak 57a')

      //upload ktp
      cy.get('#image-upload-ktp').attachFile('registrasi/file_ktp.jpg')
      cy.get('#fileKTP').should('have.value', 'file_ktp.jpg')

      //upload logo
      cy.get('#image-upload-logo').attachFile('registrasi/logo_bo.jpeg')
      cy.get('#fileLOGO').should('have.value', 'logo_bo.jpeg')

      cy.get('#submitRegistrasi').click()
      cy.get('.alert')
        .should('contain.text', 'Akun belum aktif, sedang menunggu validasi PH Bid. Untuk lebih jelasnya, silahkan menghubungi customer service.')

    })
  })

  it('kelengkapanregis_bidder', () => {
    loadUser('bidder').then((user) => {
      cy.visit('https://phbidlautdev.prahu-hub.com/user/login')
      cy.get('#email').type(user.email)
      cy.get('#password').type(user.password)
      cy.get('#submitLogin').click()
      
      cy.get('#span-province').click()
        .type('DKI Jakarta{enter}')
      cy.get('#span-city1')
        .type('Kota Jakarta Barat{enter}')
      cy.get('#alamatKantor')
        .type('Jalan Kalianak Barat 57a')
      
      //upload logo
      cy.get('#btn-photo').attachFile('registrasi/logo_bidder.jpg')
      cy.get('#photo').should('have.value', 'logo_bidder.jpg')

      cy.get('.spanmasterbank_dataID-1')
        .type('BCA{enter}')
      cy.get('#nomor_rekening')
        .type('7642720001')
      cy.get('#atas_nama')
        .type('Andini')

      cy.get('#submitRegistrasi').click()
      cy.get('.alert')
        .should('contain.text', 'Akun belum aktif, sedang menunggu validasi PH Bid. Untuk lebih jelasnya, silahkan menghubungi customer service.')

    })
  })

})