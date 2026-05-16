class InventoryPage {
  elements = {
    title: () => cy.contains('.title', 'Products'),
    sortSelect: () => cy.get('[data-test="product-sort-container"]'),
    productNames: () => cy.get('.inventory_item_name'),
    productPrices: () => cy.get('.inventory_item_price'),
    cartBadge: () => cy.get('.shopping_cart_badge'),
    cartLink: () => cy.get('.shopping_cart_link'),
    menuButton: () => cy.get('#react-burger-menu-btn'),
  };

  sortBy(option) {
    this.elements.sortSelect().select(option);
    return this;
  }

  getProductNames() {
    return this.elements.productNames().then(($els) =>
      [...$els].map((el) => el.innerText.trim())
    );
  }

  getProductPrices() {
    return this.elements.productPrices().then(($els) =>
      [...$els].map((el) => parseFloat(el.innerText.replace('$', '')))
    );
  }

  addToCart(productTestId) {
    cy.get(`[data-test="add-to-cart-${productTestId}"]`).click();
    return this;
  }

  openProductByName(productName) {
    cy.contains('.inventory_item_name', productName).click();
    return this;
  }

  openCart() {
    this.elements.cartLink().click();
    return this;
  }

  openMenu() {
    this.elements.menuButton().click();
    return this;
  }
}

export default new InventoryPage();
