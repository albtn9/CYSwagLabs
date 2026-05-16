import LoginPage from '../../pages/LoginPage';
import InventoryPage from '../../pages/InventoryPage';

const viewports = [
  { label: 'mobile', width: 375, height: 667 },
  { label: 'tablet', width: 768, height: 1024 },
  { label: 'desktop', width: 1280, height: 720 },
];

describe('Responsividade', () => {
  viewports.forEach(({ label, width, height }) => {
    it(`deve exibir a página de login corretamente em ${label}`, () => {
      cy.viewport(width, height);
      LoginPage.visit();
      LoginPage.elements.loginButton().should('be.visible');
    });

    it(`deve exibir o inventário corretamente em ${label}`, () => {
      cy.viewport(width, height);
      cy.login();
      InventoryPage.elements.title().should('be.visible');
      cy.get('.inventory_list').should('be.visible');
    });
  });
});
