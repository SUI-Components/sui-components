/*
 * Remember: YOUR COMPONENT IS DEFINED GLOBALLY
 * */

/* eslint react/jsx-no-undef:0 */
/* eslint no-undef:0 */

import ReactDOM from 'react-dom'

import chai, {expect} from 'chai'
import chaiDOM from 'chai-dom'
import {
  actions as atomPinInputActions,
  actionTypes as atomPinInputActionTypes,
  usePinInputReducer
} from 'components/atom/pinInput/src/reducer/index.js'
import {getInitialPinInputReducerState} from 'components/atom/pinInput/src/reducer/reducer.js'

import {cleanup, renderHook} from '@testing-library/react-hooks'

import json from '../package.json'
import {MASK, valueChecker} from '../src/config.js'
import * as pkg from '../src/index.js'

chai.use(chaiDOM)

describe(json.name, () => {
  const {default: Component} = pkg
  const setup = setupEnvironment(Component)

  it('library should include defined exported elements', () => {
    // Given
    const library = pkg
    const libraryExportedMembers = [
      'PinInputField',
      'pinInputMask',
      'pinInputSizes',
      'pinInputStatus',
      'getPinInputValueType',
      'default'
    ]

    // When
    const {
      PinInputField,
      pinInputMask,
      pinInputSizes,
      pinInputStatus,
      getPinInputValueType,
      default: AtomPinInput,
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

    it('should NOT extend classNames', () => {
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
        // When
        const {
          checker,
          disabled,
          elements,
          focusPosition,
          innerValue,
          mask,
          ...others
        } = getInitialPinInputReducerState()

        // Then
        expect(Object.getOwnPropertyNames(others).length).to.equal(1)

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

      const setupReducerEnvironment = (initialArgs = {}) => {
        // Given
        const {elements: initialElements = []} = initialArgs
        const elementsArray = [
          document.createElement('input'),
          document.createElement('input'),
          document.createElement('input'),
          document.createElement('input'),
          document.createElement('input'),
          document.createElement('input'),
          ...initialElements
        ]

        // When
        const hook = setupHook(initialArgs)
        const [store, dispatch] = hook.result.current

        const {
          checker,
          disabled,
          elements,
          focusPosition,
          innerValue,
          mask,
          ...others
        } = store

        // Then
        expect(Object.getOwnPropertyNames(others).length).to.equal(1)

        // And
        // When
        elementsArray.forEach(element => {
          dispatch(atomPinInputActions.setElement({node: element}))
        })

        hook.rerender()

        return hook
      }

      afterEach(cleanup)

      it('given empty arguments gets initial store', () => {
        // Given
        const args = undefined

        // When
        const hook = setupReducerEnvironment(args)
        // Then
        const [store] = hook.result.current
        const {
          checker,
          disabled,
          elements,
          focusPosition,
          innerValue,
          mask,
          valueType,
          ...others
        } = store

        expect(Object.getOwnPropertyNames(others).length).to.equal(0)
        expect(focusPosition).to.equal(0)
        expect(disabled).to.equal(false)
        expect(mask).to.equal(MASK.NUMBER)
      })

      it('given existing node stored in elements ignores it', () => {
        // Given
        const node = document.createElement('input')
        const args = {elements: [node]}

        // When
        const hook = setupReducerEnvironment(args)

        // Then
        let [store, dispatch] = hook.result.current
        const {
          checker,
          disabled,
          elements,
          focusPosition,
          innerValue,
          mask,
          valueType,
          ...others
        } = store
        expect(Object.getOwnPropertyNames(others).length).to.equal(0)
        expect(elements.includes(node)).to.equal(true)

        // And
        // When
        dispatch(atomPinInputActions.setElement({node}))
        hook.rerender()

        // Then
        store = hook.result.current[0]
        expect(elements.includes(node)).to.equal(true)
        expect(store.elements.includes(node)).to.equal(true)
        expect(store.elements.length).to.equal(elements.length)
      })

      it('given an invalid actionType executes default case', () => {
        // Given
        const args = {}

        // When
        const hook = setupReducerEnvironment(args)
        const [store, dispatch] = hook.result.current

        // Then
        // Given
        const newValue = '34564'
        const actionType = 'PIN_INPUT_ACTION_TYPES.SET_PIN_INPUT_VALUE'

        // When
        dispatch({actionType, payload: {innerValue: newValue.split('')}})
        // Then
        hook.rerender()
        const newInnerValue = store.innerValue
        expect(newInnerValue.filter(Boolean).join('')).to.equal('')
      })

      it('given a valid value sets it to the innerValue', () => {
        // Given
        const args = {
          defaultValue: '12345'
        }

        // When
        const hook = setupReducerEnvironment(args)
        let [store, dispatch] = hook.result.current

        const {innerValue} = store

        // Then
        expect(innerValue.filter(Boolean).join('')).to.equal('12345')
        // And
        // Given
        const newValue = '123456'
        // When
        dispatch(atomPinInputActions.setValue({innerValue: newValue.split('')}))
        // Then
        hook.rerender()
        store = hook.result.current[0]
        const newInnerValue = store.innerValue
        expect(newInnerValue.filter(Boolean).join('')).to.equal(newValue)
      })

      it('given an invalid value does NOT set it to the innerValue', () => {
        // Given
        const args = {
          defaultValue: '12345',
          mask: MASK.NUMBER
        }

        // When
        const hook = setupReducerEnvironment(args)
        let [store, dispatch] = hook.result.current

        const {innerValue} = store

        // Then
        expect(innerValue.filter(Boolean).join('')).to.equal('12345')
        // And
        // Given
        const newValue = '12345A'
        // When
        dispatch(atomPinInputActions.setValue({innerValue: newValue.split('')}))
        // Then
        hook.rerender()
        store = hook.result.current[0]
        const newInnerValue = store.innerValue
        expect(newInnerValue.filter(Boolean).join('')).to.not.equal(newValue)
      })

      it('given valid position removes pin input element', () => {
        // Given
        const node = document.createElement('input')
        const args = {elements: [node]}

        // When
        const hook = setupReducerEnvironment(args)
        let [store, dispatch] = hook.result.current

        const {elements} = store

        // Then
        expect(elements.length).to.equal(7)
        // And

        // When
        dispatch(atomPinInputActions.removeElement({node}))

        hook.rerender()
        store = hook.result.current[0]
        const newElements = store.elements

        // Then
        expect(newElements.length).to.equal(6)
      })

      it('given a new valid focusPosition set it to the store', () => {
        // Given
        const args = undefined

        // When
        const hook = setupReducerEnvironment(args)
        let [store, dispatch] = hook.result.current

        let {focusPosition} = store

        // Then
        expect(focusPosition).to.equal(0)

        // And
        // Given
        const newFocusPosition = 1

        // When
        dispatch(
          atomPinInputActions.setFocus({focusPosition: newFocusPosition})
        )
        hook.rerender()
        store = hook.result.current[0]
        focusPosition = store.focusPosition

        // Then
        expect(focusPosition).to.equal(newFocusPosition)
      })

      it('given a new invalid focusPosition keeps the current focus', () => {
        // Given
        const args = undefined

        // When
        const hook = setupReducerEnvironment(args)
        let [store, dispatch] = hook.result.current

        let {focusPosition} = store

        // Then
        expect(focusPosition).to.equal(0)

        // And
        // Given
        const newFocusPosition = focusPosition - 1

        // When
        dispatch(
          atomPinInputActions.setFocus({focusPosition: newFocusPosition})
        )
        hook.rerender()
        store = hook.result.current[0]
        focusPosition = store.focusPosition

        // Then
        expect(focusPosition).to.equal(0)
      })

      it('given a new invalid focusPosition index preserves the older stored index', () => {
        // Given
        const args = undefined

        // When
        const hook = setupReducerEnvironment(args)
        let [store, dispatch] = hook.result.current

        const {focusPosition: initialFocusPosition} = store

        // Then
        expect(initialFocusPosition).to.equal(0)

        // And
        // Given
        const newFocusPosition = -1

        // When
        dispatch(
          atomPinInputActions.setFocus({focusPosition: newFocusPosition})
        )
        hook.rerender()
        store = hook.result.current[0]
        const focusPosition = store.focusPosition

        // Then
        expect(focusPosition).to.not.equal(newFocusPosition)
        expect(focusPosition).to.equal(initialFocusPosition)
      })

      it('given a new mask clears value if it becomes invalid', () => {
        // Given
        const args = {value: '123456'}
        const eventArgs = {mask: MASK.ALPHABETIC}

        // When
        const hook = setupReducerEnvironment(args)
        let [store, dispatch] = hook.result.current

        const {focusPosition: initialFocusPosition, innerValue} = store

        // Then
        expect(innerValue.filter(Boolean).join('')).to.equal(args.value)

        // And
        // Given

        // When
        dispatch(atomPinInputActions.setMask({mask: eventArgs.mask}))
        hook.rerender()

        // Then
        store = hook.result.current[0]
        const newInnerValue = store.innerValue
        const focusPosition = store.focusPosition
        expect(focusPosition).to.equal(initialFocusPosition)
        expect(newInnerValue.filter(Boolean).join('')).to.equal('')
      })

      it('given an ArrowUp key event does NOT change the focusPosition and the innerValue', () => {
        // Given
        const args = {value: '123456'}
        const eventArgs = {key: 'ArrowUp'}

        // When
        const hook = setupReducerEnvironment(args)
        let [store, dispatch] = hook.result.current

        const {focusPosition: initialFocusPosition, innerValue} = store

        // Then
        expect(initialFocusPosition).to.equal(0)
        expect(innerValue.filter(Boolean).join('')).to.equal(args.value)

        // And
        // Given
        const onChange = () => null
        const keyboardEvent = new KeyboardEvent('keydown', {...eventArgs})

        // When
        dispatch(atomPinInputActions.setKey({event: keyboardEvent, onChange}))
        hook.rerender()

        // Then
        store = hook.result.current[0]
        const focusPosition = store.focusPosition
        const newInnerValue = store.innerValue
        expect(focusPosition).to.equal(initialFocusPosition)
        expect(newInnerValue.filter(Boolean).join('')).to.equal(args.value)
      })

      it('given an ArrowDown key event does NOT change the focusPosition and the innerValue', () => {
        // Given
        const args = {value: '123456'}
        const eventArgs = {key: 'ArrowDown'}

        // When
        const hook = setupReducerEnvironment(args)
        let [store, dispatch] = hook.result.current

        const {focusPosition: initialFocusPosition, innerValue} = store

        // Then
        expect(initialFocusPosition).to.equal(0)
        expect(innerValue.filter(Boolean).join('')).to.equal(args.value)

        // And
        // Given
        const onChange = () => null
        const keyboardEvent = new KeyboardEvent('keydown', {...eventArgs})

        // When
        dispatch(atomPinInputActions.setKey({event: keyboardEvent, onChange}))
        hook.rerender()

        // Then
        store = hook.result.current[0]
        const focusPosition = store.focusPosition
        const newInnerValue = store.innerValue
        expect(focusPosition).to.equal(initialFocusPosition)
        expect(newInnerValue.filter(Boolean).join('')).to.equal(args.value)
      })

      it('given an ArrowLeft key event does NOT change the innerValue and the focusPosition  if it is the first one', () => {
        // Given
        const args = {value: '123456'}
        const eventArgs = {key: 'ArrowLeft'}

        // When
        const hook = setupReducerEnvironment(args)
        let [store, dispatch] = hook.result.current

        const {focusPosition: initialFocusPosition, innerValue} = store

        // Then
        expect(initialFocusPosition).to.equal(0)
        expect(innerValue.filter(Boolean).join('')).to.equal(args.value)

        // And
        // Given
        const onChange = () => null
        const keyboardEvent = new KeyboardEvent('keydown', {...eventArgs})

        // When
        dispatch(atomPinInputActions.setKey({event: keyboardEvent, onChange}))
        hook.rerender()

        // Then
        store = hook.result.current[0]
        const focusPosition = store.focusPosition
        const newInnerValue = store.innerValue
        expect(focusPosition).to.equal(initialFocusPosition)
        expect(newInnerValue.filter(Boolean).join('')).to.equal(args.value)
      })

      it('given an ArrowLeft key event does NOT change the innerValue but reduces the focusPosition if it is NOT the first one', () => {
        // Given
        const args = {value: '123456'}
        const eventArgs = {key: 'ArrowLeft'}

        // When
        const hook = setupReducerEnvironment(args)
        let [store, dispatch] = hook.result.current

        const {focusPosition: initialFocusPosition, innerValue} = store

        // Then
        expect(initialFocusPosition).to.equal(0)
        expect(innerValue.filter(Boolean).join('')).to.equal(args.value)

        // And
        // Given
        const newFocusPosition = 3
        // When
        dispatch(
          atomPinInputActions.setFocus({focusPosition: newFocusPosition})
        )
        hook.rerender()

        // Then
        store = hook.result.current[0]
        expect(store.focusPosition).to.equal(newFocusPosition)

        // And
        // Given
        const onChange = () => null
        const keyboardEvent = new KeyboardEvent('keydown', {...eventArgs})

        // When
        dispatch(atomPinInputActions.setKey({event: keyboardEvent, onChange}))
        hook.rerender()

        // Then
        store = hook.result.current[0]
        const focusPosition = store.focusPosition
        const newInnerValue = store.innerValue
        expect(focusPosition).to.not.equal(newFocusPosition)
        expect(focusPosition).to.equal(newFocusPosition - 1)
        expect(newInnerValue.filter(Boolean).join('')).to.equal(args.value)
      })

      it('given an ArrowRight key event does NOT change the innerValue and the focusPosition if it is NOT the last one', () => {
        // Given
        const args = {value: '123456'}
        const eventArgs = {key: 'ArrowRight'}

        // When
        const hook = setupReducerEnvironment(args)
        let [store, dispatch] = hook.result.current

        const {
          focusPosition: initialFocusPosition,
          innerValue,
          elements
        } = store

        // Then
        expect(initialFocusPosition).to.equal(0)
        expect(innerValue.filter(Boolean).join('')).to.equal(args.value)

        // And
        // Given
        const newFocusPosition = elements.length - 1
        // When
        dispatch(
          atomPinInputActions.setFocus({focusPosition: newFocusPosition})
        )
        hook.rerender()

        // Then
        store = hook.result.current[0]
        expect(store.focusPosition).to.equal(newFocusPosition)

        // And
        // Given
        const onChange = () => null
        const keyboardEvent = new KeyboardEvent('keydown', {...eventArgs})

        // When
        dispatch(atomPinInputActions.setKey({event: keyboardEvent, onChange}))
        hook.rerender()

        // Then
        store = hook.result.current[0]
        const focusPosition = store.focusPosition
        const newInnerValue = store.innerValue
        expect(focusPosition).to.equal(newFocusPosition)
        expect(newInnerValue.filter(Boolean).join('')).to.equal(args.value)
      })

      it('given an ArrowRight key event does NOT change the innerValue but increments the focusPosition if it is NOT the last one', () => {
        // Given
        const args = {value: '123456'}
        const eventArgs = {key: 'ArrowRight'}

        // When
        const hook = setupReducerEnvironment(args)
        let [store, dispatch] = hook.result.current

        const {focusPosition: initialFocusPosition, innerValue} = store

        // Then
        expect(initialFocusPosition).to.equal(0)
        expect(innerValue.filter(Boolean).join('')).to.equal(args.value)

        // And
        // Given
        const onChange = () => null
        const keyboardEvent = new KeyboardEvent('keydown', {...eventArgs})

        // When
        dispatch(atomPinInputActions.setKey({event: keyboardEvent, onChange}))
        hook.rerender()

        // Then
        store = hook.result.current[0]
        const focusPosition = store.focusPosition
        const newInnerValue = store.innerValue
        expect(focusPosition).to.equal(initialFocusPosition + 1)
        expect(newInnerValue.filter(Boolean).join('')).to.equal(args.value)
      })

      it('given a Backspace key event does changes the innerValue and also reduces the focusPosition if it is NOT the first one', () => {
        // Given
        const args = {value: '123456'}
        const eventArgs = {key: 'Backspace'}

        // When
        const hook = setupReducerEnvironment(args)
        let [store, dispatch] = hook.result.current

        const {focusPosition: initialFocusPosition, innerValue} = store

        // Then
        expect(initialFocusPosition).to.equal(0)
        expect(innerValue.filter(Boolean).join('')).to.equal(args.value)

        // And
        // Given
        const newFocusPosition = 3
        // When
        dispatch(
          atomPinInputActions.setFocus({focusPosition: newFocusPosition})
        )
        hook.rerender()

        // Then
        store = hook.result.current[0]
        expect(store.focusPosition).to.equal(newFocusPosition)

        // And
        // Given
        const onChange = () => null
        const keyboardEvent = new KeyboardEvent('keydown', {...eventArgs})

        // When
        dispatch(atomPinInputActions.setKey({event: keyboardEvent, onChange}))
        hook.rerender()

        // Then
        store = hook.result.current[0]
        const focusPosition = store.focusPosition
        const newInnerValue = store.innerValue
        expect(focusPosition).to.not.equal(newFocusPosition)
        expect(focusPosition).to.equal(newFocusPosition - 1)
        expect(newInnerValue.filter(Boolean).join('')).to.equal(
          args.value
            .split('')
            .filter((_, index) => index !== newFocusPosition)
            .join('')
        )
      })

      it('given a Backspace key event does changes the innerValue and also reduces the focusPosition if it is the first one', () => {
        // Given
        const args = {value: '123456'}
        const eventArgs = {key: 'Backspace'}

        // When
        const hook = setupReducerEnvironment(args)
        let [store, dispatch] = hook.result.current

        const {focusPosition: initialFocusPosition, innerValue} = store

        // Then
        expect(initialFocusPosition).to.equal(0)
        expect(innerValue.filter(Boolean).join('')).to.equal(args.value)

        // And
        // Given
        const onChange = () => null
        const keyboardEvent = new KeyboardEvent('keydown', {...eventArgs})

        // When
        dispatch(atomPinInputActions.setKey({event: keyboardEvent, onChange}))
        hook.rerender()

        // Then
        store = hook.result.current[0]
        const focusPosition = store.focusPosition
        const newInnerValue = store.innerValue
        expect(focusPosition).to.equal(initialFocusPosition)
        expect(newInnerValue.filter(Boolean).join('')).to.equal(
          args.value
            .split('')
            .filter((_, index) => index !== initialFocusPosition)
            .join('')
        )
      })

      it('given a Delete key event change the innerValue but does NOT change the focusPosition', () => {
        // Given
        const args = {value: '123456'}
        const eventArgs = {key: 'Delete'}

        // When
        const hook = setupReducerEnvironment(args)
        let [store, dispatch] = hook.result.current

        const {innerValue} = store

        // Then
        expect(innerValue.filter(Boolean).join('')).to.equal(args.value)

        // And
        // Given
        const onChange = () => null
        const keyboardEvent = new KeyboardEvent('keydown', {...eventArgs})

        // When
        dispatch(atomPinInputActions.setKey({event: keyboardEvent, onChange}))
        hook.rerender()

        // Then
        store = hook.result.current[0]
        const newInnerValue = store.innerValue
        const focusPosition = store.focusPosition
        expect(focusPosition).to.equal(0)
        expect(newInnerValue.filter(Boolean).join('')).to.equal(
          args.value
            .split('')
            .filter((_, index) => index !== 0)
            .join('')
        )
      })

      it('given a Meta key event should NOT change anything', () => {
        // Given
        const args = {value: '123456'}
        const eventArgs = {key: 'Meta'}

        // When
        const hook = setupReducerEnvironment(args)
        let [store, dispatch] = hook.result.current

        const {innerValue} = store

        // Then
        expect(innerValue.filter(Boolean).join('')).to.equal(args.value)

        // And
        // Given
        const onChange = () => null
        const keyboardEvent = new KeyboardEvent('keydown', {...eventArgs})

        // When
        dispatch(atomPinInputActions.setKey({event: keyboardEvent, onChange}))
        hook.rerender()

        // Then
        store = hook.result.current[0]
        const newInnerValue = store.innerValue
        const focusPosition = store.focusPosition
        expect(focusPosition).to.equal(0)
        expect(newInnerValue.filter(Boolean).join('')).to.equal(args.value)
      })

      it('given a Custom key event should NOT change anything', () => {
        // Given
        const args = {value: '123456'}
        const eventArgs = {key: 'Custom'}

        // When
        const hook = setupReducerEnvironment(args)
        let [store, dispatch] = hook.result.current

        const {focusPosition: initialFocusPosition, innerValue} = store

        // Then
        expect(innerValue.filter(Boolean).join('')).to.equal(args.value)

        // And
        // Given
        const onChange = () => null
        const keyboardEvent = new KeyboardEvent('keydown', {...eventArgs})

        // When
        dispatch(atomPinInputActions.setKey({event: keyboardEvent, onChange}))
        hook.rerender()

        // Then
        store = hook.result.current[0]
        const newInnerValue = store.innerValue
        const focusPosition = store.focusPosition
        expect(focusPosition).to.equal(initialFocusPosition)
        expect(newInnerValue.filter(Boolean).join('')).to.equal(args.value)
      })

      it('given a * key event should NOT change anything', () => {
        // Given
        const args = {value: '123456'}
        const eventArgs = {key: '*'}

        // When
        const hook = setupReducerEnvironment(args)
        let [store, dispatch] = hook.result.current

        const {focusPosition: initialFocusPosition, innerValue} = store

        // Then
        expect(innerValue.filter(Boolean).join('')).to.equal(args.value)

        // And
        // Given
        const onChange = () => null
        const keyboardEvent = new KeyboardEvent('keydown', {...eventArgs})

        // When
        dispatch(atomPinInputActions.setKey({event: keyboardEvent, onChange}))
        hook.rerender()

        // Then
        store = hook.result.current[0]
        const newInnerValue = store.innerValue
        const focusPosition = store.focusPosition
        expect(focusPosition).to.equal(initialFocusPosition)
        expect(newInnerValue.filter(Boolean).join('')).to.equal(args.value)
      })

      it('given a Tab key event does NOT change the innerValue but increment the focusPosition if it is NOT the last one', () => {
        // Given
        const args = {value: '123456'}
        const eventArgs = {key: 'Tab', shiftKey: false}

        // When
        const hook = setupReducerEnvironment(args)
        let [store, dispatch] = hook.result.current

        const {focusPosition: initialFocusPosition, innerValue} = store

        // Then
        expect(initialFocusPosition).to.equal(0)
        expect(innerValue.filter(Boolean).join('')).to.equal(args.value)

        // And
        // Given
        const newFocusPosition = 3
        // When
        dispatch(
          atomPinInputActions.setFocus({focusPosition: newFocusPosition})
        )
        hook.rerender()

        // Then
        store = hook.result.current[0]
        expect(store.focusPosition).to.equal(newFocusPosition)

        // And
        // Given
        const onChange = () => null
        const keyboardEvent = new KeyboardEvent('keydown', {...eventArgs})

        // When
        dispatch(atomPinInputActions.setKey({event: keyboardEvent, onChange}))
        hook.rerender()

        // Then
        store = hook.result.current[0]
        const focusPosition = store.focusPosition
        const newInnerValue = store.innerValue
        expect(focusPosition).to.not.equal(newFocusPosition)
        expect(focusPosition).to.equal(newFocusPosition + 1)
        expect(newInnerValue.filter(Boolean).join('')).to.equal(args.value)
      })

      it('given a Tab key event does NOT change the innerValue but increment the focusPosition if it is the last one', () => {
        // Given
        const args = {value: '123456'}
        const eventArgs = {key: 'Tab', shiftKey: false}

        // When
        const hook = setupReducerEnvironment(args)
        let [store, dispatch] = hook.result.current

        const {
          focusPosition: initialFocusPosition,
          innerValue,
          elements
        } = store

        // Then
        expect(initialFocusPosition).to.equal(0)
        expect(innerValue.filter(Boolean).join('')).to.equal(args.value)

        // And
        // Given
        const newFocusPosition = elements.length - 1
        // When
        dispatch(
          atomPinInputActions.setFocus({focusPosition: newFocusPosition})
        )
        hook.rerender()

        // Then
        store = hook.result.current[0]
        expect(store.focusPosition).to.equal(newFocusPosition)

        // And
        // Given
        const onChange = () => null
        const keyboardEvent = new KeyboardEvent('keydown', {...eventArgs})

        // When
        dispatch(atomPinInputActions.setKey({event: keyboardEvent, onChange}))
        hook.rerender()

        // Then
        store = hook.result.current[0]
        const focusPosition = store.focusPosition
        const newInnerValue = store.innerValue
        expect(focusPosition).to.equal(newFocusPosition)
        expect(newInnerValue.filter(Boolean).join('')).to.equal(args.value)
      })

      it('given a Shift+Tab key event does NOT change the innerValue but decrements the focusPosition if it is NOT the first one', () => {
        // Given
        const args = {value: '123456'}
        const eventArgs = {key: 'Tab', shiftKey: true}

        // When
        const hook = setupReducerEnvironment(args)
        let [store, dispatch] = hook.result.current

        const {focusPosition: initialFocusPosition, innerValue} = store

        // Then
        expect(initialFocusPosition).to.equal(0)
        expect(innerValue.filter(Boolean).join('')).to.equal(args.value)

        // And
        // Given
        const newFocusPosition = 3
        // When
        dispatch(
          atomPinInputActions.setFocus({focusPosition: newFocusPosition})
        )
        hook.rerender()

        // Then
        store = hook.result.current[0]
        expect(store.focusPosition).to.equal(newFocusPosition)

        // And
        // Given
        const onChange = () => null
        const keyboardEvent = new KeyboardEvent('keydown', {...eventArgs})

        // When
        dispatch(atomPinInputActions.setKey({event: keyboardEvent, onChange}))
        hook.rerender()

        // Then
        store = hook.result.current[0]
        const focusPosition = store.focusPosition
        const newInnerValue = store.innerValue
        expect(focusPosition).to.not.equal(newFocusPosition)
        expect(focusPosition).to.equal(newFocusPosition - 1)
        expect(newInnerValue.filter(Boolean).join('')).to.equal(args.value)
      })

      it('given a Shift+Tab key event does NOT change the innerValue but decrements the focusPosition if it is the first one', () => {
        // Given
        const args = {value: '123456'}
        const eventArgs = {key: 'Tab', shiftKey: true}

        // When
        const hook = setupReducerEnvironment(args)
        let [store, dispatch] = hook.result.current

        const {focusPosition: initialFocusPosition, innerValue} = store

        // Then
        expect(initialFocusPosition).to.equal(0)
        expect(innerValue.filter(Boolean).join('')).to.equal(args.value)

        // And
        // Given
        const onChange = () => null
        const keyboardEvent = new KeyboardEvent('keydown', {...eventArgs})

        // When
        dispatch(atomPinInputActions.setKey({event: keyboardEvent, onChange}))
        hook.rerender()

        // Then
        store = hook.result.current[0]
        const focusPosition = store.focusPosition
        const newInnerValue = store.innerValue
        expect(focusPosition).to.equal(initialFocusPosition)
        expect(newInnerValue.filter(Boolean).join('')).to.equal(args.value)
      })

      it("given a valid charKey '1' key event changes the innerValue and increments focusPosition if it is NOT the last one", () => {
        // Given
        const args = {value: '123456'}
        const eventArgs = {key: '9'}

        // When
        const hook = setupReducerEnvironment(args)
        let [store, dispatch] = hook.result.current

        const {focusPosition: initialFocusPosition, innerValue} = store

        // Then
        expect(initialFocusPosition).to.equal(0)
        expect(innerValue.filter(Boolean).join('')).to.equal(args.value)

        // And
        // Given
        const onChange = () => null
        const keyboardEvent = new KeyboardEvent('keydown', {...eventArgs})

        // When
        dispatch(atomPinInputActions.setKey({event: keyboardEvent, onChange}))
        hook.rerender()

        // Then
        store = hook.result.current[0]
        const focusPosition = store.focusPosition
        const newInnerValue = store.innerValue
        expect(focusPosition).to.not.equal(initialFocusPosition)
        expect(focusPosition).to.equal(initialFocusPosition + 1)
        expect(newInnerValue.filter(Boolean).join('')).to.equal(
          args.value
            .split('')
            .map((value, index) =>
              index === initialFocusPosition ? eventArgs.key : value
            )
            .join('')
        )
      })

      it("given a valid charKey '1' key event changes the innerValue and maintains focusPosition if it is the last one", () => {
        // Given
        const args = {value: '123456'}
        const eventArgs = {key: '9'}

        // When
        const hook = setupReducerEnvironment(args)
        let [store, dispatch] = hook.result.current

        const {
          focusPosition: initialFocusPosition,
          innerValue,
          elements
        } = store

        // Then
        expect(initialFocusPosition).to.equal(0)
        expect(innerValue.filter(Boolean).join('')).to.equal(args.value)

        // And
        // Given
        const newFocusPosition = elements.length - 1
        // When
        dispatch(
          atomPinInputActions.setFocus({focusPosition: newFocusPosition})
        )
        hook.rerender()

        // Then
        store = hook.result.current[0]
        expect(store.focusPosition).to.equal(newFocusPosition)

        // And
        // Given
        const onChange = () => null
        const keyboardEvent = new KeyboardEvent('keydown', {...eventArgs})

        // When
        dispatch(atomPinInputActions.setKey({event: keyboardEvent, onChange}))
        hook.rerender()

        // Then
        store = hook.result.current[0]
        const focusPosition = store.focusPosition
        const newInnerValue = store.innerValue
        expect(focusPosition).to.equal(newFocusPosition)
        expect(newInnerValue.filter(Boolean).join('')).to.equal(
          args.value
            .split('')
            .map((value, index) =>
              index === newFocusPosition ? eventArgs.key : value
            )
            .join('')
        )
      })

      it("given a valid charKey '1' matching the existing key event maintains the innerValue and increments focusPosition if it is NOT the last one", () => {
        // Given
        const args = {value: '123456'}
        const eventArgs = {key: '1'}

        // When
        const hook = setupReducerEnvironment(args)
        let [store, dispatch] = hook.result.current

        const {focusPosition: initialFocusPosition, innerValue} = store

        // Then
        expect(initialFocusPosition).to.equal(0)
        expect(innerValue.filter(Boolean).join('')).to.equal(args.value)

        // And
        // Given
        const onChange = () => null
        const keyboardEvent = new KeyboardEvent('keydown', {...eventArgs})

        // When
        dispatch(atomPinInputActions.setKey({event: keyboardEvent, onChange}))
        hook.rerender()

        // Then
        store = hook.result.current[0]
        const focusPosition = store.focusPosition
        const newInnerValue = store.innerValue
        expect(focusPosition).to.equal(initialFocusPosition + 1)
        expect(newInnerValue.filter(Boolean).join('')).to.equal(args.value)
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
          expect(Object.getOwnPropertyNames(result.payload)).to.include.members(
            ['event', 'onChange']
          )
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
          expect(Object.getOwnPropertyNames(result.payload)).to.include.members(
            ['innerValue']
          )
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
          expect(Object.getOwnPropertyNames(result.payload)).to.include.members(
            ['focusPosition']
          )
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
          expect(Object.getOwnPropertyNames(result.payload)).to.include.members(
            ['node']
          )
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
          expect(Object.getOwnPropertyNames(result.payload)).to.include.members(
            ['node']
          )
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
          expect(Object.getOwnPropertyNames(result.payload)).to.include.members(
            ['mask']
          )
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
          expect(Object.getOwnPropertyNames(result.payload)).to.include.members(
            ['disabled']
          )
        })
      })
    })
  })

  describe('pinInputMask', () => {
    it('value must be an object enum', () => {
      // Given
      const library = pkg

      // When
      const {pinInputMask: actual} = library

      // Then
      expect(actual).to.be.an('object')
    })

    it('value must be a defined string-key pair filled', () => {
      // Given
      const library = pkg
      const expected = {
        NUMBER: '[0-9]',
        ALPHABETIC: '[A-Za-z]',
        ALPHANUMERIC: '[A-Za-z0-9]'
      }

      // When
      const {pinInputMask: actual} = library
      const {NUMBER, ALPHABETIC, ALPHANUMERIC, ...others} = actual

      // Then
      expect(Object.keys(others).length).to.equal(0)
      expect(Object.keys(actual)).to.have.members(Object.keys(expected))
      Object.entries(expected).forEach(([expectedKey, expectedValue]) => {
        expect(Object.keys(actual).includes(expectedKey)).to.be.true
        expect(actual[expectedKey]).to.equal(expectedValue)
      })
    })
  })

  describe('pinInputSizes', () => {
    it('value must be an object enum', () => {
      // Given
      const library = pkg

      // When
      const {pinInputSizes: actual} = library

      // Then
      expect(actual).to.be.an('object')
    })

    it('value must be a defined string-key pair filled', () => {
      // Given
      const library = pkg
      const expected = {
        XXSMALL: 'xxsmall',
        XSMALL: 'xsmall',
        SMALL: 'small',
        MEDIUM: 'medium',
        LARGE: 'large',
        XLARGE: 'xlarge',
        XXLARGE: 'xxlarge'
      }

      // When
      const {pinInputSizes: actual} = library
      const {
        XXSMALL,
        XSMALL,
        SMALL,
        MEDIUM,
        LARGE,
        XLARGE,
        XXLARGE,
        ...others
      } = actual

      // Then
      expect(Object.keys(others).length).to.equal(0)
      expect(Object.keys(actual)).to.have.members(Object.keys(expected))
      Object.entries(expected).forEach(([expectedKey, expectedValue]) => {
        expect(Object.keys(actual).includes(expectedKey)).to.be.true
        expect(actual[expectedKey]).to.equal(expectedValue)
      })
    })
  })

  describe('pinInputStatus', () => {
    it('value must be an object enum', () => {
      // Given
      const library = pkg

      // When
      const {pinInputStatus: actual} = library

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
      const {pinInputStatus: actual} = library
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

  describe('getPinInputValueType', () => {
    it('value must be a function helper', () => {
      // Given
      const library = pkg

      // When
      const {getPinInputValueType: actual} = library

      // Then
      expect(actual).to.be.a('function')
    })

    it('not given anything must return undefined', () => {
      // Given
      const library = pkg
      const current = {value: undefined, defaultValue: undefined}

      // When
      const {getPinInputValueType: actual} = library
      const response = actual(current)

      // Then
      expect(response).to.equal('undefined')
    })

    it('given a number value must return its value type', () => {
      // Given
      const library = pkg
      const current = {value: 1, defaultValue: undefined}

      // When
      const {getPinInputValueType: actual} = library
      const response = actual(current)

      // Then
      expect(response).to.equal('number')
      expect(response).to.equal(typeof current.value)
    })

    it('given a string value must return its value type', () => {
      // Given
      const library = pkg
      const current = {value: 'a', defaultValue: undefined}

      // When
      const {getPinInputValueType: actual} = library
      const response = actual(current)

      // Then
      expect(response).to.equal('string')
      expect(response).to.equal(typeof current.value)
    })

    it('given an object value must return its value type', () => {
      // Given
      const library = pkg
      const current = {value: {}, defaultValue: undefined}

      // When
      const {getPinInputValueType: actual} = library
      const response = actual(current)

      // Then
      expect(response).to.equal('object')
      expect(response).to.equal(typeof current.value)
    })

    it('given an array value must return its value type', () => {
      // Given
      const library = pkg
      const current = {value: [], defaultValue: undefined}

      // When
      const {getPinInputValueType: actual} = library
      const response = actual(current)

      // Then
      expect(response).to.equal('array')
    })

    it('given an array defaultValue must return its value type', () => {
      // Given
      const library = pkg
      const current = {value: undefined, defaultValue: []}

      // When
      const {getPinInputValueType: actual} = library
      const response = actual(current)

      // Then
      expect(response).to.equal('array')
    })

    it('given an number defaultValue must return its value type', () => {
      // Given
      const library = pkg
      const current = {value: undefined, defaultValue: 1}

      // When
      const {getPinInputValueType: actual} = library
      const response = actual(current)

      // Then
      expect(response).to.equal('number')
      expect(response).to.equal(typeof current.defaultValue)
    })

    it('given an array defaultValue and number value must return its value type over defaultValue', () => {
      // Given
      const library = pkg
      const current = {value: 1, defaultValue: []}

      // When
      const {getPinInputValueType: actual} = library
      const response = actual(current)

      // Then
      expect(response).to.equal('number')
      expect(response).to.equal(typeof current.value)
    })

    it('given an number defaultValue and string value must return its value type over defaultValue', () => {
      // Given
      const library = pkg
      const current = {value: 'a', defaultValue: 1}

      // When
      const {getPinInputValueType: actual} = library
      const response = actual(current)

      // Then
      expect(response).to.equal('string')
      expect(response).to.equal(typeof current.value)
    })
  })
})
