import {debounce} from '@s-ui/js/lib/function'

import {getValueType, MASK, valueChecker} from '../config.js'
import PIN_INPUT_ACTION_TYPES from './actionTypes.js'

export const getInitialPinInputReducerState = ({
  defaultValue = '',
  disabled = false,
  mask = MASK.NUMBER,
  value
} = {}) => {
  const valueType = getValueType({value, defaultValue})
  const arrayValue = typeof value === 'string' ? value.split('') : value
  const arrayDefaultValue = typeof defaultValue === 'string' ? defaultValue.split('') : defaultValue
  let innerValue = value !== undefined ? arrayValue : arrayDefaultValue

  innerValue = valueChecker({mask, length: innerValue.length})(innerValue.filter(Boolean).join('')) ? innerValue : []

  return {
    valueType,
    focusPosition: 0,
    mask,
    innerValue,
    checker: valueChecker({mask}),
    disabled,
    elements: []
  }
}

const focus = element => setTimeout(() => element.focus(), 0)

const debouncedFocus = debounce(focus, 20)

const focusElement = element => {
  debouncedFocus(element)
}

const onChangeHandler = onChange => (event, state) => {
  const {innerValue, focusPosition, valueType} = state
  typeof onChange === 'function' &&
    onChange(event, {
      value: valueType === 'string' ? innerValue.filter(Boolean).join('') : innerValue,
      key: innerValue[focusPosition],
      index: focusPosition,
      innerValue
    })
}

export const pinInputReducer = (state, {actionType, payload}) => {
  let nextState = Object.assign({}, state)
  const {checker, innerValue, focusPosition, elements} = state
  const {disabled, mask, node, event = {}} = payload
  const {key, shiftKey} = event
  const onChange = onChangeHandler(payload.onChange)

  let isValidPayloadInnerValue
  let newChecker
  let isInvalid
  let newIndex
  let position

  switch (actionType) {
    case PIN_INPUT_ACTION_TYPES.SET_PIN_INPUT_DISABLED:
      nextState = {...state, disabled}
      break
    case PIN_INPUT_ACTION_TYPES.SET_PIN_INPUT_VALUE:
      isValidPayloadInnerValue = valueChecker({
        mask: state.mask,
        length: payload.innerValue.length
      })(payload.innerValue.filter(Boolean).join(''))
      if (
        isValidPayloadInnerValue &&
        !(
          innerValue?.length === payload?.innerValue?.length &&
          innerValue.every((value, index) => value === payload.innerValue[index])
        )
      ) {
        nextState = {
          ...state,
          ...{
            innerValue: [...payload.innerValue]
          }
        }
      }
      break
    case PIN_INPUT_ACTION_TYPES.SET_PIN_INPUT_MASK:
      newChecker = valueChecker({mask})
      isInvalid = innerValue.find(value => !newChecker(value))
      nextState = {
        ...state,
        checker: newChecker,
        mask,
        innerValue: isInvalid ? [] : innerValue
      }
      break
    case PIN_INPUT_ACTION_TYPES.SET_PIN_INPUT_KEY:
      if (key.length > 1) {
        switch (key) {
          case 'ArrowUp':
          case 'ArrowDown':
            focusElement(elements[focusPosition])
            break
          case 'ArrowLeft':
            nextState = {
              ...state,
              focusPosition: elements[focusPosition - 1] ? focusPosition - 1 : focusPosition
            }
            focusElement(elements[nextState.focusPosition])
            break
          case 'ArrowRight':
            nextState = {
              ...state,
              focusPosition: elements[focusPosition + 1] ? focusPosition + 1 : focusPosition
            }
            focusElement(elements[nextState.focusPosition])
            break
          case 'Backspace':
            innerValue[focusPosition] = undefined
            nextState = {
              ...state,
              innerValue: [...innerValue],
              focusPosition: elements[focusPosition - 1] ? focusPosition - 1 : focusPosition
            }
            onChange(event, nextState)
            break
          case 'Delete':
            innerValue[focusPosition] = undefined
            nextState = {...state, innerValue: [...innerValue]}
            onChange(event, nextState)
            break
          case 'Tab':
            newIndex = shiftKey ? focusPosition - 1 : focusPosition + 1
            nextState = {
              ...state,
              focusPosition: elements[newIndex] ? newIndex : focusPosition
            }
            if (newIndex < elements.length && newIndex > 0) {
              focusElement(elements[nextState.focusPosition])
            }
            break
          case 'Meta':
          default:
            break
        }
      } else if (checker(key)) {
        const isKeyChange = innerValue[focusPosition] !== key
        if (isKeyChange) {
          innerValue[focusPosition] = key
        }
        nextState = {
          ...state,
          innerValue: isKeyChange ? [...innerValue] : innerValue,
          focusPosition: elements[focusPosition + 1] ? focusPosition + 1 : focusPosition
        }
        if (isKeyChange) {
          onChange(event, nextState)
        }
        focusElement(elements[nextState.focusPosition])
      } else {
        focusElement(elements[focusPosition])
      }
      break
    case PIN_INPUT_ACTION_TYPES.SET_PIN_INPUT_FOCUS:
      position = elements[payload.focusPosition] ? payload.focusPosition : focusPosition
      nextState = {...state, focusPosition: position}
      focusElement(elements[position])

      break
    case PIN_INPUT_ACTION_TYPES.SET_PIN_INPUT_ELEMENT:
      if (!elements.includes(node)) {
        elements[elements.length] = node
        nextState = {
          ...state,
          elements: [...elements]
        }
      }
      break
    case PIN_INPUT_ACTION_TYPES.REMOVE_PIN_INPUT_ELEMENT:
      nextState = {
        ...state,
        elements: elements.filter(element => node !== element)
      }

      break
    default:
      break
  }

  return nextState
}
