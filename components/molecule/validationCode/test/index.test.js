/*
 * Remember: YOUR COMPONENT IS DEFINED GLOBALLY
 * */

/* eslint react/jsx-no-undef:0 */
/* eslint no-undef:0 */

import ReactDOM from 'react-dom'

import chai, {expect} from 'chai'
import chaiDOM from 'chai-dom'
import userEvents from '@testing-library/user-event'
import Component from '../src/index.js'
import sinon from 'sinon'

chai.use(chaiDOM)

describe('MoleculeValidationCode', () => {
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

  it('should NOT extend classNames', () => {
    // Given
    const props = {
      className: 'extended-classNames'
    }
    const findSentence = str => string => string.match(new RegExp(`S*${str}S*`))

    // When
    const {container} = setup(props)
    const findClassName = findSentence(props.className)

    // Then
    expect(findClassName(container.innerHTML)).to.be.null
  })

  it('should render the statusMessage', () => {
    // Given
    const props = {
      statusMessage: 'Error',
      status: 'error'
    }

    // When
    const {getByText} = setup(props)
    const statusText = getByText(props.statusMessage).innerText

    // Then
    expect(statusText).to.be.equal(props.statusMessage)
  })

  it('should format to string if value is an array', () => {
    // Given
    const props = {
      value: [1, 2, 3, 4, 5]
    }

    const {getByDisplayValue} = setup(props)

    // Then
    props.value.map(value => {
      const input = getByDisplayValue(value)
      expect(input).to.exist
    })
  })

  it('should clear value', () => {
    // Given
    const spy = sinon.spy()
    const props = {
      value: '123456',
      deleteButtonTextLabel: 'Clear',
      onClear: spy,
      onChange: () => {}
    }

    // When
    const {getByDisplayValue, getByText} = setup(props)

    // Then
    const input = getByDisplayValue(props.value)
    expect(input.value).to.exist

    // And
    // When
    const deleteButton = getByText(props.deleteButtonTextLabel)
    userEvents.click(deleteButton)
    // Then
    sinon.assert.called(spy)
  })

  it('resend button should work', () => {
    // Given
    const props = {
      value: '12345',
      resendButtonTextLabel: 'Resend',
      onResend: () => {}
    }

    // When
    const {getByText} = setup(props)
    // Then
    const resendButton = getByText(props.resendButtonTextLabel)
    expect(resendButton).to.exist

    // When
    userEvents.click(resendButton)
  })
})
