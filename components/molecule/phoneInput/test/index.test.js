/*
 * Remember: YOUR COMPONENT IS DEFINED GLOBALLY
 * */

/* eslint react/jsx-no-undef:0 */
/* eslint no-undef:0 */

import ReactDOM from 'react-dom'

import chai, {expect} from 'chai'
import chaiDOM from 'chai-dom'

import Component from '../src/index.js'
import {PREFIXES} from '../src/settings.js'

chai.use(chaiDOM)

describe('MoleculePhoneValidation', () => {
  const setup = setupEnvironment(Component)

  it('should render without crashing', () => {
    // Given
    const props = {
      phone: '',
      onChange: () => {},
      prefixes: PREFIXES
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
      phone: '',
      onChange: () => {},
      prefixes: PREFIXES
    }

    // When
    const {container} = setup(props)

    // Then
    expect(container.innerHTML).to.be.a('string')
    expect(container.innerHTML).to.not.have.lengthOf(0)
  })

  it('should NOT extend classNames', () => {
    // Given
    const props = {
      className: 'extended-classNames',
      phone: '',
      onChange: () => {},
      prefixes: PREFIXES
    }
    const findSentence = str => string => string.match(new RegExp(`S*${str}S*`))

    // When
    const {container} = setup(props)
    const findClassName = findSentence(props.className)

    // Then
    expect(findClassName(container.innerHTML)).to.be.null
  })

  it('should render properly with no props given', () => {
    // Given
    const props = {}

    // When
    const {container} = setup(props)

    // Then
    expect(container.innerHTML).to.be.a('string')
    expect(container.innerHTML).to.not.have.lengthOf(0)
  })

  it('should set initial value when passed a value with no prefix', () => {
    const phone = '606060606'
    // Given
    const props = {
      setPhone: () => {},
      phone,
      prefixes: PREFIXES,
      placeholder: 'test placeholder'
    }

    // When
    const {getByPlaceholderText} = setup(props)

    // Then
    const input = getByPlaceholderText('test placeholder')
    expect(input.value).to.be.equal(phone)
  })

  it('should set initial value when passed a value with prefix', () => {
    const phone = '34606060606'
    // Given
    const props = {
      setPhone: () => {},
      phone,
      prefixes: PREFIXES,
      placeholder: 'hola'
    }

    // When
    const {getByPlaceholderText} = setup(props)

    // Then
    const input = getByPlaceholderText('hola')
    expect(input.value).to.be.equal(phone.split(' ')[1])
  })
})
