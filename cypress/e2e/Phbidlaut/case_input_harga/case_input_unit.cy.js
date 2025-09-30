import accountphbl from "../../../pages/accountphbl";

describe('case input unit', () => {
  

  it('login_succes_email', () => {
    cy.visit('https://phbidlautdev.prahu-hub.com/user/login')
    cy.get('.heading_1').should('have.text','LOGIN')
    
    //bid owner login
    accountphbl.BidOwner()
    accountphbl.PassAkun()
    accountphbl.BtnLogin()
    cy.get('.mb_20 > .col-12 > div > :nth-child(2)').should('have.text','Cari Penawaran Lelang')

    //bid owner order
    cy.get('#masukkan_nomor_lelang')
      .type('Lelang/IK/01NRML{enter}')
    cy.wait(2000) // tunggu 2 detik
    cy.get('#klikMencari').click()

    cy.get('#tombol_filter').click()
    cy.get('#select2-bidder-container')
      .type('PT. Perusahaan Pelayaran Nusantara Panurjwan{enter}')
    cy.get('#tombol_filter_submit').click()
    cy.wait(2000) // tunggu 2 detik
    cy.get('.tabel_hasil_penawaran_tr_top_right > [style="display: block;"] > .tombol-pesan-link > .btn').click() //tombol pesan

    //input isi data pesanan
    cy.get('#qty')
      .type('3{enter}')
    
    cy.get('#tgl_permintaan_muat').click()
    cy.get('.dtp-select-month-after > .material-icons').dblclick()
    cy.get('[data-date="4"] > .dtp-select-day').click()
    cy.get('.dtp-btn-ok').click()
    cy.get('.dtp-btn-ok').click()
    cy.get('.dtp-btn-ok').click()
    
    cy.get('#dog')
      .type('Sembako{enter}')
    cy.get('#catatan_bidder')
      .type('Barang tidak boleh terkena hujan{enter}')
    cy.get('#nama_perusahaan_tujuan1')
      .type('PT. Multi Karya Industiral{enter}')
    cy.get('#terms').click()
    cy.get('#tombol_lanjutkan').click()
    cy.get('.swal2-confirm').click()

    //input muatan
    cy.get('.app-main__inner > :nth-child(3) > .col-12 > .heading_1')
      .should('have.text','Input Muatan')
    cy.get('#kontainer-1 > :nth-child(2) > :nth-child(1) > .form-control')
      .type('Bawang Merah{enter}')

    cy.get('[id^="select2-kemasan"]')
      .eq(0).type('Koli{enter}')
    cy.get('#kontainer-1 > :nth-child(2) > :nth-child(3) > .form-control')
      .type('15000{enter}')
    cy.get('#kontainer-1 > :nth-child(2) > :nth-child(4) > .form-control')
      .type('15000{enter}')

    cy.get('[id^="isi_data_unit_satu"]')
      .eq(0).type('15000{enter}')
    cy.get('[id^="isi_data_unit_satu"]')
      .eq(1).type('15000{enter}')
      
    cy.get('#submit-packinglist').click()

    //input perjanjian
    cy.get('.col-12 > .heading_1')
      .should('have.text','PERJANJIAN PENGIRIMAN')
    cy.get('#terms').click()
    cy.get('#submitonce1').click()
    cy.wait(2000) // tunggu 2 detik

    //logout bid owner
    cy.visit('https://phbidlautdev.prahu-hub.com/user/do_logout')

    //login admin
    accountphbl.Admin()
    accountphbl.PassAdm()
    accountphbl.BtnLogin()
    cy.wait(2000) // tunggu 2 detik
    // cy.get('.vertical-nav-menu > :nth-child(7) > .sidebar_icon').click()
    cy.get('.col-12 > div > :nth-child(2)').should('have.text','Daftar Pengajuan Lelang')
    cy.wait(2000) // tunggu 2 detik
    cy.get('a.sidebar_icon').contains('DAFTAR ORDER').click()
    cy.get('#btn_filter1').click()
    cy.get(':nth-child(2) > .position-relative > .input-group > #nomor_lelang')
      .type('Lelang/IK/01NRML{enter}')
    cy.get('#view_filter_orderlist1 > :nth-child(1) > .main-card > .card-body > .row > .col-md-12 > div > .button_filter')
      .click()

  









      





  });



})