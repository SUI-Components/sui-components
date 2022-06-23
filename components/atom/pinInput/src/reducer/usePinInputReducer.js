import {useMemo, useReducer} from 'react'

import useMountedState from '@s-ui/react-hooks/lib/useMountedState'

import {getInitialPinInputReducerState, pinInputReducer} from './reducer.js'

const usePinInputReducer = ({mask, defaultValue, value} = {}) => {
  const isMounted = useMountedState()

  const isMountedState = isMounted()

  const initialState = useMemo(
    () =>
      isMountedState
        ? initialState
        : getInitialPinInputReducerState({mask, defaultValue, value}),
    [isMountedState] // eslint-disable-line react-hooks/exhaustive-deps
  )
  return useReducer(pinInputReducer, initialState)
}

export default usePinInputReducer
