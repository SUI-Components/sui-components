/*
 * Remember: YOUR COMPONENT IS DEFINED GLOBALLY
 * */

/* eslint react/jsx-no-undef:0 */
/* eslint no-undef:0 */

import ReactDOM from 'react-dom'

import chai, {expect} from 'chai'
import chaiDOM from 'chai-dom'

import json from '../package.json'
import * as pkg from '../src/index.js'

chai.use(chaiDOM)

describe(json.name, () => {
  const {default: Component} = pkg
  const setup = setupEnvironment(Component)

  it('library should include defined exported elements', () => {
    // Given
    const library = pkg
    const libraryExportedMembers = ['atomSpinnerOverlayTypes', 'atomSpinnerTypes', 'atomSpinnerSizes', 'default']

    // When
    const {atomSpinnerOverlayTypes, atomSpinnerTypes, atomSpinnerSizes, default: AtomSpinner, ...others} = library

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
      const props = {className: 'extended-classNames'}
      const findSentence = str => string => string.match(new RegExp(`S*${str}S*`))

      // When
      const {container} = setup(props)
      const findClassName = findSentence(props.className)

      // Then
      expect(findClassName(container.innerHTML)).to.be.null
    })
  })

  describe('atomSpinnerTypes', () => {
    it('value must be an object enum', () => {
      // Given
      const library = pkg

      // When
      const {atomSpinnerTypes: actual} = library

      // Then
      expect(actual).to.be.an('object')
    })

    it('value must be a defined string-key pair filled', () => {
      // Given
      const library = pkg
      const expected = {
        FULL: 'full',
        SECTION: 'section'
      }

      // When
      const {atomSpinnerTypes: actual} = library
      const {FULL, SECTION, ...others} = actual

      // Then
      expect(Object.keys(others).length).to.equal(0)
      expect(Object.keys(actual)).to.have.members(Object.keys(expected))
      Object.entries(expected).forEach(([expectedKey, expectedValue]) => {
        expect(Object.keys(actual).includes(expectedKey)).to.be.true
        expect(actual[expectedKey]).to.equal(expectedValue)
      })
    })
  })

  describe('atomSpinnerOverlayTypes', () => {
    it('value must be an object enum', () => {
      // Given
      const library = pkg

      // When
      const {atomSpinnerOverlayTypes: actual} = library

      // Then
      expect(actual).to.be.an('object')
    })

    it('value must be a defined string-key pair filled', () => {
      // Given
      const library = pkg
      const expected = {
        ACCENT: 'accent',
        DARK: 'dark',
        LIGHT: 'light',
        PRIMARY: 'primary',
        TRANSPARENT: 'transparent'
      }

      // When
      const {atomSpinnerOverlayTypes: actual} = library
      const {ACCENT, DARK, LIGHT, PRIMARY, TRANSPARENT, ...others} = actual

      // Then
      expect(Object.keys(others).length).to.equal(0)
      expect(Object.keys(actual)).to.have.members(Object.keys(expected))
      Object.entries(expected).forEach(([expectedKey, expectedValue]) => {
        expect(Object.keys(actual).includes(expectedKey)).to.be.true
        expect(actual[expectedKey]).to.equal(expectedValue)
      })
    })
  })

  describe('atomSpinnerSizes', () => {
    it('value must be an object enum', () => {
      // Given
      const library = pkg

      // When
      const {atomSpinnerSizes: actual} = library

      // Then
      expect(actual).to.be.an('object')
    })

    it('value must be a defined string-key pair filled', () => {
      // Given
      const library = pkg
      const expected = {
        SMALL: 'small',
        MEDIUM: 'medium'
      }

      // When
      const {atomSpinnerSizes: actual} = library
      const {SMALL, MEDIUM, ...others} = actual

      // Then
      expect(Object.keys(others).length).to.equal(0)
      expect(Object.keys(actual)).to.have.members(Object.keys(expected))
      Object.entries(expected).forEach(([expectedKey, expectedValue]) => {
        expect(Object.keys(actual).includes(expectedKey)).to.be.true
        expect(actual[expectedKey]).to.equal(expectedValue)
      })
    })
  })

  describe('accessibility features', () => {
    it('should have correct ARIA attributes', () => {
      const props = {
        ariaLabel: 'Loading content',
        ariaLive: 'polite'
      }
      const {container} = setup(props)
      const spinner = container.firstChild

      expect(spinner).to.have.attribute('role', 'status')
      expect(spinner).to.have.attribute('aria-live', 'polite')
      expect(spinner).to.have.attribute('aria-label', 'Loading content')
    })

    it('should respect animation preferences', () => {
      const props = {
        disableAnimation: true
      }
      const {container} = setup(props)
      expect(container.firstChild).to.have.class('sui-AtomSpinner--noAnimation')
    })
  })
})
