// import { And, Given, When } from "@badeball/cypress-cucumber-preprocessor";

Given('I navigate to website', ()=>{
    cy.visit('https://www.way2automation.com/angularjs-protractor/banking/#/login')
})

When('I click on Bank Manager Login button', ()=>{
    cy.get('.borderM > :nth-child(3)').click()
})



And('validate the page title', ()=>{
    cy.title().should('contain', "Banking App")

})
