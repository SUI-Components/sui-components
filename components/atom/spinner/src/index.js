import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

const TYPES = {
  FULL: 'full',
  SECTION: 'section'
}

class AtomSpinner extends React.Component {
  getLayerClassName ({type, hidden}) {
    const typeClass = type === TYPES.SECTION
      ? 'sui-atom-spinner-layer'
      : 'sui-atom-spinner-layer-full'
    return cx(
      typeClass,
      hidden && 'sui-atom-spinner-layer-hide'
    )
  }

  render () {
    const {children, ...props} = this.props

    return (
      <div className='sui-atom-spinner'>
        <div className={this.getLayerClassName(props)}>
          <div className='sui-atom-spinner-loader' />
        </div>
        {children}
      </div>
    )
  }
}

AtomSpinner.displayName = 'AtomSpinner'

AtomSpinner.propTypes = {
  children: PropTypes.node,
  type: PropTypes.string,
  hidden: PropTypes.bool
}

export default AtomSpinner
export {
  TYPES as AtomSpinnerTypes
}
