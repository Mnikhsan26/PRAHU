describe('phbidlaut login', () => {
   //tambah harga
  it('hapus_harga', () => {
    cy.visit('https://phbidlautdemo.prahu-hub.com/user/login')
    cy.get('.heading_1').should('have.text','LOGIN')
    cy.get('#email').type('partner.ph2021@gmail.com')
    cy.get('#password').type('qwerty12345')
    cy.get('#submitLogin').click()
    cy.get('.col-12 > div > :nth-child(2)').should('have.text','Daftar Pengajuan Lelang')

    //masuk menu harga & jadwal
    cy.get(':nth-child(4) > .sidebar_icon').click()
    cy.wait(2000) // tunggu 2 detik
    
    //hapus harga baris 2
    cy.get('#delete_kelas .fa-solid')
      .eq(1)
      .click({ force: true })
    cy.wait(2000) // tunggu 2 detik

    cy.get('.swal2-confirm').click()
    cy.wait(2000) // tunggu 2 detik

    cy.get('#swal2-title').should('have.text', 'Berhasil')
    cy.get('.swal2-confirm').click()

    cy.get('.alert')
      .should('be.visible')
      .and('contain', 'Anda berhasil menghapus harga')

    cy.wait(3000) // tunggu 3 detik


    //hapus harga baris 1
    cy.get('#delete_kelas .fa-solid')
      .eq(0)
      .click({ force: true })
    cy.wait(2000) // tunggu 2 detik

    cy.get('.swal2-confirm').click()
    cy.wait(2000) // tunggu 2 detik

    cy.get('#swal2-title').should('have.text', 'Berhasil')
    cy.get('.swal2-confirm').click()

    cy.get('.alert')
      .should('be.visible')
      .and('contain', 'Anda berhasil menghapus harga')
      
  });

})