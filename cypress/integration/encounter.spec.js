/* eslint-disable no-undef */
context('Encounter', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
    cy.get('div[class=monster-list]').find('a').contains('Aboleth').click()
    cy.intercept({
      method: 'GET',
      url: 'https://www.dnd5eapi.co/api/monsters/aboleth'
    },
    {
      statusCode: 200,
      body: '../fixtures/monster.json'
    })
  })

  it('should show ADD TO ENCOUNTER button', () => {
    cy.get('.add-button').should('exist')
    cy.get('.add-button').contains('ADD TO ENCOUNTER')
  })

  it('should show added monster in encounter when button is clicked', () => {
    cy.get('.add-button').click()
    cy.get('.add-button').click()
    cy.get('.add-button').click()
    cy.get('.add-button').click()
    cy.get('.encounter-button').click()
    cy.get('div[class=encounter-list]').find('a').should('have.length', 4)
  })

  it('should delete monsters when delete is clicked', () => {
    for(let clicks = 0; clicks < 10; clicks++){
      cy.get('.add-button')
        .click()
    }
    cy.get('.encounter-button').click()
    cy.get('.encounter-list').find('a').should('have.length', 10)
    for(let n = 0; n < 5; n ++){
      cy.get('.delete-button').eq(0).click()
    }
    cy.get('.encounter-list').find('a').should('have.length', 5)
  })

})