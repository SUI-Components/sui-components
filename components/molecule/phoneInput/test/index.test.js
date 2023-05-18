/*
 * Remember: YOUR COMPONENT IS DEFINED GLOBALLY
 * */

/* eslint react/jsx-no-undef:0 */
/* eslint no-undef:0 */

import ReactDOM from 'react-dom'

import chai, {expect} from 'chai'
import chaiDOM from 'chai-dom'

import userEvents from '@testing-library/user-event'

import {AntDesignIcon} from '@s-ui/documentation-library'
import AtomIcon from '@s-ui/react-atom-icon'

import Component from '../src/index.js'
import {PREFIXES} from '../src/settings.js'

chai.use(chaiDOM)

export const icon = (
  <AtomIcon>
    <AntDesignIcon icon={'AiOutlineDown'} style={{fill: 'currentColor'}} />
  </AtomIcon>
)

describe('MoleculePhoneInput', () => {
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

  it('should render properly with phone prop given', () => {
    // Given
    const props = {
      value: '666666666'
    }

    // When
    const {container} = setup(props)

    // Then
    expect(container.innerHTML).to.be.a('string')
    expect(container.innerHTML).to.not.have.lengthOf(0)
  })

  it('should change input givena new value', () => {
    // Given
    const props = {
      value: '666666666'
    }
    const {container} = setup(props)
    const input = container.querySelector('input')

    // When
    userEvents.type(input, '6666')

    // Then
    expect(input.value).to.be.equal('6666')
  })

  it('should show all options when prefix clicked with names', () => {
    // Given
    const props = {
      value: '666666666',
      prefixes: PREFIXES
    }

    const {container} = setup(props)
    const prefix = container.querySelector(
      'div.sui-MoleculePhoneInput-input-prefix'
    )
    // When
    userEvents.click(prefix)

    // Then
    const options = container.querySelectorAll('.sui-MoleculeDropdownOption')
    expect(options.length).to.be.equal(PREFIXES.length)
    PREFIXES.forEach((prefix, index) => {
      expect(options[index].textContent).to.contain(prefix.label)
    })
  })

  it('should change selected prefix when option clicked', () => {
    // Given
    const props = {
      value: '666666666',
      prefixes: PREFIXES,
      initialSelectedPrefix: PREFIXES[0],
      onChange: () => {}
    }

    const {container} = setup(props)
    const prefix = container.querySelector(
      'div.sui-MoleculePhoneInput-input-prefix'
    )
    // When
    userEvents.click(prefix)
    const options = container.querySelectorAll('.sui-MoleculeDropdownOption')
    const selectedPrefixLabel = container.querySelector(
      '.sui-MoleculePhoneInput-input-prefix-code'
    )
    const firstOption = options[0]
    firstOption.click()

    // Then
    expect(selectedPrefixLabel.textContent).to.be.equal(PREFIXES[0].countryCode)
  })

  it('should add selected class to the selected option', () => {
    // Given
    const props = {
      value: '666666666',
      prefixes: PREFIXES,
      initialSelectedPrefix: PREFIXES[0],
      onChange: () => {}
    }

    const {container} = setup(props)
    const prefix = container.querySelector(
      'div.sui-MoleculePhoneInput-input-prefix'
    )
    // When
    prefix.click()
    const options = container.querySelectorAll('.sui-MoleculeDropdownOption')
    const firstOption = options[0]
    firstOption.click()
    // Then
    expect(firstOption.classList.contains('is-selected')).to.be.true
  })

  it('should close options when clicked outside', () => {
    // Given
    const props = {
      value: '666666666',
      prefixes: PREFIXES,
      initialSelectedPrefix: PREFIXES[0],
      onChange: () => {}
    }

    const {container} = setup(props)
    const prefix = container.querySelector(
      'div.sui-MoleculePhoneInput-input-prefix'
    )
    // When
    prefix.click()
    const options = container.querySelectorAll('.sui-MoleculeDropdownOption')
    expect(options.length).to.be.equal(PREFIXES.length)

    const outside = container.querySelector('div.sui-MoleculePhoneInput')
    userEvents.click(outside)

    // Then
    expect(container.querySelector('.sui-MoleculeDropdown')).to.be.null
  })

  it('should expose value and prefix in the onChange function', () => {
    let phoneValue = '666'
    let phonePrefix = ''
    // Given
    const props = {
      value: phoneValue,
      prefixes: PREFIXES,
      initialSelectedPrefix: PREFIXES[0],
      onChange: (_, {value, prefix}) => {
        phoneValue = value
        phonePrefix = prefix
      }
    }

    const {container} = setup(props)
    const input = container.querySelector('input')
    // When
    userEvents.type(input, '6666')

    // Then
    expect(phoneValue).to.be.equal('6666666')
    expect(phonePrefix).to.be.equal(PREFIXES[0].countryCode)
  })
})
