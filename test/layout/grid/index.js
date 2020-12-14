/* eslint react/jsx-no-undef:0 */
/* eslint no-undef:0 */

import React from 'react'
import ReactDOM from 'react-dom'

import chai, {expect} from 'chai'
import chaiDOM from 'chai-dom'

chai.use(chaiDOM)

describe('layout/grid', () => {
  const Component = LayoutGrid
  const setup = setupEnvironment(Component)

  it('should render without crashing', () => {
    const props = {}
    const component = <Component {...props} />

    const div = document.createElement('div')
    ReactDOM.render(component, div)
    ReactDOM.unmountComponentAtNode(div)
  })

  it('should NOT render null', () => {
    const props = {}
    const {container} = setup(props)

    expect(container.innerHTML).to.be.a('string')
    expect(container.innerHTML).to.not.have.lengthOf(0)
  })
})
