import cx from 'classnames'
import PropTypes from 'prop-types'

import {INPUT_SHAPES, SIZES} from '../../../config.js'
import {ADDON_TYPES, BASE_CLASS_ADDON_WRAPPER, getClassName} from './config.js'

const InputAddon = ({leftAddon, rightAddon, shape, size, children}) => {
  if (!(leftAddon || rightAddon)) {
    return children
  }
  return (
    <div
      className={cx(
        BASE_CLASS_ADDON_WRAPPER,
        shape && `${BASE_CLASS_ADDON_WRAPPER}-shape-${shape}`,
        size && `${BASE_CLASS_ADDON_WRAPPER}-size-${size}`
      )}
    >
      {leftAddon && <span className={getClassName({type: ADDON_TYPES.LEFT, shape})}>{leftAddon}</span>}
      {children}
      {rightAddon && <span className={getClassName({type: ADDON_TYPES.RIGHT, shape})}>{rightAddon}</span>}
    </div>
  )
}

InputAddon.propTypes = {
  /* inner react node element */
  children: PropTypes.node,
  /* Left addon component, text,... */
  leftAddon: PropTypes.any,
  /* Right addon component, text,... */
  rightAddon: PropTypes.any,
  /** Sets the shape of the input field. It can be 'rounded', 'square' or 'circle' */
  shape: PropTypes.oneOf(Object.values(INPUT_SHAPES)),
  /* 'Sets the size of the inputAddon */
  size: PropTypes.oneOf(Object.values(SIZES))
}

export default InputAddon
