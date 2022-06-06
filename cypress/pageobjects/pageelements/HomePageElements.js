/// <reference types = 'cypress' />

const or = require('../../locators.json')

export default class HomePageElements {

    custLoginBtn(){

        return cy.get(or.homePage.custLoginBtn) //body > div.ng-scope > div > div.ng-scope > div > div.borderM.box.padT20 > div:nth-child(1) > button')
    }

    bankMgrLoginBtn(){
        return cy.get(or.homePage.bankMgrLoginBtn) //body > div.ng-scope > div > div.ng-scope > div > div.borderM.box.padT20 > div:nth-child(3) > button')
    }

    // Test Comments

}


