describe('Registrasi Pengguna Baru', () => {
  it('Sukses registrasi dengan bypass CAPTCHA', () => {
    // Kunjungi halaman registrasi
    cy.visit('https://phbidlautdemo.prahu-hub.com/user/register')

    // Tunggu until form loaded
    cy.contains('REGISTRASI').should('be.visible')

    // Pilih jenis pengguna (Permilik Barang)
    cy.get('#radioBidOwner').click()

    // Isi form data pengguna
    cy.get('input[placeholder*="Nama Lengkap"]').type('John Doe')
    cy.get('#no_telp').type('081234567890')
    cy.get('input[placeholder*="Nama Perusahaan"]').type('PT Contoh Jaya')
    cy.get('input[placeholder*="Email"]').type('ikbidowner22@yopmail.com')
    cy.get('#password').type('query12345')
    cy.get('#password_ulang').type('query12345')

    // BYPASS CAPTCHA - Method 1: Inject hidden input
    cy.document().then((doc) => {
      // Cek jika sudah ada hidden input untuk recaptcha
      let recaptchaInput = doc.querySelector('input[name="g-recaptcha-response"]')
      
      if (!recaptchaInput) {
        // Buat hidden input jika tidak ada
        recaptchaInput = doc.createElement('input')
        recaptchaInput.name = 'g-recaptcha-response'
        recaptchaInput.type = 'hidden'
        doc.querySelector('form').appendChild(recaptchaInput)
      }
      
      // Set value untuk bypass captcha
      // recaptchaInput.value = '6LeflAwrAAAAAH0zLKM1kDsU1glp75jWt2y3V-92'
    })

    // BYPASS CAPTCHA - Method 2: Intercept network requests
    cy.intercept('POST', '**/recaptcha/**', {
      statusCode: 200,
      body: { success: true, score: 0.9 }
    }).as('recaptchaRequest')

    // Submit form
    cy.get('#submitRegistrasi').click()

    // // Verifikasi sukses registrasi
    // cy.contains('Registrasi berhasil', { timeout: 10000 }).should('be.visible')
    // // atau verifikasi redirect ke halaman login
    // cy.url().should('include', '/login')
  })
})