describe('Carrinho de compras', () => {
  beforeEach(() => {
    cy.login();
  });

  it('Deve adicionar um produto ao carrinho', () => {
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    cy.get('.shopping_cart_badge').should('contain', '1');

    cy.get('.shopping_cart_link').click();
    cy.url().should('include', '/cart.html');
    cy.contains('Sauce Labs Backpack').should('be.visible');
  });

  it('Deve remover um produto do carrinho', () => {
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    cy.get('.shopping_cart_badge').should('contain', '1');

    cy.get('.shopping_cart_link').click();
    cy.get('[data-test="remove-sauce-labs-backpack"]').click();

    cy.get('.shopping_cart_badge').should('not.exist');
    cy.contains('Your Cart').should('be.visible');
    cy.contains('Sauce Labs Backpack').should('not.exist');
  });

  it('Deve adicionar múltiplos produtos ao carrinho', () => {
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click();

    cy.get('.shopping_cart_badge').should('contain', '2');

    cy.get('.shopping_cart_link').click();
    cy.contains('Sauce Labs Backpack').should('be.visible');
    cy.contains('Sauce Labs Bike Light').should('be.visible');
  });

 it('Deve mudar o texto do botão ao adicionar e remover do carrinho', () => {
  const addButton = '[data-test="add-to-cart-sauce-labs-backpack"]';
  const removeButton = '[data-test="remove-sauce-labs-backpack"]';

  cy.get(addButton).click();
  cy.get(removeButton).should('be.visible');
  cy.get(removeButton).click();
  cy.get(addButton).should('be.visible');
});

  it('Deve finalizar a compra e chegar na página de checkout', () => {
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    cy.get('.shopping_cart_link').click();

    cy.get('[data-test="checkout"]').click();
    cy.url().should('include', '/checkout-step-one.html');

    cy.get('[data-test="firstName"]').type('Gustavo');
    cy.get('[data-test="lastName"]').type('Silva');
    cy.get('[data-test="postalCode"]').type('12345');

    cy.get('[data-test="continue"]').click();
    cy.url().should('include', '/checkout-step-two.html');

    cy.contains('Sauce Labs Backpack').should('be.visible');

    cy.get('[data-test="finish"]').click();
    cy.url().should('include', '/checkout-complete.html');
    cy.contains('Thank you for your order').should('be.visible');
  });
});
