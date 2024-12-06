/// <reference types="cypress" />

describe('My First Test', () => {
    it('Verify title - positive', () => {
        cy.visit('https://qaoncloud.com/')
        
        cy.title().should('eq','QA Testing Services | Software Testing Services - QAonCloud')
    })

    it('Verify title - negative', () => {
        cy.visit('https://qaoncloud.com/')
        
        cy.title().should('eq','QAonCloud')
    })
})