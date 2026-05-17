# Acessibilidade — documentação QA

## Ferramentas utilizadas

| Ferramenta | Versão (projeto) | Função |
|------------|------------------|--------|
| [axe-core](https://github.com/dequelabs/axe-core) | ^4.10.3 | Motor de regras WCAG |
| [cypress-axe](https://github.com/component-driven/cypress-axe) | ^1.6.0 | `cy.injectAxe()` / `cy.checkA11y()` no Cypress |
| Cypress | ^14.5.1 | Orquestração E2E |

Setup em `cypress/support/e2e.js` (imports) e specs em `cypress/e2e/saucedemo/accessibility.cy.js`.

## Critérios avaliados

Configuração padrão dos testes:

```javascript
const a11yOptions = {
  includedImpacts: ['critical', 'serious'],
};
```

| Configuração | Significado |
|--------------|-------------|
| `includedImpacts: ['critical', 'serious']` | Falha o teste apenas para violações graves |
| Escopo login/carrinho | Página inteira (`null`) |
| Escopo inventário | Elemento `.inventory_list` |
| Inventário — `color-contrast` | Regra **desabilitada** (ver [bugs.md](./bugs.md) BUG-003) |

## Páginas cobertas

| Página | Teste | Status automatizado |
|--------|-------|---------------------|
| Login | `não deve ter violações críticas na página de login` | ✅ |
| Inventário (lista) | `não deve ter violações críticas na listagem de produtos` | ✅ (com exceção de contraste) |
| Carrinho | `não deve ter violações críticas no carrinho` | ✅ |
| Checkout (steps 1–3) | — | ❌ não automatizado ainda |
| Detalhe do produto | — | ❌ |

## Padrões WCAG considerados

Os testes axe mapeiam, entre outros, requisitos alinhados a **WCAG 2.x Nível A e AA**, por exemplo:

| Princípio WCAG | Exemplos de regras axe frequentes |
|----------------|-----------------------------------|
| Perceptível | `color-contrast`, textos alternativos |
| Operável | foco visível, ordem de tabulação |
| Compreensível | labels associados a inputs (`login`, checkout) |
| Robusto | roles ARIA válidos, nomes acessíveis |

> A suíte **não certifica** conformidade WCAG; indica ausência de violações *critical/serious* no escopo executado.

## Problemas encontrados

1. **Contraste na listagem de produtos** — violações `color-contrast` no inventário; exceção temporária no teste para manter o pipeline estável enquanto o defeito é aceito na demo.
2. **Cobertura parcial do funil** — checkout e página de produto sem varredura axe.
3. **Sem teste manual** — leitor de tela, zoom 200%, navegação só por teclado não estão na automação.

## Recomendações

1. Corrigir contraste na origem (SauceDemo) e reabilitar `color-contrast` no inventário.
2. Adicionar `cy.checkA11y` após preencher checkout step one.
3. Executar auditoria manual periódica (Lighthouse Accessibility + NVDA/VoiceOver).

## Execução

```bash
cd saucedemo
npx cypress run --spec cypress/e2e/saucedemo/accessibility.cy.js
```
