import {forwardRef, useEffect} from 'react'
import {useIMask} from 'react-imask'

import PropTypes from 'prop-types'

import useMergeRefs from '@s-ui/react-hooks/lib/useMergeRefs'

import Input from '../Input/Component/index.js'

const MaskInput = forwardRef(
  (
    {
      name,
      onChange,
      onComplete,
      mask,
      value: propValue,
      defaultValue,
      ...props
    },
    forwardedRef
  ) => {
    const {
      ref: refInput,
      value: maskedValue = '',
      setValue
    } = useIMask(
      {...mask},
      {
        onAccept: (value, maskRef, event, ...args) => {
          typeof onChange === 'function' &&
            onChange(event, {value, maskRef, ...args})
        },
        onComplete: (value, maskRef, event, ...args) => {
          typeof onComplete === 'function' &&
            onComplete(event, {value, maskRef, ...args})
        }
      }
    )
    useEffect(() => {
      if (propValue !== maskedValue) {
        setValue(propValue)
      }
    }, [propValue, setValue, maskedValue])

    const ref = useMergeRefs(refInput, forwardedRef)

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
