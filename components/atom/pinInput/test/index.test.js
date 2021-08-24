/*
 * Remember: YOUR COMPONENT IS DEFINED GLOBALLY
 * */

/* eslint react/jsx-no-undef:0 */
/* eslint no-undef:0 */

import ReactDOM from 'react-dom'

import chai, {expect} from 'chai'
import chaiDOM from 'chai-dom'
import {act, cleanup, renderHook} from '@testing-library/react-hooks'
import Component from '../src/index'
import {
  actions as atomPinInputActions,
  actionTypes as atomPinInputActionTypes,
  usePinInputReducer
} from 'components/atom/pinInput/src/reducer'
import {getInitialPinInputReducerState} from 'components/atom/pinInput/src/reducer/reducer'
import {MASK, valueChecker} from '../src/config'

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
        const mask = MASK.NUMBER
        const expected = false

        // When
        const checker = valueChecker({
          mask
        })

        // Then
        expect(checker).to.be.a('function')

        // And

        // When
        const result = checker(value)

        // Then
        expect(result).to.equal(expected)
      })
      it('should return FALSE when given numeric value and NOT matching length (shorter)', () => {
        // Given
        const value = '12345'
        const length = value.length - 1
        const mask = MASK.NUMBER
        const expected = false

        // When
        const checker = valueChecker({
          mask,
          length
        })

        // Then
        expect(checker).to.be.a('function')

        // And

        // When
        const result = checker(value)

        // Then
        expect(result).to.equal(expected)
      })
      it('should return FALSE when given numeric value and NOT matching length (larger)', () => {
        // Given
        const value = '12345'
        const mask = MASK.NUMBER
        const length = value.length + 1
        const expected = false

        // When
        const checker = valueChecker({
          mask,
          length
        })

        // Then
        expect(checker).to.be.a('function')

        // And

        // When
        const result = checker(value)

        // Then
        expect(result).to.equal(expected)
      })
      it('should return FALSE when given NOT numeric value and matching length (larger)', () => {
        // Given
        const value = 'ASDF'
        const mask = MASK.NUMBER
        const length = value.length
        const expected = false

        // When
        const checker = valueChecker({
          mask,
          length
        })

        // Then
        expect(checker).to.be.a('function')

        // And

        // When
        const result = checker(value)

        // Then
        expect(result).to.equal(expected)
      })
      it('should return TRUE when given numeric value and matching length', () => {
        // Given
        const value = '12345'
        const mask = MASK.NUMBER
        const length = value.length
        const expected = true

        // When
        const checker = valueChecker({mask, length})

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
      it('should return FALSE when value is undefined', () => {
        // Given
        const value = undefined
        const mask = MASK.ALPHABETIC
        const expected = false

        // When
        const checker = valueChecker({
          mask
        })

        // Then
        expect(checker).to.be.a('function')

        // And

        // When
        const result = checker(value)

        // Then
        expect(result).to.equal(expected)
      })
      it('should return FALSE when given alphabetic value and NOT matching length (shorter)', () => {
        // Given
        const value = 'AAAA'
        const length = value.length - 1
        const mask = MASK.ALPHABETIC
        const expected = false

        // When
        const checker = valueChecker({
          mask,
          length
        })

        // Then
        expect(checker).to.be.a('function')

        // And

        // When
        const result = checker(value)

        // Then
        expect(result).to.equal(expected)
      })
      it('should return FALSE when given alphabetic value and NOT matching length (larger)', () => {
        // Given
        const value = 'AAAA'
        const mask = MASK.ALPHABETIC
        const length = value.length + 1
        const expected = false

        // When
        const checker = valueChecker({
          mask,
          length
        })

        // Then
        expect(checker).to.be.a('function')

        // And

        // When
        const result = checker(value)

        // Then
        expect(result).to.equal(expected)
      })
      it('should return FALSE when given NOT alphabetic value and matching length (larger)', () => {
        // Given
        const value = '123'
        const mask = MASK.ALPHABETIC
        const length = value.length
        const expected = false

        // When
        const checker = valueChecker({
          mask,
          length
        })

        // Then
        expect(checker).to.be.a('function')

        // And

        // When
        const result = checker(value)

        // Then
        expect(result).to.equal(expected)
      })
      it('should return TRUE when given alphabetic value and matching length', () => {
        // Given
        const value = 'AAAA'
        const mask = MASK.ALPHABETIC
        const length = value.length
        const expected = true

        // When
        const checker = valueChecker({mask, length})

        // Then
        expect(checker).to.be.a('function')

        // And

        // When
        const result = checker(value)

        // Then
        expect(result).to.equal(expected)
      })
    })

    describe('ALPHANUMERIC', () => {
      it('should return FALSE when value is undefined', () => {
        // Given
        const value = undefined
        const mask = MASK.ALPHANUMERIC
        const expected = false

        // When
        const checker = valueChecker({
          mask
        })

        // Then
        expect(checker).to.be.a('function')

        // And

        // When
        const result = checker(value)

        // Then
        expect(result).to.equal(expected)
      })
      it('should return FALSE when given alphanumeric value and NOT matching length (shorter)', () => {
        // Given
        const value = 'A12A45'
        const length = value.length - 1
        const mask = MASK.ALPHANUMERIC
        const expected = false

        // When
        const checker = valueChecker({
          mask,
          length
        })

        // Then
        expect(checker).to.be.a('function')

        // And

        // When
        const result = checker(value)

        // Then
        expect(result).to.equal(expected)
      })
      it('should return FALSE when given alphanumeric value and NOT matching length (larger)', () => {
        // Given
        const value = 'A12VB345'
        const mask = MASK.ALPHANUMERIC
        const length = value.length + 1
        const expected = false

        // When
        const checker = valueChecker({
          mask,
          length
        })

        // Then
        expect(checker).to.be.a('function')

        // And

        // When
        const result = checker(value)

        // Then
        expect(result).to.equal(expected)
      })
      it('should return FALSE when given NOT alphanumeric value and matching length (larger)', () => {
        // Given
        const value = '#AS*DF'
        const mask = MASK.ALPHANUMERIC
        const length = value.length
        const expected = false

        // When
        const checker = valueChecker({
          mask,
          length
        })

        // Then
        expect(checker).to.be.a('function')

        // And

        // When
        const result = checker(value)

        // Then
        expect(result).to.equal(expected)
      })
      it('should return TRUE when given alphanumeric value and matching length', () => {
        // Given
        const value = '1A23D45'
        const mask = MASK.ALPHANUMERIC
        const length = value.length
        const expected = true

        // When
        const checker = valueChecker({mask, length})

        // Then
        expect(checker).to.be.a('function')

        // And

        // When
        const result = checker(value)

        // Then
        expect(result).to.equal(expected)
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
      expect(checker('11')).to.equal(false)
      expect(checker('A')).to.equal(false)
      expect(checker('')).to.equal(false)
      expect(disabled).to.equal(false)
      expect(elements).to.be.an('array')
      expect(elements.length).to.equal(0)
    })

    it('given disabled TRUE assigns it to the state', () => {
      // Given
      const args = {
        disabled: true
      }

      // When
      const {disabled} = getInitialPinInputReducerState(args)

      // Then
      expect(disabled).to.be.a('boolean')
      expect(disabled).to.equal(args.disabled)
    })

    it('given an ALPHABETIC mask it assigns it to the state', () => {
      // Given
      const args = {
        mask: MASK.ALPHABETIC,
        value: 'ABCD'
      }

      // When
      const {mask, innerValue, checker} = getInitialPinInputReducerState(args)

      // Then
      expect(mask).to.be.a('string')
      expect(mask).to.equal(args.mask)
      expect(innerValue.filter(Boolean).join('')).to.equal(args.value)
      expect(checker(args.value)).to.equal(false)
      expect(checker('A')).to.equal(true)
      expect(checker('1111')).to.equal(false)
    })

    it('given valid defaultValue assigns it to innerValue', () => {
      // Given
      const args = {
        defaultValue: '435678'
      }

      // When
      const {innerValue} = getInitialPinInputReducerState(args)

      // Then
      expect(innerValue).to.be.an('array')
      expect(innerValue.filter(Boolean).join('')).to.equal(args.defaultValue)
    })

    it('given valid value assigns it to innerValue', () => {
      // Given
      const args = {
        value: '435678'
      }

      // When
      const {innerValue} = getInitialPinInputReducerState(args)

      // Then
      expect(innerValue).to.be.an('array')
      expect(innerValue.filter(Boolean).join('')).to.equal(args.value)
    })

    it('given valid value and default value sets value to innerValue', () => {
      // Given
      const args = {
        value: '435678',
        defaultValue: '356765'
      }

      // When
      const {innerValue} = getInitialPinInputReducerState(args)

      // Then
      expect(innerValue).to.be.an('array')
      expect(innerValue.filter(Boolean).join('')).to.equal(args.value)
    })

    it('given invalid value assigns an empty innerValue', () => {
      // Given
      const args = {
        value: 'AAA33'
      }

      // When
      const {innerValue} = getInitialPinInputReducerState(args)

      // Then
      expect(innerValue).to.be.an('array')
      expect(innerValue.filter(Boolean).join('')).to.equals('')
    })
  })

  describe('atomPinInputReducer', () => {
    const setupHook = props => renderHook(() => usePinInputReducer(props))
    /** mask defaultValue value **/

    const createElement = () => {

    }

    afterEach(cleanup)

    it('NOT giving arguments gets initial store', () => {
      // Given
      const args = undefined

      // When
      const hook = setupHook(args)
      let [store, dispatch] = hook.result.current
      const {
        focusPosition,
        mask,
        innerValue,
        checker,
        disabled,
        elements,
        ...others
      } = store

      // Then
      expect(Object.getOwnPropertyNames(others).length).to.equal(0)

      // And
      // When
      dispatch(atomPinInputActions.setElement({}))
    })
  })

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
