import accountphbl from "../../../../../pages/phbl/accountphbl";
import orderphbl from "../../../../../pages/phbl/orderphbl";


describe('case input unit', () => {
  
  it('bidowner_order', () => {
    cy.visit('https://phbidlautdev.prahu-hub.com/user/login')
    cy.get('.heading_1').should('have.text','LOGIN')
    
    //bid owner login
    accountphbl.BidOwner()
    accountphbl.PassAkun()
    accountphbl.BtnLogin()
    cy.get('.mb_20 > .col-12 > div > :nth-child(2)').should('have.text','Cari Penawaran Lelang')

    //bid owner order
    orderphbl.LelangOrder()

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
    cy.get('.dtp-select-month-after > .material-icons').click()
    // .dblclick()
    cy.get('[data-date="10"] > .dtp-select-day').click()
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
    cy.get('.alert').should('contain.text', 'Anda berhasil input perjanjian pengiriman')

    });


  it('admin_validasi', () => {
    cy.visit('https://phbidlautdev.prahu-hub.com/user/login')
    cy.get('.heading_1').should('have.text','LOGIN')

    //login admin
    accountphbl.Admin()
    accountphbl.PassAdm()
    accountphbl.BtnLogin()
    cy.wait(2000) // tunggu 2 detik
    cy.get('.col-12 > div > :nth-child(2)').should('have.text','Daftar Pengajuan Lelang')
    cy.wait(2000) // tunggu 2 detik
    cy.get('a.sidebar_icon')
      .contains('DAFTAR ORDER').click()
    cy.get('#btn_filter1').click()
    cy.get('#nomor_lelang')
      .type('Lelang/IK/01NRML{enter}')
    cy.get('.mb_15 > :nth-child(4) .select2-selection').click()
    cy.get('.select2-search__field').type('Proses Validasi{enter}')
    cy.get('#view_filter_orderlist1 > :nth-child(1) > .main-card > .card-body > .row > .col-md-12 > div > .button_filter')
      .click()
    cy.wait(2000) // tunggu 2 detik
    
    // validasi order
    cy.contains('a', 'Validasi Order').click()
    cy.get('#tombol_submit').click()
    cy.wait(2000) // tunggu 2 detik
    cy.get('.alert').should('contain.text', 'Anda berhasil melakukan validasi order')
    
    });


  it('bidder_input_unit', () => {
    cy.visit('https://phbidlautdev.prahu-hub.com/user/login')
    cy.get('.heading_1').should('have.text','LOGIN')
    
    accountphbl.Bidder()
    accountphbl.PassAkun()
    accountphbl.BtnLogin()
    cy.wait(2000) // tunggu 2 detik
    cy.get('.col-12 > div > :nth-child(2)').should('have.text','Daftar Pengajuan Lelang')
    cy.wait(2000) // tunggu 2 detik
    cy.get('a.sidebar_icon')
      .contains('DAFTAR ORDER').click()
    cy.get('#btn_filter1').click()
    cy.get('#nomor_lelang')
      .type('Lelang/IK/01NRML{enter}')
    cy.get('.mb_15 > :nth-child(3) .select2-selection').click()
    cy.get('.select2-search__field').type('Konfirmasi Unit{enter}')
    cy.get('#view_filter_orderlist1 > :nth-child(1) > .main-card > .card-body > .row > .col-md-12 > div > .button_filter')
      .click()
    cy.wait(2000) // tunggu 2 detik
    // input unit
    cy.contains('a', 'Input Unit').click()
    // input unit 1
    cy.get('[id^="nopol"]')
      .eq(0).type('L3223POL{enter}')
    cy.get('[id^="nama_sopir"]')
      .eq(0).type('Junaidi{enter}')
    cy.get('[id^="telp_sopir"]')
      .eq(0).type('083830011881{enter}')
    cy.get('[id^="no_kontainer"]')
      .eq(0).type('EMCU2323112{enter}')
    cy.get('[id^="no_segel"]')
      .eq(0).type('PHBD21011{enter}')
    // input unit 2
    cy.get('[id^="nopol"]')
      .eq(1).type('AG3223POL{enter}')
    cy.get('[id^="nama_sopir"]')
      .eq(1).type('Ronald{enter}')
    cy.get('[id^="telp_sopir"]')
      .eq(1).type('083830011881{enter}')
    cy.get('[id^="no_kontainer"]')
      .eq(1).type('EMCU2323122{enter}')
    cy.get('[id^="no_segel"]')
      .eq(1).type('PHBD21022{enter}')
    // input unit 3
    cy.get('[id^="nopol"]')
      .eq(2).type('DK3223PAI{enter}')
    cy.get('[id^="nama_sopir"]')
      .eq(2).type('Dhon{enter}')
    cy.get('[id^="telp_sopir"]')
      .eq(2).type('-{enter}')
    cy.get('[id^="no_kontainer"]')
      .eq(2).type('EMCU2323133{enter}')
    cy.get('[id^="no_segel"]')
      .eq(2).type('PHBD21033{enter}')

    cy.get('#btn_submit').click()
    cy.wait(2000) // tunggu 2 detik
    cy.get('.swal2-cancel').click()
    
    cy.get('.alert').should('contain.text', 'Anda berhasil input unit')

    });

})


