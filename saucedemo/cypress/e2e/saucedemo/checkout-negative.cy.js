import InventoryPage from '../../pages/InventoryPage';
import CartPage from '../../pages/CartPage';
import CheckoutPage from '../../pages/CheckoutPage';

describe('Checkout — cenários negativos', () => {
  beforeEach(() => {
    cy.login();
    InventoryPage.addToCart('sauce-labs-backpack');
    InventoryPage.openCart();
    CartPage.proceedToCheckout();
    cy.url().should('include', '/checkout-step-one.html');
  });

  it('deve bloquear continuar sem preencher nenhum campo', () => {
    CheckoutPage.continue();
    CheckoutPage.assertErrorContains('First Name is required');
    cy.url().should('include', '/checkout-step-one.html');
  });

  it('deve bloquear continuar sem nome', () => {
    CheckoutPage.fillCustomerInfo({
      lastName: 'Silva',
      postalCode: '12345',
    }).continue();
    CheckoutPage.assertErrorContains('First Name is required');
  });

  it('deve bloquear continuar sem sobrenome', () => {
    CheckoutPage.fillCustomerInfo({
      firstName: 'João',
      postalCode: '12345',
    }).continue();
    CheckoutPage.assertErrorContains('Last Name is required');
  });

  it('deve bloquear continuar sem CEP', () => {
    CheckoutPage.fillCustomerInfo({
      firstName: 'João',
      lastName: 'Silva',
    }).continue();
    CheckoutPage.assertErrorContains('Postal Code is required');
  });
});
