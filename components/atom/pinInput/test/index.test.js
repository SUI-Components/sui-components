/*
 * Remember: YOUR COMPONENT IS DEFINED GLOBALLY
 * */

/* eslint react/jsx-no-undef:0 */
/* eslint no-undef:0 */

import ReactDOM from 'react-dom'

import chai, {expect} from 'chai'
import chaiDOM from 'chai-dom'
import Component from '../src/index'
import AtomPinInput from 'components/atom/pinInput'
import {
  reducer as atomPinInputReducer,
  actions as atomPinInputActions,
  actionTypes as atomPinInputActionTypes
} from 'components/atom/pinInput/src/reducer'

chai.use(chaiDOM)

describe('AtomPinInput', () => {
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

  describe('atomPinInputReducer', () => {})
  describe('atomPinInputActions', () => {
    describe('setKey', () => {

      it('Matches reducer action', () => {
        // Given
        const args = {
          event: new Event('input', {bubbles: true}),
          onChange: () => {}
        }

        // When
        const result = atomPinInputActions.setKey(args)

        // Then
        expect(Object.getOwnPropertyNames(result).length).to.equal(
          Object.values(args).length
        )
        expect(Object.getOwnPropertyNames(result)).to.include.members([
          'actionType',
          'payload'
        ])
      })

      it('Matches actionType', () => {
        // Given
        const args = {}

        // When
        const result = atomPinInputActions.setKey(args)

        // Then
        expect(typeof result.actionType).to.not.equal('string')
        expect(typeof result.actionType).to.equal('symbol')
        expect(result.actionType).to.equal(
          atomPinInputActionTypes.SET_PIN_INPUT_KEY
        )
      })

      it('Matches payload', () => {
        // Given
        const args = {
          event: new Event('input', {bubbles: true}),
          onChange: () => {}
        }

        // When
        const result = atomPinInputActions.setKey(args)

        // Then
        expect(result.payload.event).to.equal(args.event)
        expect(result.payload.onChange).to.equal(args.onChange)
      })

    })
    describe('setValue', () => {})
    describe('setFocus', () => {})
    describe('setElement', () => {})
    describe('removeElement', () => {})
    describe('setStatus', () => {})
    describe('setMask', () => {})
    describe('setDisabled', () => {})
  })
})
