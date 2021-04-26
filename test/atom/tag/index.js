/*
 * Remember: YOUR COMPONENT IS DEFINED GLOBALLY
 * */

/* eslint react/jsx-no-undef:0 */
/* eslint no-undef:0 */

import ReactDOM from 'react-dom'

import chai, {expect} from 'chai'
import chaiDOM from 'chai-dom'
import sinon from 'sinon'
import userEvents from '@testing-library/user-event'

chai.use(chaiDOM)

describe('atom/tag', () => {
  const Component = AtomTag
  const setup = setupEnvironment(Component)

  it('should render without crashing', () => {
    // Given
    const props = {
      label: 'label'
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
      label: 'label'
    }

    // When
    const {container} = setup(props)

    // Then
    expect(container.innerHTML).to.be.a('string')
    expect(container.innerHTML).to.not.have.lengthOf(0)
  })

  it('should not trigger click when disabled', () => {
    const spy = sinon.spy()
    const {getByRole} = setup({
      disabled: true,
      onClick: spy,
      label: 'Actionable'
    })

    const tag = getByRole('button', {name: /actionable/i})
    userEvents.click(tag)
    sinon.assert.notCalled(spy)
  })
})
