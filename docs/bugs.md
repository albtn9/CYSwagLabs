# Bugs e anomalias conhecidas

Registro de comportamentos incorretos ou inconsistentes observados na **aplicação SauceDemo** (não necessariamente falhas da suíte de testes).

## Legenda

| Severidade | Descrição |
|------------|-----------|
| Crítica | Bloqueia fluxo principal |
| Alta | Funcionalidade importante comprometida |
| Média | Workaround existe |
| Baixa | Cosmético / demo |

## Itens documentados

### BUG-001 — `problem_user` exibe imagens quebradas

| Campo | Detalhe |
|-------|---------|
| Severidade | Média |
| Usuário | `problem_user` |
| Passos | Login → inventário |
| Esperado | Imagens dos produtos carregam |
| Atual | Várias imagens não carregam (comportamento intencional da demo) |
| Automação | Login coberto em `login.cy.js`; defeito visual não assertado |
| Status | Conhecido (demo) |

### BUG-002 — `performance_glitch_user` com lentidão

| Campo | Detalhe |
|-------|---------|
| Severidade | Baixa |
| Usuário | `performance_glitch_user` |
| Passos | Login ou navegação |
| Esperado | Resposta em tempo aceitável |
| Atual | Atrasos artificiais na UI |
| Automação | Teste de login passa com timeout padrão do Cypress |
| Status | Conhecido (demo) |

### BUG-003 — Contraste de cor na listagem (a11y)

| Campo | Detalhe |
|-------|---------|
| Severidade | Média (a11y) |
| Página | Inventário (`.inventory_list`) |
| Ferramenta | axe-core via cypress-axe |
| Regra | `color-contrast` |
| Atual | Violações de contraste reportadas pelo axe |
| Automação | Regra **desabilitada** apenas no escopo do inventário para não falhar o pipeline; login e carrinho seguem validação completa |
| Referência | [accessibility.md](./accessibility.md) |
| Status | Aceito com exceção documentada |

### BUG-004 — `locked_out_user` bloqueado

| Campo | Detalhe |
|-------|---------|
| Severidade | N/A (regra de negócio demo) |
| Passos | Login com `locked_out_user` |
| Esperado | Mensagem de bloqueio |
| Atual | `Sorry, this user has been locked out` |
| Automação | ✅ `login.cy.js` |
| Status | Comportamento esperado — coberto como cenário negativo |

## Defeitos da suíte de automação (corrigidos)

| ID | Descrição | Resolução |
|----|-----------|-----------|
| AUTO-001 | Reporter `mocha-junit-reporter` ausente no `package.json` | Dependência adicionada |
| AUTO-002 | `cy.type('')` em senha vazia | Teste ajustado para não digitar string vazia |

## Como registrar novo bug

1. Incluir ID sequencial (`BUG-00X`).
2. Descrever passos, esperado vs. atual, severidade e spec relacionado.
3. Atualizar [risks.md](./risks.md) se impactar cobertura ou CI.
