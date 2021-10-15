/*
 * Remember: YOUR COMPONENT IS DEFINED GLOBALLY
 * */

/* eslint react/jsx-no-undef:0 */
/* eslint no-undef:0 */

import ReactDOM from 'react-dom'

import chai, {expect} from 'chai'
import chaiDOM from 'chai-dom'

import * as pkg from '../src'

import json from '../package.json'

chai.use(chaiDOM)

describe(json.name, () => {
  const {default: Component} = pkg
  const setup = setupEnvironment(Component)

  it('library should include defined exported elements', () => {
    // Given
    const library = pkg

    // When
    const {
      inputTypes,
      inputSizes,
      inputStates,
      default: AtomInput,
      ...others
    } = library

    // Then
    expect(Object.keys(library).length).to.equal(4)
    expect(Object.keys(library)).to.have.members([
      'inputTypes',
      'inputSizes',
      'inputStates',
      'default'
    ])
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
  })

  describe('inputTypes', () => {
    it('value must be an object enum', () => {
      // Given
      const library = pkg

      // When
      const {inputTypes: actual} = library

      // Then
      expect(actual).to.be.an('object')
    })

    it('value must be a defined string-key pair filled', () => {
      // Given
      const library = pkg
      const expected = {
        DATE: 'date',
        MASK: 'mask',
        NUMBER: 'number',
        PASSWORD: 'password',
        SUI_PASSWORD: 'sui-password',
        TEXT: 'text',
        TEL: 'tel',
        EMAIL: 'email'
      }

      // When
      const {inputTypes: actual} = library
      const {
        DATE,
        MASK,
        NUMBER,
        PASSWORD,
        SUI_PASSWORD,
        TEXT,
        TEL,
        EMAIL,
        ...others
      } = actual

      // Then
      expect(Object.keys(others).length).to.equal(0)
      expect(Object.keys(actual)).to.have.members(Object.keys(expected))
      Object.entries(expected).forEach(([expectedKey, expectedValue]) => {
        expect(Object.keys(actual).includes(expectedKey)).to.be.true
        expect(actual[expectedKey]).to.equal(expectedValue)
      })
    })
  })

  describe('inputSizes', () => {
    it('value must be an object enum', () => {
      // Given
      const library = pkg

      // When
      const {inputSizes: actual} = library

      // Then
      expect(actual).to.be.an('object')
    })

    it('value must be a defined string-key pair filled', () => {
      // Given
      const library = pkg
      const expected = {
        LARGE: 'l',
        MEDIUM: 'm',
        SMALL: 's',
        XSMALL: 'xs'
      }

      // When
      const {inputSizes: actual} = library
      const {LARGE, MEDIUM, SMALL, XSMALL, ...others} = actual

      // Then
      expect(Object.keys(others).length).to.equal(0)
      expect(Object.keys(actual)).to.have.members(Object.keys(expected))
      Object.entries(expected).forEach(([expectedKey, expectedValue]) => {
        expect(Object.keys(actual).includes(expectedKey)).to.be.true
        expect(actual[expectedKey]).to.equal(expectedValue)
      })
    })
  })

  describe('inputStates', () => {
    it('value must be an object enum', () => {
      // Given
      const library = pkg

      // When
      const {inputStates: actual} = library

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
      const {inputStates: actual} = library
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
