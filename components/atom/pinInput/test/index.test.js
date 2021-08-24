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
import {getInitialPinInputReducerState} from 'components/atom/pinInput/src/reducer/reducer'
import {MASK} from '../src/config'
import {valueChecker} from '../src/config'

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

  describe('pinInputMask', () => {
    describe('NUMBER', () => {
      it('should return FALSE when value is undefined', () => {
        // Given
        const value = undefined
        const expected = false

        // When
        const checker = valueChecker({
          mask: MASK.NUMBER,
        })

        // Then
        expect(checker).to.be.a('function')

        // And

        // When
        const result = checker(value)

        // Then
        expect(result).to.equal(expected)
      })
      it('should return FALSE when giving numeric value and NOT matching length (shorter)', () => {
        // Given
        const value = '12345'
        const expected = false

        // When
        const checker = valueChecker({
          mask: MASK.NUMBER,
          length: value.length - 1
        })

        // Then
        expect(checker).to.be.a('function')

        // And

        // When
        const result = checker(value)

        // Then
        expect(result).to.equal(expected)
      })
      it('should return FALSE when giving numeric value and NOT matching length (larger)', () => {
        // Given
        const value = '12345'
        const expected = false

        // When
        const checker = valueChecker({
          mask: MASK.NUMBER,
          length: value.length + 1
        })

        // Then
        expect(checker).to.be.a('function')

        // And

        // When
        const result = checker(value)

        // Then
        expect(result).to.equal(expected)
      })
      it('should return FALSE when giving NOT numeric value and matching length (larger)', () => {
        // Given
        const value = 'ASDF'
        const expected = false

        // When
        const checker = valueChecker({
          mask: MASK.NUMBER,
          length: value.length
        })

        // Then
        expect(checker).to.be.a('function')

        // And

        // When
        const result = checker(value)

        // Then
        expect(result).to.equal(expected)
      })
      it('should return TRUE when giving numeric value and matching length', () => {
        // Given
        const value = '12345'
        const expected = true

        // When
        const checker = valueChecker({mask: MASK.NUMBER, length: value.length})

        // Then
        expect(checker).to.be.a('function')

        // And

        // When
        const result = checker(value)

        // Then
        expect(result).to.equal(expected)
      })
    })
    describe('ALPHABETIC', () => {
      it('', () => {
        // Given
        // When
        // Then
      })
    })
    describe('ALPHANUMERIC', () => {
      it('', () => {
        // Given
        // When
        // Then
      })
    })
  })

  describe('getInitialPinInputReducerState', () => {
    it('default value', () => {
      // Given
      const args = {}

      // When
      const {
        focusPosition,
        mask,
        innerValue,
        checker,
        disabled,
        elements,
        ...others
      } = getInitialPinInputReducerState()

      // Then
      expect(Object.getOwnPropertyNames(others).length).to.equal(0)

      expect(focusPosition).to.equal(0)
      expect(mask).to.equal(MASK.NUMBER)
      expect(innerValue).to.be.an('array')
      expect(innerValue.length).to.equal(0)
      expect(checker).to.be.a('function')
      expect(checker('1')).to.equal(true)
      expect(checker('A')).to.equal(false)
    })
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
        expect(Object.getOwnPropertyNames(result.payload).length).to.equal(2)
        expect(Object.getOwnPropertyNames(result.payload)).to.include.members([
          'event',
          'onChange'
        ])
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
        expect(result.payload.innerValue).to.equal(args.innerValue)
        expect(Object.getOwnPropertyNames(result.payload).length).to.equal(1)
        expect(Object.getOwnPropertyNames(result.payload)).to.include.members([
          'innerValue'
        ])
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
        const result = atomPinInputActions.setFocus(args)

        // Then
        expect(result.payload.focusPosition).to.equal(args.focusPosition)
        expect(Object.getOwnPropertyNames(result.payload).length).to.equal(1)
        expect(Object.getOwnPropertyNames(result.payload)).to.include.members([
          'focusPosition'
        ])
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
        const input = document.createElement('input')
        input.type = 'text'
        input.className = 'css-class-name'
        const args = {
          node: input
        }

        // When
        const result = atomPinInputActions.setElement(args)

        // Then
        expect(result.payload.node).to.equal(args.node)
        expect(result.payload.node.className).to.equal(input.className)
        expect(Object.getOwnPropertyNames(result.payload).length).to.equal(1)
        expect(Object.getOwnPropertyNames(result.payload)).to.include.members([
          'node'
        ])
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
        const input = document.createElement('input')
        input.type = 'text'
        input.className = 'css-class-name'
        const args = {
          node: input
        }

        // When
        const result = atomPinInputActions.removeElement(args)

        // Then
        expect(result.payload.node).to.equal(args.node)
        expect(result.payload.node.className).to.equal(input.className)
        expect(Object.getOwnPropertyNames(result.payload).length).to.equal(1)
        expect(Object.getOwnPropertyNames(result.payload)).to.include.members([
          'node'
        ])
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
        expect(result.payload.mask).to.equal(args.mask)
        expect(Object.getOwnPropertyNames(result.payload).length).to.equal(1)
        expect(Object.getOwnPropertyNames(result.payload)).to.include.members([
          'mask'
        ])
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
        expect(result.payload.disabled).to.equal(args.disabled)
        expect(Object.getOwnPropertyNames(result.payload).length).to.equal(1)
        expect(Object.getOwnPropertyNames(result.payload)).to.include.members([
          'disabled'
        ])
      })
    })
  })
})
