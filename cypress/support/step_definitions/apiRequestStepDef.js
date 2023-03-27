/// <reference types="Cypress" />
import {Given} from "cypress-cucumber-preprocessor/steps"
const apiurl = Cypress.config('apiUrl')

Given('User hits a post request and verifies the request values', (dataTable) => {

    cy.request({
        method: 'POST',
        url: apiurl + '/api/v1/create',
        body:{
            "name": "test",
            "salary": "123",
            "age": "23"
        }
    
    }).then((res)=>{
        expect(res.status).to.eq(200)
        expect(res.body.data).has.property('name',dataTable.rawTable[1][0])
    })

})