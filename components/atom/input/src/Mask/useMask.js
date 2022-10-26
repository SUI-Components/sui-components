import {useEffect} from 'react'
import {useIMask} from 'react-imask'

import useMergeRefs from '@s-ui/react-hooks/lib/useMergeRefs'
import useMountedState from '@s-ui/react-hooks/lib/useMountedState'

import {isFunction} from '../config.js'

const useMask = ({
  value: argValue,
  defaultValue: argDefaultValue,
  mask,
  onChange,
  onComplete,
  forwardedRef
}) => {
  const [value] = useMountedState(argValue, argDefaultValue)
  const {
    ref: refInput,
    value: maskedValue = '',
    setValue
  } = useIMask(
    {...mask},
    {
      onAccept: (value, maskRef, event, ...args) =>
        isFunction(onChange) && onChange(event, {value, maskRef, ...args}),
      onComplete: (value, maskRef, event, ...args) =>
        isFunction(onComplete) && onComplete(event, {value, maskRef, ...args})
    }
  )
  useEffect(() => {
    if (value !== maskedValue) {
      setValue(value)
    }
  }, [argValue, setValue, maskedValue, value])

  const ref = useMergeRefs(refInput, forwardedRef)

  return Object.assign([maskedValue, ref])
}

export default useMask
