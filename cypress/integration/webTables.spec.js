/// <reference types="cypress" />

it('Web tables', () => {
    cy.visit('/')
    cy.contains('Tables & Data').click()
    cy.contains('Smart Table').click()

    cy.get('tbody').contains('tr', 'Larry').then( tableRow => {
        cy.wrap(tableRow).find('.nb-edit').click()
        cy.wrap(tableRow).find('[placeholder="Age"]').clear().type('25')
        cy.wrap(tableRow).find('.nb-checkmark').click()
        cy.wrap(tableRow).find('td').eq(6).should('contain', '25')
    })



cy.get('thead').find('.nb-plus').click()
cy.get('thead').find('tr').eq(2).then( tableRow => {
    cy.wrap(tableRow).find('[placeholder="First Name"]').type('Alec')
    cy.wrap(tableRow).find('[placeholder="Last Name"]').type('Reid')
    cy.wrap(tableRow).find('[placeholder="Username"]').type('@Areid')
    cy.wrap(tableRow).find('[placeholder="E-mail"]').type('AlecReid@example.com')
    cy.wrap(tableRow).find('[placeholder="Age"]').type('28')
    cy.wrap(tableRow).find('.nb-checkmark').click()
})
cy.get('tbody tr').first().find('td').then( tableColumns => {
    cy.wrap(tableColumns).eq(2).should('contain', 'Alec')
    cy.wrap(tableColumns).eq(3).should('contain', 'Reid')
    cy.wrap(tableColumns).eq(4).should('contain', '@Areid')
    cy.wrap(tableColumns).eq(5).should('contain', 'AlecReid@example.com')
    cy.wrap(tableColumns).eq(6).should('contain', '28')
})


const age = [20, 30, 40, 200]

cy.wrap(age).each( age => {
    cy.get('thead [placeholder="Age"]').clear().type(age)
    cy.wait(500)
    cy.get('tbody tr').each( tableRow => {
        if(age == 200){
            cy.wrap(tableRow).should('contain', 'No data found')
        } else {
            cy.wrap(tableRow).find('td').eq(6).should('contain', age)
        }

    })
})

})