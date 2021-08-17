import PropTypes from 'prop-types'
import './PinInput.scss'
import {forwardRef} from 'react'
import {PinInputContextProvider} from './PinInputContext'
import {BASE_CLASSNAME, SIZES} from './config.js'

const CLASSNAME = BASE_CLASSNAME

const PinInput = forwardRef(
  (
    {onChange, children, isOneTimeCode = true, size = SIZES.MEDIUM, maxLength = 1, ...props},
    forwardedRef
  ) => {
    return (
      <div className={CLASSNAME}>
        <PinInputContextProvider
          onChange={onChange}
          size={size}
          isOneTimeCode={isOneTimeCode}
          {...props}
          ref={forwardedRef}
          maxLength={maxLength}
        >
          {children}
        </PinInputContextProvider>
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
  maxLength: PropTypes.number,
}
export default PinInput
