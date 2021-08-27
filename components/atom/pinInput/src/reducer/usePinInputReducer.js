import {useReducer, useMemo} from 'react'
import useMountedState from '@s-ui/react-hooks/lib/useMountedState'
import {getInitialPinInputReducerState, pinInputReducer} from './reducer'

const usePinInputReducer = ({mask, defaultValue, value} = {}) => {
  const isMounted = useMountedState()

  const isMountedState = isMounted()

  const initialState = useMemo(
    () =>
      isMountedState
        ? initialState
        : getInitialPinInputReducerState({mask, defaultValue, value}),
    [isMountedState]
  )
  return useReducer(pinInputReducer, initialState)
}

export default usePinInputReducer
