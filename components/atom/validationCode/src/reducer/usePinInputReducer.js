import {useReducer} from 'react'
import {getInitialPinInputReducerState, pinInputReducer} from './reducer'

const usePinInputReducer = ({mask, defaultValue, value}) => {
  return useReducer(
    pinInputReducer,
    getInitialPinInputReducerState({mask, defaultValue, value})
  )
}

export default usePinInputReducer
