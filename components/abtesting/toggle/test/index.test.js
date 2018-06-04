/* eslint-env jest */
import React from 'react'
import Enzyme, {render} from 'enzyme'
import AbTestToggle from '../src/index'

import Adapter from 'enzyme-adapter-react-16'
Enzyme.configure({adapter: new Adapter()})

describe('<AbTestToggle />', () => {
  const variations = [
    <button key={0} variationId="A">
      Green Button (A)
    </button>,
    <button key={1} variationId="B">
      Blue Button (B)
    </button>,
    <button key={2} variationId="C">
      Orange Button (C)
    </button>,
    <button key={3} defaultVariation>
      Black Button
    </button>
  ]

  it('should render corresponding variation when variation IS defined', () => {
    const component = <AbTestToggle variation="B">{variations}</AbTestToggle>
    expect(render(component).text()).toEqual('Blue Button (B)')
  })

  it('should render default variation when variation IS NOT defined', () => {
    const component = <AbTestToggle>{variations}</AbTestToggle>
    expect(render(component).text()).toEqual('Black Button')
  })

  it("should render nothing when variation IS defined but doesn't exist", () => {
    const component = <AbTestToggle variation="D">{variations}</AbTestToggle>
    expect(render(component).text()).toEqual('')
  })
})
