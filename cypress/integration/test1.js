/// <reference types="Cypress" />

describe('Shopping Anywhere',function()
{
    let data;
    before(function(){
        cy.fixture('example').then(function(values){
            data=values;
        })
    })

    it('Product Search and Add',function()
    {
        cy.visit(Cypress.env('url'))

        cy.get('#small-searchterms').type('Pride and Prejudice')

        cy.get('.button-1.search-box-button').contains('Search').click()

        cy.get('.product-title').contains('Pride and Prejudice').click()

        cy.get('#product_enteredQuantity_39').clear().type('2')
        cy.wait(500)

        cy.get('#add-to-cart-button-39').click()
        cy.wait(3000)

        cy.get('.ico-cart').click()

        cy.get('tr td:nth-child(5)').find('.qty-input').should('have.value','2')

        //cy.get('.qty-input').should('have.value','2')

    })

    it('Registration',function(){

        cy.visit(Cypress.env('url')+"login?returnUrl=%2F")

        cy.get('.button-1.register-button').contains('Register').click()

        cy.get('#gender-male').check().should('be.checked')

        cy.get('#FirstName').type(data.firstname)
        cy.get('#LastName').type(data.lastname)
        cy.get('[name="DateOfBirthDay"]').select('3').should('have.value','3')
        cy.get('[name="DateOfBirthMonth"]').select('April').should('have.value','4')
        cy.get('[name="DateOfBirthYear"]').select('2000').should('have.value','2000')
        cy.get('#Newsletter').uncheck().should('not.be.checked')
    })

    it('Login',function(){

        cy.visit(Cypress.env('url')+"login?returnUrl=%2F")

        cy.login(data.email,data.password)

    })

    

})