describe('case lewati unit', () => {
  
  it('bidowner_order', () => {
    cy.visit('https://phbidlautdev.prahu-hub.com/user/login')
    cy.get('.heading_1').should('have.text','LOGIN')
    
    //bid owner login
    accountphbl.BidOwner()
    accountphbl.PassAkun()
    accountphbl.BtnLogin()
    cy.get('.mb_20 > .col-12 > div > :nth-child(2)').should('have.text','Cari Penawaran Lelang')

    //bid owner order
    orderphbl.LelangOrder()

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
    cy.get('.dtp-select-month-after > .material-icons').click()
    // .dblclick()
    cy.get('[data-date="10"] > .dtp-select-day').click()
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
    cy.get('.alert').should('contain.text', 'Anda berhasil input perjanjian pengiriman')

    });


  it('admin_validasi', () => {
    cy.visit('https://phbidlautdev.prahu-hub.com/user/login')
    cy.get('.heading_1').should('have.text','LOGIN')

    //login admin
    accountphbl.Admin()
    accountphbl.PassAdm()
    accountphbl.BtnLogin()
    cy.wait(2000) // tunggu 2 detik
    cy.get('.col-12 > div > :nth-child(2)').should('have.text','Daftar Pengajuan Lelang')
    cy.wait(2000) // tunggu 2 detik
    cy.get('a.sidebar_icon')
      .contains('DAFTAR ORDER').click()
    cy.get('#btn_filter1').click()
    cy.get('#nomor_lelang')
      .type('Lelang/IK/01NRML{enter}')
    cy.get('.mb_15 > :nth-child(4) .select2-selection').click()
    cy.get('.select2-search__field').type('Proses Validasi{enter}')
    cy.get('#view_filter_orderlist1 > :nth-child(1) > .main-card > .card-body > .row > .col-md-12 > div > .button_filter')
      .click()
    cy.wait(2000) // tunggu 2 detik
    
    // validasi order
    cy.contains('a', 'Validasi Order').click()
    cy.get('#tombol_submit').click()
    cy.wait(2000) // tunggu 2 detik
    cy.get('.alert').should('contain.text', 'Anda berhasil melakukan validasi order')
    
    });

    
  it('bidder_lewati_input_unit', () => {
    cy.visit('https://phbidlautdev.prahu-hub.com/user/login')
    cy.get('.heading_1').should('have.text','LOGIN')
    
    accountphbl.Bidder()
    accountphbl.PassAkun()
    accountphbl.BtnLogin()
    cy.wait(2000) // tunggu 2 detik
    cy.get('.col-12 > div > :nth-child(2)').should('have.text','Daftar Pengajuan Lelang')
    cy.wait(2000) // tunggu 2 detik
    cy.get('a.sidebar_icon')
      .contains('DAFTAR ORDER').click()
    cy.get('#btn_filter1').click()
    cy.get('#nomor_lelang')
      .type('Lelang/IK/01NRML{enter}')
    cy.get('.mb_15 > :nth-child(3) .select2-selection').click()
    cy.get('.select2-search__field').type('Konfirmasi Unit{enter}')
    cy.get('#view_filter_orderlist1 > :nth-child(1) > .main-card > .card-body > .row > .col-md-12 > div > .button_filter')
      .click()
    cy.wait(2000) // tunggu 2 detik
    // input unit
    cy.contains('a', 'Input Unit').click()
    cy.wait(2000) // tunggu 2 detik

    cy.get('#lewati_input_unit').click()
    cy.wait(2000) // tunggu 2 detik

    cy.get('#btn_submit').click()
    cy.wait(2000) // tunggu 2 detik
    cy.get('.swal2-cancel').click()
    cy.get('.alert').should('contain.text', 'Anda berhasil input unit')

    });

})


