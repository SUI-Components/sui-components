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
    const libraryExportedMembers = ['default']

    // When
    const {default: AtomKbd, ...others} = library

    // Then
    expect(Object.keys(library).length).to.equal(libraryExportedMembers.length)
    expect(Object.keys(library)).to.have.members(libraryExportedMembers)
    expect(Object.keys(others).length).to.equal(0)
  })

  describe(Component.displayName, () => {
    it('should render without crashing', () => {
      // Given
      const props = {
        children: 'PrimitiveVisuallyHidden'
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
        children: 'PrimitiveVisuallyHidden'
      }

      // When
      const {container} = setup(props)

      // Then
      expect(container.innerHTML).to.be.a('string')
      expect(container.innerHTML).to.not.have.lengthOf(0)
    })

    it('should extend classNames', () => {
      // Given
      const props = {className: 'extended-classNames'}
      const findSentence = str => string => string.match(new RegExp(`S*${str}S*`))

      // When
      const {container} = setup(props)
      const findClassName = findSentence(props.className)

      // Then
      expect(findClassName(container.innerHTML)).to.not.be.null
    })

    it('should have data attributes', () => {
      // Given
      const props = {'data-attribute': 'data-attribute'}

      // When
      const {container} = setup(props)
      const element = container.querySelector('[data-attribute]')

      // Then
      expect(element).to.not.be.null
    })

    it('should have aria attributes', () => {
      // Given
      const props = {'aria-attribute': 'aria-attribute'}

      // When
      const {container} = setup(props)
      const element = container.querySelector('[aria-attribute]')

      // Then
      expect(element).to.not.be.null
    })

    it('should be readable', () => {
      // Given
      const props = {children: 'children'}

      // When
      const {getByText} = setup(props)
      const element = getByText(props.children)

      // Then
      expect(element).to.not.be.null
    })
  })
})
