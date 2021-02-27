/* eslint-disable no-undef */
context('Actions', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  it('should show header components', () => {
    cy.get('.search-field').should('exist')
    cy.get('.show-all-btn').should('exist')
    cy.get('.filter-form').should('exist').should('have.value', '')
    cy.get('.filter-label').should('exist')
    cy.get('.filter-select').should('have.value', 'select')
    cy.get('.filter-button').should('exist')
    cy.get('.encounter-button').should('exist')
  })

  it('should display a list of monsters fetched from the API', () => {
    cy.intercept({
      method: 'GET',
      url: 'https://www.dnd5eapi.co/api/monsters'
    },
    {
      statusCode: 200,
      body: '../fixtures/monsters.json'
    })
    .get('div[class=monster-list]').find('a').should('have.length', 332)
    .get('div[class=monster-tag]').parent().should('have.attr', 'href', '/monster/aboleth')
    .get('div[class=monster-tag]').contains('Aboleth')

  })

  it('should search by monster name', () => {
    cy.get('.search-field').type('green')
    cy.get('.search-input').should('have.value', 'green')
    cy.get('.search-btn').click()
    cy.get('div[class=monster-list]').find('a').should('have.length', 5)
    cy.get('.show-all-btn').click()
    cy.get('div[class=monster-list]').find('a').should('have.length', 332)
  })

  it('should filter by monster challenge rating', () => {
    cy.get('.filter-select').select('15')
    cy.get('.filter-button').click()
    cy.get('div[class=monster-list]').find('a').should('have.length', 4)
    cy.get('.show-all-btn').click()
    cy.get('div[class=monster-list]').find('a').should('have.length', 332)
  })
})
