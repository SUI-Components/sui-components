import PropTypes from 'prop-types'

import {BASE_CLASS_ADDON_WRAPPER, ADDON_TYPES, getClassName} from './config'

const InputAddon = ({leftAddon, rightAddon, children}) => {
  if (!(leftAddon || rightAddon)) {
    return children
  }
  return (
    <div className={BASE_CLASS_ADDON_WRAPPER}>
      {leftAddon && (
        <span className={getClassName({type: ADDON_TYPES.LEFT})}>
          {leftAddon}
        </span>
      )}
      {children}
      {rightAddon && (
        <span className={getClassName({type: ADDON_TYPES.RIGHT})}>
          {rightAddon}
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
  /* Right addon component, text,... */
  rightAddon: PropTypes.any
}

export default InputAddon
