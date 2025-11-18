/*
 * Remember: YOUR COMPONENT IS DEFINED GLOBALLY
 * */

/* eslint react/jsx-no-undef:0 */
/* eslint no-undef:0 */

import ReactDOM from 'react-dom'

import chai, {expect} from 'chai'
import chaiDOM from 'chai-dom'

import {fireEvent} from '@testing-library/react'

import json from '../package.json'
import * as pkg from '../src/index.js'

chai.use(chaiDOM)

describe(json.name, () => {
  const {default: Component} = pkg
  const setup = setupEnvironment(Component)

  it('library should include defined exported elements', () => {
    // Given
    const library = pkg
    const libraryExportedMembers = ['MoleculeTextareaResizes', 'MoleculeTextareaSizes', 'default']

    // When
    const {MoleculeTextareaResizes, MoleculeTextareaSizes, default: MoleculeTextAreaField, ...others} = library

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
      const findSentence = str => string => string.match(new RegExp(`S*${str}S*`))

      // When
      const {container} = setup(props)
      const findClassName = findSentence(props.className)

      // Then
      expect(findClassName(container.innerHTML)).to.be.null
    })

    it('Renders correctly: label, help text, placeholder and success text', () => {
      // Given
      const props = {
        id: 'test',
        label: 'Test Label',
        maxChars: 100,
        placeholder: 'Initial Placeholder',
        successText: 'Everything ok!',
        helpText: 'Max Characters'
      }
      const defaultHelpTextComputed = `${props.helpText} - 0/${props.maxChars} characters`

      // When
      const {getAllByText, getAllByPlaceholderText} = setup(props)

      // Then
      expect(getAllByText(props.label)).to.be.an('array').to.have.lengthOf(1)
      expect(getAllByText(defaultHelpTextComputed)).to.be.an('array').to.have.lengthOf(1)
      expect(getAllByPlaceholderText(props.placeholder)).to.be.an('array').to.have.lengthOf(1)
      expect(getAllByText(props.successText)).to.be.an('array').to.have.lengthOf(1)
    })

    it('Writes text and character counter updates accordingly', () => {
      // Given
      const props = {
        id: 'test',
        label: 'Test Label',
        maxChars: 100,
        placeholder: 'Initial Placeholder',
        successText: 'Everything ok!'
      }
      const textToWrite = 'Here is the description'
      const defaultHelpTextComputed = `${textToWrite.length}/${props.maxChars} characters`

      // When
      const {getByPlaceholderText, getByText} = setup(props)

      // Then
      const textarea = getByPlaceholderText(props.placeholder)
      getByText(`0/${props.maxChars} characters`)
      // write some text
      fireEvent.change(textarea, {target: {value: textToWrite}})
      // text renders correctly
      getByText(textToWrite)
      // character counter updates accordingly
      getByText(defaultHelpTextComputed)
    })
  })

  describe('MoleculeTextareaSizes', () => {
    it('value must be an object enum', () => {
      // Given
      const library = pkg

      // When
      const {MoleculeTextareaSizes: actual} = library

      // Then
      expect(actual).to.be.an('object')
    })

    it('value must be a defined string-key pair filled', () => {
      // Given
      const library = pkg
      const expected = {
        SHORT: 'short',
        LONG: 'long'
      }

      // When
      const {MoleculeTextareaSizes: actual} = library
      const {SHORT, LONG, ...others} = actual

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
