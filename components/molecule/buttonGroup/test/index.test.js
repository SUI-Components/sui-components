/*
 * Remember: YOUR COMPONENT IS DEFINED GLOBALLY
 * */

/* eslint react/jsx-no-undef:0 */
/* eslint no-undef:0 */

import ReactDOM from 'react-dom'

import chai, {expect} from 'chai'
import chaiDOM from 'chai-dom'

import AtomButton from '@s-ui/react-atom-button'

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
      'moleculeButtonGroupSizes',
      'moleculeButtonGroupDesigns',
      'moleculeButtonGroupDisplay',
      'moleculeButtonGroupSpaced',
      'moleculeButtonGroupShapes',
      'default'
    ]

    // When
    const {
      moleculeButtonGroupSizes,
      moleculeButtonGroupDesigns,
      moleculeButtonGroupDisplay,
      moleculeButtonGroupSpaced,
      moleculeButtonGroupShapes,
      default: MoleculeButtonGroup,
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
        children: [<AtomButton key={0}>A</AtomButton>, <AtomButton key={1}>B</AtomButton>]
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
        children: [<AtomButton key={0}>A</AtomButton>, <AtomButton key={1}>B</AtomButton>]
      }

      // When
      const {container} = setup(props)

      // Then
      expect(container.innerHTML).to.be.a('string')
      expect(container.innerHTML).to.not.have.lengthOf(0)
    })

    it.skip('should extend classNames', () => {
      // Given
      const props = {
        children: [<AtomButton key={0}>A</AtomButton>, <AtomButton key={1}>B</AtomButton>],
        className: 'extended-classNames'
      }
      const findSentence = str => string => string.match(new RegExp(`S*${str}S*`))

      // When
      const {container} = setup(props)
      const findClassName = findSentence(props.className)

      // Then
      expect(findClassName(container.innerHTML)).to.not.be.null
    })

    it('should have data attributes', () => {
      // Given
      const props = {
        'data-attribute': 'data-attribute',
        children: [<AtomButton key={0}>A</AtomButton>, <AtomButton key={1}>B</AtomButton>],
        className: 'extended-classNames'
      }

      // When
      const {container} = setup(props)
      const element = container.querySelector('[data-attribute]')

      // Then
      expect(element).to.not.be.null
    })

    it('should have aria attributes', () => {
      // Given
      const props = {
        'aria-attribute': 'aria-attribute',
        children: [<AtomButton key={0}>A</AtomButton>, <AtomButton key={1}>B</AtomButton>],
        className: 'extended-classNames'
      }

      // When
      const {container} = setup(props)
      const element = container.querySelector('[aria-attribute]')

      // Then
      expect(element).to.not.be.null
    })
  })

  describe('moleculeButtonGroupSizes', () => {
    it('value must be an object enum', () => {
      // Given
      const library = pkg

      // When
      const {moleculeButtonGroupSizes: actual} = library

      // Then
      expect(actual).to.be.an('object')
    })

    it('value must be a defined string-key pair filled', () => {
      // Given
      const library = pkg
      const expected = {
        SMALL: 'small',
        LARGE: 'large'
      }

      // When
      const {moleculeButtonGroupSizes: actual} = library
      const {SMALL, LARGE, ...others} = actual

      // Then
      expect(Object.keys(others).length).to.equal(0)
      expect(Object.keys(actual)).to.have.members(Object.keys(expected))
      Object.entries(expected).forEach(([expectedKey, expectedValue]) => {
        expect(Object.keys(actual).includes(expectedKey)).to.be.true
        expect(actual[expectedKey]).to.equal(expectedValue)
      })
    })
  })

  describe('moleculeButtonGroupDesigns', () => {
    it('value must be an object enum', () => {
      // Given
      const library = pkg

      // When
      const {moleculeButtonGroupDesigns: actual} = library

      // Then
      expect(actual).to.be.an('object')
    })

    it('value must be a defined string-key pair filled', () => {
      // Given
      const library = pkg
      const expected = {
        SOLID: 'solid',
        OUTLINE: 'outline',
        FLAT: 'flat',
        LINK: 'link'
      }

      // When
      const {moleculeButtonGroupDesigns: actual} = library
      const {SOLID, OUTLINE, FLAT, LINK, ...others} = actual

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
