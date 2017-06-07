import React, {Component, PropTypes} from 'react'
import IconCloseDefault from '@schibstedspain/sui-svgiconset/lib/X'
import cx from 'classnames'

export default class AdSmartbanner extends Component {
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
    const positioning = cx('sui-AdSmartbanner', {
      'sui-AdSmartbanner-static': this.props.static
    })

    return (
      <div className={positioning}>
        <button className='sui-AdSmartbanner-buttonClose' onClick={this._handleClose}>
          <this.IconClose svgClass='sui-AdSmartbanner-buttonCloseIcon' />
        </button>
        <div className='sui-AdSmartbanner-primary'>
          <img src={this.props.imageUrl} className='sui-AdSmartbanner-logo' />
        </div>
        <div className='sui-AdSmartbanner-secondary'>
          <h3 className='sui-AdSmartbanner-title'>{this.props.title}</h3>
          <p className='sui-AdSmartbanner-text'>{this.props.text}</p>
        </div>
        <button className='sui-AdSmartbanner-buttonInstall' onClick={this._handleClick}>{this.props.buttonText}</button>
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
  static: PropTypes.bool
}

AdSmartbanner.displayName = 'AdSmartbanner'
