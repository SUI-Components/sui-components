import {MASK} from '../config.js'
import PIN_INPUT_ACTION_TYPES from './actionTypes.js'

const act = (actionType, payload = {}) => ({actionType, payload})

const setKey = ({event, onChange}) =>
  act(PIN_INPUT_ACTION_TYPES.SET_PIN_INPUT_KEY, {event, onChange})
const setValue = ({innerValue}) =>
  act(PIN_INPUT_ACTION_TYPES.SET_PIN_INPUT_VALUE, {innerValue})
const setFocus = ({focusPosition}) =>
  act(PIN_INPUT_ACTION_TYPES.SET_PIN_INPUT_FOCUS, {focusPosition})
const setElement = ({node}) =>
  act(PIN_INPUT_ACTION_TYPES.SET_PIN_INPUT_ELEMENT, {node})
const removeElement = ({node}) =>
  act(PIN_INPUT_ACTION_TYPES.REMOVE_PIN_INPUT_ELEMENT, {node})
const setMask = ({mask = MASK.NUMBER}) =>
  act(PIN_INPUT_ACTION_TYPES.SET_PIN_INPUT_MASK, {mask})
const setDisabled = ({disabled = false}) =>
  act(PIN_INPUT_ACTION_TYPES.SET_PIN_INPUT_DISABLED, {disabled})

const actions = {
  setKey,
  setValue,
  setFocus,
  setElement,
  removeElement,
  setMask,
  setDisabled
}

export default actions
