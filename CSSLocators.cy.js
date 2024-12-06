describe('CSSLocators', () => {
    it('CSS Locators', () => {
        cy.visit("http://www.automationpractice.pl/index.php")

        cy.get("#search_query_top").type("T-Shirts") //by ID

        cy.get("button[name='submit_search']").click()

        cy.get(".lighter").contains("T-Shirts") //by class
    })
})