/*
 * Remember: YOUR COMPONENT IS DEFINED GLOBALLY
 * */

/* eslint react/jsx-no-undef:0 */
/* eslint no-undef:0 */

import ReactDOM from 'react-dom'

import chai, {expect} from 'chai'
import chaiDOM from 'chai-dom'

import {fireEvent} from '@testing-library/react'

import json from '../package.json'
import * as pkg from '../src/index.js'

chai.use(chaiDOM)

describe(json.name, () => {
  const {default: Component} = pkg
  const setup = setupEnvironment(Component)

  it('library should include defined exported elements', () => {
    // Given
    const library = pkg
    const libraryExportedMembers = [
      'MoleculeTab',
      'MoleculeTabs',
      'MoleculeTabsWithStateActive',
      'moleculeTabsTypes',
      'moleculeTabsVariants',
      'default'
    ]

    // When
    const {
      MoleculeTab,
      MoleculeTabs,
      MoleculeTabsWithStateActive,
      moleculeTabsTypes,
      moleculeTabsVariants,
      default: MoleculeTabsWithStateActiveDefault,
      ...others
    } = library

    // Then
    expect(Object.keys(library).length).to.equal(libraryExportedMembers.length)
    expect(Object.keys(library)).to.have.members(libraryExportedMembers)
    expect(Object.keys(others).length).to.equal(0)
  })

  describe(Component.displayName, () => {
    it('should render without crashing', () => {
      // Given
      const props = {}

      // When
      const component = <Component {...props} />

      // Then
      const div = document.createElement('div')
      ReactDOM.render(component, div)
      ReactDOM.unmountComponentAtNode(div)
    })

    it('should NOT render null', () => {
      // Given
      const props = {}

      // When
      const {container} = setup(props)

      // Then
      expect(container.innerHTML).to.be.a('string')
      expect(container.innerHTML).to.not.have.lengthOf(0)
    })

    it('should NOT extend classNames', () => {
      // Given
      const props = {
        className: 'extended-classNames'
      }
      const findSentence = str => string =>
        string.match(new RegExp(`S*${str}S*`))

      // When
      const {container} = setup(props)
      const findClassName = findSentence(props.className)

      // Then
      expect(findClassName(container.innerHTML)).to.be.null
    })

    it('should display the active content', () => {
      // Given
      const library = pkg
      const {MoleculeTab} = library
      const content = 'Content 1'
      const props = {
        children: [
          <MoleculeTab key={0} label="Tab 1" active>
            {content}
          </MoleculeTab>,
          <MoleculeTab key={1} label="Tab 2">
            Content 2
          </MoleculeTab>
        ]
      }

      // When
      const {getByText} = setup(props)

      // Then
      expect(getByText(content).innerHTML).to.equal(content)
    })

    it('should display the active content given count props', () => {
      // Given
      const library = pkg
      const {MoleculeTab} = library
      const content = 'Content 1'
      const count = ['3', '-3', '0']
      const props = {
        children: [
          <MoleculeTab key={0} label="Tab 1" count={count[0]} active>
            {content}
          </MoleculeTab>,
          <MoleculeTab key={1} label="Tab 2" count={count[1]}>
            Content 2
          </MoleculeTab>,
          <MoleculeTab key={2} label="Tab 3" count={count[2]}>
            Content 3
          </MoleculeTab>
        ]
      }

      // When
      const {getByText} = setup(props)

      // Then
      expect(getByText(content).innerHTML).to.equal(content)
      expect(getByText(count[0].toString()).innerHTML).to.equal(
        count[0].toString()
      )
      expect(getByText(count[1].toString()).innerHTML).to.equal(
        count[1].toString()
      )
      expect(getByText(count[2].toString()).innerHTML).to.equal(
        count[2].toString()
      )
    })

    it('should switch content when tab 2 is clicked', () => {
      // Given
      const library = pkg
      const {MoleculeTab} = library
      const expectedContent1 = 'Content 1'
      const expectedContent2 = 'Content 2'
      const props = {
        children: [
          <MoleculeTab key={0} label="Tab 1" active>
            {expectedContent1}
          </MoleculeTab>,
          <MoleculeTab key={1} label="Tab 2">
            {expectedContent2}
          </MoleculeTab>
        ]
      }

      // When
      const {getByRole} = setup(props)
      const tab1 = getByRole('tab', {name: 'Tab 1'})
      expect(tab1).to.have.attribute('aria-selected', 'true')

      const content1 = getByRole('tabpanel')
      expect(content1.innerHTML).to.equal(expectedContent1)

      // Click on second tab
      const tab2 = getByRole('tab', {name: 'Tab 2'})
      expect(tab2).to.have.attribute('aria-selected', 'false')
      fireEvent.click(tab2)
      const content2 = getByRole('tabpanel')

      // Then
      expect(tab2).to.have.attribute('aria-selected', 'true')
      expect(content2.innerHTML).to.equal(expectedContent2)
    })
  })

  describe('moleculeTabsTypes', () => {
    it('value must be an object enum', () => {
      // Given
      const library = pkg

      // When
      const {moleculeTabsTypes: actual} = library

      // Then
      expect(actual).to.be.an('object')
    })

    it('value must be a defined string-key pair filled', () => {
      // Given
      const library = pkg
      const expected = {
        HORIZONTAL: 'horizontal',
        VERTICAL: 'vertical',
        FULLWIDTH: 'fullWidth'
      }

      // When
      const {moleculeTabsTypes: actual} = library
      const {HORIZONTAL, VERTICAL, FULLWIDTH, ...others} = actual

      // Then
      expect(Object.keys(others).length).to.equal(0)
      expect(Object.keys(actual)).to.have.members(Object.keys(expected))
      Object.entries(expected).forEach(([expectedKey, expectedValue]) => {
        expect(Object.keys(actual).includes(expectedKey)).to.be.true
        expect(actual[expectedKey]).to.equal(expectedValue)
      })
    })
  })

  describe('moleculeTabsVariants', () => {
    it('value must be an object enum', () => {
      // Given
      const library = pkg

      // When
      const {moleculeTabsVariants: actual} = library

      // Then
      expect(actual).to.be.an('object')
    })

    it('value must be a defined string-key pair filled', () => {
      // Given
      const library = pkg
      const expected = {
        HIGHLIGHTED: 'highlighted',
        CLASSIC: 'classic'
      }

      // When
      const {moleculeTabsVariants: actual} = library
      const {HIGHLIGHTED, CLASSIC, ...others} = actual

      // Then
      expect(Object.keys(others).length).to.equal(0)
      expect(Object.keys(actual)).to.have.members(Object.keys(expected))
      Object.entries(expected).forEach(([expectedKey, expectedValue]) => {
        expect(Object.keys(actual).includes(expectedKey)).to.be.true
        expect(actual[expectedKey]).to.equal(expectedValue)
      })
    })
  })
})
