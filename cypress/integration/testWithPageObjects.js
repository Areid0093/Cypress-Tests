const { onDatePickerPage } = require("../support/page_objects/datePickerPage");
const { onFormLayoutsPage } = require("../support/page_objects/formsLayoutPage");
const { navigateTo } = require("../support/page_objects/navigationPage");
const { onSmartTablePage } = require("../support/page_objects/smartTablePage");

describe('Test with Page Objects', () => {
    
    beforeEach('open application', () => {
        cy.openHomePage()
    })

    it('verify navigations across the pages', () => {
        navigateTo.formLayoutsPage()
        navigateTo.datePickerPage()
        navigateTo.smartTablePage()
        navigateTo.toasterPage()
        navigateTo.tooltipPage()
    })

    it('shoud submit Inline and Basic form and select tomorrow date in the calendar', () => {
        navigateTo.formLayoutsPage()
        onFormLayoutsPage.submitInlineFormWithNameAndEmail('Alec', 'Alec@test.com')
        onFormLayoutsPage.submitBasicFormWithEmailAndPassword('Alec@test.com', 'testpw')
        navigateTo.datePickerPage()
        onDatePickerPage.selectCommonDatePickerDateFromToday(1)
        onDatePickerPage.selectDatePickerWithRangeFromToday(7, 14)
        navigateTo.smartTablePage()
        onSmartTablePage.addNewRecordWithFirstAndLastName('Alec','Reid')
        onSmartTablePage.updateAgeByFirstName('Alec','28')
        onSmartTablePage.deleteRowByIndex(1)
    })
});