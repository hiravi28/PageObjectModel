/// <reference types = 'cypress' />

import HomePageElements from "../pageelements/HomePageElements"

export default class HomePageActions{

    constructor(){

        globalThis.homepageelement = new HomePageElements()
    }

    navigateToURL(){

        cy.visit('/')


    }


    validateTitle(){

        return cy.title()
    }

    loginAsBankManager(){

        homepageelement.bankMgrLoginBtn().click()
    }

    loginAsCustomer(){
        homepageelement.custLoginBtn().click()
    }
}