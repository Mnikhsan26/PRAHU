describe('phbidlaut login', () => {
   //Tambah harga
  it.skip('login_succes_email', () => {
    cy.visit('https://phbidlautdemo.prahu-hub.com/user/login')
    cy.get('.heading_1').should('have.text','LOGIN')
    cy.get('#email').type('partner.ph2021@gmail.com')
    cy.get('#password').type('qwerty12345')
    cy.get('#submitLogin').click()
    cy.get('.col-12 > div > :nth-child(2)').should('have.text','Daftar Pengajuan Lelang')

    //Masuk menu harga & jadwal
    cy.get(':nth-child(4) > .sidebar_icon').click()
    cy.wait(2000) // tunggu 2 detik
    cy.get('.am-for-pc > .tambahhover > .btn').click()
    cy.get('#select2-LelangID-container').type('Lelang/NMRL-01IK{enter}')
    cy.wait(2000) // tunggu 2 detik
    cy.get('#select2-PelayaranID-container').type('Meratus{enter}')
    cy.get('#select2-JenisKontainerID-container').type('20 DRY{enter}')
    cy.get('#harga').type(3560000)
    cy.get('#mulai_berlaku')
      .clear()
      .type('01/09/2025{enter}')
      .should('have.value', '01/09/2025')
    cy.get('#deskripsi').type('Belum termasuk biaya forklift')
    cy.get('#submitonce1').click()

    cy.get('.alert')
      .should('be.visible')
      .and('contain', 'Anda berhasil menambah harga')
  });


   //Tambah harga lebih dari satu
  it('login_succes_email', () => {
    cy.visit('https://phbidlautdemo.prahu-hub.com/user/login')
    cy.get('.heading_1').should('have.text','LOGIN')
    cy.get('#email').type('partner.ph2021@gmail.com')
    cy.get('#password').type('qwerty12345')
    cy.get('#submitLogin').click()
    cy.get('.col-12 > div > :nth-child(2)').should('have.text','Daftar Pengajuan Lelang')

    //Masuk menu harga & jadwal
    cy.get(':nth-child(4) > .sidebar_icon').click()
    cy.wait(2000) // tunggu 2 detik
    cy.get('.am-for-pc > .tambahhover > .btn').click()
    cy.get('#select2-LelangID-container').type('Lelang/NMRL-01IK{enter}')
    cy.wait(2000) // tunggu 2 detik
    
    cy.get('#select2-PelayaranID-container').type('Meratus{enter}')
    cy.get('#select2-JenisKontainerID-container').type('20 DRY{enter}')
    cy.get('#harga').type(3560000)
    cy.get('#mulai_berlaku')
      .clear()
      .type('01/09/2025{enter}')
      .should('have.value', '01/09/2025')
    cy.get('#deskripsi').type('Belum termasuk biaya forklift')

    //tambah baris 1
    cy.get('#add_menu > .link_2').click()

    cy.get('[id^="select2-PelayaranID"]')
      .eq(1).type('Meratus{enter}')

    cy.get('[id^="select2-JenisKontainerID"]')
      .eq(1).type('20 ISOTANK{enter}')

    cy.get('[id^="harga"]')
      .eq(1).type(342000)
    
    cy.get('[id^="mulai_berlaku"]')
      .eq(1)
      .clear()
      .type('01/09/2025{enter}')
      .should('have.value', '01/09/2025')
    
    cy.get('[id^="deskripsi"]')
      .eq(1)
      .type('Belum termasuk biaya forklift')

    //tambah baris 2
    cy.get('#add_menu > .link_2').click()

    cy.get('[id^="select2-PelayaranID"]')
      .eq(2).type('Meratus{enter}')

    cy.get('[id^="select2-JenisKontainerID"]')
      .eq(2).type('20 REEFER{enter}')

    cy.get('[id^="harga"]')
      .eq(2).type(3442000)
    
    cy.get('[id^="mulai_berlaku"]')
      .eq(2)
      .clear()
      .type('01/09/2025{enter}')
      .should('have.value', '01/09/2025')
    
    cy.get('[id^="deskripsi"]')
      .eq(2)
      .type('Belum termasuk biaya forklift')

    cy.get('#submitonce1').click()

    cy.get('.alert')
      .should('be.visible')
      .and('contain', 'Anda berhasil menambah harga')
  });



})