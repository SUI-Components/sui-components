import {
  createContext,
  useContext,
  forwardRef,
  Children,
  cloneElement,
  useCallback,
  useEffect,
  useRef
} from 'react'
import PropTypes from 'prop-types'

import {SIZES, STATUS, triggerInputChange} from './config'
import useKeyPress from './hooks/useKeyPress'
import useUpdateEffect from './hooks/useUpdateEffect'
import useMergeRefs from '@s-ui/react-hooks/lib/useMergeRefs'
import {usePinInputReducer, actions as pinInputActions} from './reducer'

const setValue = ({value, node}) => {
  if (node && node.value !== value) {
    triggerInputChange(node, value)
  }
}

const PinInputContext = createContext({})

const PinInputContextProvider = forwardRef(
  (
    {
      children,
      defaultValue,
      mask,
      isOneTimeCode,
      placeholder,
      size,
      onChange,
      status,
      value,
      disabled,
      targetRef
    },
    forwardedRef
  ) => {
    const innerRef = useRef()
    const [{innerValue, focusPosition}, dispatch] = usePinInputReducer({
      mask,
      defaultValue,
      value,
      disabled
    })

    useEffect(() => {
      setFocus(focusPosition)
    }, [focusPosition])

    useEffect(() => {
      dispatch(pinInputActions.setDisabled({disabled}))
    }, [disabled])
    useEffect(() => {
      dispatch(pinInputActions.setMask({mask}))
    }, [mask])

    const setFocus = useCallback(
      position => {
        dispatch(pinInputActions.setFocus({focusPosition: position}))
      },
      [dispatch]
    )

    useKeyPress(
      event => {
        dispatch(pinInputActions.setKey(event))
      },
      {target: targetRef}
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
    }, [innerRef, innerValue])

    return (
      <>
        <PinInputContext.Provider
          value={{
            mask,
            disabled,
            value: innerValue,
            isOneTimeCode,
            placeholder,
            size,
            status,
            focusPosition,
            setFocus
          }}
        >
          {Children.toArray(children).map((child, index) =>
            cloneElement(child, {
              index,
              ref: node => {
                if (node) {
                  dispatch(pinInputActions.setElement({node, index}))
                }
                const {ref} = child
                if (typeof ref === 'function') {
                  ref(node)
                }
              }
            })
          )}
        </PinInputContext.Provider>
        <input
          type="hidden"
          value={innerValue.filter(Boolean).join('')}
          ref={useMergeRefs(innerRef, forwardedRef)}
        />
      </>
    )
  }
)

PinInputContextProvider.propTypes = {
  children: PropTypes.node,
  defaultValue: PropTypes.string,
  mask: PropTypes.string,
  isOneTimeCode: PropTypes.bool,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  size: PropTypes.oneOf(Object.values(SIZES)),
  status: PropTypes.oneOf(Object.values(STATUS)),
  value: PropTypes.string
}

const usePinInputContext = () => useContext(PinInputContext)
export {PinInputContextProvider, usePinInputContext}
