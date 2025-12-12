import { LlgAkhr, LlgBlmBk, LlgMlai, LlgTtp } from "../../../../pages/phbl/nmrlelangphbl";
import accountphbl from "../../../../pages/phbl/accountphbl";
import FormLelang from "../../../../pages/phbl/pengajuanlelang";

describe('phbidlaut login', () => {
  
  it.skip('mandatory_nomor_lelang', () => {
    cy.visit('https://phbidlautdev.prahu-hub.com/user/login')
    cy.get('.heading_1').should('have.text','LOGIN')
    accountphbl.BidOwner()
    accountphbl.PassAkun()
    accountphbl.BtnLogin()
    cy.get('.mb_20 > .col-12 > div > :nth-child(2)').should('have.text','Cari Penawaran Lelang')
    cy.get('.link_1').click()
    
    cy.get('#tombol_lanjutkan').click()
    cy.get('.popover-body').should('have.text','Masukkan Nomor Lelang')
  });

  it.skip('mandatory_tanggal_buka', () => {
    cy.visit('https://phbidlautdev.prahu-hub.com/user/login')
    cy.get('.heading_1').should('have.text','LOGIN')
    accountphbl.BidOwner()
    accountphbl.PassAkun()
    accountphbl.BtnLogin()
    cy.get('.mb_20 > .col-12 > div > :nth-child(2)').should('have.text','Cari Penawaran Lelang')
    cy.get('.link_1').click()
    cy.isiNomorLelang('NRML')

    cy.get('#tombol_lanjutkan').click()
    cy.get('.popover-body').should('have.text','Masukkan Tanggal Buka Lelang')
  });

  it.skip('mandatory_tanggal_tutup', () => {
    cy.visit('https://phbidlautdev.prahu-hub.com/user/login')
    cy.get('.heading_1').should('have.text','LOGIN')
    accountphbl.BidOwner()
    accountphbl.PassAkun()
    accountphbl.BtnLogin()
    cy.get('.mb_20 > .col-12 > div > :nth-child(2)').should('have.text','Cari Penawaran Lelang')
    cy.get('.link_1').click()
    cy.isiNomorLelang('NRML')

    const dates = LlgBlmBk.generateBlmbuka ()
    //pilih tanggal lelang (buka lelang)
    cy.get('#tanggal_buka_lelang')
      .type(dates.buka + '{enter}')
      .should('have.value', dates.buka)

    cy.get('#tombol_lanjutkan').click()
    cy.get('.popover-body').should('have.text','Masukkan Tanggal Tutup Lelang')
  });

  it.skip('mandatory_tanggal_mulai_kirim', () => {
    cy.visit('https://phbidlautdev.prahu-hub.com/user/login')
    cy.get('.heading_1').should('have.text','LOGIN')
    accountphbl.BidOwner()
    accountphbl.PassAkun()
    accountphbl.BtnLogin()
    cy.get('.mb_20 > .col-12 > div > :nth-child(2)').should('have.text','Cari Penawaran Lelang')
    cy.get('.link_1').click()
    cy.isiNomorLelang('NRML')

    const dates = LlgBlmBk.generateBlmbuka ()
    //pilih tanggal lelang (buka lelang)
    cy.get('#tanggal_buka_lelang')
      .type(dates.buka + '{enter}')
      .should('have.value', dates.buka)

    //pilih tanggal lelang (tutup lelang)  
    cy.get('#tanggal_tutup_lelang')
      .type(dates.tutup + '{enter}')
      .should('have.value', dates.tutup)
    

    cy.get('#tombol_lanjutkan').click()
    cy.get('.popover-body').should('have.text','Masukkan Tgl Rencana Mulai Kirim')
  });

  it.skip('mandatory_tanggal_akhir_kirim', () => {
    cy.visit('https://phbidlautdev.prahu-hub.com/user/login')
    cy.get('.heading_1').should('have.text','LOGIN')
    accountphbl.BidOwner()
    accountphbl.PassAkun()
    accountphbl.BtnLogin()
    cy.get('.mb_20 > .col-12 > div > :nth-child(2)').should('have.text','Cari Penawaran Lelang')
    cy.get('.link_1').click()
    cy.isiNomorLelang('NRML')

    const dates = LlgBlmBk.generateBlmbuka ()
    //pilih tanggal lelang (buka lelang)
    cy.get('#tanggal_buka_lelang')
      .type(dates.buka + '{enter}')
      .should('have.value', dates.buka)

    //pilih tanggal lelang (tutup lelang)  
    cy.get('#tanggal_tutup_lelang')
      .type(dates.tutup + '{enter}')
      .should('have.value', dates.tutup)
    
    //pilih tanggal lelang (rencana mulai kirim)
    cy.get('#tanggal_mulai_kontrak')
    .type(dates.mulai + '{enter}')
    .should('have.value', dates.mulai)
    

    cy.get('#tombol_lanjutkan').click()
    cy.get('.popover-body').should('have.text','Masukkan Tgl Rencana Akhir Kirim')
  });

  it.skip('mandatory_pilih_data_lelang', () => {
    cy.visit('https://phbidlautdev.prahu-hub.com/user/login')
    cy.get('.heading_1').should('have.text','LOGIN')
    accountphbl.BidOwner()
    accountphbl.PassAkun()
    accountphbl.BtnLogin()
    cy.get('.mb_20 > .col-12 > div > :nth-child(2)').should('have.text','Cari Penawaran Lelang')
    cy.get('.link_1').click()
    cy.isiNomorLelang('NRML')

    const dates = LlgBlmBk.generateBlmbuka ()
    //pilih tanggal lelang (buka lelang)
    cy.get('#tanggal_buka_lelang')
      .type(dates.buka + '{enter}')
      .should('have.value', dates.buka)

    //pilih tanggal lelang (tutup lelang)  
    cy.get('#tanggal_tutup_lelang')
      .type(dates.tutup + '{enter}')
      .should('have.value', dates.tutup)
    
    //pilih tanggal lelang (rencana mulai kirim)
    cy.get('#tanggal_mulai_kontrak')
    .type(dates.mulai + '{enter}')
    .should('have.value', dates.mulai)

    //pilih tanggal lelang (rencana akhir kirim)
    cy.get('#tanggal_selesai_kontrak')
      .type(dates.akhir + '{enter}')
      .should('have.value', dates.akhir)

    // cek history
    cy.get('#gunakan_data_lelang_lama').click()
    cy.get('#tgl_awal')
      .clear()
      .type('01/09/2025{enter}')
      .should('have.value', '01/09/2025')
    cy.wait(2000) // tunggu 2 detik

    cy.get('#tgl_akhir')
      .clear()
      .type('30/11/2025{enter}')
      .should('have.value', '30/11/2025')
    cy.wait(2000) // tunggu 2 detik

    cy.get('#lanjutcari').click()
    
    cy.get('#tombol_lanjutkan').click()
    cy.get('.popover-body').should('have.text','Pilih Data Lelang')
  });

  it.skip('mandatory_pelabuhan_asal', () => {
    cy.visit('https://phbidlautdev.prahu-hub.com/user/login')
    cy.get('.heading_1').should('have.text','LOGIN')
    accountphbl.BidOwner()
    accountphbl.PassAkun()
    accountphbl.BtnLogin()
    cy.get('.mb_20 > .col-12 > div > :nth-child(2)').should('have.text','Cari Penawaran Lelang')
    cy.get('.link_1').click()
    cy.isiNomorLelang('NRML')

    const dates = LlgBlmBk.generateBlmbuka ()
    //pilih tanggal lelang (buka lelang)
    cy.get('#tanggal_buka_lelang')
      .type(dates.buka + '{enter}')
      .should('have.value', dates.buka)

    //pilih tanggal lelang (tutup lelang)  
    cy.get('#tanggal_tutup_lelang')
      .type(dates.tutup + '{enter}')
      .should('have.value', dates.tutup)
    
    //pilih tanggal lelang (rencana mulai kirim)
    cy.get('#tanggal_mulai_kontrak')
      .type(dates.mulai + '{enter}')
      .should('have.value', dates.mulai)
    
    //pilih tanggal lelang (rencana akhir kirim)
    cy.get('#tanggal_selesai_kontrak')
      .type(dates.akhir + '{enter}')
      .should('have.value', dates.akhir)

    cy.get('#tombol_lanjutkan').click()
    cy.get('.popover-body').should('have.text','Pilih Pelabuhan Asal')
  });
  
  it.skip('mandatory_pelabuhan_tujuan', () => {
    cy.visit('https://phbidlautdev.prahu-hub.com/user/login')
    cy.get('.heading_1').should('have.text','LOGIN')
    accountphbl.BidOwner()
    accountphbl.PassAkun()
    accountphbl.BtnLogin()
    cy.get('.mb_20 > .col-12 > div > :nth-child(2)').should('have.text','Cari Penawaran Lelang')
    cy.get('.link_1').click()
    cy.isiNomorLelang('NRML')

    const lelang = new FormLelang ()
    const dates = LlgBlmBk.generateBlmbuka ()
    //pilih tanggal lelang (buka lelang)
    cy.get('#tanggal_buka_lelang')
      .type(dates.buka + '{enter}')
      .should('have.value', dates.buka)

    //pilih tanggal lelang (tutup lelang)  
    cy.get('#tanggal_tutup_lelang')
      .type(dates.tutup + '{enter}')
      .should('have.value', dates.tutup)
    
    //pilih tanggal lelang (rencana mulai kirim)
    cy.get('#tanggal_mulai_kontrak')
      .type(dates.mulai + '{enter}')
      .should('have.value', dates.mulai)
    
    //pilih tanggal lelang (rencana akhir kirim)
    cy.get('#tanggal_selesai_kontrak')
      .type(dates.akhir + '{enter}')
      .should('have.value', dates.akhir)

    //pilih pelabuhan
    lelang.PelabuhanAsal.type('Kota Bengkulu{enter}')

    cy.get('#tombol_lanjutkan').click()
    cy.get('.popover-body').should('have.text','Pilih Pelabuhan Tujuan')
  });

  it.skip('mandatory_alamat_asal', () => {
    cy.visit('https://phbidlautdev.prahu-hub.com/user/login')
    cy.get('.heading_1').should('have.text','LOGIN')
    accountphbl.BidOwner()
    accountphbl.PassAkun()
    accountphbl.BtnLogin()
    cy.get('.mb_20 > .col-12 > div > :nth-child(2)').should('have.text','Cari Penawaran Lelang')
    cy.get('.link_1').click()
    cy.isiNomorLelang('NRML')

    const lelang = new FormLelang ()
    const dates = LlgBlmBk.generateBlmbuka ()
    //pilih tanggal lelang (buka lelang)
    cy.get('#tanggal_buka_lelang')
      .type(dates.buka + '{enter}')
      .should('have.value', dates.buka)

    //pilih tanggal lelang (tutup lelang)  
    cy.get('#tanggal_tutup_lelang')
      .type(dates.tutup + '{enter}')
      .should('have.value', dates.tutup)
    
    //pilih tanggal lelang (rencana mulai kirim)
    cy.get('#tanggal_mulai_kontrak')
      .type(dates.mulai + '{enter}')
      .should('have.value', dates.mulai)
    
    //pilih tanggal lelang (rencana akhir kirim)
    cy.get('#tanggal_selesai_kontrak')
      .type(dates.akhir + '{enter}')
      .should('have.value', dates.akhir)

    //pilih pelabuhan
    lelang.PelabuhanAsal.type('Kota Bengkulu{enter}')
    lelang.PelabuhanTujuan.type('Kota Bima{enter}')    

    cy.get('#tombol_lanjutkan').click()
    cy.get('.popover-body').should('have.text','Masukkan Alamat Lengkap Asal')
  });

  it.skip('mandatory_kota_asal', () => {
    cy.visit('https://phbidlautdev.prahu-hub.com/user/login')
    cy.get('.heading_1').should('have.text','LOGIN')
    accountphbl.BidOwner()
    accountphbl.PassAkun()
    accountphbl.BtnLogin()
    cy.get('.mb_20 > .col-12 > div > :nth-child(2)').should('have.text','Cari Penawaran Lelang')
    cy.get('.link_1').click()
    cy.isiNomorLelang('NRML')

    const lelang = new FormLelang ()
    const dates = LlgBlmBk.generateBlmbuka ()
    //pilih tanggal lelang (buka lelang)
    cy.get('#tanggal_buka_lelang')
      .type(dates.buka + '{enter}')
      .should('have.value', dates.buka)

    //pilih tanggal lelang (tutup lelang)  
    cy.get('#tanggal_tutup_lelang')
      .type(dates.tutup + '{enter}')
      .should('have.value', dates.tutup)
    
    //pilih tanggal lelang (rencana mulai kirim)
    cy.get('#tanggal_mulai_kontrak')
      .type(dates.mulai + '{enter}')
      .should('have.value', dates.mulai)
    
    //pilih tanggal lelang (rencana akhir kirim)
    cy.get('#tanggal_selesai_kontrak')
      .type(dates.akhir + '{enter}')
      .should('have.value', dates.akhir)

    //pilih pelabuhan
    lelang.PelabuhanAsal.type('Kota Bengkulu{enter}')
    lelang.PelabuhanTujuan.type('Kota Bima{enter}')

    //tempat asal
    cy.get('#alamat_pic_asal')
    .type('Jl. Rajawali No.109, Kemayoran, Kec. Krembangan, Surabaya, Jawa Timur 60176')    

    cy.get('#tombol_lanjutkan').click()
    cy.get('.popover-body').should('have.text','Pilih Kota Asal')
  });

  it.skip('mandatory_alamat_tujuan', () => {
    cy.visit('https://phbidlautdev.prahu-hub.com/user/login')
    cy.get('.heading_1').should('have.text','LOGIN')
    accountphbl.BidOwner()
    accountphbl.PassAkun()
    accountphbl.BtnLogin()
    cy.get('.mb_20 > .col-12 > div > :nth-child(2)').should('have.text','Cari Penawaran Lelang')
    cy.get('.link_1').click()
    cy.isiNomorLelang('NRML')

    const lelang = new FormLelang ()
    const dates = LlgBlmBk.generateBlmbuka ()
    //pilih tanggal lelang (buka lelang)
    cy.get('#tanggal_buka_lelang')
      .type(dates.buka + '{enter}')
      .should('have.value', dates.buka)

    //pilih tanggal lelang (tutup lelang)  
    cy.get('#tanggal_tutup_lelang')
      .type(dates.tutup + '{enter}')
      .should('have.value', dates.tutup)
    
    //pilih tanggal lelang (rencana mulai kirim)
    cy.get('#tanggal_mulai_kontrak')
      .type(dates.mulai + '{enter}')
      .should('have.value', dates.mulai)
    
    //pilih tanggal lelang (rencana akhir kirim)
    cy.get('#tanggal_selesai_kontrak')
      .type(dates.akhir + '{enter}')
      .should('have.value', dates.akhir)

    //pilih pelabuhan
    lelang.PelabuhanAsal.type('Kota Bengkulu{enter}')
    lelang.PelabuhanTujuan.type('Kota Bima{enter}')

    //tempat asal
    cy.get('#alamat_pic_asal')
    .type('Jl. Rajawali No.109, Kemayoran, Kec. Krembangan, Surabaya, Jawa Timur 60176')    
    cy.get('#select2-id_kota_asal-container').type('Kab. Bungo{enter}')


    cy.get('#tombol_lanjutkan').click()
    cy.get('.popover-body').should('have.text','Masukkan Alamat Lengkap Tujuan')
  });  


  
  //tambah lelang normal belum buka
  it('tambah_lelang_normal_blmbuka', () => {
    cy.visit('https://phbidlautdev.prahu-hub.com/user/login')
    cy.get('.heading_1').should('have.text','LOGIN')
    accountphbl.BidOwner()
    accountphbl.PassAkun()
    accountphbl.BtnLogin()
    cy.get('.mb_20 > .col-12 > div > :nth-child(2)').should('have.text','Cari Penawaran Lelang')
    cy.get('.link_1').click()
    cy.isiNomorLelang('NRML')
    // cy.get('#nomor_lelang').type('LELANGIK/09/2025/NRML#3')
    
    const lelang = new FormLelang ()
    const dates = LlgBlmBk.generateBlmbuka ()
    //pilih tanggal lelang (buka lelang)
    cy.get('#tanggal_buka_lelang')
      .type(dates.buka + '{enter}')
      .should('have.value', dates.buka)
      // .type('19/09/2025 14:30{enter}')
      // .should('have.value', '19/09/2025 14:30')

    //pilih tanggal lelang (tutup lelang)
    cy.get('#tanggal_tutup_lelang')
      .type(dates.tutup + '{enter}')
      .should('have.value', dates.tutup)
      // .type('19/09/2025 14:31{enter}')
      // .should('have.value', '19/09/2025 14:31')

    //pilih tanggal lelang (rencana mulai kirim)
    cy.get('#tanggal_mulai_kontrak')
      .type(dates.mulai + '{enter}')
      .should('have.value', dates.mulai)
      // .type('19/09/2025 14:32{enter}')
      // .should('have.value', '19/09/2025 14:32')

    //pilih tanggal lelang (rencana akhir kirim)
    cy.get('#tanggal_selesai_kontrak')
      .type(dates.akhir + '{enter}')
      .should('have.value', dates.akhir)
      // .type('19/09/2026 14:32{enter}')
      // .should('have.value', '19/09/2026 14:32')

    //biaya termasuk
    cy.get('#biaya_asal_all').click()
    cy.get('#biaya_tujuan_all').click()
    cy.get('#biaya_lainnya_all').click()

    // sk
    lelang.HrgTrmsk.type('Kawalan Asal & Kawalan Tujuan')
    lelang.HrgTdkTrmsk.type('Forklift')

    //dokumen penagihan
    cy.get('#dok_penagihan_all').click()
    lelang.DokPenagihan.type('Invoice Asli 1Lembar')
    cy.get('#budget_pengiriman').type('1000000')
    cy.get('#btn-NPWPNYA').attachFile('dokumen/dok_lelang.pdf')
    cy.get('#fileNPWPID').should('have.value', 'dok_lelang.pdf')

    //pilih pelabuhan
    lelang.PelabuhanAsal.type('Kota Bengkulu{enter}')
    lelang.PelabuhanTujuan.type('Kota Bima{enter}')

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
    cy.get('#search_bidder').type('(QC){enter}')
    cy.get('#pilih_semua_bidder').click()
    cy.get('#tombol_lanjutkan').click()
    cy.wait(5000) // tunggu 5 detik

    cy.get('.alert')
      .should('be.visible')
      .and('contain', 'Anda berhasil membuat pengajuan lelang')
  });

  //tambah lelang normal dibuka
  it('tambah_lelang_normal_dbuka', () => {
    cy.visit('https://phbidlautdev.prahu-hub.com/user/login')
    cy.get('.heading_1').should('have.text','LOGIN')
    accountphbl.BidOwner()
    accountphbl.PassAkun()
    accountphbl.BtnLogin()
    cy.get('.mb_20 > .col-12 > div > :nth-child(2)').should('have.text','Cari Penawaran Lelang')
    cy.get('.link_1').click()
    cy.isiNomorLelang('NRML')
    // cy.get('#nomor_lelang').type('LELANGIK/09/2025/NRML#3')
    
    const lelang = new FormLelang ()    
    const dates = LlgTtp.generateTutup ()
    //pilih tanggal lelang (buka lelang)
    cy.get('#tanggal_buka_lelang')
      .type(dates.buka + '{enter}')
      .should('have.value', dates.buka)
      // .type('19/09/2025 14:30{enter}')
      // .should('have.value', '19/09/2025 14:30')

    //pilih tanggal lelang (tutup lelang)
    cy.get('#tanggal_tutup_lelang')
      .type(dates.tutup + '{enter}')
      .should('have.value', dates.tutup)
      // .type('19/09/2025 14:31{enter}')
      // .should('have.value', '19/09/2025 14:31')

    //pilih tanggal lelang (rencana mulai kirim)
    cy.get('#tanggal_mulai_kontrak')
      .type(dates.mulai + '{enter}')
      .should('have.value', dates.mulai)
      // .type('19/09/2025 14:32{enter}')
      // .should('have.value', '19/09/2025 14:32')

    //pilih tanggal lelang (rencana akhir kirim)
    cy.get('#tanggal_selesai_kontrak')
      .type(dates.akhir + '{enter}')
      .should('have.value', dates.akhir)
      // .type('19/09/2026 14:32{enter}')
      // .should('have.value', '19/09/2026 14:32')

    //biaya termasuk
    cy.get('#biaya_asal_all').click()
    cy.get('#biaya_tujuan_all').click()
    cy.get('#biaya_lainnya_all').click()

    // sk
    lelang.HrgTrmsk.type('Kawalan Asal & Kawalan Tujuan')
    lelang.HrgTdkTrmsk.type('Forklift')

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
    cy.get('#search_bidder').type('(QC){enter}')
    cy.get('#pilih_semua_bidder').click()
    cy.get('#tombol_lanjutkan').click()
    cy.wait(5000) // tunggu 5 detik

      cy.get('.alert')
      .should('be.visible')
      .and('contain', 'Anda berhasil membuat pengajuan lelang')
  });

  //tambah lelang normal tanggal mulai kirim h+1bulan
  it('tambah_lelang_Normal_mulaikirim', () => {
    cy.visit('https://phbidlautdev.prahu-hub.com/user/login')
    cy.get('.heading_1').should('have.text','LOGIN')
    accountphbl.BidOwner()
    accountphbl.PassAkun()
    accountphbl.BtnLogin()
    cy.get('.mb_20 > .col-12 > div > :nth-child(2)').should('have.text','Cari Penawaran Lelang')
    cy.get('.link_1').click()
    cy.isiNomorLelang('NRML')
    // cy.get('#nomor_lelang').type('LELANGIK/09/2025/NRML#3')

    const lelang = new FormLelang ()    
    const dates = LlgMlai.generateMulai ()
    //pilih tanggal lelang (buka lelang)
    cy.get('#tanggal_buka_lelang')
      .type(dates.buka + '{enter}')
      .should('have.value', dates.buka)
      // .type('19/09/2025 14:30{enter}')
      // .should('have.value', '19/09/2025 14:30')

    //pilih tanggal lelang (tutup lelang)
    cy.get('#tanggal_tutup_lelang')
      .type(dates.tutup + '{enter}')
      .should('have.value', dates.tutup)
      // .type('19/09/2025 14:31{enter}')
      // .should('have.value', '19/09/2025 14:31')

    //pilih tanggal lelang (rencana mulai kirim)
    cy.get('#tanggal_mulai_kontrak')
      .type(dates.mulai + '{enter}')
      .should('have.value', dates.mulai)
      // .type('19/09/2025 14:32{enter}')
      // .should('have.value', '19/09/2025 14:32')

    //pilih tanggal lelang (rencana akhir kirim)
    cy.get('#tanggal_selesai_kontrak')
      .type(dates.akhir + '{enter}')
      .should('have.value', dates.akhir)
      // .type('19/09/2026 14:32{enter}')
      // .should('have.value', '19/09/2026 14:32')

    //biaya termasuk
    cy.get('#biaya_asal_all').click()
    cy.get('#biaya_tujuan_all').click()
    cy.get('#biaya_lainnya_all').click()

    // sk
    lelang.HrgTrmsk.type('Kawalan Asal & Kawalan Tujuan')
    lelang.HrgTdkTrmsk.type('Forklift')

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
    cy.get('#search_bidder').type('(QC){enter}')
    cy.get('#pilih_semua_bidder').click()
    cy.get('#tombol_lanjutkan').click()
    cy.wait(5000) // tunggu 5 detik

    cy.get('.alert')
      .should('be.visible')
      .and('contain', 'Anda berhasil membuat pengajuan lelang')
  });

  //tambah lelang normal tanggal akhir kirim h+1bulan
  it('tambah_lelang_normal_akhirkirim', () => {
    cy.visit('https://phbidlautdev.prahu-hub.com/user/login')
    cy.get('.heading_1').should('have.text','LOGIN')
    accountphbl.BidOwner()
    accountphbl.PassAkun()
    accountphbl.BtnLogin()
    cy.get('.mb_20 > .col-12 > div > :nth-child(2)').should('have.text','Cari Penawaran Lelang')
    cy.get('.link_1').click()
    cy.isiNomorLelang('NRML')
    // cy.get('#nomor_lelang').type('LELANGIK/09/2025/NRML#3')
    
    const lelang = new FormLelang ()    
    const dates = LlgAkhr.generateAkhir ()
    //pilih tanggal lelang (buka lelang)
    cy.get('#tanggal_buka_lelang')
      .type(dates.buka + '{enter}')
      .should('have.value', dates.buka)
      // .type('19/09/2025 14:30{enter}')
      // .should('have.value', '19/09/2025 14:30')

    //pilih tanggal lelang (tutup lelang)
    cy.get('#tanggal_tutup_lelang')
      .type(dates.tutup + '{enter}')
      .should('have.value', dates.tutup)
      // .type('19/09/2025 14:31{enter}')
      // .should('have.value', '19/09/2025 14:31')

    //pilih tanggal lelang (rencana mulai kirim)
    cy.get('#tanggal_mulai_kontrak')
      .type(dates.mulai + '{enter}')
      .should('have.value', dates.mulai)
      // .type('19/09/2025 14:32{enter}')
      // .should('have.value', '19/09/2025 14:32')

    //pilih tanggal lelang (rencana akhir kirim)
    cy.get('#tanggal_selesai_kontrak')
      .type(dates.akhir + '{enter}')
      .should('have.value', dates.akhir)
      // .type('19/09/2026 14:32{enter}')
      // .should('have.value', '19/09/2026 14:32')

    //biaya termasuk
    cy.get('#biaya_asal_all').click()
    cy.get('#biaya_tujuan_all').click()
    cy.get('#biaya_lainnya_all').click()

    // sk
    lelang.HrgTrmsk.type('Kawalan Asal & Kawalan Tujuan')
    lelang.HrgTdkTrmsk.type('Forklift')

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
    cy.get('#search_bidder').type('(QC){enter}')
    cy.get('#pilih_semua_bidder').click()
    cy.get('#tombol_lanjutkan').click()
    cy.wait(5000) // tunggu 5 detik

    cy.get('.alert')
      .should('be.visible')
      .and('contain', 'Anda berhasil membuat pengajuan lelang')
  });

  //lelang normal pilih dari history
  it('lelang_normal_pilih_history', () => {
    cy.visit('https://phbidlautdev.prahu-hub.com/user/login')
    cy.get('.heading_1').should('have.text','LOGIN')
    accountphbl.BidOwner()
    accountphbl.PassAkun()
    accountphbl.BtnLogin()
    cy.get('.mb_20 > .col-12 > div > :nth-child(2)').should('have.text','Cari Penawaran Lelang')
    cy.get('.link_1').click()
    cy.isiNomorLelang('NRML')
    // cy.get('#nomor_lelang').type('LELANGIK/09/2025/NRML#4')
    
    const dates = LlgAkhr.generateAkhir ()
    //pilih tanggal lelang (buka lelang)
    cy.get('#tanggal_buka_lelang')
      .type(dates.buka + '{enter}')
      .should('have.value', dates.buka)
      // .type('15/09/2025 14:30{enter}')
      // .should('have.value', '15/09/2025 14:30')

    //pilih tanggal lelang (tutup lelang)
    cy.get('#tanggal_tutup_lelang')
      .type(dates.tutup + '{enter}')
      .should('have.value', dates.tutup)
      // .type('15/09/2025 14:31{enter}')
      // .should('have.value', '15/09/2025 14:31')

    //pilih tanggal lelang (rencana mulai kirim)
    cy.get('#tanggal_mulai_kontrak')
      .type(dates.mulai + '{enter}')
      .should('have.value', dates.mulai)
      // .type('15/09/2025 14:32{enter}')
      // .should('have.value', '15/09/2025 14:32')

    //pilih tanggal lelang (rencana akhir kirim)
    cy.get('#tanggal_selesai_kontrak')
      .type(dates.akhir + '{enter}')
      .should('have.value', dates.akhir)
      // .type('15/09/2026 14:32{enter}')
      // .should('have.value', '15/09/2026 14:32')

    // cek history
    cy.get('#gunakan_data_lelang_lama').click()
    cy.get('#tgl_awal')
      .clear()
      .type('01/09/2025{enter}')
      .should('have.value', '01/09/2025')
    cy.wait(2000) // tunggu 2 detik

    cy.get('#tgl_akhir')
      .clear()
      .type('30/11/2025{enter}')
      .should('have.value', '30/11/2025')
    cy.wait(2000) // tunggu 2 detik

    cy.get('#lanjutcari').click()
    cy.wait(5000) // tunggu 5 detik

    //pilih data lelang
    cy.get('#select2-pilih_lelang_lama-container')
      .type('Lelang/IK/0002{enter}')

  });

  //tambah lelang normal pilih dari history
  it('tambah_lelang_normal_pilih_history', () => {
    cy.visit('https://phbidlautdev.prahu-hub.com/user/login')
    cy.get('.heading_1').should('have.text','LOGIN')
    accountphbl.BidOwner()
    accountphbl.PassAkun()
    accountphbl.BtnLogin()
    cy.get('.mb_20 > .col-12 > div > :nth-child(2)').should('have.text','Cari Penawaran Lelang')
    cy.get('.link_1').click()
    cy.isiNomorLelang('NRML')
    // cy.get('#nomor_lelang').type('LELANGIK/09/2025/NRML#4')
    
    const dates =LlgAkhr.generateAkhir ()
    //pilih tanggal lelang (buka lelang)
    cy.get('#tanggal_buka_lelang')
      .type(dates.buka + '{enter}')
      .should('have.value', dates.buka)
      // .type('15/09/2025 14:30{enter}')
      // .should('have.value', '15/09/2025 14:30')

    //pilih tanggal lelang (tutup lelang)
    cy.get('#tanggal_tutup_lelang')
      .type(dates.tutup + '{enter}')
      .should('have.value', dates.tutup)
      // .type('15/09/2025 14:31{enter}')
      // .should('have.value', '15/09/2025 14:31')

    //pilih tanggal lelang (rencana mulai kirim)
    cy.get('#tanggal_mulai_kontrak')
      .type(dates.mulai + '{enter}')
      .should('have.value', dates.mulai)
      // .type('15/09/2025 14:32{enter}')
      // .should('have.value', '15/09/2025 14:32')

    //pilih tanggal lelang (rencana akhir kirim)
    cy.get('#tanggal_selesai_kontrak')
      .type(dates.akhir + '{enter}')
      .should('have.value', dates.akhir)
      // .type('15/09/2026 14:32{enter}')
      // .should('have.value', '15/09/2026 14:32')

    // cek history
    cy.get('#gunakan_data_lelang_lama').click()
    cy.get('#tgl_awal')
      .clear()
      .type('01/09/2025{enter}')
      .should('have.value', '01/09/2025')
    cy.wait(2000) // tunggu 2 detik

    cy.get('#tgl_akhir')
      .clear()
      .type('30/11/2025{enter}')
      .should('have.value', '30/11/2025')
    cy.wait(2000) // tunggu 2 detik

    cy.get('#lanjutcari').click()
    cy.wait(5000) // tunggu 5 detik

    //pilih data lelang
    cy.get('#select2-pilih_lelang_lama-container')
      .type('Lelang/IK/0002{enter}')
    cy.wait(5000) // tunggu 5 detik
   
    cy.get('#tombol_lanjutkan').click()

    //pilih peserta lelang
    // cy.get('#search_bidder').type('(IK){enter}')
    cy.get('#pilih_semua_bidder').click()
    cy.get('#tombol_lanjutkan').click()
    cy.wait(5000) // tunggu 5 detik

      cy.get('.alert')
      .should('be.visible')
      .and('contain', 'Anda berhasil membuat pengajuan lelang')
  });

  //tambah lelang md
  it('tambah_lelang_md', () => {
    cy.visit('https://phbidlautdev.prahu-hub.com/user/login')
    cy.get('.heading_1').should('have.text','LOGIN')
    accountphbl.BidOwner()
    accountphbl.PassAkun()
    accountphbl.BtnLogin()
    cy.get('.mb_20 > .col-12 > div > :nth-child(2)').should('have.text','Cari Penawaran Lelang')
    cy.get('.link_1').click()
    cy.isiNomorLelang('MLTD')
    // cy.get('#nomor_lelang').type('LELANGIK/09/2025/NRML#5')

    const lelang = new FormLelang ()    
    const dates = LlgAkhr.generateAkhir()
    //pilih tanggal lelang (buka lelang)
    cy.get('#tanggal_buka_lelang')
      .type(dates.buka + '{enter}')
      .should('have.value', dates.buka)
    // .type('15/09/2025 14:30{enter}')
    // .should('have.value', '15/09/2025 14:30')

    //pilih tanggal lelang (tutup lelang)
    cy.get('#tanggal_tutup_lelang')
      .type(dates.tutup + '{enter}')
      .should('have.value', dates.tutup)
    // .type('15/09/2025 14:31{enter}')
    // .should('have.value', '15/09/2025 14:31')

    //pilih tanggal lelang (rencana mulai kirim)
    cy.get('#tanggal_mulai_kontrak')
      .type(dates.mulai + '{enter}')
      .should('have.value', dates.mulai)
    // .type('15/09/2025 14:32{enter}')
    // .should('have.value', '15/09/2025 14:32')

    //pilih tanggal lelang (rencana akhir kirim)
    cy.get('#tanggal_selesai_kontrak')
      .type(dates.akhir + '{enter}')
      .should('have.value', dates.akhir)
    // .type('15/09/2026 14:32{enter}')
    // .should('have.value', '15/09/2026 14:32')

    //biaya termasuk
    cy.get('#biaya_asal_all').click()
    cy.get('#biaya_tujuan_all').click()
    cy.get('#biaya_lainnya_all').click()

    // sk
    lelang.HrgTrmsk.type('Kawalan Asal & Kawalan Tujuan')
    lelang.HrgTdkTrmsk.type('Forklift')

    //dokumen penagihan
    cy.get('#dok_penagihan_all').click()
    cy.get('#catatan_tambahan').type('Invoice Asli 1Lembar')
    cy.get('#budget_pengiriman').type('1000000')

    cy.get('#radioMultidrop').click()

    //pilih pelabuhan
    cy.get('#select2-pelabuhan_asal_multidrop-container').type('Kota Bengkulu{enter}')
    cy.get('#select2-pelabuhan_tujuan_multidrop-container').type('Kota Bima{enter}')

    //tempat asal
    cy.get('#alamat_pic_asal_multidrop')
      .type('Jl. Rajawali No.109, Kemayoran, Kec. Krembangan, Surabaya, Jawa Timur 60176')

    cy.get('#select2-id_kota_asal_multidrop-container').type('Kab. Bungo{enter}')
    cy.get('#nama_pic_asal_multidrop').type('Ikhsan Asal')
    cy.get('#telp_pic_asal_multidrop').type('083830011881')

    //tempat tujuan md 1
    cy.get('#alamat_pic_asal_multidropOPPP')
      .type('Jl. Rajawali No.109, Kemayoran, Kec. Krembangan, Surabaya, Jawa Timur 60176')
    cy.get('[id^="select2-kota_tujuan_multidrop"]')
      .eq(0).type('Kab. Empat Lawang{enter}')
    cy.get(':nth-child(4) > .col-width-19_ > .form-group > .form-control')
      .type('Ikhsan Tujuan')
    cy.get(':nth-child(4) > .col-width-19 > .form-group > .form-control')
      .eq(0).type('083830011881')

    //tempat tujuan md 2
    cy.get(':nth-child(5) > .col-md-12 > .form-group > .form-control')
      .type('Jl. Mangga Muda')
    cy.get('[id^="select2-kota_tujuan_multidrop"]')
      .eq(1).type('Kab. Agam{enter}')
    cy.get(':nth-child(5) > .col-width-19_ > .form-group > .form-control')
      .type('Ikhsan Tujuan 2')
    cy.get(':nth-child(5) > .col-width-19 > .form-group > .form-control')
      .type('0838300118812')

    //tambah baris
    cy.get('#tombolTambahTujuan > .link_2').click()

    //tempat tujuan md 3
    cy.get(':nth-child(1) > .row > .col-md-12 > .form-group > .form-control')
      .type('Jl. Ikan Dorang')
    cy.get('[id^="select2-kota_tujuan_multidrop"]')
      .eq(2).type('Kab. Bandung Barat{enter}')
    cy.get(':nth-child(1) > .row > .col-width-19_ > .form-group > .form-control')
      .type('Ikhsan Tujuan 3')
    cy.get('.col-md-3 > .form-group > .form-control')
      .type('0838300118813')

    //informasi kontainer
    cy.get('.select2-search__field').type('20 DRY{enter}')
    cy.get('.select2-search__field').type('20 ISOTANK{enter}')
    
    cy.get('#volume_pengiriman').type('2 Unit Tiap Minggu')
    cy.get('#deskripsi_barang').type('Barang Sembako')
    cy.get('#tombol_lanjutkan').click()

    //pilih peserta lelang
    // cy.get('#search_bidder').type('(IK){enter}')
    cy.get('#pilih_semua_bidder').click()
    cy.get('#tombol_lanjutkan').click()
    cy.wait(5000) // tunggu 5 detik

    cy.get('.alert')
      .should('be.visible')
      .and('contain', 'Anda berhasil membuat pengajuan lelang')
  });

  //lelang md pilih dari history
  it('lelang_md_pilih_history', () => {
    cy.visit('https://phbidlautdev.prahu-hub.com/user/login')
    cy.get('.heading_1').should('have.text','LOGIN')
    accountphbl.BidOwner()
    accountphbl.PassAkun()
    accountphbl.BtnLogin()
    cy.get('.mb_20 > .col-12 > div > :nth-child(2)').should('have.text','Cari Penawaran Lelang')
    cy.get('.link_1').click()
    cy.isiNomorLelang('MLTD')
    // cy.get('#nomor_lelang').type('LELANGIK/09/2025/NRML#6')
    
    const lelang = new FormLelang ()    
    const dates = LlgAkhr.generateAkhir()
    //pilih tanggal lelang (buka lelang)
    cy.get('#tanggal_buka_lelang')
      .type(dates.buka + '{enter}')
      .should('have.value', dates.buka)
    // .type('15/09/2025 14:30{enter}')
    // .should('have.value', '15/09/2025 14:30')

    //pilih tanggal lelang (tutup lelang)
    cy.get('#tanggal_tutup_lelang')
      .type(dates.tutup + '{enter}')
      .should('have.value', dates.tutup)
    // .type('15/09/2025 14:31{enter}')
    // .should('have.value', '15/09/2025 14:31')

    //pilih tanggal lelang (rencana mulai kirim)
    cy.get('#tanggal_mulai_kontrak')
      .type(dates.mulai + '{enter}')
      .should('have.value', dates.mulai)
    // .type('15/09/2025 14:32{enter}')
    // .should('have.value', '15/09/2025 14:32')

    //pilih tanggal lelang (rencana akhir kirim)
    cy.get('#tanggal_selesai_kontrak')
      .type(dates.akhir + '{enter}')
      .should('have.value', dates.akhir)
    // .type('15/09/2026 14:32{enter}')
    // .should('have.value', '15/09/2026 14:32')

    // cek history
    cy.get('#gunakan_data_lelang_lama').click()
    cy.get('#tgl_awal')
      .clear()
      .type('01/09/2025{enter}')
      .should('have.value', '01/09/2025')
    cy.wait(2000) // tunggu 2 detik

    cy.get('#tgl_akhir')
      .clear()
      .type('30/11/2025{enter}')
      .should('have.value', '30/11/2025')
    cy.wait(2000) // tunggu 2 detik

    cy.get('#lanjutcari').click()
    cy.wait(5000) // tunggu 5 detik


    //pilih data lelang
    cy.get('#select2-pilih_lelang_lama-container')
      .type('LLGIK/MLTD-02{enter}')

  });

  //lelang md pilih dari history
  it('tambah_lelang_md_pilih_history', () => {
    cy.visit('https://phbidlautdev.prahu-hub.com/user/login')
    cy.get('.heading_1').should('have.text','LOGIN')
    accountphbl.BidOwner()
    accountphbl.PassAkun()
    accountphbl.BtnLogin()
    cy.get('.mb_20 > .col-12 > div > :nth-child(2)').should('have.text','Cari Penawaran Lelang')
    cy.get('.link_1').click()
    cy.isiNomorLelang('MLTD')
    // cy.get('#nomor_lelang').type('LELANGIK/09/2025/NRML#6')
    
    const lelang = new FormLelang ()    
    const dates = LlgAkhr.generateAkhir()
    //pilih tanggal lelang (buka lelang)
    cy.get('#tanggal_buka_lelang')
     .type(dates.buka + '{enter}')
      .should('have.value', dates.buka)
    // .type('15/09/2025 14:30{enter}')
    // .should('have.value', '15/09/2025 14:30')

    //pilih tanggal lelang (tutup lelang)
    cy.get('#tanggal_tutup_lelang')
      .type(dates.tutup + '{enter}')
     .should('have.value', dates.tutup)
    // .type('15/09/2025 14:31{enter}')
    // .should('have.value', '15/09/2025 14:31')

  //pilih tanggal lelang (rencana mulai kirim)
  cy.get('#tanggal_mulai_kontrak')
    .type(dates.mulai + '{enter}')
    .should('have.value', dates.mulai)
    // .type('15/09/2025 14:32{enter}')
    // .should('have.value', '15/09/2025 14:32')

  //pilih tanggal lelang (rencana akhir kirim)
  cy.get('#tanggal_selesai_kontrak')
    .type(dates.akhir + '{enter}')
    .should('have.value', dates.akhir)
    // .type('15/09/2026 14:32{enter}')
    // .should('have.value', '15/09/2026 14:32')

    // cek history
    cy.get('#gunakan_data_lelang_lama').click()
    cy.get('#tgl_awal')
      .clear()
      .type('01/09/2025{enter}')
      .should('have.value', '01/09/2025')
    cy.wait(2000) // tunggu 2 detik

    cy.get('#tgl_akhir')
      .clear()
      .type('30/11/2025{enter}')
      .should('have.value', '30/11/2025')
    cy.wait(2000) // tunggu 2 detik

    cy.get('#lanjutcari').click()
    cy.wait(5000) // tunggu 5 detik


    //pilih data lelang
    cy.get('#select2-pilih_lelang_lama-container')
      .type('LLGIK/MLTD-02{enter}')
    cy.wait(5000) // tunggu 5 detik

    cy.get('#tombol_lanjutkan').click()

    //pilih peserta lelang
    // cy.get('#search_bidder').type('(IK){enter}')
    cy.get('#pilih_semua_bidder').click()
    cy.get('#tombol_lanjutkan').click()
    cy.wait(5000) // tunggu 5 detik

    cy.get('.alert')
      .should('be.visible')
      .and('contain', 'Anda berhasil membuat pengajuan lelang')

  });

})