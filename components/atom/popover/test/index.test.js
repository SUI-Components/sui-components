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
      'atomPopoverPositions',
      'atomPopoverTriggers',
      'default'
    ]

    // When
    const {
      atomPopoverPositions,
      atomPopoverTriggers,
      default: AtomPopover,
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
        id: 'random-id',
        children: <span>test</span>,
        content: <span>content</span>
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
        id: 'random-id',
        children: <span>test</span>,
        content: <span>content</span>
      }

      // When
      const {container} = setup(props)

      // Then
      expect(container.innerHTML).to.be.a('string')
      expect(container.innerHTML).to.not.have.lengthOf(0)
    })

    it.skip('example', () => {
      // Example TO BE DELETED!!!!

      // Given
      // const props = {}

      // When
      // const {getByRole} = setup(props)

      // Then
      // expect(getByRole('button')).to.have.text('HOLA')
      expect(true).to.be.eql(false)
    })
  })

  describe('atomActionButtonColors', () => {
    it('value must be an object enum', () => {
      // Given
      const library = pkg

      // When
      const {atomPopoverPositions: actual} = library

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
      const {atomPopoverPositions: actual} = library
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
      const {atomPopoverPositions: actual} = library
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

  describe('atomActionButtonColors', () => {
    it('value must be an object enum', () => {
      // Given
      const library = pkg

      // When
      const {atomPopoverTriggers: actual} = library

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
      const {atomPopoverTriggers: actual} = library
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
})
