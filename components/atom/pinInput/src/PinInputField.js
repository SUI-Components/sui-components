import {forwardRef, useEffect, useRef, useCallback} from 'react'
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

const PinInputField = forwardRef(
  ({mask, isFullWidth, ...props}, forwardedRef) => {
    const innerRef = useRef()
    const {
      disabled,
      isOneTimeCode,
      mask: maskContext = MASK.NUMBER,
      setFocus,
      size,
      status,
      dispatch,
      getIndex,
      value = []
    } = usePinInputContext()

    const index = getIndex(innerRef.current)

    const setElement = useCallback(node => {
      dispatch(pinInputActions.setElement({node}))
    }, [])

    const removeElement = useCallback(node => {
      dispatch(pinInputActions.removeElement({node}))
    }, [])

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
    return (
      <input
        ref={useMergeRefs(innerRef, forwardedRef)}
        readOnly
        className={getClassName({size, status, isFullWidth})}
        onFocus={onFocusHandler}
        onClick={onFocusHandler}
        value={value[index] || ''}
        maxLength="1"
        disabled={disabled}
        {...(isOneTimeCode && {autoComplete: 'one-time-code'})}
        {...props}
      />
    )
  }
)

PinInputField.displayName = 'PinInputField'
PinInputField.propTypes = {
  index: PropTypes.number,
  mask: PropTypes.string,
  isFullWidth: PropTypes.bool
}
export default PinInputField
