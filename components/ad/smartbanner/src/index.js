import React, {Component} from 'react'
import IconCloseDefault from '@schibstedspain/sui-svgiconset/lib/X'

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
    return (
      <div className='sui-AdSmartbanner'>
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

AdSmartbanner.displayName = 'AdSmartbanner'


// Remove these comments if you need
// AdSmartbanner.contextTypes = {i18n: React.PropTypes.object}
// AdSmartbanner.propTypes = {}
// AdSmartbanner.defaultProps = {}
