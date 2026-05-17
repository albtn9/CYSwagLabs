# Plano de testes — SauceDemo (Swag Labs)

## Objetivo

Validar os fluxos críticos do e-commerce de demonstração [SauceDemo](https://www.saucedemo.com) por meio de testes E2E automatizados com Cypress, garantindo regressão rápida em CI e documentação auditável para QA.

## Escopo

| In scope | Out of scope |
|----------|----------------|
| Login, inventário, carrinho, checkout, navegação, logout | Pagamentos reais, APIs backend proprietárias |
| Cenários positivos e negativos documentados | Testes de carga / stress |
| Responsividade em viewports definidos | Compatibilidade com IE legado |
| Acessibilidade automatizada (axe) em páginas-chave | Auditoria manual WCAG completa |
| Execução em Electron, Chrome e Firefox (CI) | App mobile nativo |

## Estratégia de testes

1. **Pirâmide enxuta:** foco em E2E de alto valor; dados em `fixtures/`, interações em Page Objects.
2. **POM (Page Object Model):** cada tela tem classe em `cypress/pages/`; specs permanecem legíveis.
3. **Dados parametrizados:** usuários em `cypress/fixtures/users.json`.
4. **Comandos reutilizáveis:** `cy.login()` em `cypress/support/commands.js`.
5. **Regressão contínua:** GitHub Actions em push/PR para `main`, matriz de 3 browsers.
6. **Evidências:** vídeos em toda execução; screenshots em falha; JUnit para dashboards.

## Tipos de teste

| Tipo | Ferramenta | Onde |
|------|------------|------|
| E2E funcional | Cypress 14 | `cypress/e2e/saucedemo/*.cy.js` |
| Negativo / validação | Cypress | `login.cy.js`, `checkout-negative.cy.js` |
| Responsividade | `cy.viewport()` | `responsiveness.cy.js` |
| Acessibilidade | cypress-axe + axe-core | `accessibility.cy.js` |

Detalhes de a11y: [accessibility.md](./accessibility.md).  
Detalhes de responsividade: [responsiveness.md](./responsiveness.md).

## Critérios de cobertura

| Requisito | Spec | Cenários mínimos |
|-----------|------|------------------|
| Login (vários usuários) | `login.cy.js` | standard, locked, problem, performance, inválido, campos vazios |
| Ordenação / filtro | `inventory.cy.js` | A–Z, Z–A, preço ↑↓, menor preço visível |
| Compra completa | `checkout.cy.js` | 1 item até confirmação |
| Checkout negativo | `checkout-negative.cy.js` | sem nome, sobrenome, CEP, todos vazios |
| Carrinho | `cart.cy.js` | add, remove, múltiplos, toggle botão |
| Navegação | `navigation.cy.js` | detalhe, voltar, menu, cancel checkout |
| Logout | `logout.cy.js` | retorno à tela de login |
| Responsividade | `responsiveness.cy.js` | 3 viewports × login + inventário |
| Acessibilidade | `accessibility.cy.js` | login, inventário, carrinho |
| CI/CD | `.github/workflows/cypress.yml` | 3 browsers, artefatos, JUnit |

**Meta de automação:** 100% dos requisitos da matriz acima com pelo menos um teste automatizado por linha.

## Cenários negativos (resumo)

| Cenário | Mensagem esperada | Spec |
|---------|-------------------|------|
| Credenciais inválidas | `Username and password do not match` | `login.cy.js` |
| Usuário bloqueado | `Sorry, this user has been locked out` | `login.cy.js` |
| Login sem usuário/senha | `Username is required` | `login.cy.js` |
| Login sem senha | `Password is required` | `login.cy.js` |
| Checkout sem campos | `First Name is required` (primeiro erro) | `checkout-negative.cy.js` |
| Checkout sem sobrenome | `Last Name is required` | `checkout-negative.cy.js` |
| Checkout sem CEP | `Postal Code is required` | `checkout-negative.cy.js` |

## Ambiente e execução

- **URL base:** `https://www.saucedemo.com` (`cypress.config.js`)
- **Local:** `cd saucedemo && npm run cy:run`
- **CI:** Ubuntu container `cypress/browsers`, Node 22

## Entregáveis QA

| Documento | Conteúdo |
|-----------|----------|
| [test-results.md](./test-results.md) | Última execução e histórico |
| [bugs.md](./bugs.md) | Defeitos conhecidos da aplicação demo |
| [risks.md](./risks.md) | Riscos de qualidade e mitigação |
| [improvements.md](./improvements.md) | Backlog de melhorias |
| [evidence/README.md](./evidence/README.md) | Screenshots, vídeos, CI |

## Aprovação

| Papel | Critério de saída |
|-------|-------------------|
| QA | Suite verde local + CI; docs atualizados |
| Dev | POM mantido; sem flaky conhecido |
| CI | Artefatos publicados em falha/sucesso conforme workflow |
