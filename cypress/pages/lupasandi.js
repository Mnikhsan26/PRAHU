
class KodeVerifikasi {

    elements = {
        AmbilKode: () => cy.get('#enc_kode'),
        InputKode: () => cy.get('#kodeverifnya')
    }

    IsiKodeVerifikasi() {
        this.elements.AmbilKode().invoke('val').then((kode) => {
            cy.log('Kode ditemukan:', kode)
        this.elements.InputKode().type(kode)
        })
    }

}

export default new KodeVerifikasi()