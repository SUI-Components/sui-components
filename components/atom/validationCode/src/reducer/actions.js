import PIN_INPUT_ACTION_TYPES from './actionTypes'

// SET_PIN_INPUT_KEY
// SET_PIN_INPUT_MASK

const act = (actionType, payload = {}) => ({actionType, payload})

const setKey = (event) => act(PIN_INPUT_ACTION_TYPES.SET_PIN_INPUT_KEY, event)
const setFocus = ({focusPosition}) =>
  act(PIN_INPUT_ACTION_TYPES.SET_PIN_INPUT_FOCUS, {focusPosition})
const setElement = ({node, index}) =>
  act(PIN_INPUT_ACTION_TYPES.SET_PIN_INPUT_ELEMENT, {node, index})
const setStatus = () => act(PIN_INPUT_ACTION_TYPES.SET_PIN_INPUT_STATUS)
const setMask = () => act()

const actions = {
  setKey,
  setFocus,
  setElement,
  setStatus,
  setMask
}

export default actions
