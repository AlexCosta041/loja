///<reference types="cypress" />

context('Compra', () => {
    it('Efetuar uma compra de produto', () => {
     cy.visit('/');
     cy.get(':nth-child(1) > ul > :nth-child(1) > .listagem-item > .acoes-produto > .botao').click();
     cy.get('.input-small').type('88158-99');
     cy.get('.btn').click();
     cy.get('div.principal > .acoes-produto > .comprar > .botao').click();
     cy.get('#usarCupom').type('FRETEGRATIS');
     cy.get('button').contains('Usar cupom').click();
     cy.get('button').contains('Finalizar compra').click();
      
     cy.get('#id_email_login').type('teste@lojasintegradas.com.br');
     cy.get('.submit-email').click();


    });
});