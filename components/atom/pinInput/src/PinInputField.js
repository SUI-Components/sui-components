import {forwardRef, useCallback, useRef} from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import useMergeRefs from '@s-ui/react-hooks/lib/useMergeRefs'

import {BASE_CLASSNAME, MASK} from './config.js'
import {usePinInputContext} from './PinInputContext'

const CLASSNAME = `${BASE_CLASSNAME}Field`

const getClassName = ({size, status}) => {
  return cx(CLASSNAME, {
    [`${CLASSNAME}--size-${size}`]: size,
    [`${CLASSNAME}--status-${status}`]: status
  })
}

const PinInputField = forwardRef(({index, mask, ...props}, forwardedRef) => {
  const innerRef = useRef()
  const {
    disabled,
    isOneTimeCode,
    mask: maskContext = MASK.NUMBER,
    setFocus,
    size,
    status,
    value = []
  } = usePinInputContext()

  const onFocusHandler = () => setFocus(index)
  return (
    <input
      ref={useMergeRefs(innerRef, forwardedRef)}
      readOnly
      className={getClassName({size, status})}
      onFocus={onFocusHandler}
      onClick={onFocusHandler}
      value={value[index] || ''}
      maxLength="1"
      disabled={disabled}
      {...(isOneTimeCode && {autoComplete: 'one-time-code'})}
      {...props}
    />
  )
})

PinInputField.displayName = 'PinInputField'
PinInputField.propTypes = {
  index: PropTypes.number,
  mask: PropTypes.string
}
export default PinInputField
