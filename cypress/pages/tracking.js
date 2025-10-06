class tracking{
    filterststrack = '[style="width:20%"] > .position-relative > .input-group > .select2-container > .selection > .select2-selection'
    actiontracking = ':nth-child(2) > [style="border-top-right-radius: 5px!important; text-align: center;padding-right: 15px; border-bottom-right-radius: 5px!important;"] > .btn'

    tugas_ambil_kontainer = '#select2-ptgambil-container'
    tugas_stuffing = '#select2-ptgstuffing-container'
    tugas_kapal_berlayar = '#select2-ptgberlayar-container'
    tugas_kapal_sandar = '#select2-ptgtiba-container'
    tugas_rencana_dooring = '#select2-ptgrencana_dooring-container'
    tugas_dooring = '#select2-ptgdooring-container'
    tugas_sj = '#select2-ptgsurat_jalan-container'
    tugas_dokumen_dikirim = '#select2-ptgdokumen-container'
    tugas_selesai = '#submitSelesaiPenugasan'

    isi_ambil_kontainer = ':nth-child(1) > .panel-body > .col-md-12 > .form-row > .am-flex > .tombolnya > .btn-action-mobile > .btn'
    // popup_isi_ak = '#modalisiambil > #modall > .modal-content > #form-edit > .modal-footer > .btn-red'


    StsTrack(){
        cy.get(this.filterststrack).click()
        cy.get('.select2-search__field').type('Proses Penugasan{enter}')
    }

    BtnTracking(){
        cy.get(this.actiontracking).click()
        cy.get('.heading_1').should('contain.text', 'TRACKING PENGIRIMAN')
    }

    TgsAmbilKontainer () {
        cy.get(this.tugas_ambil_kontainer).click()
        cy.get('.select2-search__field').type('Jaya{enter}')
        cy.get('#tgsambil').click()
    }

    TgsStuffing () {
        cy.get(this.tugas_stuffing).click()
        cy.get('.select2-search__field').type('Jaya{enter}')
        cy.get('#tgsstuffing').click()
    }

    TgsKapalBerlayar () {
        cy.get(this.tugas_kapal_berlayar).click()
        cy.get('.select2-search__field').type('Jaya{enter}')
        cy.get('#tgsberlayar').click()
    }

    TgsKapalSandar () {
        cy.get(this.tugas_kapal_sandar).click()
        cy.get('.select2-search__field').type('Jaya{enter}')
        cy.get('#tgstiba').click()
    }
    
    TgsRencanaDooring () {
        cy.get(this.tugas_rencana_dooring).click()
        cy.get('.select2-search__field').type('Jaya{enter}')
        cy.get('#tgsrencana_dooring').click()
    }
    
    TgsDooring () {
        cy.get(this.tugas_dooring).click()
        cy.get('.select2-search__field').type('Jaya{enter}')
        cy.get('#tgsdooring').click()
    }

    TgsSuratJalan () {
        cy.get(this.tugas_sj).click()
        cy.get('.select2-search__field').type('Jaya{enter}')
        cy.get('#tgssurat_jalan').click()
    }

    TgsDokumenDikirim () {
        cy.get(this.tugas_dokumen_dikirim).click()
        cy.get('.select2-search__field').type('Jaya{enter}')
        cy.get('#tgsdokumen').click()
    }

    BtnSelesai () {
        cy.get(this.tugas_selesai).click()
    }

    InptAmbilKontainer () {
        cy.get(this.isi_ambil_kontainer).click()
        cy.get('#btnmodalambil').click()

    }


}

export default new tracking