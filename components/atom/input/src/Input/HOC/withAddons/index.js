import PropTypes from 'prop-types'

import {BASE_CLASS_ADDON_WRAPPER, ADDON_TYPES, getClassName} from './config'

const withAddons = WrappedInput => {
  const Addon = ({leftAddon, rightAddon, ...props}) => {
    return leftAddon || rightAddon ? (
      <div className={BASE_CLASS_ADDON_WRAPPER}>
        {leftAddon && (
          <span className={getClassName({type: ADDON_TYPES.LEFT})}>
            {leftAddon}
          </span>
        )}
        <WrappedInput {...props} />
        {rightAddon && (
          <span className={getClassName({type: ADDON_TYPES.RIGHT})}>
            {rightAddon}
          </span>
        )}
      </div>
    ) : (
      <WrappedInput {...props} />
    )
  }

  Addon.propTypes = {
    /* Left addon component, text,... */
    leftAddon: PropTypes.any,
    /* Right addon component, text,... */
    rightAddon: PropTypes.any
  }

  return Addon
}

export default withAddons
