import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

const BASE_CLASS = 'sui-AtomInput-addon'
const CLASS_ICON = `${BASE_CLASS}--withIcon`
const CLASS_ICON_COMPONENT = `${CLASS_ICON}-icon`

const TYPES = {
  LEFT: 'left',
  RIGHT: 'right'
}

const AddonHoC = WrappedInput =>
  class Addon extends React.Component {
    static propTypes = {
      /* Left addon component, text,... */
      leftAddon: PropTypes.any,
      /* Right addon component, text,... */
      rightAddon: PropTypes.any,
      /* Left addon component, text,... */
      leftIcon: PropTypes.any
    }

    getClassName({type}) {
      return cx(BASE_CLASS, `${BASE_CLASS}--${type}`)
    }

    render() {
      const {leftAddon, rightAddon, leftIcon: LeftIcon, ...props} = this.props
      const LeftIconBlock = () => (
        <span className={CLASS_ICON_COMPONENT}>
          <LeftIcon />
        </span>
      )
      return (
        <div className={'sui-AtomInput-addonWrapper'}>
          {leftAddon && (
            <span className={this.getClassName({type: TYPES.LEFT})}>
              {leftAddon}
            </span>
          )}
          <span className={cx(LeftIcon && CLASS_ICON)}>
            {LeftIcon && <LeftIconBlock />}
            <WrappedInput {...props} />
          </span>
          {rightAddon && (
            <span className={this.getClassName({type: TYPES.RIGHT})}>
              {rightAddon}
            </span>
          )}
        </div>
      )
    }
  }

export default AddonHoC
