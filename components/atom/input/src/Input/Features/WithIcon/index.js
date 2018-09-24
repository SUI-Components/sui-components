/* eslint-disable react/prop-types, no-unused-vars, no-console */

import React from 'react'
import PropTypes from 'prop-types'

const CLASS_ICON = 'sui-AtomInput-withIcon'
const CLASS_ICON_COMPONENT = `${CLASS_ICON}--icon`

const WithIconHoC = WrappedInput =>
  class Addon extends React.Component {
    static propTypes = {
      /* Left addon component, text,... */
      leftIcon: PropTypes.any
    }

    render() {
      const {leftIcon: LeftIcon, ...props} = this.props
      return (
        <div className={CLASS_ICON}>
          {LeftIcon && (
            <span className={CLASS_ICON_COMPONENT}>
              <LeftIcon />
            </span>
          )}
          <WrappedInput {...props} />
        </div>
      )
    }
  }

export default WithIconHoC
