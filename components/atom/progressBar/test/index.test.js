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
      'atomProgressBarTypes',
      'atomProgressBarSizes',
      'atomProgressBarStatus',
      'atomProgressBarLineCaps',
      'atomProgressBarStrokeSizes',
      'atomProgressBarColors',
      'default'
    ]

    // When
    const {
      atomProgressBarTypes,
      atomProgressBarSizes,
      atomProgressBarStatus,
      atomProgressBarLineCaps,
      atomProgressBarStrokeSizes,
      atomProgressBarColors,
      default: AtomProgressBar,
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
      expect(findClassName(container.innerHTML)).to.be.null
    })

    describe('type line', () => {
      it('should NOT render null', () => {
        // Given
        const props = {type: pkg.atomProgressBarTypes.LINE, percentage: 50}

        // When
        const {container} = setup(props)

        // Then
        expect(container.innerHTML).to.be.a('string')
        expect(container.innerHTML).to.not.have.lengthOf(0)
      })
      it('should NOT break when passing invalid percentage', () => {
        // Given
        const props = {type: pkg.atomProgressBarTypes.LINE, percentage: 'a'}

        // When
        const {container} = setup(props)

        // Then
        expect(container.innerHTML).to.be.a('string')
        expect(container.innerHTML).to.not.have.lengthOf(0)
      })
    })
    describe('type circle', () => {
      it('should NOT render null', () => {
        // Given
        const props = {type: pkg.atomProgressBarTypes.CIRCLE, percentage: 50}

        // When
        const {container} = setup(props)

        // Then
        expect(container.innerHTML).to.be.a('string')
        expect(container.innerHTML).to.not.have.lengthOf(0)
      })
    })
    describe('type double line', () => {
      it('should NOT render null', () => {
        // Given
        const props = {
          type: pkg.atomProgressBarTypes.LINE_DOUBLE_BAR,
          mainBarPercentage: 25,
          extraBarPercentage: 50
        }

        // When
        const {container} = setup(props)

        // Then
        expect(container.innerHTML).to.be.a('string')
        expect(container.innerHTML).to.not.have.lengthOf(0)
      })
      it('should NOT break when passing invalid percentage', () => {
        // Given
        const props = {
          type: pkg.atomProgressBarTypes.LINE_DOUBLE_BAR,
          mainBarPercentage: 'a',
          extraBarPercentage: 'b'
        }

        // When
        const {container} = setup(props)

        // Then
        expect(container.innerHTML).to.be.a('string')
        expect(container.innerHTML).to.not.have.lengthOf(0)
      })
      it('should NOT break when passing a percentage array', () => {
        // Given
        const props = {
          type: pkg.atomProgressBarTypes.LINE_DOUBLE_BAR,
          percentage: [25, 50]
        }

        // When
        const {container} = setup(props)

        // Then
        expect(container.innerHTML).to.be.a('string')
        expect(container.innerHTML).to.not.have.lengthOf(0)
      })
    })
  })

  describe('atomProgressBarTypes', () => {
    it('value must be an object enum', () => {
      // Given
      const library = pkg

      // When
      const {atomProgressBarTypes: actual} = library

      // Then
      expect(actual).to.be.an('object')
    })

    it('value must be a defined string-key pair filled', () => {
      // Given
      const library = pkg
      const expected = {
        CIRCLE: 'circle',
        LINE: 'line',
        LINE_DOUBLE_BAR: 'lineDoubleBar'
      }

      // When
      const {atomProgressBarTypes: actual} = library
      const {CIRCLE, LINE, LINE_DOUBLE_BAR, ...others} = actual

      // Then
      expect(Object.keys(others).length).to.equal(0)
      expect(Object.keys(actual)).to.have.members(Object.keys(expected))
      Object.entries(expected).forEach(([expectedKey, expectedValue]) => {
        expect(Object.keys(actual).includes(expectedKey)).to.be.true
        expect(actual[expectedKey]).to.equal(expectedValue)
      })
    })
  })

  describe('atomProgressBarSizes', () => {
    it('value must be an object enum', () => {
      // Given
      const library = pkg

      // When
      const {atomProgressBarSizes: actual} = library

      // Then
      expect(actual).to.be.an('object')
    })

    it('value must be a defined string-key pair filled', () => {
      // Given
      const library = pkg
      const expected = {
        EXTRA_SMALL: 'extraSmall',
        LARGE: 'large',
        MEDIUM: 'medium',
        SMALL: 'small',
        EXTRA_LARGE: 'extraLarge'
      }

      // When
      const {atomProgressBarSizes: actual} = library
      const {EXTRA_LARGE, LARGE, MEDIUM, SMALL, EXTRA_SMALL, ...others} = actual

      // Then
      expect(Object.keys(others).length).to.equal(0)
      expect(Object.keys(actual)).to.have.members(Object.keys(expected))
      Object.entries(expected).forEach(([expectedKey, expectedValue]) => {
        expect(Object.keys(actual).includes(expectedKey)).to.be.true
        expect(actual[expectedKey]).to.equal(expectedValue)
      })
    })
  })

  describe('atomProgressBarStatus', () => {
    it('value must be an object enum', () => {
      // Given
      const library = pkg

      // When
      const {atomProgressBarStatus: actual} = library

      // Then
      expect(actual).to.be.an('object')
    })

    it('value must be a defined string-key pair filled', () => {
      // Given
      const library = pkg
      const expected = {
        LOADING: 'loading',
        PROGRESS: 'progress',
        ERROR: 'error',
        SUCCESS: 'success'
      }

      // When
      const {atomProgressBarStatus: actual} = library
      const {LOADING, PROGRESS, ERROR, SUCCESS, ...others} = actual

      // Then
      expect(Object.keys(others).length).to.equal(0)
      expect(Object.keys(actual)).to.have.members(Object.keys(expected))
      Object.entries(expected).forEach(([expectedKey, expectedValue]) => {
        expect(Object.keys(actual).includes(expectedKey)).to.be.true
        expect(actual[expectedKey]).to.equal(expectedValue)
      })
    })
  })

  describe('atomProgressBarColors', () => {
    it('value must be an object enum', () => {
      // Given
      const library = pkg

      // When
      const {atomProgressBarColors: actual} = library

      // Then
      expect(actual).to.be.an('object')
    })

    it('value must be a defined string-key pair filled', () => {
      // Given
      const library = pkg
      const expected = {
        PRIMARY: 'primary',
        SECONDARY: 'secondary',
        SUCCESS: 'success',
        ALERT: 'alert',
        ERROR: 'error',
        NEUTRAL: 'neutral'
      }

      // When
      const {atomProgressBarColors: actual} = library
      const {PRIMARY, SECONDARY, SUCCESS, ALERT, ERROR, NEUTRAL, ...others} = actual

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
