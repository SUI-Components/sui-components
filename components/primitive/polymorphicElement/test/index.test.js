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
    const {default: PolymorphicElement, ...others} = library

    // Then
    expect(Object.keys(library).length).to.equal(libraryExportedMembers.length)
    expect(Object.keys(library)).to.have.members(libraryExportedMembers)
    expect(Object.keys(others).length).to.equal(0)
  })

  describe(Component.displayName, () => {
    it('should render without crashing', () => {
      // Given
      const props = {as: 'h1'}

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

    it('should render the as property when passed as a string', () => {
      // Given
      const mockText = 'Sui'
      const props = {as: 'h1', children: mockText}

      // When
      const {getByText} = setup(props)

      // Then
      expect(getByText(mockText).tagName).to.equal('H1')
    })

    it('should render the as property when passed as a component', () => {
      // Given
      function StrongParagraph(props) {
        return <p style={{fontWeight: 700}} {...props} />
      }
      const mockText = 'Sui'
      const props = {as: StrongParagraph, children: mockText}

      // When
      const {getByText} = setup(props)

      // Then
      expect(getByText(mockText).tagName).to.equal('P')
    })
  })
})
