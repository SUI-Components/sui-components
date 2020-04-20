/* eslint react/jsx-no-undef:0 */
// import React from 'react'
import {fireEvent} from '@testing-library/react'

import chai, {expect} from 'chai'
import chaiDOM from 'chai-dom'

import MoleculeTextAreaField from '../../../components/molecule/textareaField/src'
import setupBuilder from '../../shared/helpers/setupBuilder'
import renderTest from '../../shared/renderTest'
import nullishTest from '../../shared/nullishTest'

chai.use(chaiDOM)

const setup = setupBuilder()(MoleculeTextAreaField)

describe('molecule/textareaField', () => {
  renderTest({Component: MoleculeTextAreaField})()

  nullishTest({setup})()

  it('Renders correctly: label, help text, placeholder and success text', () => {
    // Given
    const props = {
      label: 'Test Label',
      maxChars: 100,
      placeholder: 'Initial Placeholder',
      successText: 'Everything ok!',
      helpText: 'Max Characters'
    }
    const defaultHelpTextComputed = `${props.helpText} - 0/${props.maxChars} characters`

    // When
    const {getAllByText, getAllByPlaceholderText} = setup(props)

    // Then
    expect(getAllByText(props.label))
      .to.be.an('array')
      .to.have.lengthOf(1)
    expect(getAllByText(defaultHelpTextComputed))
      .to.be.an('array')
      .to.have.lengthOf(1)
    expect(getAllByPlaceholderText(props.placeholder))
      .to.be.an('array')
      .to.have.lengthOf(1)
    expect(getAllByText(props.successText))
      .to.be.an('array')
      .to.have.lengthOf(1)
  })

  it('Writes text and character counter updates accordingly', () => {
    // Given
    const props = {
      label: 'Test Label',
      maxChars: 100,
      placeholder: 'Initial Placeholder',
      successText: 'Everything ok!'
    }
    const textToWrite = 'Here is the description'

    // When
    const {getByPlaceholderText, getByText} = setup(props)

    // Then
    getByText(`0/${props.maxChars} characters`)
    // write some text
    fireEvent.change(getByPlaceholderText(props.placeholder), {
      target: {value: textToWrite}
    })
    // text renders correctly
    getByText(textToWrite)
    // character counter updates accordingly
    getByText(`${textToWrite.length}/${props.maxChars} characters`)
  })
})
