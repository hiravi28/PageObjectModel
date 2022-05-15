/// <reference types = 'cypress'/>

import HomePageActions from "../../pageobjects/pageactions/HomePageActions";
import AddCustomerPageActions from "../../pageobjects/pageactions/AddCustomerPageActions";
import OpenAccountPageActions from "../../pageobjects/pageactions/OpenAccountPageActions";

describe('Opening a new Account', ()=>{

    const homePage = new HomePageActions()
    const addCust = new AddCustomerPageActions()
    const openAccount = new OpenAccountPageActions()

    before('Launching Test Data' , ()=>{
        cy.fixture('testdata').then((data)=>{
            globalThis.data = data
        })
    })

    beforeEach('Launching URL', ()=>{
        homePage.navigateToURL()
    })

    it('Open Account for the customer', ()=>{
        homePage.loginAsBankManager()
        addCust.addCustomerDetails(data.firstName, data.lastName, data.postCode)
        addCust.validateCustAddAlert(data.custAddAlertMsg)
        openAccount.openCustAccount(data.openAccountCustomerName, data.currency)
        openAccount.validateOpenAcctAlert(data.openAccountAlertMsg)

    })

})