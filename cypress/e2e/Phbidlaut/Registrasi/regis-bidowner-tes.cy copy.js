describe('Form Registration dengan reCAPTCHA', () => {
  it('Should register successfully dengan mock reCAPTCHA', () => {
    // Intercept reCAPTCHA verification request
    cy.intercept('POST', '**/recaptcha/api/siteverify**', {
      success: true,
      score: 0.9,
      action: 'submit',
      challenge_ts: new Date().toISOString(),
      hostname: 'localhost'
    }).as('recaptchaVerify')

    // Visit page dengan mock
    cy.visit('/register', {
      onBeforeLoad: (win) => {
        win.grecaptcha = {
          ready: (cb) => cb(),
          execute: () => Promise.resolve('mock-token-abc123'),
          render: () => 'mock-widget-id'
        }
      }
    })

    // Isi form
    cy.get('#email').type('ikbidowner22@yopmail.com')
    cy.get('#password').type('query12345')
    cy.get('#password_ulang').type('query12345')

    // Pastikan reCAPTCHA element ada
    cy.get('.g-recaptcha').should('exist')

    // Trigger reCAPTCHA
    cy.window().its('grecaptcha').invoke('execute', '6Lef1AwrAAAAAH2zLKYHkDsUIglp75jWt2y3V-92', { 
      action: 'submit' 
    })

    // Submit form
    cy.get('form').submit()

    // Tunggu verification dan assert success
    cy.wait('@recaptchaVerify')
    cy.contains('Registrasi berhasil').should('be.visible')
  })
})