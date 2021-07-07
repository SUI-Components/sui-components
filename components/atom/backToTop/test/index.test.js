/*
 * Remember: YOUR COMPONENT IS DEFINED GLOBALLY
 * */

/* eslint react/jsx-no-undef:0 */
/* eslint no-undef:0 */

import ReactDOM from 'react-dom'

import chai, {expect} from 'chai'
import chaiDOM from 'chai-dom'
import {createRef} from 'react'

chai.use(chaiDOM)

describe('atom/backToTop', () => {
  const Component = AtomBackToTop
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

  it('should NOT render null', () => {
    // Given
    const props = {}

    // When
    const {container} = setup(props)

    // Then
    expect(container.innerHTML).to.be.a('string')
    expect(container.innerHTML).to.not.have.lengthOf(0)
  })

  describe('forwardRef', () => {
    it('should return forwardRef html button element when giving a ref to the component', () => {
      // Given
      const props = {children: 'button'}
      const ref = createRef()

      // When
      const component = <Component {...props} ref={ref} />
      const div = document.createElement('div')
      ReactDOM.render(component, div)

      // Then
      expect(ref.current).to.not.equal(undefined)
      expect(ref.current.nodeName).to.equal('BUTTON')
    })
  })
})
