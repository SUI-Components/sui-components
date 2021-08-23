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

    // useEffect(() => {
    //   debugger
    //   dispatch(
    //     pinInputActions.setValue({innerValue: value ? value.split('') : []})
    //   )
    // }, [value])

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

    const handleOnChange = event => {
      debugger
      typeof onChange === 'function' &&
        onChange(event, {
          value: innerValue.filter(Boolean).join(''),
          index: focusPosition,
          key: innerValue[focusPosition] || ''
        })
    }

    useUpdateEffect(() => {
      const element = innerRef.current
      const joinedValue = innerValue.filter(Boolean).join('')
      
      console.log({
        value,
        defaultValue,
        joinedValue,
        nativeValue: element.value
      })
      debugger;
      if (typeof onChange === 'function' && value !== joinedValue) {
        const event = new Event('input', {bubbles: true, cancelable: true})
        Object.defineProperty(event, 'target', {
          value: element,
          enumerable: true
        })
        onChange(event, {value: joinedValue})
      } else {
        dispatch(
          pinInputActions.setValue({innerValue: value ? value.split('') : []})
        )
      }
    }, [innerRef, innerValue, value, onChange])

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
          onChange={handleOnChange}
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
