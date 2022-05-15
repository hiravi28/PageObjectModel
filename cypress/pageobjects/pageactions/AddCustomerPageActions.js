/// <reference types = 'cypress' />

// import { last } from "cypress/types/lodash"
import AddCustomerPageElements from "../pageelements/AddCustomerPageElements"

export default class AddCustomerPageActions {

    constructor (){
        globalThis.addcustelement = new AddCustomerPageElements()
    }

    addCustomerDetails(firstName, lastName, postCode){

        addcustelement.addCustBtn().click()
        addcustelement.enterFirstName().type(firstName)
        addcustelement.enterLastName().type(lastName)
        addcustelement.enterPostCode().type(postCode)
        addcustelement.addCustSubmitBtn().click()
    }

    validateCustAddAlert(alertMsg){
        cy.on('window:alert', (alertText)=>{
            expect(alertText).contains(alertMsg) 
        })
    }

}