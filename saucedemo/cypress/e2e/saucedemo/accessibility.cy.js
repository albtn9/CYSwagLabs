import LoginPage from '../../pages/LoginPage';
import InventoryPage from '../../pages/InventoryPage';
import CartPage from '../../pages/CartPage';

const a11yOptions = {
  includedImpacts: ['critical', 'serious'],
};

const inventoryA11yOptions = {
  ...a11yOptions,
  rules: {
    'color-contrast': { enabled: false },
  },
};

describe('Acessibilidade', () => {
  it('não deve ter violações críticas na página de login', () => {
    LoginPage.visit();
    cy.injectAxe();
    cy.checkA11y(null, a11yOptions);
  });

  it('não deve ter violações críticas na listagem de produtos', () => {
    cy.login();
    InventoryPage.elements.title().should('be.visible');
    cy.injectAxe();
    cy.checkA11y('.inventory_list', inventoryA11yOptions);
  });

  it('não deve ter violações críticas no carrinho', () => {
    cy.login();
    InventoryPage.addToCart('sauce-labs-backpack');
    InventoryPage.openCart();
    CartPage.elements.title().should('be.visible');
    cy.injectAxe();
    cy.checkA11y(null, a11yOptions);
  });
});
