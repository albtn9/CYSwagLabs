# Evidências visuais

Artefatos gerados automaticamente pelas execuções do Cypress.

## Onde encontrar

| Tipo | Caminho local | Quando é gerado |
|------|---------------|-----------------|
| Screenshots | `saucedemo/cypress/screenshots/` | Falhas de teste (`screenshotOnRunFailure`) |
| Vídeos | `saucedemo/cypress/videos/` | Toda execução headless (`video: true`) |
| Relatório JUnit | `saucedemo/cypress/reports/` | `npm run cy:run` e CI |
| Artefatos CI | GitHub Actions → *Artifacts* | Push/PR em `main` |

## Como gerar localmente

```bash
cd saucedemo
npm install
npm run cy:run
```

Após a execução, confira `cypress/videos/` (um `.mp4` por spec) e `cypress/screenshots/` (apenas se algum teste falhar).

## CI/CD

O workflow [`.github/workflows/cypress.yml`](../.github/workflows/cypress.yml) publica:

- `cypress-{browser}-videos` — sempre
- `cypress-{browser}-screenshots` — em falha
- `cypress-{browser}-report` — JUnit XML

Screenshots de exemplo do report/CI podem ser colocados em `docs/evidence/ci/` após exportar da aba *Actions* do repositório.

## GIFs (opcional)

Para demonstrações em README ou apresentações, converta um vídeo curto:

```bash
# requer ffmpeg instalado
ffmpeg -i saucedemo/cypress/videos/login.cy.js.mp4 -vf "fps=10,scale=800:-1" docs/evidence/login-demo.gif
```

Os binários (`.mp4`, `.png`, `.gif`) não são versionados no Git; apenas esta estrutura e instruções.
