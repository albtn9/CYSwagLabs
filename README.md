# CYSwagLabs

Este repositório contém testes automatizados usando **Cypress** para o site **Saucedemo Swag Labs**.

## Estrutura

- `cypress/e2e/saucedemo/` → Contém os testes end-to-end:
  - `login.cy.js` → Testes de login
  - `cart.cy.js` → Testes de carrinho
  - `checkout.cy.js` → Testes de checkout
  - `logout.cy.js` → Testes de logout

## Como executar os testes

1. Clone o repositório:

```bash
git clone https://github.com/albtn9/CYSwagLabs.git
```

2. Instale as dependências:

```bash
npm install
```

3. Execute os testes (modo interativo):

```bash
npm run cy:open
```

##  Scripts disponíveis

Dentro do projeto, você pode usar:

### `npm run cy:open`

Abre o **Test Runner** do Cypress (modo interativo).

### `npm run cy:run`

Executa os testes em modo **headless** (útil para CI/CD).

---

## Instalação

```bash
npm install
```

---

##  Como melhorar ainda mais

 **Garanta que o `package-lock.json` está no repositório** — ele trava as versões e evita problemas de ambiente.

 Se quiser rodar Cypress direto com `npx` também funciona:

```bash
npx cypress open
```

## Autor
albtn9