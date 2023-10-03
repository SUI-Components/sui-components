import cx from 'classnames'
import PropTypes from 'prop-types'

import {INPUT_SHAPES, SIZES} from '../../../config.js'
import {ADDON_TYPES, BASE_CLASS_ADDON_WRAPPER, getClassName} from './config.js'

const InputAddon = ({
  leftAddon,
  rightAddon,
  rightLabel,
  leftLabel,
  shape,
  size,
  children
}) => {
  if (!(leftAddon || rightAddon || rightLabel || leftLabel)) {
    return children
  }
  return (
    <div
      className={cx(
        BASE_CLASS_ADDON_WRAPPER,
        shape && `${BASE_CLASS_ADDON_WRAPPER}-shape-${shape}`,
        size && `${BASE_CLASS_ADDON_WRAPPER}-size-${size}`,
        rightLabel && `${BASE_CLASS_ADDON_WRAPPER}-right-label`,
        leftLabel && `${BASE_CLASS_ADDON_WRAPPER}-left-label`
      )}
    >
      {leftLabel && (
        <span className={getClassName({type: ADDON_TYPES.LEFT_LABEL, shape})}>
          {leftLabel}
        </span>
      )}
      {leftAddon && (
        <span className={getClassName({type: ADDON_TYPES.LEFT, shape})}>
          {leftAddon}
        </span>
      )}
      {children}
      {rightAddon && (
        <span className={getClassName({type: ADDON_TYPES.RIGHT, shape})}>
          {rightAddon}
        </span>
      )}
      {rightLabel && (
        <span className={getClassName({type: ADDON_TYPES.RIGHT_LABEL, shape})}>
          {rightLabel}
        </span>
      )}
    </div>
  )
}

InputAddon.propTypes = {
  /* inner react node element */
  children: PropTypes.node,
  /* Left addon component, text,... */
  leftAddon: PropTypes.any,
  /* Left label component, text,... */
  leftLabel: PropTypes.any,
  /* Right addon component, text,... */
  rightAddon: PropTypes.any,
  /* Right label component, text,... */
  rightLabel: PropTypes.any,
  /** Sets the shape of the input field. It can be 'rounded', 'square' or 'circle' */
  shape: PropTypes.oneOf(Object.values(INPUT_SHAPES)),
  /* 'Sets the size of the inputAddon */
  size: PropTypes.oneOf(Object.values(SIZES))
}

export default InputAddon
