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
    const libraryExportedMembers = ['default']

    // When
    const {default: MoleculeInjector, ...others} = library

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

    it('should render null', () => {
      // Given
      const props = {}

      // When
      const {container} = setup(props)

      // Then
      expect(container.innerHTML).to.be.a('string')
      expect(container.innerHTML).to.have.lengthOf(0)
    })

    it('given an children with unprovided props should receive injector props', () => {
      // Given
      const text = 'text'
      const injectedProps = {
        type: 'text',
        readOnly: true,
        checked: false,
        value: 3,
        placeholder: text
      }
      const props = {
        ...injectedProps,
        children: <input />
      }

      // When
      const {getByPlaceholderText} = setup(props)
      const textElement = getByPlaceholderText(text)

      // Then
      expect(Object.entries(injectedProps).length).to.not.equal(0)
      Object.entries(injectedProps).map(([propKey, propValue]) => {
        if (typeof injectedProps[propKey] === 'boolean') {
          if (injectedProps[propKey] === true) {
            expect(textElement.getAttribute(propKey)).to.equal('')
          } else {
            expect(textElement.getAttribute(propKey)).to.equal(null)
          }
        } else if (typeof injectedProps[propKey] === 'string') {
          expect(textElement.getAttribute(propKey)).to.equal(propValue)
        } else if (typeof injectedProps[propKey] === 'number') {
          expect(textElement.getAttribute(propKey)).to.equal(`${propValue}`)
        }
      })
    })
  })

  describe('classnames', () => {
    it('should extend classNames', () => {
      // Given
      const getChildrenText = id => `text-${id}`
      const props = {
        className: 'provider',
        children: [
          <span key="1" className="children1">
            {getChildrenText(1)}
          </span>,
          <span key="2" className="children2">
            {getChildrenText(2)}
          </span>
        ]
      }

      // When
      const {getByText} = setup(props)
      const children1 = getByText(getChildrenText(1))
      const children2 = getByText(getChildrenText(2))

      // Then
      expect(children1.classList.contains('children1')).to.be.true
      expect(children1.classList.contains('provider')).to.be.true
      expect(
        children1.classList.value.split(' ').indexOf(props.className)
      ).to.be.above(
        children1.classList.value.split(' ').indexOf('children1'),
        'own child classNames must be previous to provider classnames'
      )
      expect(children2.classList.contains('children2')).to.be.true
      expect(children2.classList.contains('provider')).to.be.true
      expect(
        children1.classList.value.split(' ').indexOf(props.className)
      ).to.be.above(
        children1.classList.value.split(' ').indexOf('children2'),
        'own child classNames must be previous to provider classnames'
      )
    })
  })

  describe('styles', () => {})
})
