import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

const BASE_CLASS = 'sui-AtomInput-addon'

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
      rightAddon: PropTypes.any
    }

    getClassName({type}) {
      return cx(BASE_CLASS, `${BASE_CLASS}--${type}`)
    }

    render() {
      const {leftAddon, rightAddon, ...props} = this.props
      return (
        <div className={'sui-AtomInput-addonWrapper'}>
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
