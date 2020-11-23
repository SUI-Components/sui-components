import PropTypes from 'prop-types'
import cx from 'classnames'

const BASE_CLASS = 'sui-AtomInput-addon'
const CLASS_ADDON_WRAPPER = 'sui-AtomInput-addonWrapper'

const TYPES = {
  LEFT: 'left',
  RIGHT: 'right'
}

const getClassName = ({type}) => cx(BASE_CLASS, `${BASE_CLASS}--${type}`)

const AddonHoC = WrappedInput => {
  const Addon = ({leftAddon, rightAddon, ...props}) =>
    leftAddon || rightAddon ? (
      <div className={CLASS_ADDON_WRAPPER}>
        {leftAddon && (
          <span className={getClassName({type: TYPES.LEFT})}>{leftAddon}</span>
        )}
        <WrappedInput {...props} />
        {rightAddon && (
          <span className={getClassName({type: TYPES.RIGHT})}>
            {rightAddon}
          </span>
        )}
      </div>
    ) : (
      <WrappedInput {...props} />
    )

  Addon.propTypes = {
    /* Left addon component, text,... */
    leftAddon: PropTypes.any,
    /* Right addon component, text,... */
    rightAddon: PropTypes.any
  }

  return Addon
}

export default AddonHoC
