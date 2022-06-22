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

import * as pkg from '../src/index.js'

import json from '../package.json'

chai.use(chaiDOM)

describe(json.name, () => {
  const {default: Component} = pkg
  const setup = setupEnvironment(Component)

  it('library should include defined exported elements', () => {
    // Given
    const library = pkg
    const libraryExportedMembers = [
      'atomCheckboxStatus',
      'atomCheckboxSizes',
      'default'
    ]

    // When
    const {
      atomCheckboxStatus,
      atomCheckboxSizes,
      default: AtomCheckbox,
      ...others
    } = library

    // Then
    expect(Object.keys(library).length).to.equal(libraryExportedMembers.length)
    expect(Object.keys(library)).to.have.members(libraryExportedMembers)
    expect(Object.keys(others).length).to.equal(0)
  })

  describe(Component.displayName, () => {
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

    it.skip('should NOT extend classNames', () => {
      // Given
      const props = {className: 'extended-classNames'}
      const findSentence = str => string =>
        string.match(new RegExp(`S*${str}S*`))

      // When
      const {container} = setup(props)
      const findClassName = findSentence(props.className)

      // Then
      expect(findClassName(container.innerHTML)).to.be.null
    })

    it('should NOT fire onChange handler when the disabled element is clicked', () => {
      // Given
      const spy = sinon.spy()
      const props = {
        onChange: spy,
        disabled: true
      }

      // When
      const {getByRole} = setup(props)

      // Then
      const element = getByRole('checkbox')
      userEvents.click(element)
      sinon.assert.notCalled(spy)
    })

    it('should fire onChange handler value when the element is clicked when checked is undefined', () => {
      // Given
      const spy = sinon.spy()
      const props = {
        onChange: spy,
        name: 'name',
        value: 'value'
      }

      // When
      const {getByRole} = setup(props)

      // Then
      const element = getByRole('checkbox')
      userEvents.click(element)
      sinon.assert.called(spy)
      sinon.assert.callCount(spy, 1)
      sinon.assert.calledWith(
        spy,
        sinon.match.truthy,
        sinon.match({
          name: props.name,
          value: props.value,
          checked: true,
          indeterminate: false
        })
      )
    })

    it('should fire onChange handler value when the element is clicked when checked is true', () => {
      // Given
      const {version} = json
      const spy = sinon.spy()
      const props = {
        onChange: spy,
        name: 'name',
        value: 'value',
        checked: true
      }

      // When
      const {getByRole} = setup(props)

      // Then
      const element = getByRole('checkbox')
      userEvents.click(element)
      sinon.assert.callCount(spy, 1)
      if (parseInt(version[0]) === 2) {
        // The returned value must change to the given element value and the callback should return the checked value under that attribute
        sinon.assert.calledWith(
          spy,
          sinon.match.truthy,
          sinon.match({name: props.name, value: !props.checked})
        )
      } else {
        sinon.assert.calledWith(
          spy,
          sinon.match.truthy,
          sinon.match({
            name: props.name,
            value: props.value,
            checked: props.checked
          })
        )
      }
    })

    it('should fire onChange handler value when the element is clicked when defaultChecked is true', () => {
      // Given
      const {version} = json
      const spy = sinon.spy()
      const props = {
        onChange: spy,
        name: 'name',
        value: 'value',
        defaultChecked: true
      }

      // When
      const {getByRole} = setup(props)

      // Then
      const element = getByRole('checkbox')
      userEvents.click(element)
      sinon.assert.callCount(spy, 1)
      if (parseInt(version[0]) === 2) {
        // The returned value must change to the given element value and the callback should return the checked value under that attribute
        sinon.assert.calledWith(
          spy,
          sinon.match.truthy,
          sinon.match({name: props.name, value: !props.checked})
        )
      } else {
        sinon.assert.calledWith(
          spy,
          sinon.match.truthy,
          sinon.match({
            name: props.name,
            value: props.value,
            checked: !props.defaultChecked
          })
        )
      }
    })

    it('should fire onChange handler value when the element is clicked when status is intermediate = true', () => {
      // Given
      const {version} = json
      const spy = sinon.spy()
      const props = {
        onChange: spy,
        name: 'name',
        value: 'value',
        indeterminate: true
      }

      // When
      const {getByRole} = setup(props)

      // Then
      const element = getByRole('checkbox')
      userEvents.click(element)
      sinon.assert.callCount(spy, 1)
      if (parseInt(version[0]) === 2) {
        // The returned value must change to the given element value and the callback should return the checked value under that attribute
        sinon.assert.calledWith(
          spy,
          sinon.match.truthy,
          sinon.match({name: props.name, value: !props.checked})
        )
      } else {
        sinon.assert.calledWith(
          spy,
          sinon.match.truthy,
          sinon.match({
            name: props.name,
            value: props.value,
            checked: !props.checked
          })
        )
      }
    })

    it('should fire onChange handler value when the element is clicked when status is defaultIntermediate = true', () => {
      // Given
      const {version} = json
      const spy = sinon.spy()
      const props = {
        onChange: spy,
        name: 'name',
        value: 'value',
        defaultIntermediate: true
      }

      // When
      const {getByRole} = setup(props)

      // Then
      const element = getByRole('checkbox')
      userEvents.click(element)
      sinon.assert.callCount(spy, 1)
      if (parseInt(version[0]) === 2) {
        // The returned value must change to the given element value and the callback should return the checked value under that attribute
        sinon.assert.calledWith(
          spy,
          sinon.match.truthy,
          sinon.match({name: props.name, value: !props.checked})
        )
      } else {
        sinon.assert.calledWith(
          spy,
          sinon.match.truthy,
          sinon.match({
            name: props.name,
            value: props.value,
            checked: !props.checked
          })
        )
      }
    })

    it('should fire onChange handler value when the element is clicked when checked is false', () => {
      // Given
      const {version} = json
      const spy = sinon.spy()
      const props = {
        onChange: spy,
        name: 'name',
        value: 'value',
        checked: false
      }

      // When
      const {getByRole} = setup(props)

      // Then
      const element = getByRole('checkbox')
      userEvents.click(element)
      sinon.assert.called(spy)
      sinon.assert.callCount(spy, 1)
      if (parseInt(version[0]) === 2) {
        // The returned value must change to the given element value and the callback should return the checked value under that attribute
        sinon.assert.calledWith(
          spy,
          sinon.match.truthy,
          sinon.match({name: props.name, value: !props.checked})
        )
      } else {
        sinon.assert.calledWith(
          spy,
          sinon.match.truthy,
          sinon.match({
            name: props.name,
            value: props.value,
            checked: props.checked
          })
        )
      }
    })

    it('should fire onChange handler value when the element is clicked when defaultChecked is false', () => {
      // Given
      const {version} = json
      const spy = sinon.spy()
      const props = {
        onChange: spy,
        name: 'name',
        value: 'value',
        defaultChecked: false
      }

      // When
      const {getByRole} = setup(props)

      // Then
      const element = getByRole('checkbox')
      userEvents.click(element)
      sinon.assert.called(spy)
      sinon.assert.callCount(spy, 1)
      if (parseInt(version[0]) === 2) {
        // The returned value must change to the given element value and the callback should return the checked value under that attribute
        sinon.assert.calledWith(
          spy,
          sinon.match.truthy,
          sinon.match({name: props.name, value: !props.checked})
        )
      } else {
        sinon.assert.calledWith(
          spy,
          sinon.match.truthy,
          sinon.match({
            name: props.name,
            value: props.value,
            checked: !props.defaultChecked
          })
        )
      }
    })

    it('should NOT fire onChange handler value when the disabled element is clicked when checked is undefined', () => {
      // Given
      const spy = sinon.spy()
      const props = {
        onChange: spy,
        name: 'name',
        value: 'value',
        checked: undefined,
        disabled: true
      }

      // When
      const {getByRole} = setup(props)

      // Then
      const element = getByRole('checkbox')
      userEvents.click(element)
      sinon.assert.notCalled(spy)
    })

    it('should NOT fire onChange handler value when the disabled element is clicked when checked is false', () => {
      // Given
      const spy = sinon.spy()
      const props = {
        onChange: spy,
        name: 'name',
        value: 'value',
        checked: false,
        disabled: true
      }

      // When
      const {getByRole} = setup(props)

      // Then
      const element = getByRole('checkbox')
      userEvents.click(element)
      sinon.assert.notCalled(spy)
    })
  })

  describe('atomCheckboxStatus', () => {
    it('value must be an object enum', () => {
      // Given
      const library = pkg

      // When
      const {atomCheckboxStatus: actual} = library

      // Then
      expect(actual).to.be.an('object')
    })

    it('value must be a defined string-key pair filled', () => {
      // Given
      const library = pkg
      const expected = {
        ERROR: 'error',
        SUCCESS: 'success',
        ALERT: 'alert'
      }

      // When
      const {atomCheckboxStatus: actual} = library
      const {ERROR, SUCCESS, ALERT, ...others} = actual

      // Then
      expect(Object.keys(others).length).to.equal(0)
      expect(Object.keys(actual)).to.have.members(Object.keys(expected))
      Object.entries(expected).forEach(([expectedKey, expectedValue]) => {
        expect(Object.keys(actual).includes(expectedKey)).to.be.true
        expect(actual[expectedKey]).to.equal(expectedValue)
      })
    })
  })

  describe('atomCheckboxSizes', () => {
    it('value must be an object enum', () => {
      // Given
      const library = pkg

      // When
      const {atomCheckboxSizes: actual} = library

      // Then
      expect(actual).to.be.an('object')
    })

    it('value must be a defined string-key pair filled', () => {
      // Given
      const library = pkg
      const expected = {SMALL: 'small', MEDIUM: 'medium'}

      // When
      const {atomCheckboxSizes: actual} = library
      const {SMALL, MEDIUM, ...others} = actual

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
