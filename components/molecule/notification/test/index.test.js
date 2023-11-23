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
    const libraryExportedMembers = [
      'POSITION',
      'AUTO_CLOSE',
      'TYPES',
      'VARIATIONS',
      'BRDS_SIZE',
      'moleculeNotificationAlignItems',
      'moleculeNotificationPosition',
      'moleculeNotificationAutoClose',
      'moleculeNotificationTypes',
      'moleculeNotificationVariations',
      'moleculeNotificationBorderSizes',
      'default'
    ]

    // When
    const {
      POSITION,
      AUTO_CLOSE,
      TYPES,
      VARIATIONS,
      BRDS_SIZE,
      moleculeNotificationPosition,
      moleculeNotificationAlignItems,
      moleculeNotificationAutoClose,
      moleculeNotificationTypes,
      moleculeNotificationVariations,
      moleculeNotificationBorderSizes,
      default: MoleculeNotification,
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
      const props = {
        children: 'children'
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
        children: 'children'
      }

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
  })

  describe('moleculeNotificationPosition', () => {
    it('value must be an object enum', () => {
      // Given
      const library = pkg

      // When
      const {moleculeNotificationPosition: actual} = library

      // Then
      expect(actual).to.be.an('object')
    })

    it('value must be a defined string-key pair filled', () => {
      // Given
      const library = pkg
      const expected = {
        top: 'top',
        bottom: 'bottom',
        relative: 'relative'
      }

      // When
      const {moleculeNotificationPosition: actual} = library
      const {top, bottom, relative, ...others} = actual

      // Then
      expect(Object.keys(others).length).to.equal(0)
      expect(Object.keys(actual)).to.have.members(Object.keys(expected))
      Object.entries(expected).forEach(([expectedKey, expectedValue]) => {
        expect(Object.keys(actual).includes(expectedKey)).to.be.true
        expect(actual[expectedKey]).to.equal(expectedValue)
      })
    })
  })

  describe('moleculeNotificationAutoClose', () => {
    it('value must be an object enum', () => {
      // Given
      const library = pkg

      // When
      const {moleculeNotificationAutoClose: actual} = library

      // Then
      expect(actual).to.be.an('object')
    })

    it('value must be a defined string-key pair filled', () => {
      // Given
      const library = pkg
      const expected = {
        short: 'short',
        medium: 'medium',
        long: 'long',
        manual: 'manual'
      }

      // When
      const {moleculeNotificationAutoClose: actual} = library
      const {short, medium, long, manual, ...others} = actual

      // Then
      expect(Object.keys(others).length).to.equal(0)
      expect(Object.keys(actual)).to.have.members(Object.keys(expected))
      Object.entries(expected).forEach(([expectedKey, expectedValue]) => {
        expect(Object.keys(actual).includes(expectedKey)).to.be.true
        expect(actual[expectedKey]).to.equal(expectedValue)
      })
    })
  })

  describe('moleculeNotificationTypes', () => {
    it('value must be an object enum', () => {
      // Given
      const library = pkg

      // When
      const {moleculeNotificationTypes: actual} = library

      // Then
      expect(actual).to.be.an('object')
    })

    it('value must be a defined string-key pair filled', () => {
      // Given
      const library = pkg
      const expected = {
        info: 'info',
        error: 'error',
        success: 'success',
        system: 'system',
        warning: 'warning'
      }

      // When
      const {moleculeNotificationTypes: actual} = library
      const {info, error, success, system, warning, ...others} = actual

      // Then
      expect(Object.keys(others).length).to.equal(0)
      expect(Object.keys(actual)).to.have.members(Object.keys(expected))
      Object.entries(expected).forEach(([expectedKey, expectedValue]) => {
        expect(Object.keys(actual).includes(expectedKey)).to.be.true
        expect(actual[expectedKey]).to.equal(expectedValue)
      })
    })
  })

  describe('moleculeNotificationVariations', () => {
    it('value must be an object enum', () => {
      // Given
      const library = pkg

      // When
      const {moleculeNotificationVariations: actual} = library

      // Then
      expect(actual).to.be.an('object')
    })

    it('value must be a defined string-key pair filled', () => {
      // Given
      const library = pkg
      const expected = {
        positive: 'positive',
        negative: 'negative',
        outline: 'outline'
      }

      // When
      const {moleculeNotificationVariations: actual} = library
      const {positive, negative, outline, ...others} = actual

      // Then
      expect(Object.keys(others).length).to.equal(0)
      expect(Object.keys(actual)).to.have.members(Object.keys(expected))
      Object.entries(expected).forEach(([expectedKey, expectedValue]) => {
        expect(Object.keys(actual).includes(expectedKey)).to.be.true
        expect(actual[expectedKey]).to.equal(expectedValue)
      })
    })
  })

  describe('moleculeNotificationBorderSizes', () => {
    it('value must be an object enum', () => {
      // Given
      const library = pkg

      // When
      const {moleculeNotificationBorderSizes: actual} = library

      // Then
      expect(actual).to.be.an('object')
    })

    it('value must be a defined string-key pair filled', () => {
      // Given
      const library = pkg
      const expected = {
        extraLarge: 'xl',
        large: 'l',
        medium: 'm',
        small: 's',
        extraSmall: 'xs'
      }

      // When
      const {moleculeNotificationBorderSizes: actual} = library
      const {extraLarge, large, medium, small, extraSmall, ...others} = actual

      // Then
      expect(Object.keys(others).length).to.equal(0)
      expect(Object.keys(actual)).to.have.members(Object.keys(expected))
      Object.entries(expected).forEach(([expectedKey, expectedValue]) => {
        expect(Object.keys(actual).includes(expectedKey)).to.be.true
        expect(actual[expectedKey]).to.equal(expectedValue)
      })
    })
  })

  describe('moleculeNotificationAlignItems', () => {
    it('value must be an object enum', () => {
      // Given
      const library = pkg

      // When
      const {moleculeNotificationAlignItems: actual} = library

      // Then
      expect(actual).to.be.an('object')
    })

    it('value must be a defined string-key pair filled', () => {
      // Given
      const library = pkg
      const expected = {
        BASELINE: 'baseline',
        CENTER: 'center',
        FLEX_START: 'flex-start',
        FLEX_END: 'flex-end',
        STRETCH: 'stretch'
      }

      // When
      const {moleculeNotificationAlignItems: actual} = library
      const {BASELINE, CENTER, FLEX_START, FLEX_END, STRETCH, ...others} = actual

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
