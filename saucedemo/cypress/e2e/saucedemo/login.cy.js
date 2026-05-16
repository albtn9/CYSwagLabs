import LoginPage from '../../pages/LoginPage';
import InventoryPage from '../../pages/InventoryPage';

describe('Login no SauceDemo', () => {
  beforeEach(() => {
    LoginPage.visit();
  });

  it('deve fazer login com standard_user', () => {
    cy.fixture('users').then(({ standard }) => {
      LoginPage.fillCredentials(standard.username, standard.password).submit();
    });

    cy.url().should('include', '/inventory.html');
    InventoryPage.elements.title().should('be.visible');
  });

  it('deve bloquear locked_out_user', () => {
    cy.fixture('users').then(({ lockedOut }) => {
      LoginPage.fillCredentials(lockedOut.username, lockedOut.password).submit();
      LoginPage.elements
        .error()
        .should('contain', 'Sorry, this user has been locked out');
    });
  });

  it('deve permitir login com problem_user', () => {
    cy.fixture('users').then(({ problem }) => {
      LoginPage.fillCredentials(problem.username, problem.password).submit();
    });

    cy.url().should('include', '/inventory.html');
  });

  it('deve permitir login com performance_glitch_user', () => {
    cy.fixture('users').then(({ performance }) => {
      LoginPage.fillCredentials(performance.username, performance.password).submit();
    });

    cy.url().should('include', '/inventory.html');
  });

  it('deve exibir erro com credenciais inválidas', () => {
    LoginPage.fillCredentials('standard_user', 'senha_errada').submit();
    LoginPage.elements
      .error()
      .should('contain', 'Username and password do not match');
  });
});
