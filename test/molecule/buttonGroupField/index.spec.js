import React from 'react'
import {getByText} from '@testing-library/react'

import chai, {expect} from 'chai'
import chaiDOM from 'chai-dom'

import MoleculeButtonGroupField from '../../../components/molecule/buttonGroupField/src/index'
import setupBuilder from '../../shared/helpers/setupBuilder'
import renderTest from '../../shared/renderTest'
import nullishTest from '../../shared/nullishTest'

chai.use(chaiDOM)

const Component = props => (
  <MoleculeButtonGroupField {...props}>
    <>
      <div>BUTTON 1</div>
      <div>BUTTON 2</div>
    </>
  </MoleculeButtonGroupField>
)

const setup = setupBuilder()(Component)

describe('molecule/buttonGroupField', () => {
  renderTest({Component})()

  nullishTest({setup})()

  it('User can see a label before button group', () => {
    // Given
    const props = {
      id: 'testId',
      helpTest: 'Test description here',
      label: 'Test Label'
    }

    // When
    const {container} = setup(props)

    // Then
    const expectedLabel = getByText(container, props.label)
    expect(expectedLabel).to.be.exist
  })

  it('User can see successHelpText after button group', () => {
    // Given
    const props = {
      id: 'testId',
      successText: 'Test Everything ok!',
      label: 'Test Label'
    }

    // When
    const {container} = setup(props)

    // Then
    const expectedSuccessText = getByText(container, props.successText)
    expect(expectedSuccessText).to.be.exist
  })

  it('User can see errorHelpText after button group', () => {
    // Given
    const props = {
      id: 'testId',
      errorText: 'Test All wrong!',
      label: 'Test Label'
    }

    // When
    const {container} = setup(props)

    // Then
    const expectedErrorText = getByText(container, props.errorText)
    expect(expectedErrorText).to.be.exist
  })

  it('User can see alertHelpText after button group', () => {
    // Given
    const props = {
      id: 'testId',
      alertText: 'Test Alert!!!',
      label: 'Test Label'
    }

    // When
    const {container} = setup(props)

    // Then
    const expectedAlertText = getByText(container, props.alertText)
    expect(expectedAlertText).to.be.exist
  })
})
