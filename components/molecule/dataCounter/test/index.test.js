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
import userEvents from '@testing-library/user-event'

import json from '../package.json'
import * as pkg from '../src/index.js'

chai.use(chaiDOM)

describe(json.name, () => {
  const {default: Component} = pkg
  const setup = setupEnvironment(Component)

  it('library should include defined exported elements', () => {
    // Given
    const library = pkg
    const libraryExportedMembers = ['moleculeDataCounterSizes', 'default']

    // When
    const {
      moleculeDataCounterSizes,
      default: MoleculeDataCounter,
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
        charsSize: 10,
        label: 'label',
        minValueHelpText: 'minValueHelpText',
        minValueErrorText: 'minValueErrorText',
        maxValueHelpText: 'maxValueHelpText',
        maxValueErrorText: 'maxValueErrorText'
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
        charsSize: 10,
        label: 'label',
        minValueHelpText: 'minValueHelpText',
        minValueErrorText: 'minValueErrorText',
        maxValueHelpText: 'maxValueHelpText',
        maxValueErrorText: 'maxValueErrorText'
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
      const findSentence = str => string =>
        string.match(new RegExp(`S*${str}S*`))

      // When
      const {container} = setup(props)
      const findClassName = findSentence(props.className)

      // Then
      expect(findClassName(container.innerHTML)).to.be.null
    })

    it('given min=undefined max=undefined range should render input with half of default ranges', () => {
      // Given
      const props = {
        charsSize: 10,
        label: 'label',
        minValueHelpText: 'minValueHelpText',
        minValueErrorText: 'minValueErrorText',
        maxValueHelpText: 'maxValueHelpText',
        maxValueErrorText: 'maxValueErrorText'
      }

      // When
      const {getByRole} = setup(props)
      const input = getByRole('textbox')
      // Then
      expect(input.value).to.equal('50')
    })

    it('given min=100 max=200 range should render input with half of default ranges', () => {
      // Given
      const props = {
        charsSize: 10,
        label: 'label',
        minValueHelpText: 'minValueHelpText',
        minValueErrorText: 'minValueErrorText',
        maxValueHelpText: 'maxValueHelpText',
        maxValueErrorText: 'maxValueErrorText',
        min: 100,
        max: 200
      }
      const {min, max} = props

      // When
      const {getByRole} = setup(props)
      const input = getByRole('textbox')
      // Then
      expect(input.value).to.equal(`${min + (max - min) / 2}`)
    })

    it('given min=100 max=200 range and initialValue=100 should render input preserving the value given', () => {
      // Given
      const props = {
        charsSize: 10,
        label: 'label',
        minValueHelpText: 'minValueHelpText',
        minValueErrorText: 'minValueErrorText',
        maxValueHelpText: 'maxValueHelpText',
        maxValueErrorText: 'maxValueErrorText',
        min: 100,
        max: 200,
        initialValue: 100
      }
      const {initialValue} = props

      // When
      const {getByRole} = setup(props)
      const input = getByRole('textbox')
      // Then
      expect(input.value).to.equal(`${initialValue}`)
    })

    it('given min=100 max=200 range and value=100 should render input preserving the value given', () => {
      // Given
      const props = {
        charsSize: 10,
        label: 'label',
        minValueHelpText: 'minValueHelpText',
        minValueErrorText: 'minValueErrorText',
        maxValueHelpText: 'maxValueHelpText',
        maxValueErrorText: 'maxValueErrorText',
        min: 100,
        max: 200,
        value: 100
      }
      const {value} = props

      // When
      const {getByRole} = setup(props)
      const input = getByRole('textbox')
      // Then
      expect(input.value).to.equal(`${value}`)
    })

    it('given min=undefined max=undefined range should when clicking substract button should decrease the input value', () => {
      // Given
      const spy = sinon.spy()
      const props = {
        charsSize: 10,
        label: 'label',
        minValueHelpText: 'minValueHelpText',
        minValueErrorText: 'minValueErrorText',
        maxValueHelpText: 'maxValueHelpText',
        maxValueErrorText: 'maxValueErrorText',
        onChange: spy
      }

      // When
      const {getByLabelText, getByRole} = setup(props)
      const button = getByLabelText('substract')
      const input = getByRole('textbox')
      // Then
      expect(input.value).to.equal(`${50}`)
      const {value} = input

      // And
      // When
      fireEvent.click(button)

      sinon.assert.called(spy)
      sinon.assert.calledOnce(spy)
      expect(input.value).to.equal(`${Number(value) - 1}`)
    })

    it('given min=undefined max=undefined range should when clicking increase button should increase the input value', () => {
      // Given
      const spy = sinon.spy()
      const props = {
        charsSize: 10,
        label: 'label',
        minValueHelpText: 'minValueHelpText',
        minValueErrorText: 'minValueErrorText',
        maxValueHelpText: 'maxValueHelpText',
        maxValueErrorText: 'maxValueErrorText',
        onChange: spy
      }

      // When
      const {getByLabelText, getByRole} = setup(props)
      const button = getByLabelText('add')
      const input = getByRole('textbox')
      // Then
      expect(input.value).to.equal(`${50}`)
      const {value} = input

      // And
      // When
      fireEvent.click(button)

      sinon.assert.called(spy)
      sinon.assert.calledOnce(spy)
      expect(input.value).to.equal(`${Number(value) + 1}`)
    })

    it('given min=0 max=2 range and initialValue=2 when clicking substract button should keep the input value', () => {
      // Given
      const spy = sinon.spy()
      const props = {
        charsSize: 10,
        label: 'label',
        minValueHelpText: 'minValueHelpText',
        minValueErrorText: 'minValueErrorText',
        maxValueHelpText: 'maxValueHelpText',
        maxValueErrorText: 'maxValueErrorText',
        onChange: spy,
        min: 0,
        max: 2,
        initialValue: 0
      }
      const {initialValue} = props

      // When
      const {getByLabelText, getByRole} = setup(props)
      const button = getByLabelText('substract')
      const input = getByRole('textbox')
      // Then
      expect(input.value).to.equal(`${initialValue}`)

      // And
      // When
      fireEvent.click(button)

      sinon.assert.notCalled(spy)
      expect(input.value).to.equal(`${initialValue}`)
    })

    it('given min=undefined max=undefined range should when clicking increase button should keep the input value', () => {
      // Given
      const spy = sinon.spy()
      const props = {
        charsSize: 10,
        label: 'label',
        minValueHelpText: 'minValueHelpText',
        minValueErrorText: 'minValueErrorText',
        maxValueHelpText: 'maxValueHelpText',
        maxValueErrorText: 'maxValueErrorText',
        onChange: spy,
        min: 0,
        max: 2,
        initialValue: 2
      }
      const {initialValue} = props

      // When
      const {getByLabelText, getByRole} = setup(props)
      const button = getByLabelText('add')
      const input = getByRole('textbox')
      // Then
      expect(input.value).to.equal(`${initialValue}`)

      // And
      // When
      fireEvent.click(button)

      sinon.assert.notCalled(spy)
      expect(input.value).to.equal(`${initialValue}`)
    })

    it('should not allow to reach NaN values', () => {
      // Given
      const {getByRole, getByDisplayValue} = setup({value: 10})

      // When
      const dataCounterInputTextBox = getByRole('textbox')
      userEvents.clear(dataCounterInputTextBox)

      // Then
      expect(getByDisplayValue(10)).to.exist
    })
  })

  describe('moleculeDataCounterSizes', () => {
    it('value must be an object enum', () => {
      // Given
      const library = pkg

      // When
      const {moleculeDataCounterSizes: actual} = library

      // Then
      expect(actual).to.be.an('object')
    })

    it('value must be a defined string-key pair filled', () => {
      // Given
      const library = pkg
      const expected = {
        SMALL: 's',
        MEDIUM: 'm',
        LARGE: 'l'
      }

      // When
      const {moleculeDataCounterSizes: actual} = library
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
