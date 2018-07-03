import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import './index.scss'

const BASE_CLASS = 'sui-FormInput-addon'

const TYPES = {
  LEFT: 'left',
  RIGHT: 'right'
}

const AddonHoC = WrappedInput =>
  class Addon extends React.Component {
    static propTypes = {
      /* Text to be shown within the addon */
      leftAddon: PropTypes.any,
      /* 'left' or 'right' */
      rightAddon: PropTypes.any
    }

    getClassName({type}) {
      return cx(BASE_CLASS, `${BASE_CLASS}--${type}`)
    }

    render() {
      const {leftAddon, rightAddon, ...props} = this.props
      return (
        <div className={'sui-FormInput-addonWrapper'}>
          {leftAddon && (
            <span className={this.getClassName({type: TYPES.LEFT})}>
              {leftAddon}
            </span>
          )}
          <WrappedInput {...props} />
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