describe.skip('create order', () => {

  it('bidowner_order', () => {
    cy.visit('https://phbidlautdev.prahu-hub.com/user/login')
    cy.get('.heading_1').should('have.text','LOGIN')
    
    //bid owner login
    accountphbl.BidOwner()
    accountphbl.PassAkun()
    accountphbl.BtnLogin()
    cy.get('.mb_20 > .col-12 > div > :nth-child(2)').should('have.text','Cari Penawaran Lelang')

    //bid owner order
    orderphbl.LelangOrder()

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
    cy.get('.dtp-select-month-after > .material-icons').click()
    // .dblclick()
    cy.get('[data-date="10"] > .dtp-select-day').click()
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
    cy.get('.alert').should('contain.text', 'Anda berhasil input perjanjian pengiriman')

    });

  it('admin_validasi', () => {
    cy.visit('https://phbidlautdev.prahu-hub.com/user/login')
    cy.get('.heading_1').should('have.text','LOGIN')

    //login admin
    accountphbl.Admin()
    accountphbl.PassAdm()
    accountphbl.BtnLogin()
    cy.wait(2000) // tunggu 2 detik
    cy.get('.col-12 > div > :nth-child(2)').should('have.text','Daftar Pengajuan Lelang')
    cy.wait(2000) // tunggu 2 detik
    cy.get('a.sidebar_icon')
      .contains('DAFTAR ORDER').click()
    cy.get('#btn_filter1').click()
    cy.get('#nomor_lelang')
      .type('Lelang/IK/01NRML{enter}')
    cy.get('.mb_15 > :nth-child(4) .select2-selection').click()
    cy.get('.select2-search__field').type('Proses Validasi{enter}')
    cy.get('#view_filter_orderlist1 > :nth-child(1) > .main-card > .card-body > .row > .col-md-12 > div > .button_filter')
      .click()
    cy.wait(2000) // tunggu 2 detik
    
    // validasi order
    cy.contains('a', 'Validasi Order').click()
    cy.get('#tombol_submit').click()
    cy.wait(2000) // tunggu 2 detik
    cy.get('.alert').should('contain.text', 'Anda berhasil melakukan validasi order')
    
    });

})

