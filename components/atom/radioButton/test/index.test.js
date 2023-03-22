/*
 * Remember: YOUR COMPONENT IS DEFINED GLOBALLY
 * */

/* eslint react/jsx-no-undef:0 */
/* eslint no-undef:0 */

import {createRef} from 'react'
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
    const libraryExportedMembers = ['default']

    // When
    const {default: AtomRadioButton, ...others} = library

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

    describe('forwardRef', () => {
      it('should return forwardRef html input element when giving a ref to the component', () => {
        // Given
        const ref = createRef()

        // When
        const component = <Component ref={ref} />
        const div = document.createElement('div')
        ReactDOM.render(component, div)

        // Then
        expect(ref.current).to.not.equal(undefined)
        expect(ref.current.nodeName).to.equal('INPUT')
      })
    })
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
    const element = getByRole('radio')
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
    const element = getByRole('radio')
    userEvents.click(element)
    sinon.assert.called(spy)
    sinon.assert.callCount(spy, 1)
    sinon.assert.calledWith(
      spy,
      sinon.match.truthy,
      sinon.match({name: props.name, value: props.value, checked: true})
    )
  })

  it('should NOT fire onChange handler value when the element is clicked when checked is true', () => {
    // Given
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
    const element = getByRole('radio')
    userEvents.click(element)
    sinon.assert.notCalled(spy)
  })

  it('should fire onChange handler value when the element is clicked when checked is false', () => {
    // Given
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
    const element = getByRole('radio')
    userEvents.click(element)
    sinon.assert.called(spy)
    sinon.assert.callCount(spy, 1)
    sinon.assert.calledWith(
      spy,
      sinon.match.truthy,
      sinon.match({name: props.name, value: props.value, checked: true})
    )
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
    const element = getByRole('radio')
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
    const element = getByRole('radio')
    userEvents.click(element)
    sinon.assert.notCalled(spy)
  })
})
