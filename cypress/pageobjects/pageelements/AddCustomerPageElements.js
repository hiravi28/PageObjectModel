/// <reference types = 'cypress' />

const or = require('../../locators.json')

export default class AddCustomerPageElements {

    addCustBtn(){
        return cy.get(or.addCustomerPage.addCustBtn)
    }

    enterFirstName(){
        return cy.get(or.addCustomerPage.firstNameTxt)
    }

    enterLastName(){
        return cy.get(or.addCustomerPage.lastNameTxt)
    }

    enterPostCode(){
        return cy.get(or.addCustomerPage.postCode)
    }

    addCustSubmitBtn(){
        return cy.get(or.addCustomerPage.addCustSubmitBtn)
    }

}