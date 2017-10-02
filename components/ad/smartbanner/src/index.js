import PropTypes from 'prop-types'
import React, { Component } from 'react'
import IconCloseDefault from '@schibstedspain/sui-svgiconset/lib/X'
import cx from 'classnames'

class AdSmartbanner extends Component {
  IconClose = this.props.icon || IconCloseDefault

  _handleClick = (event) => {
    const {onClick} = this.props
    event.preventDefault()
    onClick()
  }

  _handleClose = (event) => {
    const {onClose} = this.props
    event.preventDefault()
    onClose()
  }

  render () {
    const { imageUrl, title, text, buttonText, staticPosition } = this.props
    const className = cx('sui-AdSmartbanner', {
      'is-static': staticPosition
    })

    return (
      <div className={className}>
        <button className='sui-AdSmartbanner-buttonClose' onClick={this._handleClose}>
          <this.IconClose svgClass='sui-AdSmartbanner-buttonCloseIcon' />
        </button>
        <div className='sui-AdSmartbanner-primary'>
          <img src={imageUrl} className='sui-AdSmartbanner-logo' />
        </div>
        <div className='sui-AdSmartbanner-secondary'>
          <h3 className='sui-AdSmartbanner-title'>{title}</h3>
          <p className='sui-AdSmartbanner-text'>{text}</p>
        </div>
        <button className='sui-AdSmartbanner-buttonInstall' onClick={this._handleClick}>{buttonText}</button>
      </div>
    )
  }
}

AdSmartbanner.propTypes = {
  onClick: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
  icon: PropTypes.func.isRequired,
  imageUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  staticPosition: PropTypes.bool
}

AdSmartbanner.defaultProps = {
  staticPosition: false
}

AdSmartbanner.displayName = 'AdSmartbanner'

export default AdSmartbanner
