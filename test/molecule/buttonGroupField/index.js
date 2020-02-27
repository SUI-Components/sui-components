/* global MoleculeButtonGroupField */

import React from 'react'
import {render, getByText} from '@testing-library/react'

import chai, {expect} from 'chai'
import chaiDOM from 'chai-dom'

chai.use(chaiDOM)

const moleculeButtonGroupTestId = 'testId'
const label = 'Test Label'
const help = 'Test description here'
const success = 'Test Everything ok!'
const error = 'Test All wrong!'
const alert = 'Test Alert!!!'

const createComponent = props => {
  return (
    <MoleculeButtonGroupField
      id={moleculeButtonGroupTestId}
      label={label}
      {...props}
    >
      <>
        <div>BUTTON 1</div>
        <div>BUTTON 2</div>
      </>
    </MoleculeButtonGroupField>
  )
}

describe('SUI - MoleculeButtonGroupField', () => {
  it('User can see a label before button group', () => {
    const component = createComponent({helpTest: help})
    const {container} = render(component)
    const expectedLabel = getByText(container, label)
    expect(expectedLabel).to.be.exist
  })

  it('User can see successHelpText after button group', () => {
    const component = createComponent({successText: success})
    const {container} = render(component)
    const expectedSuccessText = getByText(container, success)
    expect(expectedSuccessText).to.be.exist
  })

  it('User can see errorHelpText after button group', () => {
    const component = createComponent({errorText: error})
    const {container} = render(component)
    const expectedErrorText = getByText(container, error)
    expect(expectedErrorText).to.be.exist
  })

  it('User can see alertHelpText after button group', () => {
    const component = createComponent({alertText: alert})
    const {container} = render(component)
    const expectedAlertText = getByText(container, alert)
    expect(expectedAlertText).to.be.exist
  })
})
