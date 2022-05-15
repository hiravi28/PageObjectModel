/// <reference types = 'cypress' />

const or = require('../../locators.json')

export default class OpenAccountPageElements {

    openAccountBtn(){
        return cy.get(or.openAccountPage.openAcctButton)
    }

    selectCustomer(){
        return cy.get(or.openAccountPage.customerSelect)
    }

    selectCurrency(){
        return cy.get(or.openAccountPage.currencySelect)
    }

    processBtn(){
        return cy.get(or.openAccountPage.processBtn)
    }


}