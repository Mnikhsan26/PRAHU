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
    cy.get('#nomor_lelang').type('LELANGIK/09/2025/NRML#3')
    
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
    cy.get('#select2-pelabuhan_asal-container').type('Kota Bengkulu{enter}')
    cy.get('#select2-pelabuhan_tujuan-container').type('Kota Bima{enter}')

    //tempat asal
    cy.get('#alamat_pic_asal')
    .type('Jl. Rajawali No.109, Kemayoran, Kec. Krembangan, Surabaya, Jawa Timur 60176')

    cy.get('#select2-id_kota_asal-container').type('Kab. Bungo{enter}')
    cy.get('#nama_pic_asal').type('Ikhsan Asal')
    cy.get('#telp_pic_asal').type('083830011881')

    //tempat tujuan
    cy.get('#alamat_pic_tujuan')
    .type('Jl. Rajawali No.109, Kemayoran, Kec. Krembangan, Surabaya, Jawa Timur 60176')

    cy.get('#select2-id_kota_tujuan-container').type('Kab. Empat Lawang{enter}')
    cy.get('#nama_pic_tujuan').type('Ikhsan Tujuan')
    cy.get('#telp_pic_tujuan').type('083830011881')

    //informasi kontainer
    cy.get('.select2-search__field').type('20 DRY{enter}')
    cy.get('.select2-search__field').type('20 ISOTANK{enter}')
    
    cy.get('#volume_pengiriman').type('2 Unit Tiap Minggu')
    cy.get('#deskripsi_barang').type('Barang Sembako')
    cy.get('#tombol_lanjutkan').click()


    //pilih peserta lelang
    cy.get('#search_bidder').type('(IK){enter}')
    cy.get('#pilih_semua_bidder').click()
    cy.get('#tombol_lanjutkan').click()
    cy.wait(5000) // tunggu 5 detik

      cy.get('.alert')
      .should('be.visible')
      .and('contain', 'Anda berhasil membuat pengajuan lelang')




  });



})