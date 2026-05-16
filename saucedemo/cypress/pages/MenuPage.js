class MenuPage {
  elements = {
    logoutLink: () => cy.get('#logout_sidebar_link'),
    allItemsLink: () => cy.get('#inventory_sidebar_link'),
    aboutLink: () => cy.get('#about_sidebar_link'),
  };

  logout() {
    this.elements.logoutLink().click();
    return this;
  }

  goToAllItems() {
    this.elements.allItemsLink().click();
    return this;
  }
}

export default new MenuPage();
