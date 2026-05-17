class CheckoutPage {
  elements = {
    firstName: () => cy.get('[data-test="firstName"]'),
    lastName: () => cy.get('[data-test="lastName"]'),
    postalCode: () => cy.get('[data-test="postalCode"]'),
    continueButton: () => cy.get('[data-test="continue"]'),
    finishButton: () => cy.get('[data-test="finish"]'),
    cancelButton: () => cy.get('[data-test="cancel"]'),
    error: () => cy.get('[data-test="error"]'),
    overviewTitle: () => cy.contains('.title', 'Checkout: Overview'),
    completeHeader: () => cy.get('.complete-header'),
  };

  assertErrorContains(message) {
    this.elements.error().should('be.visible').and('contain', message);
    return this;
  }

  fillCustomerInfo({ firstName, lastName, postalCode } = {}) {
    if (firstName) this.elements.firstName().clear().type(firstName);
    if (lastName) this.elements.lastName().clear().type(lastName);
    if (postalCode) this.elements.postalCode().clear().type(postalCode);
    return this;
  }

  continue() {
    this.elements.continueButton().click();
    return this;
  }

  finish() {
    this.elements.finishButton().click();
    return this;
  }

  cancel() {
    this.elements.cancelButton().click();
    return this;
  }
}

export default new CheckoutPage();
