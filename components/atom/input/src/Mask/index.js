import {useState, useEffect, useRef} from 'react'
import PropTypes from 'prop-types'

import Input from '../Input/index.js'

const MaskInput = ({name, onChange, mask: maskOptions, ...props}) => {
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
      id={name}
      reference={refInput}
      onChange={handleChange}
      onFocus={handleFocus}
      {...props}
    />
  )
}

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
