import PropTypes from 'prop-types'
import {forwardRef, useCallback, useEffect, useRef} from 'react'
import useMergeRefs from '@s-ui/react-hooks/lib/useMergeRefs'

import {PinInputContextProvider} from './PinInputContext'
import {BASE_CLASSNAME, SIZES} from './config.js'
import {actions as pinInputActions, usePinInputReducer} from './reducer'
import useKeyPress from './hooks/useKeyPress'
import useUpdateEffect from './hooks/useUpdateEffect'
import PinInputChildren from './PinInputChildren'

const CLASSNAME = BASE_CLASSNAME

const PinInput = forwardRef(
  (
    {
      children,
      defaultValue = '',
      disabled,
      isOneTimeCode = true,
      length = 6,
      mask,
      onChange,
      placeholder = '',
      isPassword = false,
      size = SIZES.MEDIUM,
      status,
      value,
      ...props
    },
    forwardedRef
  ) => {
    const innerRef = useRef()
    const targetRef = useRef()
    const [reducerState, dispatch] = usePinInputReducer({
      mask,
      defaultValue,
      value,
      disabled
    })
    const {innerValue, focusPosition, elements} = reducerState

    useEffect(() => {
      dispatch(pinInputActions.setDisabled({disabled}))
    }, [disabled])

    useEffect(() => {
      dispatch(pinInputActions.setMask({mask}))
    }, [mask])

    const setFocus = useCallback(position => {
      dispatch(pinInputActions.setFocus({focusPosition: position}))
    }, [])

    useKeyPress(
      event => {
        dispatch(pinInputActions.setKey(event))
      },
      {target: targetRef}
    )

    const getIndex = useCallback(
      node => {
        return elements.indexOf(node)
      },
      [elements]
    )

    useUpdateEffect(() => {
      const event = new Event('input', {bubbles: true, cancelable: true})
      Object.defineProperty(event, 'target', {
        value: innerRef.current,
        enumerable: true
      })
      const value = innerValue.filter(Boolean).join('')
      if (typeof onChange === 'function') {
        onChange(event, {value})
      }
    }, [innerRef, innerValue, onChange])

    useUpdateEffect(() => {
      setFocus(focusPosition)
    }, [focusPosition])

    return (
      <div className={CLASSNAME} ref={targetRef}>
        <PinInputContextProvider
          disabled={disabled}
          isPassword={isPassword}
          dispatch={dispatch}
          getIndex={getIndex}
          isOneTimeCode={isOneTimeCode}
          onChange={onChange}
          placeholder={placeholder}
          ref={forwardedRef}
          setFocus={setFocus}
          size={size}
          status={status}
          targetRef={innerRef}
          value={innerValue}
        >
          <PinInputChildren length={length}>{children}</PinInputChildren>
        </PinInputContextProvider>
        <input
          type="hidden"
          value={innerValue.filter(Boolean).join('')}
          ref={useMergeRefs(innerRef, forwardedRef)}
        />
      </div>
    )
  }
)

PinInput.displayName = 'PinInput'
PinInput.propTypes = {
  children: PropTypes.node,
  onChange: PropTypes.func,
  size: PropTypes.oneOf(Object.values(SIZES)),
  isOneTimeCode: PropTypes.bool,
  mask: PropTypes.string,
  defaultValue: PropTypes.string,
  disabled: PropTypes.bool,
  length: PropTypes.number,
  status: PropTypes.oneOf(Object.values(BASE_CLASSNAME)),
  value: PropTypes.string
}
export default PinInput
