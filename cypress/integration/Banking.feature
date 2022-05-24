Feature: Banking Feature 

    I want to validate Banking scenarios

    Background:
        Given I navigate to website

@smoke
    Scenario: Login as Bank Manager

        When I click on Bank Manager Login button
        And validate the page title

@regression
    Scenario: Add a Customer

        When I click on Bank Manager Login button
        And validate the page title
        And I click on Add Customer button
        And I enter
            | fname | lname | postcode |
            | Ravi  | Negi  | 00881177 |
        And I click on submit button
        And I validate the alert text

@regression
    Scenario: Opening an Account

        When I click on Bank Manager Login button
        And validate the page title

