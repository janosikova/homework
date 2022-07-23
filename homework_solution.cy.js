describe('Wikipedia', () => {
    it('First test - Schwarzenegger', () => {
        
        cy.visit('https://en.wikipedia.org/wiki/Main_Page')
                
        cy.get('#searchform').type("Schwarzenegger")
        cy.get('#searchform').submit()

        cy.contains('Arnold Alois Schwarzenegger')
        cy.get('#bodyContent .vcard')
            .should('contain.text', 'Arnold Schwarzenegger')
            .should('contain.text', 'Governor of California')
        
    })
})
