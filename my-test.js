/// <reference types="cypress" />


describe('MyTest', () => {
    it('Test1', () => {
        // Opens automationpractice.com
        cy.visit('http://automationpractice.com/index.php')

        // Adds 2 products to the basket
        cy.get('[data-id-product=1]').first().click()
        cy.contains('Continue shopping').click()

        cy.get('[data-id-product=1]').first().click()
        cy.contains('Continue shopping').click()

        // Adds the third item from the list to the cart third item
        cy.get('[data-id-product=3]').first().click()
        cy.get('[title="Proceed to checkout"]').click()

        // “Proceed to checkout”
        cy.get('.standard-checkout').click()

        // Random name generator
        function userID_Alpha() {
            var text = "";
            var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        
            for (var i = 0; i < 10; i++)
              text += possible.charAt(Math.floor(Math.random() * possible.length));
        
            return text;
        }

        var name = userID_Alpha()
        // Adds email and continue
        cy.get('#email_create')
          .type(name + '@email.com').should('have.value', name + '@email.com')
        cy.get('#SubmitCreate').click()

        // Fills all relevant information
        cy.get('#id_gender2')
            .check('2').should('be.checked')

        cy.get('#customer_firstname')
          .type('Test').should('have.value', 'Test')
    
        cy.get('#customer_lastname')
          .type('Auto').should('have.value', 'Auto')  

        cy.get('#passwd')
          .type('12345').should('have.value', '12345')  

        cy.get('#address1')
          .type('Test').should('have.value', 'Test')  
       
        cy.get('#city')
          .type('Kaunas').should('have.value', 'Kaunas')   

        cy.get('#postcode')
          .type('00000').should('have.value', '00000')  
       
        cy.get('#id_state').select('5')
        .should('have.value', '5')  

        cy.get('#phone_mobile')
        .type('12345678').should('have.value', '12345678')   

        // Submits account
        cy.get('#submitAccount').click()

        cy.get('.cart_navigation > .button > span').click()

        cy.get('#cgv')
            .check('1').should('be.checked')
        cy.get('.cart_navigation > .button > span').click()
        
        cy.get('.cheque').click()

        cy.get('#cart_navigation > .button > span').click()

        // Checks if the message is displayed
        cy.get('.alert').should('include.text', 'Your order on My Store is complete.')
    })
})