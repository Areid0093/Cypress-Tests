/// <reference types="cypress" />

it('then and wrap methods', () => {

    cy.visit('/')
    cy.contains('Forms').click()
    cy.contains('Form Layouts').click()

    /* cy.contains('nb-card', 'Using the Grid')
        .find('[for="inputEmail1"]')
        .should('contain', 'Email')

    cy.contains('nb-card', 'Using the Grid')
        .find('[for="inputPassword2"]')
        .should('contain', 'Password')

    cy.contains('nb-card', 'Basic form')
        .find('[for="exampleInputEmail1"]')
        .should('contain', 'Email address')

    cy.contains('nb-card', 'Basic form')
        .find('[for="exampleInputPassword1"]')
        .should('contain', 'Password') */

    //Revised flow
    cy.contains('nb-card', 'Using the Grid').then( firstForm => {
       const emailFirstLabel = firstForm.find('[for="inputEmail1"]').text()
       const passwordFirstLabel = firstForm.find('[for="inputPassword2"]').text()
       expect(emailFirstLabel).to.equal('Email')
       expect(passwordFirstLabel).to.equal('Password')

       cy.contains('nb-card', 'Basic form').then( secondForm => {
            const passwordSecondLabel = secondForm.find('[for="exampleInputPassword1"]').text()
            expect(passwordFirstLabel).to.equal(passwordSecondLabel)

            cy.wrap(secondForm).find('[for="exampleInputPassword1"]').should('contain', 'Password')
    })
    cy.contains('nb-card', 'Basic form').then( secondForm => {
        const emailSecondLabel = secondForm.find('[for="exampleInputEmail1"]').text()
        const passwordSecondLabel = secondForm.find('[for="exampleInputPassword1"]').text()
        expect(emailSecondLabel).to.equal('Email address')
        expect(passwordSecondLabel).to.equal('Password')
    })       


    })

})