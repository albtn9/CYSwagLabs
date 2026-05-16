class ProductDetailPage {
  elements = {
    backButton: () => cy.get('[data-test="back-to-products"]'),
    addToCart: (productTestId) =>
      cy.get(`[data-test="add-to-cart-${productTestId}"]`),
    productName: () => cy.get('.inventory_details_name'),
  };

  goBackToInventory() {
    this.elements.backButton().click();
    return this;
  }
}

export default new ProductDetailPage();
