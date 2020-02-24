/* eslint react/jsx-no-undef:0 */
/* global MoleculeTextareaField */
import React from 'react'
import {render, fireEvent} from '@testing-library/react'

import chai, {expect} from 'chai'
import chaiDOM from 'chai-dom'

chai.use(chaiDOM)

const maxChars = 100
const label = 'Test Label'
const placeholder = 'Initial Placeholder'
const successText = 'Everything ok!'

describe('molecule/textareaField', () => {
  it('Renders correctly: label, help text, placeholder and success text', () => {
    const helpText = 'Max Characters'
    const defaultHelpTextComputed = `${helpText} - 0/${maxChars} characters`

    const {getAllByText, getAllByPlaceholderText} = render(
      <MoleculeTextareaField
        id="test"
        label={label}
        maxChars={maxChars}
        placeholder={placeholder}
        successText={successText}
        helpText={helpText}
      />
    )

    expect(getAllByText(label))
      .to.be.an('array')
      .to.have.lengthOf(1)

    expect(getAllByText(defaultHelpTextComputed))
      .to.be.an('array')
      .to.have.lengthOf(1)

    expect(getAllByPlaceholderText(placeholder))
      .to.be.an('array')
      .to.have.lengthOf(1)

    expect(getAllByText(successText))
      .to.be.an('array')
      .to.have.lengthOf(1)
  })

  it('Writes text and character counter updates accordingly', () => {
    const {getByPlaceholderText, getByText} = render(
      <MoleculeTextareaField
        id="test"
        label={label}
        maxChars={maxChars}
        placeholder={placeholder}
        successText={successText}
      />
    )
    const textToWrite = 'Here is the description'
    const textToWriteLength = textToWrite.length
    const textarea = getByPlaceholderText(placeholder)
    getByText(`0/${maxChars} characters`)
    // write some text
    fireEvent.change(textarea, {target: {value: textToWrite}})
    // text renders correctly
    getByText(textToWrite)
    // character counter updates accordingly
    getByText(`${textToWriteLength}/${maxChars} characters`)
  })
})
