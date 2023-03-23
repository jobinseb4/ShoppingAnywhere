/// <reference types="Cypress" />
export default class HomePage{

    openWebsite(){
        cy.visit(Cypress.env('url'))
    }

    searchProduct(){
        cy.get('#small-searchterms').type('Pride and Prejudice')

        cy.get('.button-1.search-box-button').contains('Search').click()

        cy.get('.product-title').contains('Pride and Prejudice').click()
    }

    addProductToCart(){
        cy.get('#product_enteredQuantity_39').clear().type('2')
        cy.wait(500)

        cy.get('#add-to-cart-button-39').click()
        cy.wait(3000)
    }

    verifyCart(){
        cy.get('.ico-cart').click()

        cy.get('tr td:nth-child(5)').find('.qty-input').should('have.value','2')
    }

    
}