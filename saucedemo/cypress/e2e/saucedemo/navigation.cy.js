import InventoryPage from '../../pages/InventoryPage';
import ProductDetailPage from '../../pages/ProductDetailPage';
import CartPage from '../../pages/CartPage';
import CheckoutPage from '../../pages/CheckoutPage';
import MenuPage from '../../pages/MenuPage';

describe('Navegação entre páginas', () => {
  beforeEach(() => {
    cy.login();
  });

  it('deve navegar do inventário para detalhe do produto e voltar', () => {
    InventoryPage.openProductByName('Sauce Labs Backpack');
    cy.url().should('include', 'inventory-item.html');
    ProductDetailPage.elements.productName().should('contain', 'Sauce Labs Backpack');

    ProductDetailPage.goBackToInventory();
    cy.url().should('include', '/inventory.html');
    InventoryPage.elements.title().should('be.visible');
  });

  it('deve navegar do carrinho de volta ao inventário', () => {
    InventoryPage.addToCart('sauce-labs-backpack');
    InventoryPage.openCart();
    cy.url().should('include', '/cart.html');

    CartPage.continueShopping();
    cy.url().should('include', '/inventory.html');
  });

  it('deve navegar do checkout step one de volta ao carrinho', () => {
    InventoryPage.addToCart('sauce-labs-backpack');
    InventoryPage.openCart();
    CartPage.proceedToCheckout();
    cy.url().should('include', '/checkout-step-one.html');

    CheckoutPage.cancel();
    cy.url().should('include', '/cart.html');
    CartPage.elements.title().should('be.visible');
  });

  it('deve navegar pelo menu lateral para All Items', () => {
    InventoryPage.openMenu();
    MenuPage.goToAllItems();
    cy.url().should('include', '/inventory.html');
    InventoryPage.elements.title().should('be.visible');
  });
});
