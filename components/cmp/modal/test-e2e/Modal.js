/* global cy, expect, Cypress */
describe('Cmp Modal', function() {
  before(() => {
    cy.visit('/workbench/cmp/modal/demo')
    cy.get('.sui-StudioDemo-fullScreenButton').click()
    cy.get('#open-e2e').click()
  })

  it('show logo correctly', function() {
    cy.get('.sui-CmpModal-logo').should('exist')
  })

  it('allow user navigate to cookies ads customization', function() {
    cy.get('.sui-CmpModal-inner .sui-CmpModal-box:last')
      .find('a')
      .click()

    cy.get('.sui-CmpModal-consentName').should('exist')
    cy.get('.sui-AtomSwitch').should('exist')
  })

  it('allow user use disable all consents', function() {
    cy.get('.sui-CmpModal-consentsActions')
      .first()
      .find('.sui-AtomButton--secondary')
      .click()

    cy.get('.sui-CmpModal-consentsTable')
      .first()
      .find('.sui-AtomSwitch')
      .each($atomSwitch => {
        cy.wrap($atomSwitch).should('not.have.class', 'sui-AtomSwitch--active')
      })
  })
})
