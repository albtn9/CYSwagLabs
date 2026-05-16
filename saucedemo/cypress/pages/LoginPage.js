class LoginPage {
  elements = {
    username: () => cy.get('[data-test="username"]'),
    password: () => cy.get('[data-test="password"]'),
    loginButton: () => cy.get('[data-test="login-button"]'),
    error: () => cy.get('[data-test="error"]'),
  };

  visit() {
    cy.visit('/');
    return this;
  }

  fillCredentials(username, password) {
    this.elements.username().clear().type(username);
    this.elements.password().clear().type(password);
    return this;
  }

  submit() {
    this.elements.loginButton().click();
    return this;
  }

  login(username, password) {
    this.visit();
    this.fillCredentials(username, password);
    this.submit();
    return this;
  }
}

export default new LoginPage();
