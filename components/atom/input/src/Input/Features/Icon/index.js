/* eslint-disable react/prop-types, no-unused-vars, no-console */

import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

const BASE_CLASS = 'sui-AtomInput'
const CLASS_ICON = `${BASE_CLASS}--withIcon`
const CLASS_ICON_COMPONENT = `${CLASS_ICON}-icon`

const TYPES = {
  LEFT: 'left',
  RIGHT: 'right'
}

const AddonHoC = WrappedInput =>
  class Addon extends React.Component {
    static propTypes = {
      /* Left icon component */
      leftIcon: PropTypes.any,

      /* Left icon component */
      rightIcon: PropTypes.any
    }

    getClassName({type}) {
      return cx(CLASS_ICON_COMPONENT, `${CLASS_ICON_COMPONENT}--${type}`)
    }

    render() {
      const {leftIcon: LeftIcon, rightIcon: RightIcon, ...props} = this.props

      return (
        <div className={cx(LeftIcon && CLASS_ICON)}>
          {LeftIcon && (
            <span className={this.getClassName({type: TYPES.LEFT})}>
              <LeftIcon />
            </span>
          )}
          <WrappedInput {...props} />
          {RightIcon && (
            <span className={this.getClassName({type: TYPES.RIGHT})}>
              <LeftIcon />
            </span>
          )}
        </div>
      )
    }
  }

export default AddonHoC
