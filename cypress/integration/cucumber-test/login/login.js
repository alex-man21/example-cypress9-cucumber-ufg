import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

Given('User is at the login page', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/');
});

When('User enters username as {string} and password as {string}', (username, password) => {
    cy.get('input[name="username"]').type(username)
    cy.get('input[name="password"]').type(password)
})

And('User clicks on login button', () => {
    cy.get('button[type="submit"]').click()
})

Then('User is able to successfully login to the Website', () => {
    cy.get('#app > div.oxd-layout > div.oxd-layout-navigation > header > div.oxd-topbar-header > div.oxd-topbar-header-title > span > h6').should('be.visible', {timeout: 10000})
})

Then('Open eyes', () => {
    cy.eyesOpen({
            
        // The name of the application under test.
        // All tests for the same app should share the same app name.
        // Set this name wisely: Applitools features rely on a shared app name across tests.
        appName: 'Cucumber test',
        
        // The name of the test case for the given application.
        // Additional unique characteristics of the test may also be specified as part of the test name,
        // such as localization information ("Home Page - EN") or different user permissions ("Login by admin"). 
        testName: Cypress.currentTest.title,
    });
});

Then('Capture screenshot', () => {
    cy.eyesCheckWindow({
        tag: "Login page",
        target: 'window',
        fully: true
    });
});

Then('Close eyes', () => {
    cy.eyesClose();
});