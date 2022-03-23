/// <reference types="cypress" />


it.only('check boxes', () => {
    cy.visit('/')
    cy.contains('Modal & Overlays').click()
    cy.contains('Toastr').click()

    cy.get('[type="checkbox"]').check({force: true})
    cy.get('[type="checkbox"]').eq(0).click({force: true})
    cy.get('nb-card-footer').contains('Show toast').click()
    cy.wait(500)
    cy.get('nb-card-footer').contains('Random toast').click()

    
});