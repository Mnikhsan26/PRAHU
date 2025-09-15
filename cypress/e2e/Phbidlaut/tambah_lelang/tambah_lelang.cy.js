describe('phbidlaut login', () => {
  //tambah lelang
  it('login_succes_email', () => {
    cy.visit('https://phbidlautdemo.prahu-hub.com/user/login')
    cy.get('.heading_1').should('have.text','LOGIN')
    cy.get('#email').type('pengirim.ph2021@gmail.com')
    cy.get('#password').type('qwerty12345')
    cy.get('#submitLogin').click()
    cy.get('.mb_20 > .col-12 > div > :nth-child(2)').should('have.text','Cari Penawaran Lelang')
    cy.get('.link_1').click()
    cy.get('#nomor_lelang').type('LELANGIK/09/2025/NRML')
    
    //pilih tanggal lelang (buka lelang)
    cy.get('#tanggal_buka_lelang')
      .type('15/09/2025 14:30{enter}')
      .should('have.value', '15/09/2025 14:30')

    //pilih tanggal lelang (tutup lelang)
    cy.get('#tanggal_tutup_lelang')
      .type('15/09/2025 14:31{enter}')
      .should('have.value', '15/09/2025 14:31')

    //pilih tanggal lelang (rencana mulai kirim)
    cy.get('#tanggal_mulai_kontrak')
      .type('15/09/2025 14:32{enter}')
      .should('have.value', '15/09/2025 14:32')

    //pilih tanggal lelang (rencana akhir kirim)
    cy.get('#tanggal_selesai_kontrak')
      .type('15/09/2026 14:32{enter}')
      .should('have.value', '15/09/2026 14:32')

    //biaya termasuk
    cy.get('#biaya_asal_all').click()
    cy.get('#biaya_tujuan_all').click()
    cy.get('#biaya_lainnya_all').click()

    // sk
    cy.get('#harga_telah_termasuk').type('Kawalan Asal & Kawalan Tujuan')
    cy.get('#harga_belum_termasuk').type('Forklift')

    //dokumen penagihan
    cy.get('#dok_penagihan_all').click()
    cy.get('#catatan_tambahan').type('Invoice Asli 1Lembar')
    cy.get('#budget_pengiriman').type('1000000')

    //pilih pelabuhan
    cy.get('#select2-pelabuhan_asal-container')
    .type('Kota Ambon')
    .click()
    // cy.get('#select2-pelabuhan_asal-result-djpm-1\,Atambua').click()


    


  });



})