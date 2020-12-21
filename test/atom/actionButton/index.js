/*
 * Remember: YOUR COMPONENT IS DEFINED GLOBALLY
 * */

/* eslint react/jsx-no-undef:0 */
/* eslint no-undef:0 */

import ReactDOM from 'react-dom'

import chai, {expect} from 'chai'
import chaiDOM from 'chai-dom'

chai.use(chaiDOM)

describe('atom/actionButton', () => {
  const Component = AtomActionButton
  const Icon = () => null
  const setup = setupEnvironment(Component)

  it('should render without crashing', () => {
    // Given
    const props = {
      icon: <Icon />,
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
      icon: <Icon />,
    }

    // When
    const {container} = setup(props)

    // Then
    expect(container.innerHTML).to.be.a('string')
    expect(container.innerHTML).to.not.have.lengthOf(0)
  })

  it('Displays the expected button', () => {
    // Given
    const props = {
      icon: <Icon />,
      children: 'Lorem Ipsum'
    }

    // When
    const {getByText} = setup(props)

    // Then
    const expectedLabel = getByText(props.children)
    expect(expectedLabel).to.be.exist
  })

  it('Displays the expected text', () => {
    // Given
    const props = {
      icon: <Icon />,
      children: 'Lorem Ipsum'
    }

    // When
    const {getByText} = setup(props)

    // Then
    const actionButtonElement = getByText(props.children)
    expect(actionButtonElement.innerText).to.be.equal(props.children)
  })
})
