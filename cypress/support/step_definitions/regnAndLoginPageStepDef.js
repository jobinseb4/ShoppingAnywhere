/// <reference types="Cypress" />

import {Given,When,Then} from "cypress-cucumber-preprocessor/steps"
import RegistrationAndLoginPage from "../../pages/RegistrationAndLoginPage";

const objRegnAndLogin = new RegistrationAndLoginPage()
beforeEach(function(){
    cy.fixture('example').then(function(data)
    {
        this.data=data;
    })
})

Given('User opens the registration and login page',() => {
    objRegnAndLogin.openRegnAndLoginPage();
});
Then('User click on register button',() =>{
    objRegnAndLogin.clickRegister();
}) ;
Then('User provides namer and gender',function(){
    objRegnAndLogin.provideNameAndGender(this.data.firstname,this.data.lastname);
})
Then('User selects DOB and subscription',() => {
    objRegnAndLogin.selectDOBAndSubscription();
})
Then('User logs in',function(){
    objRegnAndLogin.login(this.data.email,this.data.password);
})