describe.skip('case mandatory', () => {

  beforeEach(() => {
      cy.session('bidder', () => {
        cy.loginBidder()
      })
    })

  it('bidder_mandatory_nopol', () => {
      cy.visit('https://phbidlautdev.prahu-hub.com/order/orderlist')
      cy.wait(3000)
      cy.contains('a', 'Input Unit').click()
      cy.get('#btn_submit').click()
      cy.get('.popover-body').should('contain.text', 'Masukkan Nopol')
      cy.wait(3000)
    })

  it('bidder_mandatory_nama_sopir', () => {
      cy.visit('https://phbidlautdev.prahu-hub.com/order/orderlist')
      cy.wait(3000)
      cy.contains('a', 'Input Unit').click()
      cy.get('[id^="nopol"]')
        .eq(0).type('L3223POL{enter}')
      cy.get('#btn_submit').click()
      cy.get('.popover-body').should('contain.text', 'Masukkan Nama Sopir')
      cy.wait(3000)
    })

  it('bidder_mandatory_nomor_telepon', () => {
      cy.visit('https://phbidlautdev.prahu-hub.com/order/orderlist')
      cy.wait(3000)
      cy.contains('a', 'Input Unit').click()
      cy.get('[id^="nopol"]')
        .eq(0).type('L3223POL{enter}')
      cy.get('[id^="nama_sopir"]')
        .eq(0).type('Junaidi{enter}')
      cy.get('#btn_submit').click()
      cy.get('.popover-body').should('contain.text', 'Masukkan Telp. Sopir')
      cy.wait(3000)
    })

  it('bidder_kontainer_sama', () => {
      cy.visit('https://phbidlautdev.prahu-hub.com/order/orderlist')
      cy.wait(3000)
      cy.contains('a', 'Input Unit').click()

      cy.get('[id^="nopol"]')
        .eq(0).type('L3223POL{enter}')
      cy.get('[id^="nama_sopir"]')
        .eq(0).type('Junaidi{enter}')
      cy.get('[id^="telp_sopir"]')
        .eq(0).type('083830011881{enter}')
      cy.get('[id^="no_kontainer"]')
        .eq(0).type('EMCU2323112{enter}')
      cy.get('[id^="no_segel"]')
        .eq(0).type('PHBD21011{enter}')

      cy.get('[id^="nopol"]')
        .eq(1).type('L3223POL{enter}')
      cy.get('[id^="nama_sopir"]')
        .eq(1).type('Junaidi{enter}')
      cy.get('[id^="telp_sopir"]')
        .eq(1).type('083830011881{enter}')
      cy.get('[id^="no_kontainer"]')
        .eq(1).type('EMCU2323112{enter}')
      cy.get('[id^="no_segel"]')
        .eq(1).type('PHBD21011{enter}')

      cy.get('[id^="nopol"]')
        .eq(2).type('DK3223PAI{enter}')
      cy.get('[id^="nama_sopir"]')
        .eq(2).type('Dhon{enter}')
      cy.get('[id^="telp_sopir"]')
        .eq(2).type('-{enter}')
      cy.get('[id^="no_kontainer"]')
        .eq(2).type('EMCU2323133{enter}')
      cy.get('[id^="no_segel"]')
        .eq(2).type('PHBD21033{enter}')

      cy.get('#btn_submit').click()
      cy.on('window:alert', (txt) => {
        expect(txt).to.contain('Nomor Kontainer ada yang sama')
      })

      
      // cy.get('.popover-body').should('contain.text', 'Masukkan Nopol')
      cy.wait(3000)
    })

  it('bidder_segel_sama', () => {
      cy.visit('https://phbidlautdev.prahu-hub.com/order/orderlist')
      cy.wait(3000)
      cy.contains('a', 'Input Unit').click()

      cy.get('[id^="nopol"]')
        .eq(0).type('L3223POL{enter}')
      cy.get('[id^="nama_sopir"]')
        .eq(0).type('Junaidi{enter}')
      cy.get('[id^="telp_sopir"]')
        .eq(0).type('083830011881{enter}')
      cy.get('[id^="no_kontainer"]')
        .eq(0).type('EMCU2323112{enter}')
      cy.get('[id^="no_segel"]')
        .eq(0).type('PHBD21011{enter}')

      cy.get('[id^="nopol"]')
        .eq(1).type('L3223POL{enter}')
      cy.get('[id^="nama_sopir"]')
        .eq(1).type('Junaidi{enter}')
      cy.get('[id^="telp_sopir"]')
        .eq(1).type('083830011881{enter}')
      cy.get('[id^="no_kontainer"]')
        .eq(1).type('EMCU9999090{enter}')
      cy.get('[id^="no_segel"]')
        .eq(1).type('PHBD21011{enter}')

      cy.get('[id^="nopol"]')
        .eq(2).type('DK3223PAI{enter}')
      cy.get('[id^="nama_sopir"]')
        .eq(2).type('Dhon{enter}')
      cy.get('[id^="telp_sopir"]')
        .eq(2).type('-{enter}')
      cy.get('[id^="no_kontainer"]')
        .eq(2).type('EMCU2323133{enter}')
      cy.get('[id^="no_segel"]')
        .eq(2).type('PHBD21033{enter}')

      cy.get('#btn_submit').click()
      cy.on('window:alert', (txt) => {
        expect(txt).to.contain('Nomor Segel ada yang sama')
      })

      
      // cy.get('.popover-body').should('contain.text', 'Masukkan Nopol')
      cy.wait(3000)
    })


})