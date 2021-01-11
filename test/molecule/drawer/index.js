/*
 * Remember: YOUR COMPONENT IS DEFINED GLOBALLY
 * */

/* eslint react/jsx-no-undef:0 */
/* eslint no-undef:0 */

import ReactDOM from 'react-dom'

import chai, {expect} from 'chai'
import chaiDOM from 'chai-dom'
import {render} from '@testing-library/react'

chai.use(chaiDOM)

describe('MoleculeDrawer', () => {
  const Component = MoleculeDrawer

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

  it('should render the drawer content if drawer is open', () => {
    // Given
    const props = {
      isOpen: true,
      children: <p>I am a drawer</p>
    }

    // When
    const {getByText} = render(<Component {...props} />)
    // Then
    expect(getByText('I am a drawer')).to.be.visible
  })

  it('should not render the drawer content if drawer is not open', () => {
    // Given
    const props = {
      isOpen: false,
      children: <p>I am a drawer</p>
    }

    // When
    const {queryByText} = render(<Component {...props} />)
    // Then
    expect(queryByText('I am a drawer')).to.be.null
  })
})
