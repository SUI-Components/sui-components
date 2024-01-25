/*
 * Remember: YOUR COMPONENT IS DEFINED GLOBALLY
 * */

/* eslint react/jsx-no-undef:0 */
/* eslint no-undef:0 */

import ReactDOM from 'react-dom'

import chai, {expect} from 'chai'
import chaiDOM from 'chai-dom'
import sinon from 'sinon'

import userEvents from '@testing-library/user-event'

import json from '../package.json'
import * as pkg from '../src/index.js'

chai.use(chaiDOM)

describe(json.name, () => {
  const {default: Component} = pkg
  const setup = setupEnvironment(Component)

  it('library should include defined exported elements', () => {
    // Given
    const library = pkg
    const libraryExportedMembers = ['validationCodeStatus', 'validationCodeMask', 'validationCodeSizes', 'default']

    // When
    const {
      validationCodeStatus,
      validationCodeMask,
      validationCodeSizes,
      default: MoleculeValidationCode,
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

    it('should render the statusMessage', () => {
      // Given
      const props = {
        statusMessage: 'Error',
        status: 'error'
      }

      // When
      const {getByText} = setup(props)
      const statusText = getByText(props.statusMessage).innerText

      // Then
      expect(statusText).to.be.equal(props.statusMessage)
    })

    it('should format to string if value is an array', () => {
      // Given
      const props = {
        value: [1, 2, 3, 4, 5]
      }

      const {getByDisplayValue} = setup(props)

      // Then
      props.value.forEach(value => {
        const input = getByDisplayValue(value)
        expect(input).to.exist
      })
    })

    it('should clear value', () => {
      // Given
      const spy = sinon.spy()
      const props = {
        value: '123456',
        deleteButtonTextLabel: 'Clear',
        onClear: spy,
        onChange: () => {}
      }

      // When
      const {getByDisplayValue, getByText} = setup(props)

      // Then
      const input = getByDisplayValue(props.value)
      expect(input.value).to.exist

      // And
      // When
      const deleteButton = getByText(props.deleteButtonTextLabel)
      userEvents.click(deleteButton)
      // Then
      sinon.assert.called(spy)
    })

    it('resend button should work', () => {
      // Given
      const props = {
        value: '12345',
        resendButtonTextLabel: 'Resend',
        onResend: () => {}
      }

      // When
      const {getByText} = setup(props)
      // Then
      const resendButton = getByText(props.resendButtonTextLabel)
      expect(resendButton).to.exist

      // When
      userEvents.click(resendButton)
    })
  })

  describe('validationCodeStatus', () => {
    it('value must be an object enum', () => {
      // Given
      const library = pkg

      // When
      const {validationCodeStatus: actual} = library

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
      const {validationCodeStatus: actual} = library
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

  describe('validationCodeMask', () => {
    it('value must be an object enum', () => {
      // Given
      const library = pkg

      // When
      const {validationCodeMask: actual} = library

      // Then
      expect(actual).to.be.an('object')
    })

    it('value must be a defined string-key pair filled', () => {
      // Given
      const library = pkg
      const expected = {
        NUMBER: '[0-9]',
        ALPHABETIC: '[A-Za-z]',
        ALPHANUMERIC: '[A-Za-z0-9]'
      }

      // When
      const {validationCodeMask: actual} = library
      const {NUMBER, ALPHABETIC, ALPHANUMERIC, ...others} = actual

      // Then
      expect(Object.keys(others).length).to.equal(0)
      expect(Object.keys(actual)).to.have.members(Object.keys(expected))
      Object.entries(expected).forEach(([expectedKey, expectedValue]) => {
        expect(Object.keys(actual).includes(expectedKey)).to.be.true
        expect(actual[expectedKey]).to.equal(expectedValue)
      })
    })
  })

  describe('validationCodeSizes', () => {
    it('value must be an object enum', () => {
      // Given
      const library = pkg

      // When
      const {validationCodeSizes: actual} = library

      // Then
      expect(actual).to.be.an('object')
    })

    it('value must be a defined string-key pair filled', () => {
      // Given
      const library = pkg
      const expected = {
        XXSMALL: 'xxsmall',
        XSMALL: 'xsmall',
        SMALL: 'small',
        MEDIUM: 'medium',
        LARGE: 'large',
        XLARGE: 'xlarge',
        XXLARGE: 'xxlarge'
      }

      // When
      const {validationCodeSizes: actual} = library
      const {XXSMALL, XSMALL, SMALL, MEDIUM, LARGE, XLARGE, XXLARGE, ...others} = actual

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
