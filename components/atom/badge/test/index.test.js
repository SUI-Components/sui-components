/*
 * Remember: YOUR COMPONENT IS DEFINED GLOBALLY
 * */

/* eslint react/jsx-no-undef:0 */
/* eslint no-undef:0 */

import ReactDOM from 'react-dom'

import chai, {expect} from 'chai'
import chaiDOM from 'chai-dom'

import json from '../package.json'
import {MAX_LABEL_LENGTH, shouldRenderIcon, truncateText} from '../src/config.js'
import * as pkg from '../src/index.js'

chai.use(chaiDOM)

describe(json.name, () => {
  const {default: Component} = pkg
  const setup = setupEnvironment(Component)

  it('library should include defined exported elements', () => {
    // Given
    const library = pkg
    const libraryExportedMembers = ['atomBadgeDesigns', 'atomBadgeTypes', 'atomBadgeSizes', 'default']

    // When
    const {atomBadgeDesigns, atomBadgeTypes, atomBadgeSizes, default: AtomBadge, ...others} = library

    // Then
    expect(Object.keys(library).length).to.equal(libraryExportedMembers.length)
    expect(Object.keys(library)).to.have.members(libraryExportedMembers)
    expect(Object.keys(others).length).to.equal(0)
  })

  describe(Component.displayName, () => {
    it('should render without crashing', () => {
      // Given
      const props = {
        label: 'label'
      }

      // When
      const component = <Component {...props} />

      // Then
      const div = document.createElement('div')
      ReactDOM.render(component, div)
      ReactDOM.unmountComponentAtNode(div)
    })

    it('should NOT render null', () => {
      // Given
      const props = {
        label: 'label'
      }

      // When
      const {container} = setup(props)

      // Then
      expect(container.innerHTML).to.be.a('string')
      expect(container.innerHTML).to.not.have.lengthOf(0)
    })

    it('should NOT extend classNames', () => {
      // Given
      const props = {className: 'extended-classNames', label: 'label'}
      const findSentence = str => string => string.match(new RegExp(`S*${str}S*`))

      // When
      const {container} = setup(props)
      const findClassName = findSentence(props.className)

      // Then
      expect(findClassName(container.innerHTML)).to.be.null
    })
  })

  describe('atomBadgeDesigns', () => {
    it('value must be an object enum', () => {
      // Given
      const library = pkg

      // When
      const {atomBadgeDesigns: actual} = library

      // Then
      expect(actual).to.be.an('object')
    })

    it('value must be a defined string-key pair filled', () => {
      // Given
      const library = pkg
      const expected = {
        SOLID: 'solid',
        SOFT: 'soft'
      }

      // When
      const {atomBadgeDesigns: actual} = library
      const {SOLID, SOFT, ...others} = actual

      // Then
      expect(Object.keys(others).length).to.equal(0)
      expect(Object.keys(actual)).to.have.members(Object.keys(expected))
      Object.entries(expected).forEach(([expectedKey, expectedValue]) => {
        expect(Object.keys(actual).includes(expectedKey)).to.be.true
        expect(actual[expectedKey]).to.equal(expectedValue)
      })
    })
  })

  describe('atomBadgeTypes', () => {
    it('value must be an object enum', () => {
      // Given
      const library = pkg

      // When
      const {atomBadgeTypes: actual} = library

      // Then
      expect(actual).to.be.an('object')
    })

    it('value must be a defined string-key pair filled', () => {
      // Given
      const library = pkg
      const expected = {
        SUCCESS: 'success',
        ERROR: 'error',
        INFO: 'info',
        ALERT: 'alert',
        NEW: 'new',
        NEUTRAL: 'neutral',
        PRIMARY: 'primary',
        SECONDARY: 'secondary'
      }

      // When
      const {atomBadgeTypes: actual} = library
      const {SUCCESS, ERROR, INFO, ALERT, NEW, NEUTRAL, PRIMARY, SECONDARY, ...others} = actual

      // Then
      expect(Object.keys(others).length).to.equal(0)
      expect(Object.keys(actual)).to.have.members(Object.keys(expected))
      Object.entries(expected).forEach(([expectedKey, expectedValue]) => {
        expect(Object.keys(actual).includes(expectedKey)).to.be.true
        expect(actual[expectedKey]).to.equal(expectedValue)
      })
    })
  })

  describe('atomBadgeSizes', () => {
    it('value must be an object enum', () => {
      // Given
      const library = pkg

      // When
      const {atomBadgeSizes: actual} = library

      // Then
      expect(actual).to.be.an('object')
    })

    it('value must be a defined string-key pair filled', () => {
      // Given
      const library = pkg
      const expected = {
        LARGE: 'large',
        MEDIUM: 'medium',
        SMALL: 'small'
      }

      // When
      const {atomBadgeSizes: actual} = library
      const {LARGE, MEDIUM, SMALL, ...others} = actual

      // Then
      expect(Object.keys(others).length).to.equal(0)
      expect(Object.keys(actual)).to.have.members(Object.keys(expected))
      Object.entries(expected).forEach(([expectedKey, expectedValue]) => {
        expect(Object.keys(actual).includes(expectedKey)).to.be.true
        expect(actual[expectedKey]).to.equal(expectedValue)
      })
    })
  })

  describe('truncateText', () => {
    it('given small string should return full string', () => {
      // Given
      const expected = 'Lorem ipsum dolor sit amet'

      // When
      const actual = truncateText(expected)

      // Then
      expect(actual).to.equal(expected)
    })

    it('given large string should return first part of the string', () => {
      // Given
      const expected =
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent luctus, massa nec tincidunt semper, ex ipsum fermentum elit, convallis auctor sem nunc ut neque. Proin a mi eu libero condimentum viverra a a metus. Phasellus tincidunt placerat viverra. Cras in consectetur ex, eget viverra leo. Phasellus lacinia hendrerit cursus. Nulla facilisi. Nunc cursus ligula metus, eget pretium urna lacinia a. Morbi vel convallis elit. Donec sollicitudin augue non vulputate pellentesque.'

      // When
      const actual = truncateText(expected)

      // Then
      expect(actual.length).to.equal(MAX_LABEL_LENGTH)
      expect(actual).to.equal(expected.slice(0, MAX_LABEL_LENGTH))
    })
  })

  describe('shouldRenderIcon', () => {
    const Icon = () => <svg />

    it('NOT given an icon should return false', () => {
      // Given
      const args = {icon: undefined, size: undefined, transparent: undefined}

      // When
      const actual = shouldRenderIcon(args)

      // Then
      expect(actual).to.be.false
    })

    it('given an icon should return false', () => {
      // Given
      const args = {icon: <Icon />, size: undefined, transparent: undefined}

      // When
      const actual = shouldRenderIcon(args)

      // Then
      expect(actual).to.be.true
    })

    it("given an icon and transparent='true' should return true", () => {
      // Given
      const args = {icon: <Icon />, size: undefined, transparent: true}

      // When
      const actual = shouldRenderIcon(args)

      // Then
      expect(actual).to.be.true
    })

    it("given an icon and transparent='false' should return true", () => {
      // Given
      const args = {icon: <Icon />, size: undefined, transparent: true}

      // When
      const actual = shouldRenderIcon(args)

      // Then
      expect(actual).to.be.true
    })

    it("given an icon and size=!'SMALL' should return true", () => {
      // Given
      const args = {
        icon: <Icon />,
        size: pkg.atomBadgeSizes.MEDIUM,
        transparent: undefined
      }

      // When
      const actual = shouldRenderIcon(args)

      // Then
      expect(actual).to.be.true
    })

    it("given an icon and size='SMALL' should return false", () => {
      // Given
      const args = {
        icon: <Icon />,
        size: pkg.atomBadgeSizes.SMALL,
        transparent: undefined
      }

      // When
      const actual = shouldRenderIcon(args)

      // Then
      expect(actual).to.be.false
    })

    it("given an icon and size='SMALL' and transparent='true' should return true", () => {
      // Given
      const args = {
        icon: <Icon />,
        size: pkg.atomBadgeSizes.SMALL,
        transparent: true
      }

      // When
      const actual = shouldRenderIcon(args)

      // Then
      expect(actual).to.be.true
    })
  })
})
