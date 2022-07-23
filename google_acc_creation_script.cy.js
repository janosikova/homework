describe('empty spec', () => {
  it('passes', () => {
      cy.visit('https://gmail.com')

      cy.get('[jsname="WjL7X"] button').click()
      cy.get('[jsname="RZzeR"]').click()

      cy.get('[name="firstName"]').type('gg')


      cy.get('#lang-chooser').click()
      cy.get('.ncFHed').contains('Dansk').click()
   

  })
})