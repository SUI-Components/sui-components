import {MASK, valueChecker} from '../config'
import PIN_INPUT_ACTION_TYPES from './actionTypes'

export const getInitialPinInputReducerState = ({
  mask = MASK.NUMBER,
  value,
  disabled = false,
  defaultValue = []
}) => {
  return {
    focusPosition: 0,
    mask,
    innerValue: value ? value.split('') : defaultValue.split(''),
    status: undefined,
    checker: valueChecker({mask}),
    disabled,
    elements: []
  }
}

const focusElement = element =>
  setTimeout(() => {
    element.focus()
    element.select()
  }, 0)

export const pinInputReducer = (state, {actionType, payload}) => {
  let nextState = Object.assign({}, state)
  const {checker, innerValue, focusPosition, elements} = state
  const {disabled, mask, key, shiftKey, node} = payload
  switch (actionType) {
    case PIN_INPUT_ACTION_TYPES.SET_PIN_INPUT_DISABLED:
      nextState = {...state, disabled}
      break
    case PIN_INPUT_ACTION_TYPES.SET_PIN_INPUT_VALUE:
      debugger
      nextState = {
        ...state,
        ...{
          innerValue: innerValue !== payload.innerValue && [
            ...payload.innerValue
          ]
        }
      }
      break
    case PIN_INPUT_ACTION_TYPES.SET_PIN_INPUT_MASK:
      const newChecker = valueChecker({mask})
      const isInvalid = innerValue.find(value => !newChecker(value))
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
              focusPosition: elements[focusPosition - 1]
                ? focusPosition - 1
                : focusPosition
            }
            focusElement(elements[nextState.focusPosition])
            break
          case 'ArrowRight':
            nextState = {
              ...state,
              focusPosition: elements[focusPosition + 1]
                ? focusPosition + 1
                : focusPosition
            }
            focusElement(elements[nextState.focusPosition])
            break
          case 'Backspace':
            innerValue[focusPosition] = undefined
            nextState = {
              ...state,
              innerValue: [...innerValue],
              focusPosition: focusPosition - 1
            }
            break
          case 'Delete':
            innerValue[focusPosition] = undefined
            nextState = {...state, innerValue: [...innerValue]}
            break
          case 'Tab':
            const newIndex = shiftKey ? focusPosition - 1 : focusPosition + 1
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
          focusPosition: elements[focusPosition + 1]
            ? focusPosition + 1
            : focusPosition
        }
        focusElement(elements[nextState.focusPosition])
      } else {
        focusElement(elements[focusPosition])
      }
      break
    case PIN_INPUT_ACTION_TYPES.SET_PIN_INPUT_FOCUS:
      nextState = {...state, ...payload}
      const position = elements[payload.focusPosition]
        ? payload.focusPosition
        : focusPosition
      if (elements[position]) {
        focusElement(elements[position])
      }
      break
    case PIN_INPUT_ACTION_TYPES:
      const index = state.elements.indexOf(node)
      if (index >= 0) {
        elements[index] = node
      }
      nextState = {state, elements: [...elements]}
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
  if (actionType === undefined) {
    null
  } else {
    console.log({nextState, actionType: actionType.toString()})
  }
  return nextState
}
