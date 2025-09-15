describe('phbidlaut login', () => {
   //tambah harga
  it('edit_harga', () => {
    cy.visit('https://phbidlautdemo.prahu-hub.com/user/login')
    cy.get('.heading_1').should('have.text','LOGIN')
    cy.get('#email').type('partner.ph2021@gmail.com')
    cy.get('#password').type('qwerty12345')
    cy.get('#submitLogin').click()
    cy.get('.col-12 > div > :nth-child(2)').should('have.text','Daftar Pengajuan Lelang')

    //masuk menu harga & jadwal
    cy.get(':nth-child(4) > .sidebar_icon').click()
    cy.wait(2000) // tunggu 2 detik
    
    //hapus harga
    cy.get('#delete_kelas .fa-solid')
      .eq(1)
      .click({ force: true })
    cy.wait(2000) // tunggu 2 detik

    cy.get('.swal2-confirm').click()
    cy.wait(2000) // tunggu 2 detik

    cy.get('.swal2-confirm')
      .eq('OK')
      // .should('have.text', 'OK')
      .click()

    cy.get('.alert')
      .should('be.visible')
      .and('contain', 'Anda berhasil mengedit harga')



    // cy.get('#select2-PelayaranID-container').type('MMM{enter}')
    // cy.get('#select2-JenisKontainerID-container').type('20 FR{enter}')
    // cy.get('#harga')
    //   .clear()
    //   .type(5000000)
    // cy.get('#mulai_berlaku')
    //   .clear()
    //   .type('02/09/2025{enter}')
    //   .should('have.value', '02/09/2025')
    // cy.get('#biaya_asal_all').click()
    // cy.get('#biaya_tujuan_all').click()
    // cy.get('#biaya_lainnya_all').click()
    // cy.get('#deskripsi_harga_rute').clear()
    // cy.get('#tombol_simpan').click()

    // cy.get('.alert')
    //   .should('be.visible')
    //   .and('contain', 'Anda berhasil mengedit harga')

  });

})