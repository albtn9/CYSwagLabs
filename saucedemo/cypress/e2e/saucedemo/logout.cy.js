import LoginPage from '../../pages/LoginPage';
import InventoryPage from '../../pages/InventoryPage';
import MenuPage from '../../pages/MenuPage';

describe('Logout do sistema', () => {
  beforeEach(() => {
    cy.fixture('users').then(({ standard }) => {
      LoginPage.login(standard.username, standard.password);
    });
  });

  it('deve fazer logout com sucesso', () => {
    InventoryPage.openMenu();
    MenuPage.logout();

    cy.url().should('eq', Cypress.config('baseUrl') + '/');
    LoginPage.elements.loginButton().should('be.visible');
  });
});
