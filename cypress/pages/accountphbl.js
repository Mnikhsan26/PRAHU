class akun {
    emailbidowner = '#email'
    emailbidder = '#email'
    emailadmin = '#email'
    password = '#password'
    buttonlogin = '#submitLogin'

    BidOwner(){
        cy.get(this.emailbidowner).type('pengirim.ph2021@gmail.com')
    }

    Bidder(){
        cy.get(this.emailbidder).type('partner.ph2021@gmail.com')
    }

    Admin(){
        cy.get(this.emailadmin).type('prahu.bid20@gmail.com')
    }

    PassAkun(){
        cy.get(this.password).type('qwerty12345')
    }

    PassAdm(){
        cy.get(this.password).type('prahu12345.')
    }

    BtnLogin(){
        cy.get(this.buttonlogin).click()
    }

}
export default new akun