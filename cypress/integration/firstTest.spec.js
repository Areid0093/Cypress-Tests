/// <reference types="cypress" />

describe('Our first tests', () => {

    it('first test', () => {

        cy.visit('/')
        cy.wait(500)
        cy.contains('Forms').click()
        cy.contains('Form Layouts').click()

        //by tag name
        cy.get('input')

        //by ID
        cy.get('#inputEmail1')

        //by class name
        cy.get('.input-full-width')
        cy.get('.size-medium')
        cy.get('.shape-rectangle')

        //by attribute name
        cy.get('[placeholder]')

        //by attribute name and value
        cy.get('[placeholder="Email"]')
        
        //by class value
        cy.get('[class="input-full-width size-medium shape-rectangle"]')

        //by tag name and attribute w/ value
        cy.get('input[placeholder="Email"]')

        //by multiple attributes
        cy.get('[placeholder="Email"][type="email"]')

        //by tag name, attribute w/ value, ID and class name
        cy.get('input[placeholder="Email"]#inputEmail1.input-full-width')

        //by most recommended cypress method
        cy.get('[data-cy="imputEmail1"]')

    });

    it('second test', () => {

        
        cy.visit('/')
        cy.wait(500)
        cy.contains('Forms').click()
        cy.contains('Form Layouts').click()

        cy.get('[data-cy="signInButton"]')

        cy.contains('Sign in')

        cy.contains('[status="warning"]','Sign in')

        cy.get('#inputEmail3')
            .parents('form')
            .find('button')
            .should('contain', 'Sign in')
            .parents('form')
            .find('[class="custom-checkbox"]').click()

        cy.contains('nb-card','Horizontal form').find('[type="email"]')
    })

});
