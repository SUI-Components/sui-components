/*
 * Remember: YOUR COMPONENT IS DEFINED GLOBALLY
 * */

/* eslint react/jsx-no-undef:0 */
/* eslint no-undef:0 */

import ReactDOM from 'react-dom'

import chai, {expect} from 'chai'
import chaiDOM from 'chai-dom'
import sinon from 'sinon'

import {fireEvent} from '@testing-library/react'

import IconClose from '../../../atom/popover/demo/Icons/IconClose.js'
import json from '../package.json'
import {PLACEMENTS} from '../src/config.js'
import * as pkg from '../src/index.js'

chai.use(chaiDOM)

describe(json.name, () => {
  const {default: Component} = pkg
  const setup = setupEnvironment(Component)

  it('library should include defined exported elements', () => {
    // Given
    const library = pkg
    const libraryExportedMembers = [
      'selectPopoverOverlayTypes',
      'selectPopoverSizes',
      'selectPopoverPlacements',
      'selectPopoverShapes',
      'RenderActions',
      'default'
    ]

    // When
    const {
      selectPopoverOverlayTypes,
      selectPopoverSizes,
      selectPopoverPlacements,
      selectPopoverShapes,
      RenderActions,
      default: MoleculeSelectPopover,
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
        acceptButtonText: 'acceptButtonText',
        cancelButtonText: 'cancelButtonText',
        iconArrowDown: () => <svg />,
        selectText: 'selectText',
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
        acceptButtonText: 'acceptButtonText',
        cancelButtonText: 'cancelButtonText',
        iconArrowDown: () => <svg />,
        selectText: 'selectText',
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
        acceptButtonText: 'acceptButtonText',
        cancelButtonText: 'cancelButtonText',
        className: 'extended-classNames',
        children: 'children',
        iconArrowDown: () => <svg />,
        selectText: 'selectText'
      }
      const findSentence = str => string => string.match(new RegExp(`S*${str}S*`))

      // When
      const {container} = setup(props)
      const findClassName = findSentence(props.className)

      // Then
      expect(findClassName(container.innerHTML)).to.be.null
    })
  })

  describe('selectPopoverSizes', () => {
    it('value must be an object enum', () => {
      // Given
      const library = pkg

      // When
      const {selectPopoverSizes: actual} = library

      // Then
      expect(actual).to.be.an('object')
    })

    it('value must be a defined string-key pair filled', () => {
      // Given
      const library = pkg
      const expected = {
        MEDIUM: 'm',
        SMALL: 's',
        XSMALL: 'xs'
      }

      // When
      const {selectPopoverSizes: actual} = library
      const {MEDIUM, SMALL, XSMALL, ...others} = actual

      // Then
      expect(Object.keys(others).length).to.equal(0)
      expect(Object.keys(actual)).to.have.members(Object.keys(expected))
      Object.entries(expected).forEach(([expectedKey, expectedValue]) => {
        expect(Object.keys(actual).includes(expectedKey)).to.be.true
        expect(actual[expectedKey]).to.equal(expectedValue)
      })
    })
  })

  describe('selectPopoverPlacements', () => {
    it('value must be an object enum', () => {
      // Given
      const library = pkg

      // When
      const {selectPopoverPlacements: actual} = library

      // Then
      expect(actual).to.be.an('object')
    })

    it('value must be a defined string-key pair filled', () => {
      // Given
      const library = pkg
      const expected = {
        AUTO_START: 'auto-start',
        AUTO_END: 'auto-end',
        LEFT: 'left',
        RIGHT: 'right'
      }

      // When
      const {selectPopoverPlacements: actual} = library
      const {LEFT, RIGHT, AUTO_START, AUTO_END, ...others} = actual

      // Then
      expect(Object.keys(others).length).to.equal(0)
      expect(Object.keys(actual)).to.have.members(Object.keys(expected))
      Object.entries(expected).forEach(([expectedKey, expectedValue]) => {
        expect(Object.keys(actual).includes(expectedKey)).to.be.true
        expect(actual[expectedKey]).to.equal(expectedValue)
      })
    })
  })

  describe('selectPopoverOverlayTypes', () => {
    it('value must be an object enum', () => {
      // Given
      const library = pkg

      // When
      const {selectPopoverOverlayTypes: actual} = library

      // Then
      expect(actual).to.be.an('object')
    })

    it('value must be a defined string-key pair filled', () => {
      // Given
      const library = pkg
      const expected = {
        DARK: 'dark',
        LIGHT: 'light',
        NONE: 'none'
      }

      // When
      const {selectPopoverOverlayTypes: actual} = library
      const {DARK, LIGHT, NONE, ...others} = actual

      // Then
      expect(Object.keys(others).length).to.equal(0)
      expect(Object.keys(actual)).to.have.members(Object.keys(expected))
      Object.entries(expected).forEach(([expectedKey, expectedValue]) => {
        expect(Object.keys(actual).includes(expectedKey)).to.be.true
        expect(actual[expectedKey]).to.equal(expectedValue)
      })
    })
  })

  describe('should render appropriate popoverclass for placement', () => {
    it('should render appropriate popoverclass for Auto start placement', () => {
      // Given
      const props = {
        acceptButtonText: 'acceptButtonText',
        cancelButtonText: 'cancelButtonText',
        iconArrowDown: () => <svg />,
        selectText: 'selectText',
        children: 'children',
        placement: PLACEMENTS.AUTO_START
      }

      // When
      const {container} = setup(props)

      // Then
      const select = container.querySelector('[class="sui-MoleculeSelectPopover-selectIcon"]')
      fireEvent.click(select)
      expect(container.innerHTML).to.include('sui-MoleculeSelectPopover-popover--left')
    })
    it('should render appropriate popoverclass for Auto end placement', () => {
      // Given
      const props = {
        acceptButtonText: 'acceptButtonText',
        cancelButtonText: 'cancelButtonText',
        iconArrowDown: () => <svg />,
        selectText: 'selectText',
        children: 'children',
        placement: PLACEMENTS.AUTO_END
      }

      // When
      const {container} = setup(props)

      // Then
      const select = container.querySelector('[class="sui-MoleculeSelectPopover-selectIcon"]')
      fireEvent.click(select)
      expect(container.innerHTML).to.include('sui-MoleculeSelectPopover-popover--right')
    })
  })

  describe('selectPopover remove button', () => {
    it('should response to the click on the remove button', () => {
      const spy = sinon.spy()

      // Given
      const props = {
        isSelected: true,
        acceptButtonText: 'acceptButtonText',
        cancelButtonText: 'cancelButtonText',
        iconArrowDown: () => <svg />,
        selectText: 'selectText',
        children: 'children',
        removeButtonOptions: {
          design: 'flat',
          shape: 'circular',
          size: 'medium',
          rightIcon: () => <IconClose />,
          isShown: true,
          negative: false,
          onClick: spy
        }
      }

      // When
      const {container} = setup(props)

      // Then
      const removeButton = container.querySelector('[data-sui-component="clear-select-icon"]')

      fireEvent.click(removeButton)

      sinon.assert.calledOnce(spy)
    })
  })
})
