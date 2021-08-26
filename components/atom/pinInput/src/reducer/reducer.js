import {MASK, valueChecker} from '../config'
import PIN_INPUT_ACTION_TYPES from './actionTypes'

export const getInitialPinInputReducerState = ({
  mask = MASK.NUMBER,
  value,
  disabled = false,
  defaultValue = ''
} = {}) => {
  let innerValue =
    value !== undefined ? value.split('') : defaultValue.split('')

  innerValue = valueChecker({mask, length: innerValue.length})(
    innerValue.filter(Boolean).join('')
  )
    ? innerValue
    : []

  return {
    focusPosition: 0,
    mask,
    innerValue,
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

const onChangeHandler = onChange => (event, state) => {
  const {innerValue, focusPosition} = state
  typeof onChange === 'function' &&
    onChange(event, {
      value: innerValue.filter(Boolean).join(''),
      key: innerValue[focusPosition],
      index: focusPosition
    })
}

export const pinInputReducer = (state, {actionType, payload}) => {
  let nextState = Object.assign({}, state)
  const {checker, innerValue, focusPosition, elements} = state
  const {disabled, mask, node, event = {}} = payload
  const {key, shiftKey} = event
  const onChange = onChangeHandler(payload.onChange)

  switch (actionType) {
    case PIN_INPUT_ACTION_TYPES.SET_PIN_INPUT_DISABLED:
      nextState = {...state, disabled}
      break
    case PIN_INPUT_ACTION_TYPES.SET_PIN_INPUT_VALUE:
      const isValidPayloadInnerValue = valueChecker({
        mask: state.mask,
        length: payload.innerValue.length
      })(payload.innerValue.filter(Boolean).join(''))
      if (isValidPayloadInnerValue) {
        nextState = {
          ...state,
          ...{
            innerValue: innerValue !== payload.innerValue && [
              ...payload.innerValue
            ]
          }
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
              focusPosition: elements[focusPosition - 1]
                ? focusPosition - 1
                : focusPosition
            }
            onChange(event, nextState)
            break
          case 'Delete':
            innerValue[focusPosition] = undefined
            nextState = {...state, innerValue: [...innerValue]}
            onChange(event, nextState)
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
        if (isKeyChange) {
          onChange(event, nextState)
        }
        focusElement(elements[nextState.focusPosition])
      } else {
        focusElement(elements[focusPosition])
      }
      break
    case PIN_INPUT_ACTION_TYPES.SET_PIN_INPUT_FOCUS:
      const position = elements[payload.focusPosition]
        ? payload.focusPosition
        : focusPosition
      nextState = {...state, focusPosition: position}
      debugger
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
