/*
 * Remember: YOUR COMPONENT IS DEFINED GLOBALLY
 * */

/* eslint react/jsx-no-undef:0 */
/* eslint no-undef:0 */

import ReactDOM from 'react-dom'

import chai, {expect} from 'chai'
import chaiDOM from 'chai-dom'
import sinon from 'sinon'

import userEvents from '@testing-library/user-event'

import json from '../package.json'
import * as pkg from '../src/index.js'

chai.use(chaiDOM)

describe(json.name, () => {
  const {default: Component} = pkg
  const setup = setupEnvironment(Component)

  it('library should include defined exported elements', () => {
    // Given
    const library = pkg
    const libraryExportedMembers = ['atomSwitchSizes', 'atomSwitchTypes', 'default']

    // When
    const {atomSwitchSizes, atomSwitchTypes, default: AtomSwitch, ...others} = library

    // Then
    expect(Object.keys(library).length).to.equal(libraryExportedMembers.length)
    expect(Object.keys(library)).to.have.members(libraryExportedMembers)
    expect(Object.keys(others).length).to.equal(0)
  })

  describe(Component.displayName, () => {
    it('should render without crashing', () => {
      // Given
      const props = {
        name: 'name',
        label: 'label'
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
        name: 'name',
        label: 'label'
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
        name: 'name',
        label: 'label'
      }
      const findSentence = str => string => string.match(new RegExp(`S*${str}S*`))

      // When
      const {container} = setup(props)
      const findClassName = findSentence(props.className)

      // Then
      expect(findClassName(container.innerHTML)).to.be.null
    })

    it('should render single type with left label', () => {
      // Given
      const props = {label: 'label', name: 'name', type: 'single'}

      // When
      const {getByText} = setup(props)

      // Then
      const label = getByText(props.label)
      const childNodes = label.parentElement.childNodes

      expect(childNodes[0]).to.be.eql(label)
    })

    it('should render single type with right label', () => {
      // Given
      const props = {labelRight: 'labelRight', name: 'name', type: 'single'}

      // When
      const {getByText} = setup(props)

      // Then
      const label = getByText(props.labelRight)
      const childNodes = label.parentElement.childNodes

      expect(childNodes[1]).to.be.eql(label)
    })

    describe('action handlers', () => {
      it('given undefined value should switch the status to true after click', () => {
        // Given
        const spy = sinon.spy()
        const {atomSwitchTypes} = pkg
        const props = {
          onToggle: spy,
          type: atomSwitchTypes.SINGLE
        }

        // When
        const {getByRole} = setup(props)

        // Then
        const element = getByRole('switch')
        userEvents.click(element)
        sinon.assert.callCount(spy, 1)
        sinon.assert.calledWith(spy, sinon.match(!props.value))
      })

      it('given true value should switch the status to false after click', () => {
        // Given
        const spy = sinon.spy()
        const {atomSwitchTypes} = pkg
        const props = {
          onToggle: spy,
          type: atomSwitchTypes.SINGLE,
          value: true
        }

        // When
        const {getByRole} = setup(props)

        // Then
        const element = getByRole('switch')
        userEvents.click(element)
        sinon.assert.callCount(spy, 1)
        sinon.assert.calledWith(spy, sinon.match(!props.value))
      })

      it('given false value should switch the status to false after click', () => {
        // Given
        const spy = sinon.spy()
        const {atomSwitchTypes} = pkg
        const props = {
          onToggle: spy,
          type: atomSwitchTypes.SINGLE,
          value: false
        }

        // When
        const {getByRole} = setup(props)

        // Then
        const element = getByRole('switch')
        userEvents.click(element)
        sinon.assert.callCount(spy, 1)
        sinon.assert.calledWith(spy, sinon.match(!props.value))
      })

      it('given undefined value and disabled element should NOT call the callback', () => {
        // Given
        const spy = sinon.spy()
        const {atomSwitchTypes} = pkg
        const props = {
          disabled: true,
          onToggle: spy,
          type: atomSwitchTypes.SINGLE
        }

        // When
        const {getByRole} = setup(props)

        // Then
        const element = getByRole('switch')
        userEvents.click(element)
        sinon.assert.callCount(spy, 0)
      })

      it('given a label and name should switch the status to true after label click', () => {
        // Given
        const spy = sinon.spy()
        const {atomSwitchTypes} = pkg
        const props = {
          onToggle: spy,
          type: atomSwitchTypes.SINGLE,
          label: 'label-test',
          name: 'name-test'
        }

        // When
        const {getByLabelText} = setup(props)

        // Then
        const element = getByLabelText(props.label)
        userEvents.click(element)
        sinon.assert.callCount(spy, 1)
        sinon.assert.calledWith(spy, sinon.match(!props.value))
      })
    })
  })

  describe('atomSwitchSizes', () => {
    it('value must be an object enum', () => {
      // Given
      const library = pkg

      // When
      const {atomSwitchSizes: actual} = library

      // Then
      expect(actual).to.be.an('object')
    })

    it('value must be a defined string-key pair filled', () => {
      // Given
      const library = pkg
      const expected = {
        DEFAULT: 'default',
        SMALL: 'small',
        MEDIUM: 'medium',
        LARGE: 'large'
      }

      // When
      const {atomSwitchSizes: actual} = library
      const {DEFAULT, SMALL, MEDIUM, LARGE, ...others} = actual

      // Then
      expect(Object.keys(others).length).to.equal(0)
      expect(Object.keys(actual)).to.have.members(Object.keys(expected))
      Object.entries(expected).forEach(([expectedKey, expectedValue]) => {
        expect(Object.keys(actual).includes(expectedKey)).to.be.true
        expect(actual[expectedKey]).to.equal(expectedValue)
      })
    })
  })

  describe('atomSwitchTypes', () => {
    it('value must be an object enum', () => {
      // Given
      const library = pkg

      // When
      const {atomSwitchTypes: actual} = library

      // Then
      expect(actual).to.be.an('object')
    })

    it('value must be a defined string-key pair filled', () => {
      // Given
      const library = pkg
      const expected = {
        TOGGLE: 'toggle',
        SELECT: 'select',
        SINGLE: 'single'
      }

      // When
      const {atomSwitchTypes: actual} = library
      const {TOGGLE, SELECT, SINGLE, ...others} = actual

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
