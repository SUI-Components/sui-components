/*
 * Remember: YOUR COMPONENT IS DEFINED GLOBALLY
 * */

/* eslint react/jsx-no-undef:0 */
/* eslint no-undef:0 */

import ReactDOM from 'react-dom'

import chai, {expect} from 'chai'
import chaiDOM from 'chai-dom'

import {render} from '@testing-library/react'

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
      'MoleculeDrawer',
      'MoleculeDrawerOverlay',
      'moleculeDrawerPlacements',
      'moleculeDrawerSizes',
      'moleculeDrawerAnimationDuration',
      'default'
    ]

    // When
    const {
      MoleculeDrawerOverlay,
      moleculeDrawerPlacements,
      moleculeDrawerSizes,
      moleculeDrawerAnimationDuration,
      MoleculeDrawer,
      default: MoleculeDrawerDefault,
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

    it('should render the drawer content if drawer is open', () => {
      // Given
      const props = {
        isOpen: true,
        children: <p>I am a drawer</p>
      }

      // When
      const {getByText} = render(<Component {...props} />)
      // Then
      expect(getByText('I am a drawer')).to.be.visible
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

  describe('moleculeDrawerPlacements', () => {
    it('value must be an object enum', () => {
      // Given
      const library = pkg

      // When
      const {moleculeDrawerPlacements: actual} = library

      // Then
      expect(actual).to.be.an('object')
    })

    it('value must be a defined string-key pair filled', () => {
      // Given
      const library = pkg
      const expected = {
        TOP: 'top',
        RIGHT: 'right',
        BOTTOM: 'bottom',
        LEFT: 'left'
      }

      // When
      const {moleculeDrawerPlacements: actual} = library
      const {TOP, RIGHT, BOTTOM, LEFT, ...others} = actual

      // Then
      expect(Object.keys(others).length).to.equal(0)
      expect(Object.keys(actual)).to.have.members(Object.keys(expected))
      Object.entries(expected).forEach(([expectedKey, expectedValue]) => {
        expect(Object.keys(actual).includes(expectedKey)).to.be.true
        expect(actual[expectedKey]).to.equal(expectedValue)
      })
    })
  })

  describe('moleculeDrawerSizes', () => {
    it('value must be an object enum', () => {
      // Given
      const library = pkg

      // When
      const {moleculeDrawerSizes: actual} = library

      // Then
      expect(actual).to.be.an('object')
    })

    it('value must be a defined string-key pair filled', () => {
      // Given
      const library = pkg
      const expected = {
        AUTO: 'auto',
        M: 'm',
        FILL: 'fill'
      }

      // When
      const {moleculeDrawerSizes: actual} = library
      const {AUTO, M, FILL, ...others} = actual

      // Then
      expect(Object.keys(others).length).to.equal(0)
      expect(Object.keys(actual)).to.have.members(Object.keys(expected))
      Object.entries(expected).forEach(([expectedKey, expectedValue]) => {
        expect(Object.keys(actual).includes(expectedKey)).to.be.true
        expect(actual[expectedKey]).to.equal(expectedValue)
      })
    })
  })

  describe('moleculeDrawerAnimationDuration', () => {
    it('value must be an object enum', () => {
      // Given
      const library = pkg

      // When
      const {moleculeDrawerAnimationDuration: actual} = library

      // Then
      expect(actual).to.be.an('object')
    })

    it('value must be a defined string-key pair filled', () => {
      // Given
      const library = pkg
      const expected = {
        NONE: 'none', // 0
        FAST: 'fast', // 100ms
        NORMAL: 'normal', // 300ms
        SLOW: 'slow' // 500ms
      }

      // When
      const {moleculeDrawerAnimationDuration: actual} = library
      const {NONE, FAST, NORMAL, SLOW, ...others} = actual

      // Then
      expect(Object.keys(others).length).to.equal(0)
      expect(Object.keys(actual)).to.have.members(Object.keys(expected))
      Object.entries(expected).forEach(([expectedKey, expectedValue]) => {
        expect(Object.keys(actual).includes(expectedKey)).to.be.true
        expect(actual[expectedKey]).to.equal(expectedValue)
      })
    })
  })

  describe('moleculeDrawerPageScrollable', () => {
    it('should set the body overflow style to hidden when is opened and overflow to auto when is not opened', () => {
      // Given
      const props = {
        isOpen: true,
        isPageScrollable: false
      }

      // When
      const {rerender} = render(<Component {...props} />)
      const overflowStyleHidden = document.body.style.overflow

      // Then
      expect(overflowStyleHidden).to.be.equal('hidden')

      // When
      const newProps = {
        isOpen: false
      }
      rerender(<Component {...newProps} />)
      const overflowStyleAuto = document.body.style.overflow

      // Then
      expect(overflowStyleAuto).to.be.equal('auto')
    })
  })
})
