// import { And, Given, When } from "@badeball/cypress-cucumber-preprocessor";
var {Given, When, Then, BeforeAll, Before, After, AfterAll} = require('cucumber')

import HomePageActions from '../../pageobjects/pageactions/HomePageActions'
import AddCustomerPageActions from '../../pageobjects/pageactions/AddCustomerPageActions'


const homePage = new HomePageActions()
const addCustomer = new AddCustomerPageActions()


Given('I navigate to website', ()=>{
    cy.visit('https://www.way2automation.com/angularjs-protractor/banking/#/login')
})

When('I click on Bank Manager Login button', ()=>{
    cy.get('.borderM > :nth-child(3)').click()
})



And('validate the page title', ()=>{
    cy.title().should('contain', "Banking App")

})

And('I click on Add Customer button', ()=>{
    addCustomer.clickAddCustomerBtn()

})


And('I enter', (datatable)=>{
    datatable.hashes().forEach(element => {
        addCustomer.addCustomerDetails(element.fname, element.lname, element.pcode)
    });

})


And('I click on submit button', ()=>{
    addCustomer.submitCustomerDetails()

})


And('I validate the alert text', ()=>{
    
    addCustomer.validateCustAddAlert('Customer added successfully')
})
