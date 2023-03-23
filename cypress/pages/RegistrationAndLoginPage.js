/// <reference types="Cypress" />
export default class RegistrationAndLoginPage{

    openRegnAndLoginPage(){
        cy.visit(Cypress.env('url')+"login?returnUrl=%2F")
    }
    
    clickRegister(){
        cy.get('.button-1.register-button').contains('Register').click()
    }
    
    provideNameAndGender(firstname,lastname){
        cy.get('#gender-male').check().should('be.checked')
        cy.get('#FirstName').type(firstname)
        cy.get('#LastName').type(lastname)
    }

    selectDOBAndSubscription(){
        cy.get('[name="DateOfBirthDay"]').select('3').should('have.value','3')
        cy.get('[name="DateOfBirthMonth"]').select('April').should('have.value','4')
        cy.get('[name="DateOfBirthYear"]').select('2000').should('have.value','2000')
        cy.get('#Newsletter').uncheck().should('not.be.checked')
    }

    login(email,password){
        cy.login(email,password)
    }

    
}