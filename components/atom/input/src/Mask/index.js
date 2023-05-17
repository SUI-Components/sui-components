import {forwardRef} from 'react'
import {IMaskMixin} from 'react-imask'

import PropTypes from 'prop-types'

import {isFunction, SIZES} from '../config.js'
import Input from '../Input/Component/index.js'

const MaskInput = forwardRef(
  (
    {
      name,
      onChange,
      onComplete,
      mask,
      value,
      defaultValue,
      placeholder,
      size = SIZES.MEDIUM,
      ...props
    },
    forwardedRef
  ) => {
    const MaskedStyledInput = IMaskMixin(({inputRef, value, ...props}) => {
      return (
        <Input ref={inputRef} id={name} size={size} value={value} {...props} />
      )
    })

    return (
      <MaskedStyledInput
        mask={mask?.mask}
        value={value}
        ref={forwardedRef}
        placeholder={placeholder}
        onAccept={(value, maskRef, event, ...args) =>
          isFunction(onChange) && onChange(event, {value, maskRef, ...args})
        }
        onComplete={(value, maskRef, event, ...args) =>
          isFunction(onComplete) && onComplete(event, {value, maskRef, ...args})
        }
        {...props}
      />
    )
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
  onComplete: PropTypes.func,
  /* Placeholder of the input */
  placeholder: PropTypes.string,
  /* Size of the input */
  size: PropTypes.oneOf(Object.values(SIZES))
}

export default MaskInput
