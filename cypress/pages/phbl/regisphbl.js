import UserDataGenerator from '../../support/utils/UserDataGenerator'

class RegisterPage {
  inputEmail(role = 'owner') {
    const userGen = new UserDataGenerator(role)
    const email = userGen.generateEmail()
    cy.get('#email').type(email)
    return email
  }

  inputPhone() {
    const phone = UserDataGenerator.generatePhone()
    cy.get('#no_telp').type(phone)
    return phone
  }
}

export default RegisterPage
