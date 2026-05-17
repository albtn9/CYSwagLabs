# Resultados de execução

## Última execução local

| Campo | Valor |
|-------|-------|
| Data | 2026-05-16 |
| Ambiente | Windows 10, Node v22.19.0 |
| Cypress | 14.5.1 |
| Browser | Electron 130 (headless) |
| Comando | `cd saucedemo && npx cypress run --browser electron` |
| Duração total | ~55 s |
| Specs | 9 |
| Testes | **35** |
| Passou | **35** |
| Falhou | **0** |

## Resultado por spec

| Spec | Testes | Status | Duração (aprox.) |
|------|--------|--------|------------------|
| `accessibility.cy.js` | 3 | ✅ | 6 s |
| `cart.cy.js` | 4 | ✅ | 5 s |
| `checkout-negative.cy.js` | 4 | ✅ | 7 s |
| `checkout.cy.js` | 1 | ✅ | 3 s |
| `inventory.cy.js` | 5 | ✅ | 6 s |
| `login.cy.js` | 7 | ✅ | 11 s |
| `logout.cy.js` | 1 | ✅ | 2 s |
| `navigation.cy.js` | 4 | ✅ | 6 s |
| `responsiveness.cy.js` | 6 | ✅ | 4 s |

## CI/CD (GitHub Actions)

Workflow: `.github/workflows/cypress.yml`

| Gatilho | Branches |
|---------|----------|
| `push`, `pull_request` | `main` |
| `workflow_dispatch` | manual |

| Browser (matrix) | Artefatos |
|------------------|-----------|
| electron | vídeos, JUnit; screenshots se falhar |
| chrome | idem |
| firefox | idem |

Resultados JUnit são publicados via `publish-unit-test-result-action` na aba *Checks* do PR.

> Atualize esta seção após cada release ou sprint com link do run do Actions e contagem de testes, se divergir da execução local.

## Evidências desta execução

| Tipo | Local |
|------|-------|
| Vídeos (9 specs) | `saucedemo/cypress/videos/*.mp4` |
| Screenshots | Gerados apenas em falha (`saucedemo/cypress/screenshots/`) |
| JUnit XML | `saucedemo/cypress/reports/results-*.xml` |

Instruções completas: [evidence/README.md](./evidence/README.md).

## Histórico

| Data | Ambiente | Total | Pass | Fail | Observação |
|------|----------|-------|------|------|------------|
| 2026-05-16 | Local / Electron | 35 | 35 | 0 | Inclusão de cenários negativos de checkout e login |
| — | CI | — | — | — | Preencher após primeiro run verde em `main` |
