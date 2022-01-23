/*
 * Remember: YOUR COMPONENT IS DEFINED GLOBALLY
 * */

/* eslint react/jsx-no-undef:0 */
/* eslint no-undef:0 */

import ReactDOM from 'react-dom'

import chai, {expect} from 'chai'
import chaiDOM from 'chai-dom'

import * as pkg from '../src/index.js'

import json from '../package.json'

chai.use(chaiDOM)

describe(json.name, () => {
  const {default: Component} = pkg
  const setup = setupEnvironment(Component)

  it('library should include defined exported elements', () => {
    // Given
    const library = pkg
    const libraryExportedMembers = [
      'handlersFactory',
      'MoleculeDropdownOptionTextWrapStyles',
      'default'
    ]

    // When
    const {
      handlersFactory,
      MoleculeDropdownOptionTextWrapStyles,
      default: MoleculeDropDownOption,
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
      const props = {value: 'value'}

      // When
      const component = <Component {...props} />

      // Then
      const div = document.createElement('div')
      ReactDOM.render(component, div)
      ReactDOM.unmountComponentAtNode(div)
    })

    it('should NOT render null', () => {
      // Given
      const props = {value: 'value'}

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

    it("element role must be 'option'", () => {
      // Given
      const props = {
        children: 'children'
      }

      // When
      const {getByRole} = setup(props)

      // Then
      expect(() => getByRole('option')).to.not.throw()
      expect(getByRole('option').innerText).to.equal(props.children)
    })
  })

  describe('MoleculeDropdownOptionTextWrapStyles', () => {
    it('value must be an object enum', () => {
      // Given
      const library = pkg

      // When
      const {MoleculeDropdownOptionTextWrapStyles: actual} = library

      // Then
      expect(actual).to.be.an('object')
    })

    it('value must be a defined string-key pair filled', () => {
      // Given
      const library = pkg
      const expected = {
        NO_WRAP: 'noWrap',
        TWO_LINES: 'twoLines',
        THREE_LINES: 'threeLines',
        LINE_WRAP: 'lineWrap'
      }

      // When
      const {MoleculeDropdownOptionTextWrapStyles: actual} = library
      const {NO_WRAP, TWO_LINES, THREE_LINES, LINE_WRAP, ...others} = actual

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
