/*
 * Remember: YOUR COMPONENT IS DEFINED GLOBALLY
 * */

/* eslint react/jsx-no-undef:0 */
/* eslint no-undef:0 */

import ReactDOM from 'react-dom'

import chai, {expect} from 'chai'
import chaiDOM from 'chai-dom'
import {fireEvent} from '@testing-library/react'
import sinon from 'sinon'

import * as pkg from '../src'

import json from '../package.json'

chai.use(chaiDOM)

describe(json.name, () => {
  const {default: Component} = pkg
  const setup = setupEnvironment(Component)

  it('library should include defined exported elements', () => {
    // Given
    const library = pkg
    const libraryExportedMembers = ['moleculeQuickActionSizes', 'default']

    // When
    const {
      moleculeQuickActionSizes,
      default: MoleculeAutosuggest,
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
      const props = {
        className: 'extended-classNames'
      }
      const findSentence = str => string =>
        string.match(new RegExp(`S*${str}S*`))

      // When
      const {container} = setup(props)
      const findClassName = findSentence(props.className)

      // Then
      expect(findClassName(container.innerHTML)).to.be.null
    })

    it('should render leftIcon when giving', () => {
      // Given
      const props = {leftIcon: 'leftIcon'}

      // When
      const {container, getByText} = setup(props)

      // Then
      expect(container.innerHTML).to.be.a('string')
      expect(container.innerHTML).to.not.have.lengthOf(0)
      expect(getByText(props.leftIcon).innerHTML).to.equal(props.leftIcon)
    })

    it('should render rightIcon when giving', () => {
      // Given
      const props = {rightIcon: 'rightIcon'}

      // When
      const {container, getByText} = setup(props)

      // Then
      expect(container.innerHTML).to.be.a('string')
      expect(container.innerHTML).to.not.have.lengthOf(0)
      expect(getByText(props.rightIcon).innerHTML).to.equal(props.rightIcon)
    })

    it('should render both left and right icon when giving', () => {
      // Given
      const props = {leftIcon: 'leftIcon', rightIcon: 'rightIcon'}

      // When
      const {container, getByText} = setup(props)

      // Then
      expect(container.innerHTML).to.be.a('string')
      expect(container.innerHTML).to.not.have.lengthOf(0)
      expect(getByText(props.leftIcon).innerHTML).to.equal(props.leftIcon)
      expect(getByText(props.rightIcon).innerHTML).to.equal(props.rightIcon)
    })

    it('should fire onClick event when clicking on it', async () => {
      // Given
      const spy = sinon.spy()
      const props = {
        children: 'children',
        onClick: spy
      }

      // When
      const {getByText} = setup(props)

      // Then
      expect(getByText(props.children).innerHTML).to.equal(props.children)

      // And
      // When
      fireEvent.click(getByText(props.children))

      sinon.assert.called(spy)
      sinon.assert.calledOnce(spy)
    })

    describe('disabled', () => {
      it('should NOT render null when disabled', () => {
        // Given
        const props = {
          disabled: true
        }

        // When
        const {container} = setup(props)

        // Then
        expect(container.innerHTML).to.be.a('string')
        expect(container.innerHTML).to.not.have.lengthOf(0)
      })

      it('should NOT fire onClick event when clicking on it disabled', async () => {
        // Given
        const spy = sinon.spy()
        const props = {
          children: 'children',
          onClick: spy,
          disabled: true
        }

        // When
        const {getByText} = setup(props)

        // Then
        expect(getByText(props.children).innerHTML).to.equal(props.children)

        // And
        // When
        fireEvent.click(getByText(props.children))

        sinon.assert.notCalled(spy)
      })
    })
  })

  describe('moleculeQuickActionSizes', () => {
    it('value must be an object enum', () => {
      // Given
      const library = pkg

      // When
      const {moleculeQuickActionSizes: actual} = library

      // Then
      expect(actual).to.be.an('object')
    })

    it('value must be a defined string-key pair filled', () => {
      // Given
      const library = pkg
      const expected = {
        SMALL: 'small',
        MEDIUM: 'medium',
        LARGE: 'large'
      }

      // When
      const {moleculeQuickActionSizes: actual} = library
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
})
