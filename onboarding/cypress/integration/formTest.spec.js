
describe('cool',()=>{
    it('working',()=>{
        cy.visit('http://localhost:3000/')
        
        cy.get('[type="text"]')
        .type('david')
        .should("have.value",'david')

        cy.get('[type="email"]')
        .type('david@yahoo.com')
        .should("have.value",'david@yahoo.com')

        cy.get('[type="password"]')
        .type('david')
        .should("have.value",'david')

        cy.get('[type="checkbox"]')
        .check()
        .should("have.value",'on')
        
        cy.get('button')
        .click()
        


    }
    )


})


// it('test error',()=>{
//     cy.get('form > :nth-child(3)')
//     .should('exist')
// })
