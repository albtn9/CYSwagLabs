import InventoryPage from '../../pages/InventoryPage';

const isSortedAsc = (values) =>
  values.every((value, index) => index === 0 || value >= values[index - 1]);

const isSortedDesc = (values) =>
  values.every((value, index) => index === 0 || value <= values[index - 1]);

describe('Ordenação e filtragem de produtos', () => {
  beforeEach(() => {
    cy.login();
  });

  it('deve ordenar produtos de A a Z', () => {
    InventoryPage.sortBy('az');
    InventoryPage.getProductNames().then((names) => {
      expect(names).to.deep.equal([...names].sort());
    });
  });

  it('deve ordenar produtos de Z a A', () => {
    InventoryPage.sortBy('za');
    InventoryPage.getProductNames().then((names) => {
      expect(names).to.deep.equal([...names].sort().reverse());
    });
  });

  it('deve ordenar produtos por preço crescente', () => {
    InventoryPage.sortBy('lohi');
    InventoryPage.getProductPrices().then((prices) => {
      expect(isSortedAsc(prices)).to.be.true;
    });
  });

  it('deve ordenar produtos por preço decrescente', () => {
    InventoryPage.sortBy('hilo');
    InventoryPage.getProductPrices().then((prices) => {
      expect(isSortedDesc(prices)).to.be.true;
    });
  });

  it('deve filtrar visualmente o primeiro produto por ordenação de preço', () => {
    InventoryPage.sortBy('lohi');
    InventoryPage.getProductPrices().then((prices) => {
      const cheapest = Math.min(...prices);
      cy.get('.inventory_item')
        .first()
        .find('.inventory_item_price')
        .should('contain', cheapest.toFixed(2));
    });
  });
});
