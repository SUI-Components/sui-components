/*
 * Remember: YOUR COMPONENT IS DEFINED GLOBALLY
 * */

/* eslint react/jsx-no-undef:0 */
/* eslint no-undef:0 */

import ReactDOM from 'react-dom'

import chai, {expect} from 'chai'
import chaiDOM from 'chai-dom'
import Component from '../src/index'
import {
  actions as atomPinInputActions,
  actionTypes as atomPinInputActionTypes
} from 'components/atom/pinInput/src/reducer'
import {MASK} from '../src/config'

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

    describe('setValue', () => {
      it('Matches reducer action', () => {
        // Given
        const args = {
          innerValue: 'A'
        }

        // When
        const result = atomPinInputActions.setValue(args)

        // Then
        expect(Object.getOwnPropertyNames(result).length).to.equal(2)
        expect(Object.getOwnPropertyNames(result)).to.include.members([
          'actionType',
          'payload'
        ])
      })

      it('Matches actionType', () => {
        // Given
        const args = {}

        // When
        const result = atomPinInputActions.setValue(args)

        // Then
        expect(typeof result.actionType).to.not.equal('string')
        expect(typeof result.actionType).to.equal('symbol')
        expect(result.actionType).to.equal(
          atomPinInputActionTypes.SET_PIN_INPUT_VALUE
        )
      })

      it('Matches payload', () => {
        // Given
        const args = {
          innerValue: 'A'
        }

        // When
        const result = atomPinInputActions.setValue(args)

        // Then
        expect(result.payload.event).to.equal(args.event)
        expect(result.payload.onChange).to.equal(args.onChange)
      })
    })

    describe('setFocus', () => {
      it('Matches reducer action', () => {
        // Given
        const args = {
          focusPosition: 1
        }

        // When
        const result = atomPinInputActions.setFocus(args)

        // Then
        expect(Object.getOwnPropertyNames(result).length).to.equal(2)
        expect(Object.getOwnPropertyNames(result)).to.include.members([
          'actionType',
          'payload'
        ])
      })

      it('Matches actionType', () => {
        // Given
        const args = {}

        // When
        const result = atomPinInputActions.setFocus(args)

        // Then
        expect(typeof result.actionType).to.not.equal('string')
        expect(typeof result.actionType).to.equal('symbol')
        expect(result.actionType).to.equal(
          atomPinInputActionTypes.SET_PIN_INPUT_FOCUS
        )
      })

      it('Matches payload', () => {
        // Given
        const args = {
          focusPosition: 1
        }

        // When
        const result = atomPinInputActions.setValue(args)

        // Then
        expect(result.payload.event).to.equal(args.event)
        expect(result.payload.onChange).to.equal(args.onChange)
      })
    })

    describe('setElement', () => {
      it('Matches reducer action', () => {
        // Given
        const args = {
          node: {}
        }

        // When
        const result = atomPinInputActions.setElement(args)

        // Then
        expect(Object.getOwnPropertyNames(result).length).to.equal(2)
        expect(Object.getOwnPropertyNames(result)).to.include.members([
          'actionType',
          'payload'
        ])
      })

      it('Matches actionType', () => {
        // Given
        const args = {}

        // When
        const result = atomPinInputActions.setElement(args)

        // Then
        expect(typeof result.actionType).to.not.equal('string')
        expect(typeof result.actionType).to.equal('symbol')
        expect(result.actionType).to.equal(
          atomPinInputActionTypes.SET_PIN_INPUT_ELEMENT
        )
      })

      it('Matches payload', () => {
        // Given
        const args = {
          focusPosition: 1
        }

        // When
        const result = atomPinInputActions.setElement(args)

        // Then
        expect(result.payload.event).to.equal(args.event)
        expect(result.payload.onChange).to.equal(args.onChange)
      })
    })

    describe('removeElement', () => {
      it('Matches reducer action', () => {
        // Given
        const args = {
          node: {}
        }

        // When
        const result = atomPinInputActions.removeElement(args)

        // Then
        expect(Object.getOwnPropertyNames(result).length).to.equal(2)
        expect(Object.getOwnPropertyNames(result)).to.include.members([
          'actionType',
          'payload'
        ])
      })

      it('Matches actionType', () => {
        // Given
        const args = {}

        // When
        const result = atomPinInputActions.removeElement(args)

        // Then
        expect(typeof result.actionType).to.not.equal('string')
        expect(typeof result.actionType).to.equal('symbol')
        expect(result.actionType).to.equal(
          atomPinInputActionTypes.REMOVE_PIN_INPUT_ELEMENT
        )
      })

      it('Matches payload', () => {
        // Given
        const args = {
          focusPosition: 1
        }

        // When
        const result = atomPinInputActions.removeElement(args)

        // Then
        expect(result.payload.event).to.equal(args.event)
        expect(result.payload.onChange).to.equal(args.onChange)
      })
    })

    describe('setStatus', () => {
      it('Matches reducer action', () => {
        // Given
        const args = {}

        // When
        const result = atomPinInputActions.setStatus(args)

        // Then
        expect(Object.getOwnPropertyNames(result).length).to.equal(2)
        expect(Object.getOwnPropertyNames(result)).to.include.members([
          'actionType',
          'payload'
        ])
      })

      it('Matches actionType', () => {
        // Given
        const args = {}

        // When
        const result = atomPinInputActions.setStatus(args)

        // Then
        expect(typeof result.actionType).to.not.equal('string')
        expect(typeof result.actionType).to.equal('symbol')
        expect(result.actionType).to.equal(
          atomPinInputActionTypes.SET_PIN_INPUT_STATUS
        )
      })

      it('Matches payload', () => {
        // Given
        const args = {}

        // When
        const result = atomPinInputActions.setStatus(args)

        // Then
        expect(result.payload.event).to.equal(args.event)
        expect(result.payload.onChange).to.equal(args.onChange)
      })
    })

    describe('setMask', () => {
      it('Matches reducer action', () => {
        // Given
        const args = {
          mask: MASK.NUMBER
        }

        // When
        const result = atomPinInputActions.setMask(args)

        // Then
        expect(Object.getOwnPropertyNames(result).length).to.equal(2)
        expect(Object.getOwnPropertyNames(result)).to.include.members([
          'actionType',
          'payload'
        ])
      })

      it('Matches actionType', () => {
        // Given
        const args = {}

        // When
        const result = atomPinInputActions.setMask(args)

        // Then
        expect(typeof result.actionType).to.not.equal('string')
        expect(typeof result.actionType).to.equal('symbol')
        expect(result.actionType).to.equal(
          atomPinInputActionTypes.SET_PIN_INPUT_MASK
        )
      })

      it('Matches payload', () => {
        // Given
        const args = {
          mask: MASK.NUMBER
        }

        // When
        const result = atomPinInputActions.setMask(args)

        // Then
        expect(result.payload.event).to.equal(args.event)
        expect(result.payload.onChange).to.equal(args.onChange)
      })
    })

    describe('setDisabled', () => {
      it('Matches reducer action', () => {
        // Given
        const args = {
          disabled: false
        }

        // When
        const result = atomPinInputActions.setDisabled(args)

        // Then
        expect(Object.getOwnPropertyNames(result).length).to.equal(2)
        expect(Object.getOwnPropertyNames(result)).to.include.members([
          'actionType',
          'payload'
        ])
      })

      it('Matches actionType', () => {
        // Given
        const args = {}

        // When
        const result = atomPinInputActions.setDisabled(args)

        // Then
        expect(typeof result.actionType).to.not.equal('string')
        expect(typeof result.actionType).to.equal('symbol')
        expect(result.actionType).to.equal(
          atomPinInputActionTypes.SET_PIN_INPUT_DISABLED
        )
      })

      it('Matches payload', () => {
        // Given
        const args = {
          disabled: false
        }

        // When
        const result = atomPinInputActions.setDisabled(args)

        // Then
        expect(result.payload.event).to.equal(args.event)
        expect(result.payload.onChange).to.equal(args.onChange)
      })
    })
  })
})
