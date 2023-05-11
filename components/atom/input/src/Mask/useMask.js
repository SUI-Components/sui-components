import {useEffect} from 'react'
import {useIMask} from 'react-imask'

import useControlledState from '@s-ui/react-hooks/lib/useControlledState'
import useMergeRefs from '@s-ui/react-hooks/lib/useMergeRefs'

import {isFunction} from '../config.js'

const useMask = ({
  value: argValue,
  defaultValue: argDefaultValue,
  mask,
  onChange,
  onComplete,
  forwardedRef
}) => {
  const [value] = useControlledState(argValue, argDefaultValue)
  const {
    ref: refInput,
    value: maskedValue = '',
    setValue
  } = useIMask(
    {...mask},
    {
      onAccept: (value, maskRef, event, ...args) =>
        isFunction(onChange) &&
        maskedValue !== '' &&
        onChange(event, {value, maskRef, ...args}),
      onComplete: (value, maskRef, event, ...args) =>
        isFunction(onComplete) && onComplete(event, {value, maskRef, ...args})
    }
  )
  const ref = useMergeRefs(refInput, forwardedRef)
  useEffect(
    () => value !== maskedValue && setValue(maskedValue),
    [argValue, setValue, maskedValue, value]
  )
  return Object.assign([maskedValue, ref], {maskedValue, ref})
}

export default useMask
