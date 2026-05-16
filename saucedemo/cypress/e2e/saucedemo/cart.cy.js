import InventoryPage from '../../pages/InventoryPage';
import CartPage from '../../pages/CartPage';

describe('Carrinho de compras', () => {
  beforeEach(() => {
    cy.login();
  });

  it('deve adicionar um produto ao carrinho', () => {
    InventoryPage.addToCart('sauce-labs-backpack');
    InventoryPage.elements.cartBadge().should('contain', '1');

    InventoryPage.openCart();
    cy.url().should('include', '/cart.html');
    CartPage.assertItemVisible('Sauce Labs Backpack');
  });

  it('deve remover um produto do carrinho', () => {
    InventoryPage.addToCart('sauce-labs-backpack');
    InventoryPage.elements.cartBadge().should('contain', '1');

    InventoryPage.openCart();
    CartPage.removeItem('sauce-labs-backpack');

    InventoryPage.elements.cartBadge().should('not.exist');
    CartPage.elements.title().should('be.visible');
    CartPage.assertItemNotVisible('Sauce Labs Backpack');
  });

  it('deve adicionar múltiplos produtos ao carrinho', () => {
    InventoryPage.addToCart('sauce-labs-backpack');
    InventoryPage.addToCart('sauce-labs-bike-light');
    InventoryPage.elements.cartBadge().should('contain', '2');

    InventoryPage.openCart();
    CartPage.assertItemVisible('Sauce Labs Backpack');
    CartPage.assertItemVisible('Sauce Labs Bike Light');
  });

  it('deve alternar o botão entre adicionar e remover', () => {
    const productId = 'sauce-labs-backpack';

    cy.get(`[data-test="add-to-cart-${productId}"]`).click();
    cy.get(`[data-test="remove-${productId}"]`).should('be.visible').click();
    cy.get(`[data-test="add-to-cart-${productId}"]`).should('be.visible');
  });
});
