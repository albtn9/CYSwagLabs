# CYSwagLabs

Testes automatizados com **Cypress** para o [SauceDemo Swag Labs](https://www.saucedemo.com), seguindo o padrão **Page Object Model (POM)**.

## Cobertura dos requisitos

| Requisito | Status |
|-----------|--------|
| Login com diferentes tipos de usuários | `login.cy.js` |
| Ordenação e filtragem de produtos | `inventory.cy.js` |
| Fluxo completo de compra | `checkout.cy.js` |
| Remoção de itens do carrinho | `cart.cy.js` |
| Navegação entre páginas | `navigation.cy.js` |
| Logout | `logout.cy.js` |
| Testes de responsividade | `responsiveness.cy.js` |
| Testes de acessibilidade | `accessibility.cy.js` |
| Testes automatizados (CI) | GitHub Actions |

## Estrutura do projeto

```
saucedemo/
├── cypress/
│   ├── e2e/saucedemo/     # specs
│   ├── fixtures/          # dados de teste (usuários)
│   ├── pages/             # Page Objects (POM)
│   └── support/           # commands e setup
├── cypress.config.js
└── package.json
```

## Como executar

```bash
cd saucedemo
npm install
npm run cy:open   # modo interativo
npm run cy:run    # headless (CI)
```

## CI/CD

O workflow `.github/workflows/cypress.yml` executa os testes em cada push/PR na branch `main` 

## Autor

albtn9
