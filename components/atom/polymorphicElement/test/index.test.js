/*
 * Remember: YOUR COMPONENT IS DEFINED GLOBALLY
 * */

/* eslint react/jsx-no-undef:0 */
/* eslint no-undef:0 */

import ReactDOM from 'react-dom'

import chai, {expect} from 'chai'
import chaiDOM from 'chai-dom'

import Component from '../src/index.js'

chai.use(chaiDOM)

describe(Component.name, () => {
  const setup = setupEnvironment(Component)

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
})
