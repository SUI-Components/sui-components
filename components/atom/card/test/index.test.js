/*
 * Remember: YOUR COMPONENT IS DEFINED GLOBALLY
 * */

/* eslint react/jsx-no-undef:0 */
/* eslint no-undef:0 */

import {createRef} from 'react'
import ReactDOM from 'react-dom'

import chai, {expect} from 'chai'
import chaiDOM from 'chai-dom'

import json from '../package.json'
import * as pkg from '../src/index.js'

chai.use(chaiDOM)

describe(json.name, () => {
  const {default: Component} = pkg
  const setup = setupEnvironment(Component)
  const noop = () => null

  it('library should include defined exported elements', () => {
    // Given
    const library = pkg
    const libraryExportedMembers = [
      'atomCardDesign',
      'atomCardColor',
      'atomCardElevation',
      'atomCardCornerSize',
      'default'
    ]

    // When
    const {atomCardDesign, atomCardColor, atomCardElevation, atomCardCornerSize, default: AtomCard, ...others} = library

    // Then
    expect(Object.keys(library).length).to.equal(libraryExportedMembers.length)
    expect(Object.keys(library)).to.have.members(libraryExportedMembers)
    expect(Object.keys(others).length).to.equal(0)
  })

  describe(Component.displayName, () => {
    it('should render without crashing', () => {
      // Given
      const props = {
        content: noop
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
        content: noop
      }

      // When
      const {container} = setup(props)

      // Then
      expect(container.innerHTML).to.be.a('string')
      expect(container.innerHTML).to.not.have.lengthOf(0)
    })

    it('should extend classNames', () => {
      // Given
      const props = {content: noop, className: 'extended-classNames'}
      const findSentence = str => string => string.match(new RegExp(`S*${str}S*`))

      // When
      const {container} = setup(props)
      const findClassName = findSentence(props.className)

      // Then
      expect(findClassName(container.innerHTML)).to.not.be.null
    })

    it('should have data attributes', () => {
      // Given
      const props = {content: noop, 'data-attribute': 'data-attribute'}

      // When
      const {container} = setup(props)
      const element = container.querySelector('[data-attribute]')

      // Then
      expect(element).to.not.be.null
    })

    it('should have aria attributes', () => {
      // Given
      const props = {content: noop, 'aria-attribute': 'aria-attribute'}

      // When
      const {container} = setup(props)
      const element = container.querySelector('[aria-attribute]')

      // Then
      expect(element).to.not.be.null
    })

    describe('forwardRef', () => {
      it('should return forwardRef html image element when giving a ref to the component', () => {
        // Given
        const props = {content: noop}
        const ref = createRef()

        // When
        const component = <Component {...props} ref={ref} />
        const div = document.createElement('div')
        ReactDOM.render(component, div)

        // Then
        expect(ref.current).to.not.equal(undefined)
        expect(ref.current.nodeName).to.equal('DIV')
      })
    })

    describe('polymorphism', () => {
      it('should render an article when `as` prop has this value', () => {
        // given
        const props = {content: noop, as: 'article'}
        // when
        const {container} = setup(props)
        // then
        expect(container.innerHTML).to.be.a('string')
        expect(container.innerHTML).to.not.have.lengthOf(0)
        expect(container.innerHTML).to.contain('article')
      })
    })
  })

  describe('atomCardDesign', () => {
    it('value must be an object enum', () => {
      // Given
      const library = pkg

      // When
      const {atomCardDesign: actual} = library

      // Then
      expect(actual).to.be.an('object')
    })

    it('value must be a defined string-key pair filled', () => {
      // Given
      const library = pkg
      const expected = {
        FILLED: 'filled',
        TINTED: 'tinted',
        OUTLINED: 'outlined',
        DASHED: 'dashed',
        GHOSTED: 'ghosted',
        GLASSED: 'glassed'
      }

      // When
      const {atomCardDesign: actual} = library
      const {FILLED, TINTED, OUTLINED, DASHED, GHOSTED, GLASSED, ...others} = actual

      // Then
      expect(Object.keys(others).length).to.equal(0)
      expect(Object.keys(actual)).to.have.members(Object.keys(expected))
      Object.entries(expected).forEach(([expectedKey, expectedValue]) => {
        expect(Object.keys(actual).includes(expectedKey)).to.be.true
        expect(actual[expectedKey]).to.equal(expectedValue)
      })
    })
  })

  describe('atomCardColor', () => {
    it('value must be an object enum', () => {
      // Given
      const library = pkg

      // When
      const {atomCardColor: actual} = library

      // Then
      expect(actual).to.be.an('object')
    })

    it('value must be a defined string-key pair filled', () => {
      // Given
      const library = pkg
      const expected = {
        SURFACE: 'surface',
        PRIMARY: 'primary',
        ACCENT: 'accent',
        NEUTRAL: 'neutral',
        SUCCESS: 'success',
        ALERT: 'alert',
        ERROR: 'error'
      }

      // When
      const {atomCardColor: actual} = library
      const {SURFACE, PRIMARY, ACCENT, NEUTRAL, SUCCESS, ALERT, ERROR, ...others} = actual

      // Then
      expect(Object.keys(others).length).to.equal(0)
      expect(Object.keys(actual)).to.have.members(Object.keys(expected))
      Object.entries(expected).forEach(([expectedKey, expectedValue]) => {
        expect(Object.keys(actual).includes(expectedKey)).to.be.true
        expect(actual[expectedKey]).to.equal(expectedValue)
      })
    })
  })

  describe('atomCardElevation', () => {
    it('value must be an object enum', () => {
      // Given
      const library = pkg

      // When
      const {atomCardElevation: actual} = library

      // Then
      expect(actual).to.be.an('object')
    })

    it('value must be a defined string-key pair filled', () => {
      // Given
      const library = pkg
      const expected = {
        XL: 'xl',
        L: 'l',
        M: 'm',
        S: 's',
        XS: 'xs',
        NONE: 'none',
        '-XS': '-xs',
        '-S': '-s',
        '-M': '-m',
        '-L': '-l',
        '-XL': '-xl'
      }

      // When
      const {atomCardElevation: actual} = library
      const {XL, L, M, S, XS, NONE, '-XS': mXS, '-S': mS, '-M': mM, '-L': mL, '-XL': mXL, ...others} = actual

      // Then
      expect(Object.keys(others).length).to.equal(0)
      expect(Object.keys(actual)).to.have.members(Object.keys(expected))
      Object.entries(expected).forEach(([expectedKey, expectedValue]) => {
        expect(Object.keys(actual).includes(expectedKey)).to.be.true
        expect(actual[expectedKey]).to.equal(expectedValue)
      })
    })
  })

  describe('atomCardElevation', () => {
    it('value must be an object enum', () => {
      // Given
      const library = pkg

      // When
      const {atomCardCornerSize: actual} = library

      // Then
      expect(actual).to.be.an('object')
    })

    it('value must be a defined string-key pair filled', () => {
      // Given
      const library = pkg
      const expected = {
        NONE: 'none',
        S: 's',
        M: 'm',
        L: 'l',
        XL: 'xl',
        XXL: 'xxl',
        XXXL: 'xxxl'
      }

      // When
      const {atomCardCornerSize: actual} = library
      const {NONE, S, M, L, XL, XXL, XXXL, ...others} = actual

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
