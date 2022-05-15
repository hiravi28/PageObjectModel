/// <reference types = 'cypress' />

import HomePageActions from '../../pageobjects/pageactions/HomePageActions'

describe('Login as Bank Manager', ()=>{

    const homePage = new HomePageActions()


    beforeEach('Launching URL', ()=>{
        homePage.navigateToURL()
        
    })

    it('Validate title of Page', ()=>{

        homePage.validateTitle().should('contains', 'Banking App')
    })


    it('Verify login as Bank Manager', ()=>{
        homePage.loginAsBankManager()

    })



})
