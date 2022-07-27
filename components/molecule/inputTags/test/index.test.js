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
      'inputSizes',
      'moleculeInputTagsInputSizes',
      'default'
    ]

    // When
    const {
      inputSizes,
      moleculeInputTagsInputSizes,
      default: MoleculeInputTags,
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

    describe('when the element is disabled', () => {
      it('input should be disabled', () => {
        // Given
        const props = {disabled: true}

        // When
        const {queryByRole} = setup(props)
        const input = queryByRole('textbox')

        // Then
        expect(input).to.be.visible
        expect(input.disabled).to.be.true
      })
    })

    describe('when the element is readOnly', () => {
      it('input should be readOnly', () => {
        // Given
        const props = {readOnly: true}

        // When
        const {queryByRole} = setup(props)
        const input = queryByRole('textbox')

        // Then
        expect(input).to.be.visible
        expect(input.readOnly).to.be.true
      })
    })

    describe('when has placeholder', () => {
      it('should display the placeholder if no tags avaiable', () => {
        // Given
        const props = {placeholder: 'Type your favorite beetle'}

        // When
        const {getByPlaceholderText} = setup(props)
        const expected = getByPlaceholderText(props.placeholder)

        // Then
        expect(expected).to.be.visible
      })

      it('should not display the placeholder after adding tags', async () => {
        // Given
        const props = {
          placeholder: 'Type your favorite beetle',
          tags: ['Lenon']
        }

        // When
        const {queryByPlaceholderText} = setup(props)
        const expected = queryByPlaceholderText(props.placeholder)

        // then
        expect(expected).to.be.null
      })
    })

    describe('when has maxTags', () => {
      it('should allow add tags if max not reached', () => {
        // Given
        const props = {
          maxTags: 4,
          tags: []
        }

        // When
        const {getByRole} = setup(props)
        const expected = getByRole('textbox')

        // Then
        expect(expected).to.be.visible
      })

      it('should not allow add tags if max reached', () => {
        // Given
        const props = {
          maxTags: 4,
          tags: ['Paul', 'John', 'Ringo', 'George']
        }

        // When
        const {queryByRole} = setup(props)
        const expected = queryByRole('textbox')

        // Then
        expect(expected).to.be.null
      })
    })
  })

  describe('moleculeInputTagsInputSizes', () => {
    it('value must be an object enum', () => {
      // Given
      const library = pkg

      // When
      const {moleculeInputTagsInputSizes: actual} = library

      // Then
      expect(actual).to.be.an('object')
    })

    it('value must be a defined string-key pair filled', () => {
      // Given
      const library = pkg
      const expected = {
        XLARGE: 'xl',
        LARGE: 'l',
        MEDIUM: 'm',
        SMALL: 's',
        XSMALL: 'xs'
      }

      // When
      const {moleculeInputTagsInputSizes: actual} = library
      const {XLARGE, LARGE, MEDIUM, SMALL, XSMALL, ...others} = actual

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
