describe('Home Page Test', () => {
  it('should load homepage', () => {
    cy.visit('http://localhost:3000')
    cy.contains('To get started')
  })
})