/// <reference types="cypress" />

it('radio button', () => {
    cy.visit('/')
    cy.contains('Forms').click()
    cy.contains('Form Layouts').click()

    cy.contains('nb-card', 'Using the Grid').find('[type="radio"]').then( radioButtons => {
        cy.wrap(radioButtons)
            .first()
            .check({force: true})
            .should('be.checked')

        cy.wrap(radioButtons)
            .eq(1)
            .check({force: true})
            .should('be.checked')

        cy.wrap(radioButtons)
            .first()
            .should('not.be.checked')

        cy.wrap(radioButtons)
            .eq(2)
            .should('be.disabled')                
            
    })


});