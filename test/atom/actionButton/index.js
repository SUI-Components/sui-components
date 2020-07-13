/*
 * Remember: YOUR COMPONENT IS DEFINED GLOBALLY
 * */

/* eslint react/jsx-no-undef:0 */
/* eslint no-undef:0 */

import React from 'react'
import ReactDOM from 'react-dom'

import chai, {expect} from 'chai'
import chaiDOM from 'chai-dom'
import {render} from '@testing-library/react'

chai.use(chaiDOM)

const setupBuilder = Component => props => {
  const container = document.createElement('div')
  container.setAttribute('id', 'test-container')
  const utils = render(<Component {...props} />, {
    container: document.body.appendChild(container)
  })
  return utils
}

describe('atom/actionButton', () => {
  const Icon = () => (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="m6.3506 6.3506 2.649 2.649h-6v-6l1.938 1.938c1.842-1.849 4.347-2.938 7.062-2.938 5.515 0 10 4.486 10 10h-2c0-4.411-3.588-8-8-8-2.172 0-4.176.872-5.649 2.351zm11.2988 11.2988-2.649-2.649h6v6l-1.938-1.939c-1.842 1.85-4.347 2.939-7.062 2.939-5.515 0-10-4.486-10-10h2c0 4.411 3.588 8 8 8 2.172 0 4.176-.872 5.649-2.351z" />
    </svg>
  )
  const setup = setupBuilder(AtomActionButton)
  it('should render without crashing', () => {
    // Given
    const props = {}

    // When
    const component = <AtomButton {...props} />

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
