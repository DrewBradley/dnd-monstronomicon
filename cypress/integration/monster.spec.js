/* eslint-disable no-undef */
context('Monsters', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
    cy.get('.search-field').type('tarr')
    cy.get('.search-btn').click()
    cy.wait(300)
    cy.get('div[class=monster-list]').find('a').click()
    cy.intercept({
      method: 'GET',
      url: 'https://www.dnd5eapi.co/api/monsters/tarrasque'
    },
    {
      statusCode: 200,
      body: '../fixtures/monster.json'
    })
  })

  it('should display a monster\'s stats in a "NAME BOX"', () => {
    cy.get('div[class=name-box]').find('p').contains('NAME: Tarrasque')
    .get('div[class=name-box]').find('p').contains('TYPE: monstrosity')
    .get('div[class=name-box]').find('div').contains('SUBTYPE:').find('span').contains('titan')
    .get('div[class=name-box]').find('p').contains('ALIGNMENT: unaligned')
    .get('div[class=name-box]').find('p').contains('XP: 155000')
    .get('div[class=name-box]').find('p').contains('LANGUAGES: ')
  })

  it('should display a monster\'s stats in a "SIZE BOX"', () => {
    cy.get('div[class=size-box]').find('p').contains('SIZE: Gargantuan')
    .get('div[class=size-box]').find('p').contains('CHALLENGE RATING: 30')
    .get('div[class=size-box]').find('p').contains('HIT DICE: 33d20')
    .get('div[class=size-box]').find('p').contains('HIT POINTS: 676')
    .get('div[class=size-box]').find('p').contains('ARMOR CLASS: 25')
    .get('div[class=size-box]').find('div').contains('PROFICIENCIES:').find('p').should('have.length', 3)
  })

  it('should display a monster\'s stats in a "MODIFIER BOX"', () => {
    cy.get('div[class=modifier-box]').find('p').contains('CHARISMA: 11')
    .get('div[class=modifier-box]').find('p').contains('CONSTITUTION: 30')
    .get('div[class=modifier-box]').find('p').contains('DEXTERITY: 11')
    .get('div[class=modifier-box]').find('p').contains('INTELLIGENCE: 3')
    .get('div[class=modifier-box]').find('p').contains('STRENGTH: 30')
    .get('div[class=modifier-box]').find('p').contains('WISDOM: 11')
  })

  it('should display a monster\'s stats in a "IMMUNITIES BOX"', () => {
    cy.get('div[class=immunities-box]').find('div').contains('DAMAGE VULNERABILITIES:')
    .get('div[class=immunities-box]').find('div').contains('DAMAGE RESISTANCES:')
    .get('div[class=immunities-box]').find('div').contains('CONDITION IMMUNITIES:').find('p').should('have.length', 4)
    .get('div[class=immunities-box]').find('div').contains('DAMAGE IMMUNITIES:').find('p').should('have.length', 3)
    .get('div[class=immunities-box]').find('div').contains('CONDITION IMMUNITIES:').find('p').contains('Charmed')
    .get('div[class=immunities-box]').find('div').contains('DAMAGE IMMUNITIES:').find('p').contains('fire')
  })

  it('should display a monster\'s actions', () => {
    cy.get('div').should('have.class', 'one-stat').and('have.class', 'actions')
    cy.get('div').should('have.class', 'actions').find('div').contains('Multiattack')
    cy.get('div').should('have.class', 'actions').find('div').contains('Bite')
  })

  it('should display a monster\'s LEGENDARY actions', () => {
    cy.get('div[class=legendary]').find('div').contains('LEGENDARY ACTIONS:')
    cy.get('div[class=legendary]').find('div').should('have.length', 7)
  })

  it('should allow a monster to be added to an encounter', () => {
    cy.get('div[class=legendary]').find('div').contains('LEGENDARY ACTIONS:')
    cy.get('button[class=add-button]').contains('ADD TO ENCOUNTER')
    cy.get('button[class=add-button]').click()
    cy.get('button[class=add-button]').click()
    cy.get('button[class=add-button]').click()
    cy.get('a[class=encounter-button]').click()
    cy.get('div[class=encounter-list]').find('a').should('have.length', 3)
  })

})