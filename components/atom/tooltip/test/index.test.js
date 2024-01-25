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
      'AtomTooltipColors',
      'AtomTooltipTriggers',
      'AtomTooltipPlacements',
      'AtomTooltip',
      'default'
    ]

    // When
    const {
      AtomTooltipColors,
      AtomTooltipTriggers,
      AtomTooltipPlacements,
      AtomTooltip,
      default: AtomTooltipDefault,
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
        children: 'test'
      }

      // When
      const component = <Component {...props} />

      // Then
      const div = document.createElement('div')
      ReactDOM.render(component, div)
      ReactDOM.unmountComponentAtNode(div)
    })

    it.skip('should NOT render null', () => {
      // Given
      const props = {
        children: 'test'
      }

      // When
      const {container} = setup(props)

      // Then
      expect(container.innerHTML).to.be.a('string')
      expect(container.innerHTML).to.not.have.lengthOf(0)
    })
  })

  describe('AtomTooltipColors', () => {
    it('value must be an object enum', () => {
      // Given
      const library = pkg

      // When
      const {AtomTooltipColors: actual} = library

      // Then
      expect(actual).to.be.an('object')
    })

    it('value must be a defined string-key pair filled', () => {
      // Given
      const library = pkg
      const expected = {
        PRIMARY: 'primary',
        SECONDARY: 'secondary',
        ACCENT: 'accent',
        NEUTRAL: 'neutral',
        SUCCESS: 'success',
        ALERT: 'alert',
        ERROR: 'error'
      }

      // When
      const {AtomTooltipColors: actual} = library
      const {PRIMARY, SECONDARY, ACCENT, NEUTRAL, SUCCESS, ALERT, ERROR, ...others} = actual

      // Then
      expect(Object.keys(others).length).to.equal(0)
      expect(Object.keys(actual)).to.have.members(Object.keys(expected))
      Object.entries(expected).forEach(([expectedKey, expectedValue]) => {
        expect(Object.keys(actual).includes(expectedKey)).to.be.true
        expect(actual[expectedKey]).to.equal(expectedValue)
      })
    })
  })

  describe('AtomTooltipTriggers', () => {
    it('value must be an object enum', () => {
      // Given
      const library = pkg

      // When
      const {AtomTooltipTriggers: actual} = library

      // Then
      expect(actual).to.be.an('object')
    })

    it('value must be a defined string-key pair filled', () => {
      // Given
      const library = pkg
      const expected = {
        CLICK: 'click',
        FOCUS: 'focus',
        HOVER: 'hover',
        LEGACY: 'legacy',
        MANUAL: 'manual'
      }

      // When
      const {AtomTooltipTriggers: actual} = library
      const {CLICK, FOCUS, HOVER, LEGACY, MANUAL, ...others} = actual

      // Then
      expect(Object.keys(others).length).to.equal(0)
      expect(Object.keys(actual)).to.have.members(Object.keys(expected))
      Object.entries(expected).forEach(([expectedKey, expectedValue]) => {
        expect(Object.keys(actual).includes(expectedKey)).to.be.true
        expect(actual[expectedKey]).to.equal(expectedValue)
      })
    })
  })

  describe('AtomTooltipPlacements', () => {
    it('value must be an object enum', () => {
      // Given
      const library = pkg

      // When
      const {AtomTooltipPlacements: actual} = library

      // Then
      expect(actual).to.be.an('object')
    })

    it('value must be a defined string-key pair filled', () => {
      // Given
      const library = pkg
      const expected = {
        AUTO: 'auto',
        AUTO_START: 'auto-start',
        AUTO_END: 'auto-end',
        TOP: 'top',
        TOP_START: 'top-start',
        TOP_END: 'top-end',
        RIGHT: 'right',
        RIGHT_START: 'right-start',
        RIGHT_END: 'right-end',
        BOTTOM: 'bottom',
        BOTTOM_START: 'bottom-start',
        BOTTOM_END: 'bottom-end',
        LEFT: 'left',
        LEFT_START: 'left-start',
        LEFT_END: 'left-end'
      }

      // When
      const {AtomTooltipPlacements: actual} = library
      const {
        AUTO,
        AUTO_START,
        AUTO_END,
        TOP,
        TOP_START,
        TOP_END,
        RIGHT,
        RIGHT_START,
        RIGHT_END,
        BOTTOM,
        BOTTOM_START,
        BOTTOM_END,
        LEFT,
        LEFT_START,
        LEFT_END,
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
