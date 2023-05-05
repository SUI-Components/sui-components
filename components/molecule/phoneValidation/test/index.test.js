/*
 * Remember: YOUR COMPONENT IS DEFINED GLOBALLY
 * */

/* eslint react/jsx-no-undef:0 */
/* eslint no-undef:0 */

import ReactDOM from 'react-dom'

import chai, {expect} from 'chai'
import chaiDOM from 'chai-dom'

import Component from '../src/index.js'

chai.use(chaiDOM)

const prefixes = [
  {value: 'ES', label: 'España', countryCode: '+34'},
  {value: 'FR', label: 'Francia', countryCode: '+33'},
  {value: 'PT', label: 'Portugal', countryCode: '+351'},
  {value: 'AD', label: 'Andorra', countryCode: '+376'}
]

describe('MoleculePhoneValidation', () => {
  const setup = setupEnvironment(Component)

  it('should render without crashing', () => {
    // Given
    const props = {
      value: '123456789',
      onChange: () => {},
      prefixes
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
      value: '123456789',
      onChange: () => {},
      prefixes
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
      value: '123456789',
      onChange: () => {},
      prefixes
    }
    const findSentence = str => string => string.match(new RegExp(`S*${str}S*`))

    // When
    const {container} = setup(props)
    const findClassName = findSentence(props.className)

    // Then
    expect(findClassName(container.innerHTML)).to.be.null
  })
})
