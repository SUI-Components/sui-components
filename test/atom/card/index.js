/*
 * Remember: YOUR COMPONENT IS DEFINED GLOBALLY
 * */

/* eslint react/jsx-no-undef:0 */
/* eslint no-undef:0 */

import ReactDOM from 'react-dom'

import chai, {expect} from 'chai'
import chaiDOM from 'chai-dom'

chai.use(chaiDOM)

describe('atom/card', () => {
  const Component = AtomCard
  const noop = () => null
  const setup = setupEnvironment(Component)

  it('should render without crashing', () => {
    // Given
    const props = {
      content: noop
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
      content: noop
    }

    // When
    const {container} = setup(props)

    // Then
    expect(container.innerHTML).to.be.a('string')
    expect(container.innerHTML).to.not.have.lengthOf(0)
  })

  it('should have link class when having onClick', () => {
    const props = {
      onClick: () => console.log('Hello!'), // eslint-disable-line no-console
      content: () => <span>card with click</span>
    }
    const {getByRole} = setup(props)
    const card = getByRole('button')
    expect(card).to.have.class('sui-AtomCard-link')
  })

  it('should have link class when having href', () => {
    const props = {
      href: 'http://www.google.com',
      content: () => <span>card with click</span>
    }
    const {getByRole} = setup(props)
    const card = getByRole('button')
    expect(card).to.have.class('sui-AtomCard-link')
  })

  it('should NOT have link class when not having href or onClick', () => {
    const props = {
      content: () => <span>card with click</span>
    }
    const {getByRole} = setup(props)
    const card = getByRole('button')
    expect(card).to.have.not.class('sui-AtomCard-link')
  })

  it('should have rounded class when having borders rounded', () => {
    const props = {
      rounded: 's',
      content: () => <span>card</span>
    }
    const {getByRole} = setup(props)
    const card = getByRole('button')
    expect(card).to.have.class('sui-AtomCard--rounded-s')
    expect(card).to.have.not.class('sui-AtomCard--rounded-m')
    expect(card).to.have.not.class('sui-AtomCard--rounded-l')
  })

  it('should NOT have rounded class when not having border rounded ', () => {
    const props = {
      content: () => <span>card</span>
    }
    const {getByRole} = setup(props)
    const card = getByRole('button')
    expect(card).to.have.not.class('sui-AtomCard--rounded-s')
    expect(card).to.have.not.class('sui-AtomCard--rounded-m')
    expect(card).to.have.not.class('sui-AtomCard--rounded-l')
  })

  it('should have box-shadow class when having elevated border', () => {
    const props = {
      elevation: 's',
      content: () => <span>card</span>
    }
    const {getByRole} = setup(props)
    const card = getByRole('button')
    expect(card).to.have.class('sui-AtomCard--elevation-s')
    expect(card).to.have.not.class('sui-AtomCard--elevation-m')
    expect(card).to.have.not.class('sui-AtomCard--elevation-l')
  })

  it('should NOT have rounded class when not having elevated border ', () => {
    const props = {
      content: () => <span>card</span>
    }
    const {getByRole} = setup(props)
    const card = getByRole('button')
    expect(card).to.have.not.class('sui-AtomCard--elevation-s')
    expect(card).to.have.not.class('sui-AtomCard--elevation-m')
    expect(card).to.have.not.class('sui-AtomCard--elevation-l')
  })
})
