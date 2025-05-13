/*
 * Remember: YOUR COMPONENT IS DEFINED GLOBALLY
 * */

/* eslint react/jsx-no-undef:0 */
/* eslint no-undef:0 */

import ReactDOM from 'react-dom'

import chai, {expect} from 'chai'
import chaiDOM from 'chai-dom'

import json from '../package.json'
import * as pkg from '../src/index.js'

chai.use(chaiDOM)

const DATA_TEST_ID = 'atom-card'

const sharedProps = {
  'data-testId': DATA_TEST_ID
}

describe(json.name, () => {
  const {default: Component} = pkg
  const setup = setupEnvironment(Component)
  const noop = () => null

  it('library should include defined exported elements', () => {
    // Given
    const library = pkg
    const libraryExportedMembers = ['atomCardRounded', 'atomCardElevation', 'default']

    // When
    const {atomCardRounded, atomCardElevation, default: AtomCard, ...others} = library

    // Then
    expect(Object.keys(library).length).to.equal(libraryExportedMembers.length)
    expect(Object.keys(library)).to.have.members(libraryExportedMembers)
    expect(Object.keys(others).length).to.equal(0)
  })

  describe(Component.displayName, () => {
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

    it('should extend classNames', () => {
      // Given
      const props = {content: noop, className: 'extended-classNames'}
      const findSentence = str => string => string.match(new RegExp(`S*${str}S*`))

      // When
      const {container} = setup(props)
      const findClassName = findSentence(props.className)

      // Then
      expect(findClassName(container.innerHTML)).to.not.be.null
    })

    it('should have link class when having onClick', () => {
      const props = {
        onClick: () => console.log('Hello!'), // eslint-disable-line no-console
        content: () => <span>card with click</span>,
        ...sharedProps
      }
      const {getByTestId} = setup(props)
      const card = getByTestId(DATA_TEST_ID)
      expect(card).to.have.class('sui-AtomCard-link')
    })

    it('should have link class when having href', () => {
      const props = {
        href: 'http://www.google.com',
        content: () => <span>card with click</span>,
        ...sharedProps
      }
      const {getByTestId} = setup(props)
      const card = getByTestId(DATA_TEST_ID)
      expect(card).to.have.class('sui-AtomCard-link')
    })

    it('should NOT have link class when not having href or onClick', () => {
      const props = {
        content: () => <span>card with click</span>,
        ...sharedProps
      }
      const {getByTestId} = setup(props)
      const card = getByTestId(DATA_TEST_ID)
      expect(card).to.have.not.class('sui-AtomCard-link')
    })

    it('should not have role button when href is provided', () => {
      const props = {
        href: 'http://www.google.com',
        content: () => <span>card with click</span>,
        ...sharedProps
      }
      const {getByTestId, queryByRole} = setup(props)
      expect(queryByRole('button')).to.be.null
      const card = getByTestId('atom-card')
      expect(card).to.have.class('sui-AtomCard-link')
    })

    it('should have rounded class when having borders rounded', () => {
      const props = {
        rounded: 's',
        content: () => <span>card</span>,
        ...sharedProps
      }
      const {getByTestId} = setup(props)
      const card = getByTestId(DATA_TEST_ID)
      expect(card).to.have.class('sui-AtomCard--rounded-s')
      expect(card).to.have.not.class('sui-AtomCard--rounded-m')
      expect(card).to.have.not.class('sui-AtomCard--rounded-l')
    })

    it('should NOT have rounded class when not having border rounded ', () => {
      const props = {
        content: () => <span>card</span>,
        ...sharedProps
      }
      const {getByTestId} = setup(props)
      const card = getByTestId(DATA_TEST_ID)
      expect(card).to.have.not.class('sui-AtomCard--rounded-s')
      expect(card).to.have.not.class('sui-AtomCard--rounded-m')
      expect(card).to.have.not.class('sui-AtomCard--rounded-l')
    })

    it('should have box-shadow class when having elevated border', () => {
      const props = {
        elevation: 's',
        content: () => <span>card</span>,
        ...sharedProps
      }
      const {getByTestId} = setup(props)
      const card = getByTestId(DATA_TEST_ID)
      expect(card).to.have.class('sui-AtomCard--elevation-s')
      expect(card).to.have.not.class('sui-AtomCard--elevation-m')
      expect(card).to.have.not.class('sui-AtomCard--elevation-l')
    })

    it('should NOT have rounded class when not having elevated border ', () => {
      const props = {
        content: () => <span>card</span>,
        ...sharedProps
      }
      const {getByTestId} = setup(props)
      const card = getByTestId(DATA_TEST_ID)
      expect(card).to.have.not.class('sui-AtomCard--elevation-s')
      expect(card).to.have.not.class('sui-AtomCard--elevation-m')
      expect(card).to.have.not.class('sui-AtomCard--elevation-l')
    })
  })

  describe('atomCardRounded', () => {
    it('value must be an object enum', () => {
      // Given
      const library = pkg

      // When
      const {atomCardRounded: actual} = library

      // Then
      expect(actual).to.be.an('object')
    })

    it('value must be a defined string-key pair filled', () => {
      // Given
      const library = pkg
      const expected = {
        S: 's',
        M: 'm',
        L: 'l',
        XL: 'xl',
        XXL: 'xxl'
      }

      // When
      const {atomCardRounded: actual} = library
      const {S, M, L, XL, XXL, ...others} = actual

      // Then
      expect(Object.keys(others).length).to.equal(0)
      expect(Object.keys(actual)).to.have.members(Object.keys(expected))
      Object.entries(expected).forEach(([expectedKey, expectedValue]) => {
        expect(Object.keys(actual).includes(expectedKey)).to.be.true
        expect(actual[expectedKey]).to.equal(expectedValue)
      })
    })
  })

  describe('atomCardElevation', () => {
    it('value must be an object enum', () => {
      // Given
      const library = pkg

      // When
      const {atomCardElevation: actual} = library

      // Then
      expect(actual).to.be.an('object')
    })

    it('value must be a defined string-key pair filled', () => {
      // Given
      const library = pkg
      const expected = {
        S: 's',
        M: 'm',
        L: 'l'
      }

      // When
      const {atomCardElevation: actual} = library
      const {S, M, L, ...others} = actual

      // Then
      expect(Object.keys(others).length).to.equal(0)
      expect(Object.keys(actual)).to.have.members(Object.keys(expected))
      Object.entries(expected).forEach(([expectedKey, expectedValue]) => {
        expect(Object.keys(actual).includes(expectedKey)).to.be.true
        expect(actual[expectedKey]).to.equal(expectedValue)
      })
    })
  })
})
