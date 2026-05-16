class CheckoutPage {
  elements = {
    firstName: () => cy.get('[data-test="firstName"]'),
    lastName: () => cy.get('[data-test="lastName"]'),
    postalCode: () => cy.get('[data-test="postalCode"]'),
    continueButton: () => cy.get('[data-test="continue"]'),
    finishButton: () => cy.get('[data-test="finish"]'),
    cancelButton: () => cy.get('[data-test="cancel"]'),
    overviewTitle: () => cy.contains('.title', 'Checkout: Overview'),
    completeHeader: () => cy.get('.complete-header'),
  };

  fillCustomerInfo({ firstName, lastName, postalCode }) {
    this.elements.firstName().type(firstName);
    this.elements.lastName().type(lastName);
    this.elements.postalCode().type(postalCode);
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
