describe('Form dengan reCAPTCHA', () => {
  beforeEach(() => {
    // Mock window.grecaptcha SEBELUM visit
    cy.visit('https://phbidlautdemo.prahu-hub.com/user/login', {
      onBeforeLoad: (win) => {
        // Mock grecaptcha object
        win.grecaptcha = {
          ready: (callback) => {
            callback()
          },
          execute: (siteKey, options) => {
            return Promise.resolve('mock-recaptcha-token-12345')
          },
          render: (container, options) => {
            return 'mock-widget-id'
          }
        }
      }
    })
  })

  it('Should submit form with mock reCAPTCHA', () => {
    // Tunggu until form loaded
    cy.get('form').should('be.visible')
    
    // Isi form
    cy.get('.heading_1').should('have.text','LOGIN')
    cy.get('.col-md-7 > .link_1').click()
    cy.get('.heading_1').should('have.text','REGISTRASI')
    cy.get('#email').type('ikbidowner22@yopmail.com')
    cy.get('#password').type('query12345')
    cy.get('#password_ulang').type('query12345')

    // Tunggu until reCAPTCHA container loaded
    cy.get('.g-recaptcha').should('be.visible')
    
    // Trigger reCAPTCHA execution dengan site key yang benar
    cy.window().then((win) => {
      // Gunakan site key yang sesuai dari HTML
      win.grecaptcha.execute('6LeflAwrAAAAAH0zLKM1kDsU1glp75jWt2y3V-92', { 
        action: 'submit' 
      }).then((token) => {
        // Set token ke hidden field jika ada
        const recaptchaResponse = document.querySelector('[name="g-recaptcha-response"]')
        if (recaptchaResponse) {
          recaptchaResponse.value = token
        }
      })
    })

    // Submit form
    cy.get('form').submit()
    
    // Verification
    cy.contains('Login successful').should('be.visible')
  })
})