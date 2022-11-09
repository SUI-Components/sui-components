import {forwardRef} from 'react'

import PropTypes from 'prop-types'

import Input from '../Input/Component/index.js'
import useMask from './useMask.js'

const MaskInput = forwardRef(
  (
    {name, onChange, onComplete, mask, value, defaultValue, ...props},
    forwardedRef
  ) => {
    const {maskedValue, ref} = useMask({
      value,
      defaultValue,
      mask,
      onChange,
      onComplete,
      forwardedRef
    })

    return <Input ref={ref} id={name} value={maskedValue} {...props} />
  }
)

MaskInput.displayName = 'MaskInput'

MaskInput.propTypes = {
  /* The value of the control */
  value: PropTypes.string,
  /* default value of the control */
  defaultValue: PropTypes.string,
  /* mask object, see https://unmanner.github.io/imaskjs/ */
  mask: PropTypes.object.isRequired,
  /* The name of the control */
  name: PropTypes.string,
  /* Event launched on every input change */
  onChange: PropTypes.func,
  /* Event fired every onChange which completes teh mask */
  onComplete: PropTypes.func
}

export default MaskInput
