/*
 * Remember: YOUR COMPONENT IS DEFINED GLOBALLY
 * */

/* eslint react/jsx-no-undef:0 */

import React from 'react'
import {render} from '@testing-library/react'

import chai, {expect} from 'chai'
import chaiDOM from 'chai-dom'

import MoleculeTabs from '../../../components/molecule/tabs'
import MoleculeTab from '../../../components/molecule/tabs/src/components/MoleculeTab'

chai.use(chaiDOM)

const setupBuilder = Component => props => {
  const container = document.createElement('div')
  container.setAttribute('id', 'test-container')
  const utils = render(<Component {...props} />, {
    container: document.body.appendChild(container)
  })
  return utils
}

describe('molecule/tabs', () => {
  const Environment = propsArray => {
    return (
      <MoleculeTabs>
        {Object.values(propsArray).map((props, index) => {
          const {children, ...otherProps} = props // eslint-disable-line
          return (
            <MoleculeTab key={index} {...otherProps}>
              {children}
            </MoleculeTab>
          )
        })}
      </MoleculeTabs>
    )
  }

  it('should display the active content', () => {
    // Given
    const propsArray = [
      {label: 'Tab 1', children: 'Content 1', active: true},
      {label: 'Tab 2', children: 'Content 2'}
    ]

    // When
    const {getByText} = setupBuilder(Environment)(propsArray)

    // Then
    expect(getByText(propsArray[0].children).innerHTML).to.equal(
      propsArray[0].children
    )
  })

  it('should display the active content given count props', () => {
    // Given
    const propsArray = [
      {label: 'Tab 1', count: 3, children: 'Content 1', active: true},
      {label: 'Tab 2', count: -3, children: 'Content 2'},
      {label: 'Tab 3', count: 0, children: 'Content 3'}
    ]

    // When
    const {getByText} = setupBuilder(Environment)(propsArray)

    // Then
    expect(getByText(propsArray[0].children).innerHTML).to.equal(
      propsArray[0].children
    )
    expect(getByText(propsArray[0].count.toString()).innerHTML).to.equal(
      propsArray[0].count.toString()
    )
    expect(getByText(propsArray[1].count.toString()).innerHTML).to.equal(
      propsArray[1].count.toString()
    )
    expect(getByText(propsArray[2].count.toString()).innerHTML).to.equal(
      propsArray[2].count.toString()
    )
  })
})
