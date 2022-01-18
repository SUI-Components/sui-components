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

  const Icon = () => null

  it('library should include defined exported elements', () => {
    // Given
    const library = pkg
    const libraryExportedMembers = [
      'atomActionButtonColors',
      'atomActionButtonSizes',
      'atomActionButtonStyles',
      'default'
    ]

    // When
    const {
      atomActionButtonColors,
      atomActionButtonSizes,
      atomActionButtonStyles,
      default: AtomActionButton,
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
        icon: <Icon />
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
        icon: <Icon />
      }

      // When
      const {container} = setup(props)

      // Then
      expect(container.innerHTML).to.be.a('string')
      expect(container.innerHTML).to.not.have.lengthOf(0)
    })

    it.skip('should NOT extend classNames', () => {
      // Given
      const props = {className: 'extended-classNames'}
      const findSentence = str => string =>
        string.match(new RegExp(`S*${str}S*`))

      // When
      const {container} = setup(props)
      const findClassName = findSentence(props.className)

      // Then
      expect(findClassName(container.innerHTML)).to.be.null
    })

    it('Displays the expected button', () => {
      // Given
      const props = {
        icon: <Icon />,
        children: 'Lorem Ipsum'
      }

      // When
      const {getByText} = setup(props)

      // Then
      const expectedLabel = getByText(props.children)
      expect(expectedLabel).to.be.exist
    })

    it('Displays the expected text', () => {
      // Given
      const props = {
        icon: <Icon />,
        children: 'Lorem Ipsum'
      }

      // When
      const {getByText} = setup(props)

      // Then
      const actionButtonElement = getByText(props.children)
      expect(actionButtonElement.innerText).to.be.equal(props.children)
    })
  })

  describe('atomActionButtonColors', () => {
    it('value must be an object enum', () => {
      // Given
      const library = pkg

      // When
      const {atomActionButtonColors: actual} = library

      // Then
      expect(actual).to.be.an('object')
    })

    it('value must be a defined string-key pair filled', () => {
      // Given
      const library = pkg
      const expected = {
        PRIMARY: 'primary',
        ACCENT: 'accent',
        NEUTRAL: 'neutral'
      }

      // When
      const {atomActionButtonColors: actual} = library
      const {PRIMARY, ACCENT, NEUTRAL, ...others} = actual

      // Then
      expect(Object.keys(others).length).to.equal(0)
      expect(Object.keys(actual)).to.have.members(Object.keys(expected))
      Object.entries(expected).forEach(([expectedKey, expectedValue]) => {
        expect(Object.keys(actual).includes(expectedKey)).to.be.true
        expect(actual[expectedKey]).to.equal(expectedValue)
      })
    })
  })

  describe('atomActionButtonSizes', () => {
    it('value must be an object enum', () => {
      // Given
      const library = pkg

      // When
      const {atomActionButtonSizes: actual} = library

      // Then
      expect(actual).to.be.an('object')
    })

    it('value must be a defined string-key pair filled', () => {
      // Given
      const library = pkg
      const expected = {SMALL: 'small', MEDIUM: 'medium', LARGE: 'large'}

      // When
      const {atomActionButtonSizes: actual} = library
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

  describe('atomActionButtonStyles', () => {
    it('value must be an object enum', () => {
      // Given
      const library = pkg

      // When
      const {atomActionButtonStyles: actual} = library

      // Then
      expect(actual).to.be.an('object')
    })

    it('value must be a defined string-key pair filled', () => {
      // Given
      const library = pkg
      const expected = {
        FILLED_NEGATIVE: 'filledNegative',
        FILLED_POSITIVE: 'filledPositive',
        OUTLINE: 'outline',
        FLAT: 'flat'
      }

      // When
      const {atomActionButtonStyles: actual} = library
      const {
        FILLED_NEGATIVE,
        FILLED_POSITIVE,
        OUTLINE,
        FLAT,
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
})
