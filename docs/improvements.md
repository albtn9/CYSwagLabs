# Melhorias sugeridas

Backlog priorizado para elevar a entrega de QA além da baseline atual (~9.5/10).

## Prioridade alta

| # | Melhoria | Benefício |
|---|----------|-----------|
| 1 | Assertar imagens com `problem_user` (opcional: `cy.request` status 200) | Detectar regressão visual intencional |
| 2 | Testes de a11y em checkout overview e complete | Cobertura WCAG em todo funil |
| 3 | Tag `@smoke` / `@regression` e jobs filtrados no CI | Feedback mais rápido em PR |
| 4 | Snapshot visual (Percy / Cypress visual diff) em 1–2 telas | Regressão de layout |

## Prioridade média

| # | Melhoria | Benefício |
|---|----------|-----------|
| 5 | Responsividade no carrinho e checkout | Validar formulário em mobile |
| 6 | Teste de `visual_user` / `error_user` se aplicável à demo | Cobertura de usuários restantes |
| 7 | `cy.session()` para login | Specs mais rápidos |
| 8 | Relatório HTML (mochawesome) além de JUnit | Leitura humana em CI |
| 9 | Copiar screenshot de falha para `docs/evidence/ci/` no workflow | Evidência versionável leve |

## Prioridade baixa

| # | Melhoria | Benefício |
|---|----------|-----------|
| 10 | Testes de API (se endpoints públicos existirem) | Camada extra abaixo da UI |
| 11 | Paralelização de specs no CI | Reduzir tempo de pipeline |
| 12 | Lint (ESLint) nos specs e pages | Consistência de código |
| 13 | i18n das mensagens de erro (app em inglês, docs em PT) | Clareza para stakeholders BR |

## Já implementado neste incremento

- Pasta `docs/` com plano, resultados, bugs, riscos e melhorias
- Spec `checkout-negative.cy.js` e cenários extras em `login.cy.js`
- Documentação de a11y e responsividade
- Estrutura `cypress/screenshots/`, `cypress/videos/`, `cypress/reports/`
- `mocha-junit-reporter` no `package.json`
- README ampliado com arquitetura e estratégia QA

## Critério de “pronto” para cada item

- Spec automatizado ou doc atualizado
- Execução verde em CI (3 browsers para E2E)
- Entrada correspondente em `test-results.md` ou `bugs.md` se aplicável
