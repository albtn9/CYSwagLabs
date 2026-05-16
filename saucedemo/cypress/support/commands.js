import LoginPage from '../pages/LoginPage';

Cypress.Commands.add(
  'login',
  (username = 'standard_user', password = 'secret_sauce') => {
    LoginPage.login(username, password);
    cy.url().should('include', '/inventory.html');
  }
);
