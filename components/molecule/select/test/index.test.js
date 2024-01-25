/*
 * Remember: YOUR COMPONENT IS DEFINED GLOBALLY
 * */

/* eslint react/jsx-no-undef:0 */
/* eslint no-undef:0 */

import ReactDOM from 'react-dom'

import chai, {expect} from 'chai'
import chaiDOM from 'chai-dom'
import sinon from 'sinon'

import {fireEvent, waitFor} from '@testing-library/react'

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
      'moleculeSelectDropdownListSizes',
      'moleculeSelectSizes',
      'moleculeSelectStates',
      'default'
    ]

    // When
    const {
      moleculeSelectDropdownListSizes,
      moleculeSelectSizes,
      moleculeSelectStates,
      default: MoleculeSelect,
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
      const findSentence = str => string => string.match(new RegExp(`S*${str}S*`))

      // When
      const {container} = setup(props)
      const findClassName = findSentence(props.className)

      // Then
      expect(findClassName(container.innerHTML)).to.be.null
    })

    it('should call onBlur callback', () => {
      const spy = sinon.spy()

      const props = {
        onBlur: spy
      }

      // When
      const {getByRole} = setup(props)
      const textBox = getByRole('textbox')

      textBox.focus()
      fireEvent.blur(textBox)

      // Then
      sinon.assert.calledOnce(spy)
    })

    it('should display the search input when hasSearch is active', () => {
      const props = {
        hasSearch: true,
        searchPlaceholder: 'search placehoder',
        multiselection: true
      }

      // When
      const {getByPlaceholderText} = setup(props)

      // Then
      expect(getByPlaceholderText(props.searchPlaceholder)).to.not.be.null
    })

    it('should call the onSearch callback when typing on the search input', async () => {
      const spy = sinon.spy()

      const props = {
        onSearch: spy,
        hasSearch: true,
        searchPlaceholder: 'search placehoder',
        multiselection: true
      }

      // When
      const {getByPlaceholderText} = setup(props)

      const searchInput = getByPlaceholderText(props.searchPlaceholder)

      searchInput.focus()
      fireEvent.change(searchInput, {target: {value: 'abc'}})

      // Then
      await waitFor(() => sinon.assert.callCount(spy, 1))
      sinon.assert.calledWith(spy, {value: 'abc'})
    })

    it('should call the onToggle callback when input clicked', async () => {
      const spy = sinon.spy()

      const props = {
        onToggle: (ev, {isOpen}) => spy(isOpen)
      }

      // When
      const {getByRole} = setup(props)
      const textBox = getByRole('textbox')

      textBox.focus()
      fireEvent.click(textBox)

      // Then
      await waitFor(() => sinon.assert.callCount(spy, 1))
      sinon.assert.calledWith(spy, true)
    })

    it('should call the onToggle callback when enter key pressed', async () => {
      const spy = sinon.spy()

      const props = {
        onToggle: (ev, {isOpen}) => spy(isOpen)
      }

      // When
      const {getByRole} = setup(props)
      const textBox = getByRole('textbox')

      textBox.focus()
      fireEvent.keyDown(textBox, {key: 'Enter'})

      // Then
      await waitFor(() => sinon.assert.callCount(spy, 1))
      sinon.assert.calledWith(spy, true)
    })
  })

  describe('moleculeSelectDropdownListSizes', () => {
    it('value must be an object enum', () => {
      // Given
      const library = pkg

      // When
      const {moleculeSelectDropdownListSizes: actual} = library

      // Then
      expect(actual).to.be.an('object')
    })

    it('value must be a defined string-key pair filled', () => {
      // Given
      const library = pkg
      const expected = {
        SMALL: 'small',
        MEDIUM: 'medium',
        LARGE: 'large'
      }

      // When
      const {moleculeSelectDropdownListSizes: actual} = library
      const {SMALL, MEDIUM, LARGE, ...others} = actual

      // Then
      expect(Object.keys(others).length).to.equal(0)
      expect(Object.keys(actual)).to.have.members(Object.keys(expected))
      Object.entries(expected).forEach(([expectedKey, expectedValue]) => {
        expect(Object.keys(actual).includes(expectedKey)).to.be.true
        expect(actual[expectedKey]).to.equal(expectedValue)
      })
    })
  })

  describe('moleculeSelectSizes', () => {
    it('value must be an object enum', () => {
      // Given
      const library = pkg

      // When
      const {moleculeSelectSizes: actual} = library

      // Then
      expect(actual).to.be.an('object')
    })

    it('value must be a defined string-key pair filled', () => {
      // Given
      const library = pkg
      const expected = {
        XLARGE: 'xl',
        LARGE: 'l',
        MEDIUM: 'm',
        SMALL: 's',
        XSMALL: 'xs'
      }

      // When
      const {moleculeSelectSizes: actual} = library
      const {XLARGE, LARGE, MEDIUM, SMALL, XSMALL, ...others} = actual

      // Then
      expect(Object.keys(others).length).to.equal(0)
      expect(Object.keys(actual)).to.have.members(Object.keys(expected))
      Object.entries(expected).forEach(([expectedKey, expectedValue]) => {
        expect(Object.keys(actual).includes(expectedKey)).to.be.true
        expect(actual[expectedKey]).to.equal(expectedValue)
      })
    })
  })

  describe('moleculeSelectStates', () => {
    it('value must be an object enum', () => {
      // Given
      const library = pkg

      // When
      const {moleculeSelectStates: actual} = library

      // Then
      expect(actual).to.be.an('object')
    })

    it('value must be a defined string-key pair filled', () => {
      // Given
      const library = pkg
      const expected = {
        ERROR: 'error',
        SUCCESS: 'success',
        ALERT: 'alert'
      }

      // When
      const {moleculeSelectStates: actual} = library
      const {ERROR, SUCCESS, ALERT, ...others} = actual

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
