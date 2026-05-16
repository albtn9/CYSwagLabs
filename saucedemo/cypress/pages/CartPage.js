class CartPage {
  elements = {
    title: () => cy.contains('.title', 'Your Cart'),
    checkoutButton: () => cy.get('[data-test="checkout"]'),
    continueShopping: () => cy.get('[data-test="continue-shopping"]'),
    cartBadge: () => cy.get('.shopping_cart_badge'),
  };

  removeItem(productTestId) {
    cy.get(`[data-test="remove-${productTestId}"]`).click();
    return this;
  }

  proceedToCheckout() {
    this.elements.checkoutButton().click();
    return this;
  }

  continueShopping() {
    this.elements.continueShopping().click();
    return this;
  }

  assertItemVisible(productName) {
    cy.contains('.cart_item', productName).should('be.visible');
    return this;
  }

  assertItemNotVisible(productName) {
    cy.contains('.cart_item', productName).should('not.exist');
    return this;
  }
}

export default new CartPage();
