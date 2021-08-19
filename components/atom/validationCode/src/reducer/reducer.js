import {MASK, valueChecker} from '../config'
import PIN_INPUT_ACTION_TYPES from './actionTypes'
import useControlledState from '@s-ui/react-hooks/lib/useControlledState'

export const getInitialPinInputReducerState = ({
  mask = MASK.NUMBER,
  value,
  defaultValue = []
}) => {
  const [innerValue] = useControlledState(
    value ? value.split('') : undefined,
    defaultValue ? defaultValue.split('') : undefined
  )
  return {
    focusPosition: 0,
    mask,
    innerValue: innerValue,
    status: undefined,
    checker: valueChecker({mask}),
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
  const {mask, key, shiftKey} = payload
  switch (actionType) {
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
            focusElement(elements[nextState.focusPosition])
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
      focusElement(elements[position])
      break
    case PIN_INPUT_ACTION_TYPES.SET_PIN_INPUT_ELEMENT:
      const {node, index} = payload
      if (!state.elements.includes(node)) {
        state.elements[index] = node
      }
      nextState = state
      break
    default:
      break
  }
  if (
    actionType === undefined ||
    actionType === PIN_INPUT_ACTION_TYPES.SET_PIN_INPUT_ELEMENT
  ) {
    null
  } else {
    // console.log({nextState, actionType: actionType.toString()})
  }
  return nextState
}
