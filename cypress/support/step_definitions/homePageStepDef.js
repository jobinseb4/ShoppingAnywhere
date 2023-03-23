/// <reference types="Cypress" />

import {Given,When,Then} from "cypress-cucumber-preprocessor/steps"
import HomePage from "../../pages/homePage";

const objHomePage = new HomePage()

Given('User visits the website',() => {
    objHomePage.openWebsite();
});
Then('User searches a product',() =>{
    objHomePage.searchProduct();
}) ;
Then('User adds the product to cart',() => {
    objHomePage.addProductToCart();
})
Then('Verify the product in cart',() => {
    objHomePage.verifyCart();
})
