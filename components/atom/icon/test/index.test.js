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
      'ATOM_ICON_COLORS',
      'ATOM_ICON_SIZES',
      'ATOM_ICON_RENDERS',
      'ATOM_ICON_SHAPES',
      'atomIconColors',
      'atomIconSizes',
      'atomIconRenders',
      'atomIconShapes',
      'default'
    ]

    // When
    const {
      ATOM_ICON_COLORS,
      ATOM_ICON_SIZES,
      ATOM_ICON_RENDERS,
      atomIconColors,
      atomIconSizes,
      atomIconRenders,
      default: AtomIcon,
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
      const props = {className: 'extended-classNames'}
      const findSentence = str => string => string.match(new RegExp(`S*${str}S*`))

      // When
      const {container} = setup(props)
      const findClassName = findSentence(props.className)

      // Then
      expect(findClassName(container.innerHTML)).to.not.be.null
    })

    it('should have data attributes', () => {
      // Given
      const props = {'data-attribute': 'data-attribute'}

      // When
      const {container} = setup(props)
      const element = container.querySelector('[data-attribute]')

      // Then
      expect(element).to.not.be.null
    })

    it('should have aria attributes', () => {
      // Given
      const props = {'aria-attribute': 'aria-attribute'}

      // When
      const {container} = setup(props)
      const element = container.querySelector('[aria-attribute]')

      // Then
      expect(element).to.not.be.null
    })

    it('should be accessible if title is set', () => {
      // Given
      const title = 'title'
      const props = {title}
      // When
      const {getByRole} = setup(props)
      // Then
      expect(getByRole('img', {name: title})).to.be.visible
    })
  })

  describe('atomIconColors', () => {
    it('value must be an object enum', () => {
      // Given
      const library = pkg

      // When
      const {atomIconColors: actual} = library

      // Then
      expect(actual).to.be.an('object')
    })

    it('value must be a defined string-key pair filled', () => {
      // Given
      const library = pkg
      const expected = {
        accent: 'accent',
        alert: 'alert',
        currentColor: 'currentColor',
        error: 'error',
        primary: 'primary',
        success: 'success',
        gray: 'gray'
      }

      // When
      const {atomIconColors: actual} = library
      const {accent, alert, currentColor, error, primary, success, gray, ...others} = actual

      // Then
      expect(Object.keys(others).length).to.equal(0)
      expect(Object.keys(actual)).to.have.members(Object.keys(expected))
      Object.entries(expected).forEach(([expectedKey, expectedValue]) => {
        expect(Object.keys(actual).includes(expectedKey)).to.be.true
        expect(actual[expectedKey]).to.equal(expectedValue)
      })
    })
  })

  describe('atomIconSizes', () => {
    it('value must be an object enum', () => {
      // Given
      const library = pkg

      // When
      const {atomIconSizes: actual} = library

      // Then
      expect(actual).to.be.an('object')
    })

    it('value must be a defined string-key pair filled', () => {
      // Given
      const library = pkg
      const expected = {
        extraSmall: 'extraSmall',
        small: 'small',
        medium: 'medium',
        large: 'large',
        extraLarge: 'extraLarge',
        extraExtraLarge: 'extraExtraLarge'
      }

      // When
      const {atomIconSizes: actual} = library
      const {extraSmall, small, medium, large, extraLarge, extraExtraLarge, ...others} = actual

      // Then
      expect(Object.keys(others).length).to.equal(0)
      expect(Object.keys(actual)).to.have.members(Object.keys(expected))
      Object.entries(expected).forEach(([expectedKey, expectedValue]) => {
        expect(Object.keys(actual).includes(expectedKey)).to.be.true
        expect(actual[expectedKey]).to.equal(expectedValue)
      })
    })
  })

  describe('atomIconRenders', () => {
    it('value must be an object enum', () => {
      // Given
      const library = pkg

      // When
      const {atomIconRenders: actual} = library

      // Then
      expect(actual).to.be.an('object')
    })

    it('value must be a defined string-key pair filled', () => {
      // Given
      const library = pkg
      const expected = {
        eager: 'eager',
        lazy: 'lazy'
      }

      // When
      const {atomIconRenders: actual} = library
      const {eager, lazy, ...others} = actual

      // Then
      expect(Object.keys(others).length).to.equal(0)
      expect(Object.keys(actual)).to.have.members(Object.keys(expected))
      Object.entries(expected).forEach(([expectedKey, expectedValue]) => {
        expect(Object.keys(actual).includes(expectedKey)).to.be.true
        expect(actual[expectedKey]).to.equal(expectedValue)
      })
    })
  })

  describe('atomIconShapes', () => {
    it('value must be an object enum', () => {
      // Given
      const library = pkg

      // When
      const {atomIconShapes: actual} = library

      // Then
      expect(actual).to.be.an('object')
    })

    it('value must be a defined string-key pair filled', () => {
      // Given
      const library = pkg
      const expected = {
        SQUARED: 'squared',
        ROUNDED: 'rounded',
        CIRCULAR: 'circular'
      }

      // When
      const {atomIconShapes: actual} = library
      const {eager, lazy, ...others} = actual

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
