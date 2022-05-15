
/// <reference types = 'cypress' />

import HomePageActions from '../../pageobjects/pageactions/HomePageActions'
import AddCustomerPageActions from '../../pageobjects/pageactions/AddCustomerPageActions'

describe('Adding a new Customer', ()=>{

    const homePage = new HomePageActions()
    const addCust = new AddCustomerPageActions()

    before('Launching Test Data', ()=>{

        cy.fixture('testdata').then((data)=>{
            globalThis.data = data

            console.log('Data is : ' + data)
        })

    })

    beforeEach('Launching URL', ()=>{
        homePage.navigateToURL()
        
    })


    it('Add Customer Details', ()=>{
        homePage.loginAsBankManager()
        addCust.addCustomerDetails(data.firstName, data.lastName, data.postCode)
        addCust.validateCustAddAlert(data.custAddAlertMsg)


    })



})
