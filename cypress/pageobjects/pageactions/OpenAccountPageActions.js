/// <reference types = 'cypress' />

// import { last } from "cypress/types/lodash"
import OpenAccountPageElements from "../pageelements/OpenAccountPageElements"

export default class OpenAccountPageActions {

    constructor (){
        globalThis.openacctelement = new OpenAccountPageElements()
    }


    openCustAccount(customer, currency){
        openacctelement.openAccountBtn().click()
        openacctelement.selectCustomer().select(customer)
        openacctelement.selectCurrency().select(currency)
        openacctelement.processBtn().click()
    }

    validateOpenAcctAlert(alertMsg){
        cy.on('window:alert', (alertText)=>{
            expect(alertText).contains(alertMsg)
        })
    }
}