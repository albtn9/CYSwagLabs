import InventoryPage from '../../pages/InventoryPage';
import CartPage from '../../pages/CartPage';
import CheckoutPage from '../../pages/CheckoutPage';

describe('Fluxo completo de compra', () => {
  beforeEach(() => {
    cy.login();
  });

  it('deve realizar uma compra completa com sucesso', () => {
    InventoryPage.addToCart('sauce-labs-backpack');
    InventoryPage.elements.cartBadge().should('contain', '1');

    InventoryPage.openCart();
    cy.url().should('include', '/cart.html');
    CartPage.assertItemVisible('Sauce Labs Backpack');

    CartPage.proceedToCheckout();
    cy.url().should('include', '/checkout-step-one.html');

    CheckoutPage.fillCustomerInfo({
      firstName: 'João',
      lastName: 'Silva',
      postalCode: '12345',
    }).continue();

    cy.url().should('include', '/checkout-step-two.html');
    CheckoutPage.elements.overviewTitle().should('be.visible');
    cy.contains('Sauce Labs Backpack').should('be.visible');

    CheckoutPage.finish();
    cy.url().should('include', '/checkout-complete.html');
    CheckoutPage.elements
      .completeHeader()
      .should('contain', 'Thank you for your order!');
  });
});
