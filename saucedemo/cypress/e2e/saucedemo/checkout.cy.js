describe('Fluxo completo de compra no SauceDemo', () => {
  beforeEach(() => {
    cy.login();
  });

  it('Deve realizar uma compra completa com sucesso', () => {
    // Adiciona um produto ao carrinho
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    cy.get('.shopping_cart_badge').should('contain', '1');

    // Vai para o carrinho
    cy.get('.shopping_cart_link').click();
    cy.url().should('include', '/cart.html');
    cy.contains('Sauce Labs Backpack').should('be.visible');

    // Clica em Checkout
    cy.get('[data-test="checkout"]').click();
    cy.url().should('include', '/checkout-step-one.html');

    // Preenche os dados de envio
    cy.get('[data-test="firstName"]').type('João');
    cy.get('[data-test="lastName"]').type('Silva');
    cy.get('[data-test="postalCode"]').type('12345');
    cy.get('[data-test="continue"]').click();

    // Verifica produto e finaliza
    cy.url().should('include', '/checkout-step-two.html');
    cy.contains('Sauce Labs Backpack').should('be.visible');
    cy.get('[data-test="finish"]').click();

    // Confirmação final
    cy.url().should('include', '/checkout-complete.html');
    cy.contains('Thank you for your order!').should('be.visible');
  });
});
