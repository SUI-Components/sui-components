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
    const libraryExportedMembers = ['MoleculeRadioButtonFieldStatus', 'default']

    // When
    const {
      MoleculeRadioButtonFieldStatus,
      default: MoleculeRadioButton,
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

    describe('props', () => {
      describe('label & nodeLabel', () => {
        it('should render the empty component if there is not label or nodeLabel props', async () => {
          // Given
          const props = {}

          // When
          const {container} = setup(props)

          // Then
          expect(container).to.be.not.undefined
        })

        it('should render the component if there is label', () => {
          // Given
          const props = {
            label: 'label'
          }

          // When
          const {container, getByText} = setup(props)

          // Then
          const labelElement = getByText(props.label)
          expect(container).to.be.not.undefined
          expect(labelElement).to.be.not.undefined
          expect(labelElement.innerText).to.equal(props.label)
          expect(labelElement.classList.contains('sui-AtomLabel')).to.be.true
        })

        it('should render the component if there is nodeLabel', () => {
          // Given
          const text = 'nodeLabel'
          const props = {
            nodeLabel: (
              <div data-role="button" className="testNodeLabel">
                {text}
              </div>
            )
          }

          // When
          const {container, getByText} = setup(props)

          // Then
          const labelElement = getByText(text)
          expect(container).to.be.not.undefined
          expect(labelElement).to.be.not.undefined
          expect(labelElement.innerText).to.equal(text)
          expect(labelElement.classList.contains('testNodeLabel')).to.be.true
        })

        it('should render the component with label value if there is label and nodeLabel props', () => {
          // Given
          const text = 'label'
          const props = {
            label: text,
            nodeLabel: (
              <div data-role="button" className="testNodeLabel">
                {text}
              </div>
            )
          }

          // When
          const {container, getByText} = setup(props)

          // Then
          const labelElement = getByText(text)
          expect(container).to.be.not.undefined
          expect(labelElement).to.be.not.undefined
          expect(labelElement.innerText).to.equal(props.label)
          expect(labelElement.classList.contains('sui-AtomLabel')).to.be.true
          expect(labelElement.classList.contains('testNodeLabel')).to.be.false
        })
      })
    })
  })

  describe('MoleculeRadioButtonFieldStatus', () => {
    it('value must be an object enum', () => {
      // Given
      const library = pkg

      // When
      const {MoleculeRadioButtonFieldStatus: actual} = library

      // Then
      expect(actual).to.be.an('object')
    })

    it('value must be a defined string-key pair filled', () => {
      // Given
      const library = pkg
      const expected = {
        SUCCESS: 'success',
        ERROR: 'error',
        ALERT: 'alert'
      }

      // When
      const {MoleculeRadioButtonFieldStatus: actual} = library
      const {SUCCESS, ERROR, ALERT, ...others} = actual

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
