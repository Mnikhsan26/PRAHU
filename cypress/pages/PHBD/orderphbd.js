class LlgOrder {
  inputlenang = '#masukkan_nomor_lelang'

  LelangOrder(){
      cy.get(this.inputlenang, { timeout: 10000 }).type('Lelang/IK/01NRML{enter}')
      cy.get('#klikMencari').click()
  }
}

export default new LlgOrder