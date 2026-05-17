# Responsividade — documentação QA

## Objetivo

Garantir que telas críticas permaneçam utilizáveis em larguras típicas de mobile, tablet e desktop, usando viewports do Cypress.

## Viewports testadas

Definidas em `cypress/e2e/saucedemo/responsiveness.cy.js`:

| Label | Largura | Altura | Perfil |
|-------|---------|--------|--------|
| `mobile` | 375 | 667 | iPhone SE / similar |
| `tablet` | 768 | 1024 | iPad retrato |
| `desktop` | 1280 | 720 | Laptop / monitor HD |

## Comportamento esperado

Para **cada** viewport acima:

| Tela | Assertion | Interpretação |
|------|-----------|---------------|
| Login | `[data-test="login-button"]` visível | Formulário acessível e botão clicável |
| Inventário (após login) | `.title` + `.inventory_list` visíveis | Listagem de produtos renderizada |

Fluxo: `cy.viewport(width, height)` → navegação → `should('be.visible')`.

## O que não é validado (limitações)

| Limitação | Impacto |
|-----------|---------|
| Apenas login e inventário | Carrinho, checkout e menu hambúrguer não têm spec de viewport |
| Sem validação de overflow/scroll | Conteúdo cortado horizontalmente pode passar |
| Sem screenshot baseline | Mudanças visuais sutis não são detectadas |
| Sem dispositivo real | Emulação Cypress ≠ Safari iOS / Chrome Android reais |
| Desktop 1280px | Não cobre ultrawide nem 4K |

## Riscos relacionados

Ver [risks.md](./risks.md) — item **R04** (cobertura superficial).

## Melhorias planejadas

Ver [improvements.md](./improvements.md) — responsividade em carrinho/checkout e testes visuais.

## Execução

```bash
cd saucedemo
npx cypress run --spec cypress/e2e/saucedemo/responsiveness.cy.js
```

## Exemplo de extensão (futuro)

```javascript
cy.viewport(375, 667);
cy.login();
InventoryPage.addToCart('sauce-labs-backpack');
InventoryPage.openCart();
CartPage.elements.checkoutButton().should('be.visible');
```
