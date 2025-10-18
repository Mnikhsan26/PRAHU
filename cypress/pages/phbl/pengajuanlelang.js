class FormLelang {


    get HrgTrmsk() {
        return cy.get('#harga_telah_termasuk')
    }

    get HrgTdkTrmsk() {
        return cy.get('#harga_belum_termasuk')
    }

    get DokPenagihan() {
        return cy.get('#harga_belum_termasuk')
    }

    get PelabuhanAsal() {
        return cy.get('#select2-pelabuhan_asal-container')
    }

    get PelabuhanTujuan() {
        return cy.get('#select2-pelabuhan_tujuan-container')
    }

}

export default FormLelang