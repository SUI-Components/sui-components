/* global cy, expect, Cypress */
describe('Cmp Banner', function() {
  const freshStart = () => {
    cy.visit('/workbench/cmp/banner/demo')
    cy.get('.sui-StudioDemo-fullScreenButton').click()
  }

  before(freshStart)

  it('show notification correctly', function() {
    cy.get('.sui-MoleculeNotification').should('exist')
  })

  it('allow user to accept or change configuration', function() {
    cy.get('.sui-MoleculeNotification-buttonsContainer')
      .find('button')
      .should('have.length', 2)
  })

  it('open the modal if user wants to know more', function() {
    cy.get('.sui-MoleculeNotification-buttonsContainer button:first').click()

    cy.get('.sui-CmpModal').should('exist')
  })

  it('close the notification if user accept', function() {
    freshStart()
    cy.get('.sui-MoleculeNotification-buttonsContainer button:last').click()

    cy.get('.sui-MoleculeNotification').should.not('exist')
  })
})
