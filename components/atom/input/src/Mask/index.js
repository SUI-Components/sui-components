import {forwardRef, useEffect, useRef, useState} from 'react'

import PropTypes from 'prop-types'

import Input from '../Input/index.js'

const MaskInput = forwardRef(
  ({name, onChange, mask: maskOptions, ...props}, forwardedRef) => {
    const [mask, setMask] = useState(null)
    const refInput = useRef(null)

    useEffect(() => () => mask && mask.destroy(), [mask])

    const handleChange = (ev, {value}) => {
      typeof onChange === 'function' && onChange(ev, {value})
    }

    const handleFocus = () => {
      if (!mask) {
        import('imask').then(({default: IMask}) => {
          setMask(new IMask(refInput.current, maskOptions))
        })
      }
    }

    return (
      <Input
        ref={forwardedRef}
        id={name}
        reference={refInput}
        onChange={handleChange}
        onFocus={handleFocus}
        {...props}
      />
    )
  }
)

MaskInput.displayName = 'MaskInput'

MaskInput.propTypes = {
  /* mask object, see https://unmanner.github.io/imaskjs/ */
  mask: PropTypes.object.isRequired,
  /* The name of the control */
  name: PropTypes.string,
  /* Event launched on every input change */
  onChange: PropTypes.func
}

export default MaskInput
