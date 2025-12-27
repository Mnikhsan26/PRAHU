import lupasandi from "../../../../pages/phbl/lupasandi"

describe('case_lupasandi', () => {

  it('mandatoryfield_lupasandi', () => {
    cy.visit('https://phbidlautdev.prahu-hub.com/user/login')
    cy.get('.heading_1').should('contain.text', 'LOGIN')
    cy.get('.col-md-5 > .link_1').click()
    cy.get('.titleRegistrasi').should('contain.text', 'LUPA KATA SANDI')
    cy.get('.btn').click()
    //alert
    cy.on('window:alert', (alerText) => {
      expect(alerText).to.equal('Masukkan Email / No. Whatsapp')
    })
  })

  it('akuntdkterdaftar_lupasandi', () => {
    cy.visit('https://phbidlautdev.prahu-hub.com/user/login')
    cy.get('.heading_1').should('contain.text', 'LOGIN')
    cy.get('.col-md-5 > .link_1').click()
    cy.get('.titleRegistrasi').should('contain.text', 'LUPA KATA SANDI')
    cy.get('#username').type('08383001188181818181818')
    cy.get('.btn').click()
    //alert
    cy.on('window:alert', (alerText) => {
      expect(alerText).to.equal('Akun Belum Terdaftar')
    })
  })

  it('kodesalah_lupasandi', () => {
    cy.visit('https://phbidlautdev.prahu-hub.com/user/login')
    cy.get('.heading_1').should('contain.text', 'LOGIN')
    cy.get('.col-md-5 > .link_1').click()
    cy.get('.titleRegistrasi').should('contain.text', 'LUPA KATA SANDI')
    cy.get('#username').type('083830011881')
    cy.get('.btn').click()
    //input kode verifikasi
    cy.get('.titleRegistrasi').should('contain.text', 'LUPA KATA SANDI')
    cy.wait(2000)
    //alert
    cy.get('#kodeverifnya').type(151048)
    cy.get('.mobbtn2').click()
    cy.on('window:alert', (alerText) => {
      expect(alerText).to.equal('Kode salah, Harap masukkan kode dengan benar')
    })
  })

  it('sandibarukosong_lupasandi', () => {
    cy.visit('https://phbidlautdev.prahu-hub.com/user/login')
    cy.get('.heading_1').should('contain.text', 'LOGIN')
    cy.get('.col-md-5 > .link_1').click()
    cy.get('.titleRegistrasi').should('contain.text', 'LUPA KATA SANDI')
    cy.get('#username').type('083830011881')
    cy.get('.btn').click()
  //input kode verifikasi
    cy.get('.titleRegistrasi').should('contain.text', 'LUPA KATA SANDI')
    cy.wait(2000)
  //input kode yang dikirimkan ke email
    lupasandi.IsiKodeVerifikasi()
    cy.get('.mobbtn2').click()
  //input kata sandi baru
    cy.get('.mobbtnkonfirmasi').click()
    cy.get('.popover').should('contain.text','Inputan tidak boleh kosong')
  })

  it('sandikurangdigit_lupasandi', () => {
    cy.visit('https://phbidlautdev.prahu-hub.com/user/login')
    cy.get('.heading_1').should('contain.text', 'LOGIN')
    cy.get('.col-md-5 > .link_1').click()
    cy.get('.titleRegistrasi').should('contain.text', 'LUPA KATA SANDI')
    cy.get('#username').type('083830011881')
    cy.get('.btn').click()
  //input kode verifikasi
    cy.get('.titleRegistrasi').should('contain.text', 'LUPA KATA SANDI')
    cy.wait(2000)
  //input kode yang dikirimkan ke email
    lupasandi.IsiKodeVerifikasi()
    cy.get('.mobbtn2').click()
  //input kata sandi baru
    cy.get('#password').type('qwe1')
    cy.get('#confirm_password').type('qwerty12345')
    cy.get('.mobbtnkonfirmasi').click()
    cy.get('.popover').should('contain.text','Min 6 karakter kombinasi huruf dan angka')
  })

  it('sanditdkcocok_lupasandi', () => {
    cy.visit('https://phbidlautdev.prahu-hub.com/user/login')
    cy.get('.heading_1').should('contain.text', 'LOGIN')
    cy.get('.col-md-5 > .link_1').click()
    cy.get('.titleRegistrasi').should('contain.text', 'LUPA KATA SANDI')
    cy.get('#username').type('083830011881')
    cy.get('.btn').click()
  //input kode verifikasi
    cy.get('.titleRegistrasi').should('contain.text', 'LUPA KATA SANDI')
    cy.wait(2000)
  //input kode yang dikirimkan ke email
    lupasandi.IsiKodeVerifikasi()
    cy.get('.mobbtn2').click()
  //input kata sandi baru
    cy.get('#password').type('qweerty12456')
    cy.get('#confirm_password').type('qwerty12345')
    cy.get('.mobbtnkonfirmasi').click()
    cy.get('#password-ulang-alert').should('contain.text','Kata sandi tidak cocok')
  })
  
  it('lupasandibo_berhasil', () => {
    cy.visit('https://phbidlautdev.prahu-hub.com/user/login')
    cy.get('.heading_1').should('contain.text', 'LOGIN')
    cy.get('.col-md-5 > .link_1').click()
    cy.get('.titleRegistrasi').should('contain.text', 'LUPA KATA SANDI')
    cy.get('#username').type('083830011881')
    cy.get('.btn').click()
  //input kode verifikasi
    cy.get('.titleRegistrasi').should('contain.text', 'LUPA KATA SANDI')
    cy.wait(2000)
  //input kode yang dikirimkan ke email
    lupasandi.IsiKodeVerifikasi()
    cy.get('.mobbtn2').click()
  //input kata sandi baru
    cy.get('#password').type('qwerty12345')
    cy.get('#confirm_password').type('qwerty12345')
    cy.get('.mobbtnkonfirmasi').click()
  })

  it('lupasandibidder_berhasil', () => {
    cy.visit('https://phbidlautdev.prahu-hub.com/user/login')
    cy.get('.heading_1').should('contain.text', 'LOGIN')
    cy.get('.col-md-5 > .link_1').click()
    cy.get('.titleRegistrasi').should('contain.text', 'LUPA KATA SANDI')
    cy.get('#username').type('085155070869')
    cy.get('.btn').click()
  //input kode verifikasi
    cy.get('.titleRegistrasi').should('contain.text', 'LUPA KATA SANDI')
    cy.wait(2000)
  //input kode yang dikirimkan ke email
    lupasandi.IsiKodeVerifikasi()
    cy.get('.mobbtn2').click()
  //input kata sandi baru
    cy.get('#password').type('qwerty12345')
    cy.get('#confirm_password').type('qwerty12345')
    cy.get('.mobbtnkonfirmasi').click()
  })

})
