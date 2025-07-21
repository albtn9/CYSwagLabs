describe('Login no SauceDemo', () => {
  beforeEach(() => {
    cy.visit('https://www.saucedemo.com')
  })

  it('Deve fazer login com usuário válido', () => {
    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()

   
    cy.url().should('include', '/inventory.html')
    cy.contains('Products').should('be.visible')
  })

  it('Deve exibir erro com senha incorreta', () => {
    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('senha_errada')
    cy.get('[data-test="login-button"]').click()

    cy.get('[data-test="error"]').should('contain', 'Username and password do not match')
  })
})
