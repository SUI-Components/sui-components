import {forwardRef, useEffect, useRef, useCallback, useMemo} from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import useMergeRefs from '@s-ui/react-hooks/lib/useMergeRefs'
import {BASE_CLASSNAME, MASK} from './config.js'
import {usePinInputContext} from './PinInputContext'
import {actions as pinInputActions} from './reducer'

const CLASSNAME = `${BASE_CLASSNAME}Field`

const getClassName = ({size, status, isFullWidth}) => {
  return cx(CLASSNAME, {
    [`${CLASSNAME}--size-${size}`]: size,
    [`${CLASSNAME}--status-${status}`]: status,
    [`${CLASSNAME}--fullWidth`]: isFullWidth
  })
}

const getInputMode = ({inputMode, mask}) => {
  const maskToInputMode = {
    [MASK.NUMBER]: 'numeric',
    [MASK.ALPHABETIC]: 'text',
    [MASK.ALPHANUMERIC]: 'text'
  }
  return inputMode || maskToInputMode[mask]
}

const PinInputField = forwardRef(({isFullWidth, ...props}, forwardedRef) => {
  const innerRef = useRef()
  const {
    disabled,
    dispatch,
    getIndex,
    inputMode,
    isOneTimeCode,
    isPassword,
    mask,
    onChange = () => null,
    placeholder,
    setFocus,
    size,
    status,
    value = []
  } = usePinInputContext()

  const index = getIndex(innerRef.current)

  const setElement = useCallback(
    node => {
      dispatch(pinInputActions.setElement({node}))
    },
    [dispatch]
  )

  const removeElement = useCallback(
    node => {
      dispatch(pinInputActions.removeElement({node}))
    },
    [dispatch]
  )

  useEffect(() => {
    if (innerRef.current) {
      setElement(innerRef.current)
    }
    return () => removeElement(innerRef.current)
  }, [innerRef, setElement, removeElement])

  const onFocusHandler = () => {
    if (index >= 0) {
      setFocus(index)
    }
  }

  const inputModeMemoized = useMemo(() => getInputMode({inputMode, mask}), [
    mask,
    inputMode
  ])

  return (
    <input
      className={getClassName({size, status, isFullWidth})}
      disabled={disabled}
      maxLength="1"
      onChange={onChange}
      onClick={onFocusHandler}
      onFocus={onFocusHandler}
      placeholder={placeholder}
      inputMode={inputModeMemoized}
      ref={useMergeRefs(innerRef, forwardedRef)}
      value={value[index] || ''}
      {...(isPassword && {type: 'password'})}
      {...(isOneTimeCode && {autoComplete: 'one-time-code'})}
      {...props}
    />
  )
})

PinInputField.displayName = 'PinInputField'
PinInputField.propTypes = {
  /** number value position */
  index: PropTypes.number,
  /** true input full width false default */
  isFullWidth: PropTypes.bool
}
export default PinInputField
