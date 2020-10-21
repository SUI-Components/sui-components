/* eslint react/jsx-no-undef:0 */
/* eslint no-undef:0 */

import React from 'react'
import ReactDOM from 'react-dom'

import chai, {expect} from 'chai'
import chaiDOM from 'chai-dom'

chai.use(chaiDOM)

describe('atom/button', () => {
  const Component = AtomButton
  const setup = setupEnvironment(Component)

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

  it('should not render null', () => {
    // Given
    const props = {}

    // When
    const {container} = setup(props)

    // Then
    expect(container.innerHTML).to.be.a('string')
    expect(container.innerHTML).to.not.have.lengthOf(0)
  })

  it('should show loader if loading', () => {
    // Given
    const text = 'Text'
    const loaderId = 'loader'
    const props = {
      children: text,
      loader: <span data-testid={loaderId} />,
      isLoading: true
    }

    // When
    const {getByTestId} = setup(props)

    // Then
    expect(getByTestId(loaderId)).to.be.visible
  })

  it('should show loading text if loading and there is content', () => {
    // Given
    const loadingText = 'Loading'
    const loaderId = 'loader'
    const props = {
      loader: <span data-testid={loaderId} />,
      loadingText,
      children: 'Button',
      isLoading: true
    }

    // When
    const {getByText, getByTestId} = setup(props)

    // Then
    expect(getByText(loadingText)).to.be.visible
    expect(getByTestId(loaderId)).to.be.visible
  })

  it('should not show loading text if loading and there is no content', () => {
    // Given
    const loadingText = 'Loading'
    const loaderId = 'loader'
    const props = {
      loader: <span data-testid={loaderId} />,
      loadingText,
      isLoading: true
    }

    // When
    const {queryByText, getByTestId} = setup(props)

    // Then
    expect(queryByText(loadingText)).to.be.null
    expect(getByTestId(loaderId)).to.be.visible
  })
})
