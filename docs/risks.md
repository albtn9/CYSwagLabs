# Riscos de qualidade

Análise de riscos para o projeto de testes SauceDemo e mitigações adotadas.

## Matriz de riscos

| ID | Risco | Prob. | Impacto | Nível | Mitigação |
|----|-------|-------|---------|-------|-----------|
| R01 | Site demo fora do ar ou alterado | Média | Alto | **Alto** | `baseUrl` centralizada; CI diário em PR; monitorar falhas em massa |
| R02 | Flakiness por timing (`performance_glitch_user`) | Média | Médio | **Médio** | Assertions em elementos estáveis; evitar sleeps fixos |
| R03 | Falsos positivos em a11y (contraste) | Alta | Médio | **Médio** | Escopo `.inventory_list` com exceção documentada; impacts `critical`/`serious` |
| R04 | Cobertura visual/responsiva superficial | Alta | Médio | **Médio** | Apenas `be.visible` em 3 viewports; melhorias em [improvements.md](./improvements.md) |
| R05 | Cenários negativos incompletos no passado | Baixa | Alto | **Médio** | Spec `checkout-negative.cy.js` + login vazio; revisar matriz no [test-plan.md](./test-plan.md) |
| R06 | Artefatos não versionados (vídeos grandes) | Alta | Baixo | **Baixo** | `.gitignore` + upload de artefatos no CI; pasta `docs/evidence/` |
| R07 | Dependências vulneráveis (`npm audit`) | Média | Médio | **Médio** | Atualizar Cypress/axe periodicamente; não bloquear demo por devDeps |
| R08 | Regressão em browser específico | Média | Alto | **Alto** | Matrix CI: electron, chrome, firefox |
| R09 | Segredos em repositório | Baixa | Alto | **Médio** | Senha demo pública; não commitar `.env` real |
| R10 | `problem_user` mascarar regressão visual | Média | Baixo | **Baixo** | Documentado em [bugs.md](./bugs.md); testes focam fluxo, não pixel |

## Riscos residuais (aceitos)

1. **Aplicação de terceiros:** não controlamos deploy nem dados; testes validam comportamento atual, não SLA.
2. **WCAG parcial:** automação axe não substitui teste manual com leitor de tela e teclado.
3. **Checkout step two / complete:** menos asserts de a11y que login e carrinho.

## Plano de contingência

| Situação | Ação |
|----------|------|
| CI vermelho em um browser | Reproduzir localmente com `--browser`; analisar vídeo do artefato |
| Mudança de `data-test` no site | Atualizar Page Objects; falha concentrada em seletores |
| Aumento de violações axe | Revisar se regressão real ou regra nova; ajustar escopo com justificativa em `accessibility.md` |

## Revisão

Reavaliar esta matriz a cada incremento de spec ou mudança no workflow de CI.
